import { useState, useEffect, useRef } from 'react';

type ChatbotResponse = {
  response: string;
  error?: string;
};

type UseChatbotOptions = {
  projectId?: number;
  stream?: boolean;
};

/**
 * Custom hook for interacting with the chatbot API
 * 
 * @param options Optional configuration for the chatbot
 * @returns Object containing the sendQuestion function, loading state, and error state
 */
export function useChatbot(options: UseChatbotOptions = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamingResponse, setStreamingResponse] = useState<string>('');
  const eventSourceRef = useRef<EventSource | null>(null);
  
  // Hardcoded session ID
  const SESSION_ID = 'user-fixed-session-123';
  
  // Cleanup function for EventSource
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  /**
   * Sends a question to the chatbot API with stream option
   * 
   * @param question The question to send to the chatbot
   * @param streamCallback Optional callback function for handling streaming responses
   * @returns The response from the chatbot or null if there was an error
   */
  const sendQuestion = async (question: string, streamCallback?: (text: string) => void): Promise<ChatbotResponse | null> => {
    if (!question.trim()) {
      setError('Question cannot be empty');
      return null;
    }

    // Close any existing event source
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    
    setLoading(true);
    setError(null);
    
    // Reset streaming response if in streaming mode
    if (options.stream) {
      setStreamingResponse('');
    }

    try {
      // Check if we're using streaming mode
      if (options.stream) {
        // First add a placeholder message
        let fullResponse = '';
        
        // Start with a regular POST request with stream=true
        const response = await fetch('http://localhost:5000/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question,
            project_id: options.projectId || 1,
            stream: true,
            session_id: SESSION_ID
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to get response from chatbot');
        }
        
        // Check if we got a streaming response
        const contentType = response.headers.get('Content-Type');
        
        // If it's a streaming response (SSE)
        if (contentType && contentType.includes('text/event-stream')) {
          const reader = response.body?.getReader();
          if (!reader) {
            throw new Error('Response body is not readable');
          }
          
          // Read the stream
          const decoder = new TextDecoder();
          let done = false;
          
          while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            // Parse SSE format: "data: {\"content\":\"...\"}"
            const lines = chunk.split('\n\n');
            
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const jsonStr = line.substring(6); // Remove 'data: '
                  const data = JSON.parse(jsonStr);
                  
                  if (data.content) {
                    fullResponse += data.content;
                    setStreamingResponse(fullResponse);
                    if (streamCallback) streamCallback(fullResponse);
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
          
          // Return the full response when done
          return { response: fullResponse };
        } 
        // If it's not a streaming response, handle as a regular JSON response
        else {
          const data = await response.json();
          if (streamCallback) streamCallback(data.response || '');
          return data;
        }
      } 
      // Non-streaming mode - regular fetch request
      else {
        const response = await fetch('http://localhost:5000/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question,
            project_id: options.projectId || 1,
            stream: false,
            session_id: SESSION_ID
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to get response from chatbot');
        }

        const data = await response.json();
        return data;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      console.error('Chatbot request error:', errorMessage);
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendQuestion,
    loading,
    error,
    streamingResponse,
    cancelStream: () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
        setLoading(false);
      }
    }
  };
}
