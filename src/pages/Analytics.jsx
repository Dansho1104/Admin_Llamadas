import React, { useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

// Components
import AnalyticsKPICard from '../components/Analytics/AnalyticsKPICard';
import ChartCard from '../components/Dashboard/ChartCard';
import AgentPerformanceItem from '../components/Analytics/AgentPerformanceItem';

// Data
import {
  performanceData,
  hourlyData,
  agentPerformance,
  intentTrends,
  radarData,
  kpiCards,
  COLORS
} from '../components/Analytics/analyticsData';

// Styles
import styles from '../components/Analytics/Analytics.module.css';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('calls');

  return (
    <div className={styles.analytics}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Análisis y Métricas</h1>
          <p className={styles.subtitle}>Análisis profundo del rendimiento de agentes IA</p>
        </div>
        <div className={styles.headerActions}>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className={styles.timeRangeSelect}
          >
            <option value="24h">Últimas 24 horas</option>
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
            <option value="90d">Últimos 90 días</option>
          </select>
          <button className={`${styles.actionButton} ${styles.refreshButton}`}>
            <RefreshCw className="w-4 h-4" />
            <span>Actualizar</span>
          </button>
          <button className={`${styles.actionButton} ${styles.exportButton}`}>
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className={styles.kpiGrid}>
        {kpiCards.map((kpi, index) => (
          <AnalyticsKPICard key={index} kpi={kpi} />
        ))}
      </div>

      {/* Performance Trends */}
      <div className={styles.chartsGrid}>
        {/* Calls and Satisfaction Trend */}
        <ChartCard 
          title="Tendencia de Rendimiento" 
          subtitle="Llamadas y satisfacción en el tiempo"
        >
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="calls"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Hourly Distribution */}
        <ChartCard 
          title="Distribución Horaria" 
          subtitle="Volumen de llamadas por hora"
        >
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="calls" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Agent Performance and AI Metrics */}
      <div className={styles.chartsGridThree}>
        {/* Agent Performance */}
        <ChartCard 
          title="Rendimiento por Agente IA" 
          subtitle="Comparativa de eficiencia entre agentes"
        >
          <div className={styles.agentPerformanceContainer}>
            {agentPerformance.map((agent, index) => (
              <AgentPerformanceItem key={index} agent={agent} />
            ))}
          </div>
        </ChartCard>

        {/* AI Performance Radar */}
        <ChartCard 
          title="Métricas de IA" 
          subtitle="Evaluación multidimensional"
        >
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#374151" opacity={0.3} />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                />
                <Radar
                  name="Rendimiento"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Intent Trends */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Tendencias de Intenciones</h3>
          <p className="text-sm text-gray-600">Evolución de tipos de consultas detectadas por IA</p>
        </div>
        <div className="card-content">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={intentTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="intent" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="week1" stroke="#3b82f6" strokeWidth={2} name="Semana 1" />
              <Line type="monotone" dataKey="week2" stroke="#10b981" strokeWidth={2} name="Semana 2" />
              <Line type="monotone" dataKey="week3" stroke="#f59e0b" strokeWidth={2} name="Semana 3" />
              <Line type="monotone" dataKey="week4" stroke="#ef4444" strokeWidth={2} name="Semana 4" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}