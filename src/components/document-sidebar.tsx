import {
  FileText,
  Link,
  Users,
  Phone,
  Clock,
  Bell,
  AlertTriangle,
  Tag,
  Star,
  User,
  MessageSquare,
  Shield,
  Smile,
  Frown,
  Meh,
} from 'lucide-react';
import { ReactNode } from 'react';

type DocumentItem = {
  icon?: ReactNode;
  label: string;
  date?: string;
  participants?: string[];
  completed?: boolean;
  unread?: boolean;
  priority?: 'low' | 'medium' | 'high';
  hasAttachments?: boolean;
  duration?: string;
  category?: 'support' | 'sales' | 'technical' | 'general';
  sentiment?: 'positive' | 'neutral' | 'negative';
  hasActions?: boolean;
  hasAlerts?: boolean;
  isFlagged?: boolean;
  count?: number;
};

type Section = {
  title: string;
  items: DocumentItem[];
};

type DocumentSidebarProps = {
  sections?: Section[];
};

const defaultSections: Section[] = [
  {
    title: 'Hoy',
    items: [
      {
        icon: <FileText className='h-4 w-4 text-blue-500 mr-2' />,
        label: 'Notas de reunión con cliente',
        date: 'Mar 29',
        participants: ['M', 'J', 'H'],
        completed: true,
        duration: '32:15',
        category: 'sales',
        sentiment: 'positive',
        hasActions: true,
      },
      {
        icon: (
          <div className='h-5 w-5 rounded bg-green-200 flex items-center justify-center mr-2'>
            <span className='text-green-600 text-xs'>N</span>
          </div>
        ),
        label: 'Nuevos contactos',
        date: 'Mar 29',
        participants: ['A', 'S'],
        unread: true,
        priority: 'high',
        hasAlerts: true,
        count: 2,
      },
    ],
  },
  {
    title: 'Esta semana',
    items: [
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Revisión de propuesta comercial',
        date: 'Mar 28',
        participants: ['M', 'J'],
        completed: true,
        hasAttachments: true,
        category: 'sales',
      },
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Agenda de equipo',
        date: 'Mar 28',
        participants: ['J', 'H', 'A'],
        completed: false,
        priority: 'medium',
        isFlagged: true,
      },
    ],
  },
  {
    title: 'Este mes',
    items: [
      {
        icon: <Users className='h-4 w-4 text-pink-500 mr-2' />,
        label: 'Seguimiento con marketing',
        date: 'Mar 25',
        participants: ['M', 'L'],
        completed: true,
        sentiment: 'neutral',
        category: 'general',
        count: 4,
      },
      {
        icon: <Users className='h-4 w-4 text-cyan-500 mr-2' />,
        label: 'Entrevistas de usuarios',
        date: 'Mar 26',
        participants: ['J', 'S', 'A'],
        completed: false,
        priority: 'high',
        category: 'technical',
      },
      {
        icon: <Link className='h-4 w-4 text-teal-500 mr-2' />,
        label: 'Enlaces de colaboración',
        date: 'Mar 24',
        completed: true,
        hasAttachments: true,
      },
    ],
  },
  {
    title: 'Archivado',
    items: [
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Especificaciones antiguas',
        date: 'Mar 15',
        completed: true,
        category: 'technical',
      },
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Borrador de propuesta',
        date: 'Mar 10',
        completed: true,
        hasAttachments: true,
      },
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Notas de planificación anual',
        date: 'Mar 05',
        completed: true,
        category: 'general',
      },
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Notas de planificación anual',
        date: 'Mar 05',
        completed: true,
        category: 'general',
      },
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Notas de planificación anual',
        date: 'Mar 05',
        completed: true,
        category: 'general',
      },
      {
        icon: (
          <div className='h-5 w-5 rounded-full bg-indigo-600 flex items-center justify-center mr-2'>
            <span className='text-white text-xs'>L</span>
          </div>
        ),
        label: 'Plan de lanzamiento',
        date: 'Feb 28',
        participants: ['L', 'M', 'J'],
        completed: true,
        sentiment: 'positive',
      },
      {
        icon: <FileText className='h-4 w-4 text-gray-400 mr-2' />,
        label: 'Análisis de mercado',
        date: 'Feb 20',
        completed: true,
      },
      {
        icon: (
          <div className='h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center mr-2'>
            <span className='text-white text-xs'>X</span>
          </div>
        ),
        label: 'Presentación interna',
        date: 'Feb 15',
        participants: ['X', 'Y', 'Z'],
        completed: true,
        sentiment: 'positive',
        hasAttachments: true,
      },
    ],
  },
];

// Call status indicator component
const CallStatusIndicator = ({
  completed,
  unread,
}: {
  completed?: boolean;
  unread?: boolean;
}) => {
  if (unread) {
    return <div className='w-2 h-2 bg-green-500 rounded-full' title='Unread' />;
  }

  if (completed !== undefined) {
    return completed ? (
      <Phone className='h-3 w-3 text-green-500' />
    ) : (
      <Clock className='h-3 w-3 text-amber-500' />
    );
  }

  return null;
};

