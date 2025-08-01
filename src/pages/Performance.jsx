import React from 'react';
import {
  Activity,
  Users,
  Clock,
  TrendingUp,
  Award,
  Target,
  Phone,
  MessageSquare,
  Star,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const performanceData = [
  { time: '09:00', calls: 45, satisfaction: 4.2, resolution: 85 },
  { time: '10:00', calls: 52, satisfaction: 4.5, resolution: 88 },
  { time: '11:00', calls: 48, satisfaction: 4.3, resolution: 82 },
  { time: '12:00', calls: 38, satisfaction: 4.1, resolution: 79 },
  { time: '13:00', calls: 42, satisfaction: 4.4, resolution: 86 },
  { time: '14:00', calls: 55, satisfaction: 4.6, resolution: 91 },
  { time: '15:00', calls: 49, satisfaction: 4.2, resolution: 84 },
  { time: '16:00', calls: 46, satisfaction: 4.3, resolution: 87 }
];

const agentPerformance = [
  { name: 'Ana García', calls: 156, avgTime: '4:32', satisfaction: 4.8, resolution: 94 },
  { name: 'Carlos López', calls: 142, avgTime: '5:15', satisfaction: 4.6, resolution: 89 },
  { name: 'María Rodríguez', calls: 138, avgTime: '4:45', satisfaction: 4.7, resolution: 92 },
  { name: 'Juan Martínez', calls: 134, avgTime: '5:02', satisfaction: 4.5, resolution: 87 },
  { name: 'Laura Sánchez', calls: 129, avgTime: '4:58', satisfaction: 4.4, resolution: 85 }
];

const skillsData = [
  { skill: 'Comunicación', A: 85, B: 90, fullMark: 100 },
  { skill: 'Resolución', A: 78, B: 85, fullMark: 100 },
  { skill: 'Empatía', A: 92, B: 88, fullMark: 100 },
  { skill: 'Eficiencia', A: 88, B: 82, fullMark: 100 },
  { skill: 'Conocimiento', A: 75, B: 95, fullMark: 100 },
  { skill: 'Adaptabilidad', A: 82, B: 78, fullMark: 100 }
];

export default function Performance() {
  return (
    <div className="p-6 space-y-6 max-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rendimiento de Agentes</h1>
          <p className="text-gray-600 mt-1">Análisis detallado del desempeño del equipo</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary">
            <BarChart3 className="w-4 h-4 mr-2" />
            Exportar Reporte
          </button>
          <button className="btn-primary">
            <Target className="w-4 h-4 mr-2" />
            Establecer Metas
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Agentes Activos</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-green-600 mt-1">+2 desde ayer</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tiempo Promedio</p>
                <p className="text-2xl font-bold text-gray-900">4:52</p>
                <p className="text-xs text-green-600 mt-1">-15s desde ayer</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Satisfacción</p>
                <p className="text-2xl font-bold text-gray-900">4.5/5</p>
                <p className="text-xs text-green-600 mt-1">+0.2 desde ayer</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolución</p>
                <p className="text-2xl font-bold text-gray-900">87%</p>
                <p className="text-xs text-green-600 mt-1">+3% desde ayer</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hourly Performance */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Rendimiento por Hora</h3>
            <p className="text-sm text-gray-600">Métricas de desempeño durante el día</p>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="satisfaction" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Radar */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Análisis de Habilidades</h3>
            <p className="text-sm text-gray-600">Comparación de competencias del equipo</p>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Promedio Equipo" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                <Radar name="Top Performer" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Agent Performance Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Ranking de Agentes</h3>
          <p className="text-sm text-gray-600">Desempeño individual del equipo</p>
        </div>
        <div className="card-content">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Llamadas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tiempo Promedio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Satisfacción
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resolución
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {agentPerformance.map((agent, index) => (
                  <tr key={agent.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                            {agent.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                          <div className="text-sm text-gray-500">Agente #{index + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{agent.calls}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{agent.avgTime}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-gray-900">{agent.satisfaction}/5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${agent.resolution}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-900">{agent.resolution}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Ver Detalles
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Entrenar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}