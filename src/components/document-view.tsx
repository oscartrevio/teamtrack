import type React from 'react';
import {
  Calendar,
  ChevronDown,
  Mail,
  Paperclip,
  Send,
  X,
  BarChart2,
  Heart,
  Star,
  Clock,
  AlertTriangle,
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  Smile,
  Frown,
  Meh,
  Settings,
  MessageCircle,
  Users,
  Phone,
  Sparkles,
  FileText,
  MessageSquare,
  CheckSquare,
} from 'lucide-react';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';

type TimelineItem = {
  content: string | string[];
  timestamp: string;
};

type DocumentViewProps = {
  title?: string;
  updatedAt?: string;
  heading?: string;
  summary?: string;
  timeline?: TimelineItem[];
  actions?: {
    to: string;
    subject: string;
    body: string[];
  };
};

export function DocumentView({
  title = 'Análisis de Atención al Cliente',
  updatedAt = 'Actualizado hace 2 horas',
  heading = 'Resumen del Desempeño de Llamadas',
  summary = `Las métricas de atención al cliente de esta semana muestran una mejora del 15% en los tiempos de resolución y un aumento del 8% en los puntajes generales de satisfacción. Las áreas clave a mejorar incluyen el manejo de problemas técnicos complejos y la reducción de transferencias entre departamentos. Las respuestas asistidas por IA han tenido un impacto positivo, reduciendo el tiempo de primera respuesta en un 24%.`,
  timeline = [
    {
      content:
        'Se implementó un nuevo sistema de enrutamiento para consultas técnicas',
      timestamp: '15 de abril, 10:15',
    },
    {
      content: [
        'El tiempo promedio de atención se redujo en 2.5 minutos',
        'El equipo completó capacitación avanzada en empatía',
      ],
      timestamp: '10 de abril, 09:50',
    },
    {
      content:
        'Se desplegaron sugerencias de respuesta asistidas por IA a todos los agentes',
      timestamp: '4 de abril, 12:30',
    },
    {
      content:
        'Se lanzó una nueva encuesta de satisfacción con seguimiento detallado del sentimiento',
      timestamp: '28 de marzo, 17:00',
    },
    {
      content:
        'Se implementó la función de análisis de grabaciones de llamadas',
      timestamp: '21 de marzo, 11:00',
    },
    {
      content: 'Se lanzó el panel de desempeño de agentes',
      timestamp: '15 de marzo, 15:45',
    },
  ],
  actions = {
    to: 'equipo-atencion-cliente@empresa.com',
    subject: 'Resumen semanal de desempeño y oportunidades de mejora',
    body: [
      'Hola equipo,',
      'Aquí tienen un resumen del desempeño de esta semana y las áreas a enfocar:',
      '- El tiempo de resolución mejoró un 15%',
      '- La satisfacción del cliente subió un 8%',
      '- Nuevos módulos de capacitación disponibles para la resolución de problemas técnicos',
    ],
  },
}: DocumentViewProps) {
  return (
    <div className='flex-1 flex flex-col h-full overflow-hidden'>
      <div className='flex-1 overflow-y-auto p-2'>
        <div className='max-w-4xl mx-auto flex flex-col gap-4'>
          {/* Header Section - Clean design inspired by first image */}
          <div className='mb-3'>
            {/* Título y tiempo */}
            <div className='mb-4'>
              <h1 className='text-3xl font-bold mb-2'>{title}</h1>
              <p className='text-gray-500'>{heading}</p>
            </div>

            {/* Descripción */}
            <div className='text-gray-600 mb-3 text-base'>
              <p>
                Las reuniones de seguimiento son colaborativas y requieren
                aportes de diferentes equipos: atención al cliente, desarrollo y
                marketing. Cada miembro aporta perspectivas valiosas sobre el
                progreso del proyecto.
              </p>
            </div>

            {/* Labels/Tags */}
            <div className='flex flex-wrap gap-2 mt-6'>
              <div className='px-3 py-1 rounded-md bg-blue-100 text-blue-600 text-sm'>
                Atención al Cliente
              </div>
              <div className='px-3 py-1 rounded-md bg-green-100 text-green-600 text-sm'>
                Reunión Semanal
              </div>
              <div className='px-3 py-1 rounded-md bg-purple-100 text-purple-600 text-sm'>
                Análisis
              </div>
              <div className='px-3 py-1 rounded-md bg-amber-100 text-amber-600 text-sm'>
                Mejora Continua
              </div>
            </div>
          </div>

          <Separator className='my-1' />

          {/* Summary Section */}
          <div className='relative z-10 mx-auto w-full rounded-3xl border bg-[#F7F5F6] overflow-hidden'>
            <div className='flex items-center gap-2 px-4 pt-2'>
              <Sparkles className='h-4 w-4 text-gray-900 fill-gray-900' />
              <TextShimmer
                duration={3}
                className='text-base font-bold font-openrunde tracking-tight [--base-color:var(--color-gray-900)] [--base-gradient-color:var(--color-gray-400)]'
              >
                Resumen AI
              </TextShimmer>
            </div>
            <div className='m-2 rounded-2xl bg-white px-4 py-3'>
              <p className='text-base text-gray-900'>{summary}</p>
            </div>
          </div>

          {/* Project Progress and Call Timeline Widgets - Grid layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            {/* Left Column - Project Progress and KPIs */}
            <div className='space-y-4'>
              {/* Project Progress Widget - Inspirado en la primera imagen */}
              <div className='relative z-10 mx-auto w-full rounded-3xl border bg-white overflow-hidden p-6'>
                <h2 className='text-xl font-bold mb-4'>
                  Calificación del Servicio
                </h2>

                {/* Progress Bar */}
                <div className='flex mb-4 gap-1'>
                  <div className='h-6 rounded-md bg-red-400 flex-1'></div>
                  <div className='h-6 rounded-md bg-orange-400 flex-1'></div>
                  <div className='h-6 rounded-md bg-amber-400 flex-1'></div>
                  <div className='h-6 rounded-md bg-emerald-400 flex-1'></div>
                  <div className='h-6 rounded-md bg-sky-100 flex-1'></div>
                  <div className='h-6 rounded-md bg-indigo-100 flex-1'></div>
                </div>

                <div className='text-sm mt-4'>
                  <p className='font-medium'>
                    Estás actualmente en la{' '}
                    <span className='text-orange-500 font-bold'>Fase 4</span>.
                    Completa el MVP inicial para recopilar feedback y avanzar a
                    la Fase 5.
                  </p>
                </div>
              </div>

              {/* KPIs Widget - Datos generales de la reunión */}
              <div className='relative z-10 mx-auto w-full rounded-3xl border bg-white overflow-hidden p-6'>
                <h2 className='text-xl font-bold mb-4'>Datos de la Reunión</h2>

                <div className='space-y-4'>
                  {/* Información general de la reunión */}
                  <div className='flex items-center justify-between pb-3 border-b border-gray-100'>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 rounded-md bg-blue-50'>
                        <Clock className='h-5 w-5 text-blue-600' />
                      </div>
                      <div>
                        <span className='block text-sm text-gray-500'>
                          Fecha y hora
                        </span>
                        <span className='block font-medium'>
                          23 de mayo, 14:30 - 15:30
                        </span>
                      </div>
                    </div>
                    <div className='text-xl font-bold text-blue-600'>32:45</div>
                  </div>

                  {/* Participación */}
                  <div className='flex items-center justify-between pb-3 border-b border-gray-100'>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 rounded-md bg-green-50'>
                        <Users className='h-5 w-5 text-green-600' />
                      </div>
                      <div>
                        <span className='block text-sm text-gray-500'>
                          Participantes
                        </span>
                        <span className='block font-medium'>
                          6 asistentes de 7 invitados
                        </span>
                      </div>
                    </div>
                    <span className='text-sm font-bold px-2 py-1 rounded-md bg-green-100 text-green-600'>
                      86%
                    </span>
                  </div>

                  {/* Temas y acuerdos */}
                  <div className='grid grid-cols-2 gap-4 pt-1'>
                    <div className='flex flex-col'>
                      <span className='text-sm text-gray-500 mb-1'>
                        Temas tratados
                      </span>
                      <div className='flex items-center gap-1'>
                        <MessageSquare className='h-4 w-4 text-amber-600' />
                        <span className='text-lg font-bold text-amber-600'>
                          4
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm text-gray-500 mb-1'>
                        Acuerdos
                      </span>
                      <div className='flex items-center gap-1'>
                        <CheckSquare className='h-4 w-4 text-purple-600' />
                        <span className='text-lg font-bold text-purple-600'>
                          3
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Próximos pasos */}
                  <div className='mt-4 pt-3 border-t border-gray-100'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Calendar className='h-4 w-4 text-gray-600' />
                      <span className='font-medium text-gray-700'>
                        Próxima reunión
                      </span>
                    </div>
                    <p className='text-sm bg-blue-50 p-2 rounded-md'>
                      Se programó siguiente reunión para el 28 de mayo a las
                      14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Call Timeline, usando el componente Timeline */}
            <div className='relative z-10 mx-auto w-full rounded-3xl border bg-white overflow-hidden p-6 h-full'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-bold'>Timeline de la Llamada</h2>
                <span className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium'>
                  En Progreso
                </span>
              </div>

              <Timeline className='pt-2'>
                <TimelineItem
                  key='1'
                  step={1}
                  className='group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-6'
                >
                  <TimelineHeader>
                    <TimelineSeparator className='group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5' />
                    <TimelineTitle className='mt-0.5'>
                      Carlos Méndez{' '}
                      <span className='text-muted-foreground text-sm font-normal'>
                        inició la reunión
                      </span>
                    </TimelineTitle>
                    <TimelineIndicator className='bg-primary/10 flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7'>
                      <FileText className='h-4 w-4 text-gray-600' />
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className='text-foreground mt-2 rounded-lg border px-4 py-3'>
                    Presentó la agenda y dio la bienvenida a todos los
                    participantes del proyecto.
                    <TimelineDate className='mt-1 mb-0'>
                      14:30 - 23 de mayo
                    </TimelineDate>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem
                  key='2'
                  step={2}
                  className='group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-6'
                >
                  <TimelineHeader>
                    <TimelineSeparator className='group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5' />
                    <TimelineTitle className='mt-0.5'>
                      Ana Rivera{' '}
                      <span className='text-muted-foreground text-sm font-normal'>
                        presentó los requisitos
                      </span>
                    </TimelineTitle>
                    <TimelineIndicator className='bg-amber-100 flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7'>
                      <MessageCircle className='h-4 w-4 text-amber-600' />
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className='text-foreground mt-2 rounded-lg border px-4 py-3'>
                    "Necesitamos enfocarnos en mejorar la experiencia del
                    cliente y optimizar los tiempos de respuesta."
                    <TimelineDate className='mt-1 mb-0'>
                      14:45 - 23 de mayo
                    </TimelineDate>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem
                  key='3'
                  step={3}
                  className='group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-6'
                >
                  <TimelineHeader>
                    <TimelineSeparator className='group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5' />
                    <TimelineTitle className='mt-0.5'>
                      Roberto Gómez{' '}
                      <span className='text-muted-foreground text-sm font-normal'>
                        aprobó la propuesta
                      </span>
                    </TimelineTitle>
                    <TimelineIndicator className='bg-green-100 flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7'>
                      <ThumbsUp className='h-4 w-4 text-green-600' />
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className='text-foreground mt-2 rounded-lg border px-4 py-3'>
                    El equipo acordó implementar las mejoras en la interfaz
                    principal según lo presentado.
                    <TimelineDate className='mt-1 mb-0'>
                      15:10 - 23 de mayo
                    </TimelineDate>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem
                  key='4'
                  step={4}
                  className='group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-6'
                >
                  <TimelineHeader>
                    <TimelineSeparator className='group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5' />
                    <TimelineTitle className='mt-0.5'>
                      Todo el equipo{' '}
                      <span className='text-muted-foreground text-sm font-normal'>
                        programó la siguiente reunión
                      </span>
                    </TimelineTitle>
                    <TimelineIndicator className='bg-blue-100 flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7'>
                      <Calendar className='h-4 w-4 text-blue-600' />
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className='text-foreground mt-2 rounded-lg border px-4 py-3'>
                    Se acordó continuar con la revisión de avances el próximo 28
                    de mayo.
                    <TimelineDate className='mt-1 mb-0'>
                      15:30 - 23 de mayo
                    </TimelineDate>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>

          {/* Widgets de Análisis de Conversación */}
          <div className='mb-8'>
            <h2 className='text-xl font-medium mb-4'>
              Análisis de Conversaciones
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {/* Análisis de Sentimiento */}
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center'>
                    <Heart className='h-5 w-5 text-red-500 mr-2' />
                    <h3 className='font-medium'>Sentimiento del Cliente</h3>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='flex justify-between text-sm mb-1'>
                    <span>Positivo</span>
                    <span>68%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-green-500 h-2 rounded-full'
                      style={{ width: '68%' }}
                    />
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='flex justify-between text-sm mb-1'>
                    <span>Neutral</span>
                    <span>22%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-blue-400 h-2 rounded-full'
                      style={{ width: '22%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span>Negativo</span>
                    <span>10%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-red-400 h-2 rounded-full'
                      style={{ width: '10%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Análisis del Discurso */}
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center'>
                    <Volume2 className='h-5 w-5 text-blue-500 mr-2' />
                    <h3 className='font-medium'>Patrones del Habla</h3>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Velocidad al Hablar</span>
                    <div className='flex items-center'>
                      <span className='text-sm font-medium mr-2'>162 ppm</span>
                      <span className='text-xs text-green-500'>(Buena)</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Interrupciones</span>
                    <div className='flex items-center'>
                      <span className='text-sm font-medium mr-2'>8 veces</span>
                      <span className='text-xs text-yellow-500'>(Mejorar)</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Muletillas</span>
                    <div className='flex items-center'>
                      <span className='text-sm font-medium mr-2'>5.2%</span>
                      <span className='text-xs text-green-500'>(Buena)</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Relación de Escucha</span>
                    <div className='flex items-center'>
                      <span className='text-sm font-medium mr-2'>62%</span>
                      <span className='text-xs text-green-500'>(Buena)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Viaje Emocional */}
              <div className='z-10 m-auto h-fit w-full overflow-hidden rounded-lg border bg-[#F7F8F9]'>
                <div className='-m-px rounded-lg border bg-[#FEFFFE] p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center'>
                      <Smile className='h-5 w-5 text-yellow-500 mr-2' />
                      <h3 className='font-medium'>Viaje Emocional</h3>
                    </div>
                  </div>
                  <div className='flex justify-between items-center mb-3'>
                    <div className='flex flex-col items-center'>
                      <Frown className='h-6 w-6 text-red-400 mb-1' />
                      <span className='text-xs'>Inicio</span>
                    </div>
                    <div className='h-0.5 bg-gray-200 flex-1 mx-2 relative'>
                      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <Smile className='h-6 w-6 text-green-400 mb-1' />
                      <span className='text-xs'>Final</span>
                    </div>
                  </div>
                  <p className='text-xs text-gray-600'>
                    El cliente comenzó frustrado, pero terminó satisfecho tras
                    resolver el problema y recibir una explicación clara del
                    producto.
                  </p>
                </div>
                <div className='p-2'></div>
              </div>

              {/* Frases Clave */}
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center'>
                    <MessageCircle className='h-5 w-5 text-purple-500 mr-2' />
                    <h3 className='font-medium'>Frases Clave</h3>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='border border-red-100 bg-red-50 rounded-md px-2 py-1 text-sm'>
                    "frustrado con los errores constantes"
                  </div>
                  <div className='border border-green-100 bg-green-50 rounded-md px-2 py-1 text-sm'>
                    "agradezco mucho tu paciencia"
                  </div>
                  <div className='border border-yellow-100 bg-yellow-50 rounded-md px-2 py-1 text-sm'>
                    "necesito resolver esto hoy"
                  </div>
                  <div className='border border-green-100 bg-green-50 rounded-md px-2 py-1 text-sm'>
                    "gracias por explicarlo claramente"
                  </div>
                </div>
              </div>

              {/* Oportunidades de Mejora */}
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center'>
                    <TrendingUp className='h-5 w-5 text-green-500 mr-2' />
                    <h3 className='font-medium'>Oportunidades de Mejora</h3>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='flex items-start'>
                    <div className='min-w-4 mr-2'>
                      <div className='w-1 h-1 rounded-full bg-yellow-500 mt-2'></div>
                    </div>
                    <p className='text-sm'>
                      Reducir tecnicismos al explicar soluciones
                    </p>
                  </div>
                  <div className='flex items-start'>
                    <div className='min-w-4 mr-2'>
                      <div className='w-1 h-1 rounded-full bg-yellow-500 mt-2'></div>
                    </div>
                    <p className='text-sm'>
                      Incluir chequeos proactivos en reuniones largas
                    </p>
                  </div>
                  <div className='flex items-start'>
                    <div className='min-w-4 mr-2'>
                      <div className='w-1 h-1 rounded-full bg-yellow-500 mt-2'></div>
                    </div>
                    <p className='text-sm'>
                      Mejorar la transición entre equipos
                    </p>
                  </div>
                </div>
              </div>

              {/* Métricas de Tiempo */}
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center'>
                    <Clock className='h-5 w-5 text-blue-500 mr-2' />
                    <h3 className='font-medium'>Métricas de Tiempo</h3>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='flex justify-between mb-1'>
                    <span className='text-sm'>Duración de la reunión</span>
                    <span className='text-sm font-medium'>45:20</span>
                  </div>
                  <div className='flex justify-between mb-1'>
                    <span className='text-sm'>
                      Tiempo efectivo de discusión
                    </span>
                    <span className='text-sm font-medium'>38:45</span>
                  </div>
                  <div className='flex justify-between mb-1'>
                    <span className='text-sm'>Tiempos inactivos o pausas</span>
                    <span className='text-sm font-medium'>6:35</span>
                  </div>
                </div>
                <div className='text-xs text-gray-600'>
                  <p className='flex items-center'>
                    <TrendingUp className='text-green-500 h-3 w-3 mr-1' />
                    12% más eficiente que el promedio mensual
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className='mb-8'>
            <h2 className='text-xl font-medium mb-4'>Actions</h2>
            <div className='space-y-4'>
              {/* Email Action */}
              <div className='border border-gray-200 rounded-md'>
                <div className='p-4 border-b border-gray-200'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Mail className='h-5 w-5 text-blue-500 mr-2' />
                      <span className='font-medium'>Email</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Button variant='outline' size='sm' asChild>
                        <Link href={'mailto:' + actions.to}>Send email</Link>
                      </Button>
                      <Button variant='ghost' size='sm'>
                        <X className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <div className='space-y-4'>
                    <div className='flex items-center'>
                      <label className='w-20 text-sm text-gray-500'>To</label>
                      <Input
                        className='flex-1 border-0 shadow-none focus-visible:ring-0'
                        value={actions.to}
                        readOnly
                      />
                    </div>
                    <div className='flex items-center'>
                      <label className='w-20 text-sm text-gray-500'>
                        Subject
                      </label>
                      <Input
                        className='flex-1 border-0 shadow-none focus-visible:ring-0'
                        value={actions.subject}
                        readOnly
                      />
                    </div>
                    <div className='pt-2 min-h-[100px]'>
                      {actions.body.map((line, i) => (
                        <p className='mb-4' key={i}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Resources */}
              <div className='border border-gray-200 rounded-md overflow-hidden'>
                <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Settings className='h-5 w-5 text-green-500 mr-2' />
                    <span className='font-medium'>Training Resources</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button variant='outline' size='sm'>
                      Open Training
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <X className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <div className='bg-white p-4 text-sm space-y-4'>
                  <div>
                    <h3 className='font-medium mb-2'>
                      Recommended Training Modules
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-center'>
                        <div className='w-1 h-1 rounded-full bg-blue-500 mr-2'></div>
                        <span>Advanced De-escalation Techniques</span>
                      </li>
                      <li className='flex items-center'>
                        <div className='w-1 h-1 rounded-full bg-blue-500 mr-2'></div>
                        <span>
                          Technical Explanations for Non-Technical Customers
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <div className='w-1 h-1 rounded-full bg-blue-500 mr-2'></div>
                        <span>
                          Empathetic Communication in High-Stress Situations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Response Templates */}
              <div className='border border-gray-200 rounded-md overflow-hidden'>
                <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <MessageCircle className='h-5 w-5 text-purple-500 mr-2' />
                    <span className='font-medium'>Response Templates</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button variant='outline' size='sm'>
                      Save Templates
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <X className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <div className='bg-white p-4 text-sm space-y-4'>
                  <div>
                    <h3 className='font-medium mb-2'>Suggested Responses</h3>
                    <div className='space-y-3'>
                      <div className='rounded-md border border-gray-200 p-3'>
                        <p className='text-sm'>
                          "I understand that's frustrating. Let me take some
                          time to look into this specific issue for you. Would
                          it be helpful if I explained the steps I'm taking as I
                          work through this?"
                        </p>
                      </div>
                      <div className='rounded-md border border-gray-200 p-3'>
                        <p className='text-sm'>
                          "I hear your concern about [specific issue]. This is
                          something we can definitely address. Let me break down
                          our solution into simpler steps so we can work through
                          this together."
                        </p>
                      </div>
                      <div className='rounded-md border border-gray-200 p-3'>
                        <p className='text-sm'>
                          "Thank you for your patience while we resolved this
                          issue. To prevent this from happening again, I'd like
                          to suggest a few steps you can take, and I'll also
                          make a note in our system to help if you contact us in
                          the future."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proposal Action */}
              <div className='border border-gray-200 rounded-md overflow-hidden'>
                <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Paperclip className='h-5 w-5 text-green-500 mr-2' />
                    <span className='font-medium'>Proposal</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button variant='outline' size='sm'>
                      Download PDF
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <X className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <div className='bg-white p-8 text-sm space-y-4'>
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold'>Project Proposal</h3>
                    <p className='text-gray-500'>April 23, 2025</p>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      <p className='font-semibold'>From:</p>
                      <p>
                        Jane Doe
                        <br />
                        Acme Agency
                        <br />
                        jane@acme.com
                      </p>
                    </div>
                    <div>
                      <p className='font-semibold'>To:</p>
                      <p>
                        Client Company
                        <br />
                        client@company.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <p>Dear Client,</p>
                    <p>
                      Thank you for considering Acme Agency for your upcoming
                      project. Based on our discussions, we propose the
                      following scope of work:
                    </p>
                    <ul className='list-disc ml-6'>
                      <li>Brand identity design and guidelines</li>
                      <li>Website redesign and deployment</li>
                      <li>3-month support and maintenance</li>
                    </ul>
                    <p>
                      The estimated cost is <strong>$8,000 USD</strong> with a
                      projected timeline of 6 weeks. Please feel free to reach
                      out with any questions or modifications.
                    </p>
                  </div>
                  <div className='pt-6'>
                    <p>Best regards,</p>
                    <p className='mt-4'>
                      Jane Doe
                      <br />
                      Creative Director, Acme Agency
                    </p>
                  </div>
                </div>
              </div>

              {/* Invoice Action */}
              <div className='border border-gray-200 rounded-md overflow-hidden'>
                <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Paperclip className='h-5 w-5 text-purple-500 mr-2' />
                    <span className='font-medium'>Invoice</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button variant='outline' size='sm'>
                      Download Invoice
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <X className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <div className='bg-white p-8 text-sm space-y-6'>
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold'>INVOICE</h3>
                    <p className='text-gray-500'>#000342 — April 23, 2025</p>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      <p className='font-semibold'>Billed To:</p>
                      <p>
                        Client Company
                        <br />
                        billing@client.com
                      </p>
                    </div>
                    <div>
                      <p className='font-semibold'>From:</p>
                      <p>
                        Acme Agency
                        <br />
                        123 Creative Blvd
                        <br />
                        info@acme.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <table className='w-full text-left border border-gray-300 mt-4'>
                      <thead>
                        <tr className='bg-gray-100'>
                          <th className='px-4 py-2 border-b border-gray-300'>
                            Description
                          </th>
                          <th className='px-4 py-2 border-b border-gray-300'>
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='px-4 py-2 border-b'>
                            Web design and development
                          </td>
                          <td className='px-4 py-2 border-b'>$3,500</td>
                        </tr>
                        <tr>
                          <td className='px-4 py-2 border-b'>
                            Support & maintenance (April)
                          </td>
                          <td className='px-4 py-2 border-b'>$750</td>
                        </tr>
                        <tr className='font-semibold'>
                          <td className='px-4 py-2'>Total</td>
                          <td className='px-4 py-2'>$4,250</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm text-gray-600'>Due by: May 7, 2025</p>
                  </div>
                  <div className='pt-6'>
                    <p className='text-gray-600'>
                      Please make payment to:{' '}
                      <strong>
                        Acme Agency, IBAN: DE89 3704 0044 0532 0130 00
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
