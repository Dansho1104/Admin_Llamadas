// Mock data for Call Management
export const calls = [
  {
    id: 1,
    caller: '+1 (555) 123-4567',
    agent: 'IA-Agent-001',
    date: '2024-01-31',
    time: '14:30',
    duration: '05:42',
    status: 'completed',
    intent: 'Soporte Técnico',
    sentiment: 'positive',
    satisfaction: 4.8,
    transcript: 'Cliente: Hola, tengo problemas con mi conexión a internet...\nAgente IA: Buenos días, entiendo que tiene problemas con su conexión. Permítame ayudarle a diagnosticar el problema...'
  },
  {
    id: 2,
    caller: '+1 (555) 987-6543',
    agent: 'IA-Agent-002',
    date: '2024-01-31',
    time: '14:25',
    duration: '03:18',
    status: 'completed',
    intent: 'Ventas',
    sentiment: 'positive',
    satisfaction: 4.5,
    transcript: 'Cliente: Me interesa conocer más sobre sus planes de internet...\nAgente IA: Perfecto, me complace ayudarle con información sobre nuestros planes...'
  },
  {
    id: 3,
    caller: '+1 (555) 456-7890',
    agent: 'IA-Agent-003',
    date: '2024-01-31',
    time: '14:20',
    duration: '07:15',
    status: 'completed',
    intent: 'Reclamos',
    sentiment: 'negative',
    satisfaction: 2.1,
    transcript: 'Cliente: Estoy muy molesto con el servicio, mi factura llegó con cargos incorrectos...\nAgente IA: Lamento mucho escuchar sobre esta situación. Voy a revisar su cuenta inmediatamente...'
  },
  {
    id: 4,
    caller: '+1 (555) 321-0987',
    agent: 'IA-Agent-001',
    date: '2024-01-31',
    time: '14:15',
    duration: '02:45',
    status: 'completed',
    intent: 'Información',
    sentiment: 'neutral',
    satisfaction: 3.8,
    transcript: 'Cliente: ¿Cuáles son sus horarios de atención?\nAgente IA: Nuestro horario de atención es de lunes a viernes de 8:00 AM a 8:00 PM...'
  },
  {
    id: 5,
    caller: '+1 (555) 654-3210',
    agent: 'IA-Agent-004',
    date: '2024-01-31',
    time: '14:10',
    duration: '04:32',
    status: 'active',
    intent: 'Soporte Técnico',
    sentiment: 'positive',
    satisfaction: null,
    transcript: 'Cliente: Mi router no está funcionando correctamente...\nAgente IA: Entiendo su preocupación. Vamos a realizar algunas pruebas para identificar el problema...'
  },
  {
    id: 6,
    caller: '+1 (555) 789-0123',
    agent: 'IA-Agent-002',
    date: '2024-01-31',
    time: '14:05',
    duration: '06:20',
    status: 'completed',
    intent: 'Facturación',
    sentiment: 'neutral',
    satisfaction: 4.2,
    transcript: 'Cliente: Tengo una pregunta sobre mi última factura...\nAgente IA: Por supuesto, estaré encantado de ayudarle con su consulta de facturación...'
  },
  {
    id: 7,
    caller: '+1 (555) 234-5678',
    agent: 'IA-Agent-003',
    date: '2024-01-31',
    time: '14:00',
    duration: '03:55',
    status: 'completed',
    intent: 'Activación',
    sentiment: 'positive',
    satisfaction: 4.7,
    transcript: 'Cliente: Necesito activar mi nuevo servicio de internet...\nAgente IA: Perfecto, procederemos con la activación de su servicio inmediatamente...'
  },
  {
    id: 8,
    caller: '+1 (555) 345-6789',
    agent: 'IA-Agent-001',
    date: '2024-01-31',
    time: '13:55',
    duration: '08:12',
    status: 'completed',
    intent: 'Soporte Técnico',
    sentiment: 'negative',
    satisfaction: 2.8,
    transcript: 'Cliente: Mi internet ha estado muy lento durante toda la semana...\nAgente IA: Comprendo su frustración. Vamos a diagnosticar el problema de velocidad paso a paso...'
  }
];

// Filter options
export const statusOptions = [
  { value: 'all', label: 'Todos los estados' },
  { value: 'active', label: 'Activas' },
  { value: 'completed', label: 'Completadas' },
  { value: 'failed', label: 'Fallidas' }
];

export const intentOptions = [
  { value: 'all', label: 'Todas las intenciones' },
  { value: 'Soporte Técnico', label: 'Soporte Técnico' },
  { value: 'Ventas', label: 'Ventas' },
  { value: 'Reclamos', label: 'Reclamos' },
  { value: 'Información', label: 'Información' },
  { value: 'Facturación', label: 'Facturación' },
  { value: 'Activación', label: 'Activación' }
];

export const sentimentOptions = [
  { value: 'all', label: 'Todos los sentimientos' },
  { value: 'positive', label: 'Positivo' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'negative', label: 'Negativo' }
];