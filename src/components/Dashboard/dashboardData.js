import {
  Phone,
  Clock,
  ThumbsUp,
  CheckCircle
} from 'lucide-react';

// KPI Data
export const kpiData = [
  {
    title: 'Llamadas Atendidas',
    value: '2,847',
    change: '+12.5%',
    changeType: 'positive',
    icon: Phone,
    colorClass: 'blue'
  },
  {
    title: 'Tiempo Promedio',
    value: '3:24',
    change: '-8.2%',
    changeType: 'positive',
    icon: Clock,
    colorClass: 'green'
  },
  {
    title: 'Satisfacción',
    value: '94.2%',
    change: '+2.1%',
    changeType: 'positive',
    icon: ThumbsUp,
    colorClass: 'purple'
  },
  {
    title: 'Tasa de Finalización',
    value: '89.7%',
    change: '+5.3%',
    changeType: 'positive',
    icon: CheckCircle,
    colorClass: 'orange'
  }
];

// Calls Timeline Data
export const callsData = [
  { time: '00:00', calls: 45 },
  { time: '04:00', calls: 23 },
  { time: '08:00', calls: 156 },
  { time: '12:00', calls: 234 },
  { time: '16:00', calls: 189 },
  { time: '20:00', calls: 98 },
];

// Intent Distribution Data
export const intentData = [
  { name: 'Soporte Técnico', value: 35, color: '#3B82F6' },
  { name: 'Ventas', value: 28, color: '#10B981' },
  { name: 'Información', value: 22, color: '#F59E0B' },
  { name: 'Reclamos', value: 15, color: '#EF4444' },
];

// Sentiment Analysis Data
export const sentimentData = [
  { sentiment: 'Positivo', count: 1847, color: '#10B981' },
  { sentiment: 'Neutral', count: 892, color: '#6B7280' },
  { sentiment: 'Negativo', count: 108, color: '#EF4444' },
];

// Active Calls Data
export const activeCalls = [
  { id: 1, agent: 'IA-Agent-001', caller: '+1 (555) 123-4567', duration: '02:34', status: 'active', intent: 'Soporte Técnico' },
  { id: 2, agent: 'IA-Agent-002', caller: '+1 (555) 987-6543', duration: '01:12', status: 'active', intent: 'Ventas' },
  { id: 3, agent: 'IA-Agent-003', caller: '+1 (555) 456-7890', duration: '04:56', status: 'active', intent: 'Información' },
  { id: 4, agent: 'IA-Agent-004', caller: '+1 (555) 321-0987', duration: '00:45', status: 'active', intent: 'Reclamos' },
];