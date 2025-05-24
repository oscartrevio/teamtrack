'use client';

import {
  Clock,
  BarChart2,
  MessageCircle,
  Zap,
  Square,
  Inbox,
  Sparkles,
} from 'lucide-react';
import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from '@/components/ui/prompt-input';
import { PromptSuggestion } from '@/components/ui/prompt-suggestion';
import { Button } from '@/components/ui/button';
import { useChatbot } from '@/hooks/use-chatbot';
import { useEffect, useState } from 'react';
import { Markdown } from '@/components/ui/markdown';
import {
  Message,
  MessageAvatar,
  MessageContent,
} from '@/components/ui/message';
import { FaPaperPlane } from 'react-icons/fa6';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export default function ChatPage({ params }: { params: { id?: string } }) {
  const [input, setInput] = useState('');
  const [hasMessages, setHasMessages] = useState(false);
  // Define a type for our chat messages with exchangeId
  type ChatMessage = {
    role: string;
    content: string;
    exchangeId?: string; // Optional for backward compatibility
  };

  const [messages, setMessages] = useState<Array<ChatMessage>>([]);
  const [activeCategory, setActiveCategory] = useState('');

  // Use the chatbot hook with the current chat ID as project ID if available
  const projectId = params.id ? parseInt(params.id, 10) || 1 : 1; // Default to 1 if ID is not a valid number

  // Log the project ID being used (for debugging)
  useEffect(() => {
    console.log(`Using project ID: ${projectId} from URL param: ${params.id}`);
  }, [projectId, params.id]);

  const {
    sendQuestion,
    loading: isLoading,
    error,
    streamingResponse,
    cancelStream,
  } = useChatbot({
    projectId,
    stream: true, // Enable streaming mode
  });

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // Store the current user question
    const userQuestion = input.trim();

    // Clear input and UI indicators immediately
    setInput('');
    setHasMessages(true);
    setActiveCategory('');

    // Generate a unique ID for this conversation exchange
    const exchangeId = Date.now().toString();

    // Add both messages at once with the conversation exchange ID
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userQuestion, exchangeId },
      { role: 'assistant', content: '...', exchangeId },
    ]);

    // Create a function to handle streaming updates
    const handleStreamUpdate = (content: string) => {
      setMessages((prevMessages) => {
        return prevMessages.map((msg) => {
          // Only update the assistant message from this exchange
          if (msg.role === 'assistant' && msg.exchangeId === exchangeId) {
            return { ...msg, content };
          }
          return msg;
        });
      });
    };

    // Send question to chatbot API with streaming
    try {
      await sendQuestion(userQuestion, handleStreamUpdate);
    } catch (err) {
      // Handle any streaming errors by updating the assistant message with the error
      setMessages((prevMessages) => {
        return prevMessages.map((msg) => {
          // Only update the assistant message from this exchange
          if (msg.role === 'assistant' && msg.exchangeId === exchangeId) {
            return {
              ...msg,
              content: `Error: ${
                error || 'An error occurred while processing your request'
              }`,
            };
          }
          return msg;
        });
      });
    }
  };

  const handleValueChange = (value: string) => {
    setInput(value);
    // Clear active category when typing something different
    if (value.trim() === '') {
      setActiveCategory('');
    }
  };

  // Suggestion groups for the prompt suggestions
  const suggestionGroups = [
    {
      label: 'Analizar',
      icon: <BarChart2 className='mr-2 h-4 w-4' />,
      highlight: 'Analiza',
      items: [
        'Analiza mi última llamada con José',
        'Analiza las tendencias de sentimiento del cliente',
        'Analiza la efectividad de la reunión',
        'Analiza el rendimiento de ventas',
      ],
    },
    {
      label: 'Redactar',
      icon: <MessageCircle className='mr-2 h-4 w-4' />,
      highlight: 'Redacta',
      items: [
        'Redacta un correo de seguimiento',
        'Redacta notas de la reunión',
        'Redacta un resumen de propuesta',
        'Redacta puntos clave para hablar',
      ],
    },
    {
      label: 'Crear',
      icon: <Zap className='mr-2 h-4 w-4' />,
      highlight: 'Crea',
      items: [
        'Crea una agenda para la reunión',
        'Crea un guion para la llamada',
        'Crea un esquema de presentación',
        'Crea un perfil de cliente',
      ],
    },
    {
      label: 'Resumir',
      icon: <Clock className='mr-2 h-4 w-4' />,
      highlight: 'Resume',
      items: [
        'Resume las llamadas de ayer',
        'Resume los métricos semanales',
        'Resume los comentarios de clientes',
        'Resume los puntos de acción',
      ],
    },
  ];

  // Get suggestions based on active category
  const activeCategoryData = suggestionGroups.find(
    (group) => group.label === activeCategory
  );

  // Determine which suggestions to show
  const showCategorySuggestions = activeCategory !== '';

  return (
    <div className='h-screen text-neutral-900 bg-white rounded-[14px] border border-[#E7E7E7] flex flex-col overflow-hidden relative'>
      <header className='flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 z-50 bg-white rounded-t-[14px]'>
        <div className='flex items-center justify-center gap-2 px-4'>
          <SidebarTrigger />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-4'
          />
          <span className='flex items-center gap-2 text-sm font-semibold text-neutral-800'>
            <Sparkles className='h-4 w-4' /> AI
          </span>
        </div>
      </header>
      <div className='flex-1 flex flex-col p-6 overflow-auto z-10'>
        <div className='max-w-4xl mx-auto w-full h-full flex flex-col'>
          {/* Initial centered prompt input or message history */}
          {!hasMessages ? (
            <div className='flex flex-col items-center gap-4 mb-8 flex-1 justify-center'>
              {/* Chat ID */}
              {params.id && (
                <h2 className='text-2xl font-semibold text-neutral-700'>
                  Chat: {params.id}
                </h2>
              )}

              {/* Prompt Text */}
              <div className='mb-4 text-center'>
                <h3 className='text-lg font-medium text-neutral-900'>
                  What can I help you with today?
                </h3>
                <p className='text-neutral-600 text-sm mt-1'>
                  Ask me to analyze calls, prepare for meetings, or summarize
                  conversations
                </p>
              </div>

              {/* Centered Prompt Input with Suggestions */}
              <div className='w-full max-w-2xl'>
                <PromptInput
                  value={input}
                  onValueChange={handleValueChange}
                  isLoading={isLoading}
                  onSubmit={handleSubmit}
                  className='rounded-[10px] bg-[#f7f7f7] font-semibold text-[#232323] shadow-none'
                >
                  <PromptInputTextarea
                    placeholder='Pregúntame algo...'
                    className='min-h-[44px]'
                    onKeyDown={(e) => {
                      // Let the PromptInput onSubmit handle this instead
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        // We don't need to call handleSubmit() here as it will be called by onSubmit
                      }
                    }}
                  />
                  <PromptInputActions className='justify-end'>
                    <Button
                      size='sm'
                      className='h-9 w-9 rounded-md'
                      type='button'
                      // Let onSubmit of PromptInput handle this
                      // No onClick handler needed here
                      disabled={!input.trim()}
                    >
                      {isLoading ? (
                        <Square className='size-4 fill-current animate-spin' />
                      ) : (
                        <FaPaperPlane className='size-4' />
                      )}
                    </Button>
                  </PromptInputActions>
                </PromptInput>

                <div className='relative flex w-full flex-col items-center justify-center space-y-2 mt-4'>
                  <div className='h-[70px] w-full'>
                    {showCategorySuggestions ? (
                      <div className='flex w-full flex-col space-y-1'>
                        {activeCategoryData?.items.map((suggestion) => (
                          <PromptSuggestion
                            key={suggestion}
                            highlight={activeCategoryData.highlight}
                            onClick={() => {
                              setInput(suggestion);
                              setActiveCategory('');
                            }}
                          >
                            {suggestion}
                          </PromptSuggestion>
                        ))}
                      </div>
                    ) : (
                      <div className='relative flex w-full flex-wrap items-stretch justify-center gap-2'>
                        {suggestionGroups.map((suggestion) => (
                          <PromptSuggestion
                            key={suggestion.label}
                            onClick={() => {
                              setActiveCategory(suggestion.label);
                              setInput(''); // Clear input when selecting a category
                            }}
                            className='capitalize'
                          >
                            {suggestion.icon}
                            {suggestion.label}
                          </PromptSuggestion>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {messages.map((message, index) => (
                <Message
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role !== 'user' && (
                    <MessageAvatar
                      src='/avatars/ai.png'
                      alt='AI'
                      fallback='AI'
                    />
                  )}
                  <MessageContent>{message.content}</MessageContent>
                </Message>
              ))}
            </div>
          )}

          {/* Bottom positioned prompt input (only visible after first message) */}
          {hasMessages && (
            <div className='mt-auto'>
              <PromptInput
                value={input}
                onValueChange={handleValueChange}
                isLoading={isLoading}
                onSubmit={handleSubmit}
                className='rounded-[10px] bg-[#f7f7f7] font-semibold text-[#232323] shadow-none'
              >
                <PromptInputTextarea
                  placeholder='Pregúntame algo...'
                  className='min-h-[44px]'
                  onKeyDown={(e) => {
                    // Let the PromptInput onSubmit handle this instead
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      // We don't need to call handleSubmit() here as it will be called by onSubmit
                    }
                  }}
                />
                <PromptInputActions className='justify-end'>
                  <Button
                    size='sm'
                    className='h-9 w-9 rounded-md'
                    type='button'
                    // Let onSubmit of PromptInput handle this
                    // No onClick handler needed here
                    disabled={!input.trim()}
                  >
                    {isLoading ? (
                      <Square className='size-4 fill-current animate-spin' />
                    ) : (
                      <FaPaperPlane className='size-4' />
                    )}
                  </Button>
                </PromptInputActions>
              </PromptInput>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
