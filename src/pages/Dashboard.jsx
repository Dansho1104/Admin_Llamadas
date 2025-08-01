import React from 'react';
import { Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

// Components
import KPICard from '../components/Dashboard/KPICard';
import ChartCard from '../components/Dashboard/ChartCard';
import ActiveCallItem from '../components/Dashboard/ActiveCallItem';

// Data
import { kpiData, callsData, intentData, sentimentData, activeCalls } from '../components/Dashboard/dashboardData';

// Styles
import styles from '../components/Dashboard/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Dashboard de Agentes IA</h1>
          <p className={styles.subtitle}>Monitoreo en tiempo real del centro de llamadas automatizado</p>
        </div>
        <div className={styles.statusIndicator}>
          <Activity className={styles.statusIcon} />
          <span className={styles.statusText}>4 Agentes IA Activos</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className={styles.kpiGrid}>
        {kpiData.map((kpi, index) => (
          <KPICard key={index} kpi={kpi} />
        ))}
      </div>

      {/* Charts */}
      <div className={styles.chartsGrid}>
        {/* Calls Timeline */}
        <ChartCard 
          title="Volumen de Llamadas" 
          subtitle="Últimas 24 horas"
        >
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={callsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="calls" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Intent Distribution */}
        <ChartCard 
          title="Distribución de Intenciones" 
          subtitle="Clasificación automática"
        >
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={intentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {intentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.legend}>
            {intentData.map((item, index) => (
              <div key={index} className={styles.legendItem}>
                <div 
                  className={styles.legendColor} 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className={styles.legendLabel}>{item.name}</span>
                <span className={styles.legendValue}>{item.value}%</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Second Charts Row */}
      <div className={styles.chartsGrid}>
        {/* Sentiment Analysis */}
        <ChartCard 
          title="Análisis de Sentimientos" 
          subtitle="Detección automática de emociones"
        >
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="sentiment" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar 
                  dataKey="count" 
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Active Calls */}
        <ChartCard 
          title="Llamadas Activas" 
          subtitle="En tiempo real"
        >
          <div className={styles.activeCallsHeader}>
            <span className={styles.activeCallsCount}>
              {activeCalls.length} activas
            </span>
          </div>
          <div className={styles.activeCallsList}>
            {activeCalls.map((call) => (
              <ActiveCallItem key={call.id} call={call} />
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}