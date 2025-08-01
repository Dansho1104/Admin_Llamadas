// Analytics Data Configuration

// Performance data for trends
export const performanceData = [
  { date: '2024-01-25', calls: 234, satisfaction: 4.2, avgDuration: 3.5, resolution: 89 },
  { date: '2024-01-26', calls: 267, satisfaction: 4.4, avgDuration: 3.2, resolution: 92 },
  { date: '2024-01-27', calls: 198, satisfaction: 4.1, avgDuration: 3.8, resolution: 87 },
  { date: '2024-01-28', calls: 289, satisfaction: 4.6, avgDuration: 3.1, resolution: 94 },
  { date: '2024-01-29', calls: 312, satisfaction: 4.5, avgDuration: 3.3, resolution: 91 },
  { date: '2024-01-30', calls: 278, satisfaction: 4.3, avgDuration: 3.4, resolution: 88 },
  { date: '2024-01-31', calls: 295, satisfaction: 4.7, avgDuration: 2.9, resolution: 96 },
];

// Hourly distribution data
export const hourlyData = [
  { hour: '00:00', calls: 12, avgWait: 0.5 },
  { hour: '02:00', calls: 8, avgWait: 0.3 },
  { hour: '04:00', calls: 5, avgWait: 0.2 },
  { hour: '06:00', calls: 15, avgWait: 0.8 },
  { hour: '08:00', calls: 45, avgWait: 1.2 },
  { hour: '10:00', calls: 78, avgWait: 1.8 },
  { hour: '12:00', calls: 92, avgWait: 2.1 },
  { hour: '14:00', calls: 87, avgWait: 1.9 },
  { hour: '16:00', calls: 65, avgWait: 1.5 },
  { hour: '18:00', calls: 43, avgWait: 1.1 },
  { hour: '20:00', calls: 28, avgWait: 0.9 },
  { hour: '22:00', calls: 18, avgWait: 0.6 },
];

// Agent performance data
export const agentPerformance = [
  { agent: 'IA-Agent-001', calls: 456, satisfaction: 4.8, avgDuration: 3.2, efficiency: 95 },
  { agent: 'IA-Agent-002', calls: 423, satisfaction: 4.6, avgDuration: 3.5, efficiency: 92 },
  { agent: 'IA-Agent-003', calls: 389, satisfaction: 4.4, avgDuration: 3.8, efficiency: 88 },
  { agent: 'IA-Agent-004', calls: 367, satisfaction: 4.3, avgDuration: 4.1, efficiency: 85 },
];

// Intent trends data
export const intentTrends = [
  { intent: 'Soporte Técnico', week1: 35, week2: 38, week3: 42, week4: 39 },
  { intent: 'Ventas', week1: 28, week2: 25, week3: 30, week4: 32 },
  { intent: 'Información', week1: 22, week2: 24, week3: 18, week4: 20 },
  { intent: 'Reclamos', week1: 15, week2: 13, week3: 10, week4: 9 },
];

// Radar chart data for AI metrics
export const radarData = [
  { metric: 'Velocidad de Respuesta', value: 92, fullMark: 100 },
  { metric: 'Precisión', value: 88, fullMark: 100 },
  { metric: 'Satisfacción', value: 94, fullMark: 100 },
  { metric: 'Resolución', value: 89, fullMark: 100 },
  { metric: 'Eficiencia', value: 91, fullMark: 100 },
  { metric: 'Comprensión', value: 87, fullMark: 100 },
];

// KPI Cards data
export const kpiCards = [
  {
    title: 'Llamadas Totales',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    color: 'blue'
  },
  {
    title: 'Tiempo Promedio',
    value: '3:24',
    change: '-8.2%',
    trend: 'down',
    color: 'green'
  },
  {
    title: 'Tasa de Resolución',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
    color: 'purple'
  },
  {
    title: 'Eficiencia IA',
    value: '91.8%',
    change: '+5.3%',
    trend: 'up',
    color: 'orange'
  }
];

// Chart colors
export const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];