// Status indicators component
const StatusIndicators = ({
  completed,
  unread,
  priority,
  hasAttachments,
  hasActions,
  hasAlerts,
  isFlagged,
  sentiment,
}: {
  completed?: boolean;
  unread?: boolean;
  priority?: string;
  hasAttachments?: boolean;
  hasActions?: boolean;
  hasAlerts?: boolean;
  isFlagged?: boolean;
  sentiment?: string;
}) => {
  const indicators = [];

  // Primary status
  if (unread) {
    indicators.push(
      <div
        key='unread'
        className='w-2 h-2 bg-green-500 rounded-full'
        title='Unread notes'
      />
    );
  }

  // Call status
  if (completed !== undefined) {
    indicators.push(
      completed ? (
        <Phone key='completed' className='h-3 w-3 text-green-500' />
      ) : (
        <Clock key='scheduled' className='h-3 w-3 text-amber-500' />
      )
    );
  }

  // Priority indicator
  if (priority) {
    const priorityColors = {
      high: 'text-red-500',
      medium: 'text-amber-500',
      low: 'text-blue-500',
    };
    indicators.push(
      <AlertTriangle
        key='priority'
        className={`h-3 w-3 ${
          priorityColors[priority as keyof typeof priorityColors]
        }`}
      />
    );
  }

  // Attachment indicator
  if (hasAttachments) {
    indicators.push(
      <Tag key='attachments' className='h-3 w-3 text-gray-500' />
    );
  }

  // Action items indicator
  if (hasActions) {
    indicators.push(
      <MessageSquare key='actions' className='h-3 w-3 text-blue-500' />
    );
  }

  // Alerts indicator
  if (hasAlerts) {
    indicators.push(<Shield key='alerts' className='h-3 w-3 text-red-500' />);
  }

  // Flagged indicator
  if (isFlagged) {
    indicators.push(<Star key='flagged' className='h-3 w-3 text-yellow-500' />);
  }

  // Sentiment indicator (optional, only if you want to show it)
  if (sentiment) {
    const sentimentIcons = {
      positive: <Smile className='h-3 w-3 text-green-500' />,
      neutral: <Meh className='h-3 w-3 text-yellow-500' />,
      negative: <Frown className='h-3 w-3 text-red-500' />,
    };
    indicators.push(
      <span key='sentiment' title={`${sentiment} sentiment`}>
        {sentimentIcons[sentiment as keyof typeof sentimentIcons]}
      </span>
    );
  }

  return <div className='flex items-center gap-1'>{indicators}</div>;
};

// Category badge component
const CategoryBadge = ({ category }: { category?: string }) => {
  if (!category) return null;

  const categoryMap: Record<string, { color: string; label: string }> = {
    support: { color: 'bg-purple-100 text-purple-800', label: 'Support' },
    sales: { color: 'bg-blue-100 text-blue-800', label: 'Ventas' },
    technical: { color: 'bg-gray-100 text-gray-800', label: 'Técnica' },
    general: { color: 'bg-green-100 text-green-800', label: 'General' },
  };

  const { color, label } = categoryMap[category] || {
    color: 'bg-gray-100 text-gray-800',
    label: category,
  };

  return (
    <span className={`text-xs px-1.5 py-0.5 rounded ${color}`}>{label}</span>
  );
};

// Participants avatars component
const ParticipantAvatars = ({ participants }: { participants?: string[] }) => {
  if (!participants || participants.length === 0) return null;

  return (
    <div className='flex -space-x-1'>
      {participants.slice(0, 3).map((initial, i) => (
        <div
          key={i}
          className='w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs border border-white'
        >
          {initial}
        </div>
      ))}
      {participants.length > 3 && (
        <div className='w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs border border-white'>
          +{participants.length - 3}
        </div>
      )}
    </div>
  );
};

export function DocumentSidebar({
  sections = defaultSections,
}: DocumentSidebarProps) {
  return (
    <div className='flex flex-col h-full w-full overflow-y-auto'>
      <div className='flex-1 overflow-y-auto '>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className='px-2 py-3'>
            <h3 className='text-xs font-semibold text-gray-400 uppercase mb-2 px-2'>
              {section.title}
            </h3>
            <ul className='space-y-1'>
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className='group px-2 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center min-w-0'>
                      <div className='shrink-0'>{item.icon}</div>
                      <span className='text-sm text-gray-700 group-hover:text-gray-900 truncate'>
                        {item.label}
                      </span>
                      {item.count !== undefined && (
                        <span className='ml-1 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full'>
                          {item.count}
                        </span>
                      )}
                    </div>
                    <div className='flex items-center gap-2 ml-2 shrink-0'>
                      <CallStatusIndicator
                        completed={item.completed}
                        unread={item.unread}
                      />
                      <span className='text-xs text-gray-500'>{item.date}</span>
                    </div>
                  </div>

                  <div className='ml-7 mt-1 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      {item.participants && (
                        <ParticipantAvatars participants={item.participants} />
                      )}
                      {item.category && (
                        <CategoryBadge category={item.category} />
                      )}
                    </div>

                    <StatusIndicators
                      priority={item.priority}
                      hasAttachments={item.hasAttachments}
                      hasActions={item.hasActions}
                      hasAlerts={item.hasAlerts}
                      isFlagged={item.isFlagged}
                      sentiment={item.sentiment}
                    />
                  </div>

                  {item.duration && (
                    <div className='ml-7 mt-1 text-xs text-gray-500 flex items-center'>
                      <Clock className='h-3 w-3 mr-1' />
                      {item.duration}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
