import React, { useState } from 'react';
import {
  Brain,
  Upload,
  Download,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Clock,
  Database,
  Zap,
  TrendingUp,
  FileText,
  Mic,
  MessageSquare
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock data
const trainingHistory = [
  { epoch: 1, accuracy: 0.65, loss: 0.45, valAccuracy: 0.62, valLoss: 0.48 },
  { epoch: 2, accuracy: 0.72, loss: 0.38, valAccuracy: 0.69, valLoss: 0.41 },
  { epoch: 3, accuracy: 0.78, loss: 0.32, valAccuracy: 0.75, valLoss: 0.35 },
  { epoch: 4, accuracy: 0.83, loss: 0.28, valAccuracy: 0.80, valLoss: 0.31 },
  { epoch: 5, accuracy: 0.87, loss: 0.24, valAccuracy: 0.84, valLoss: 0.27 },
  { epoch: 6, accuracy: 0.90, loss: 0.21, valAccuracy: 0.87, valLoss: 0.24 },
  { epoch: 7, accuracy: 0.92, loss: 0.19, valAccuracy: 0.89, valLoss: 0.22 },
  { epoch: 8, accuracy: 0.94, loss: 0.17, valAccuracy: 0.91, valLoss: 0.20 },
];

const modelPerformance = [
  { metric: 'Comprensión de Intenciones', current: 94, target: 96 },
  { metric: 'Detección de Sentimientos', current: 89, target: 92 },
  { metric: 'Generación de Respuestas', current: 91, target: 94 },
  { metric: 'Manejo de Contexto', current: 87, target: 90 },
  { metric: 'Transferencia Inteligente', current: 93, target: 95 },
];

const trainingJobs = [
  {
    id: 1,
    name: 'Modelo Base v2.1',
    status: 'completed',
    progress: 100,
    startTime: '2024-01-31 10:00',
    endTime: '2024-01-31 14:30',
    accuracy: 94.2,
    dataSize: '15,000 conversaciones'
  },
  {
    id: 2,
    name: 'Especialización Soporte Técnico',
    status: 'running',
    progress: 65,
    startTime: '2024-01-31 15:00',
    endTime: null,
    accuracy: null,
    dataSize: '8,500 conversaciones'
  },
  {
    id: 3,
    name: 'Optimización Sentimientos',
    status: 'pending',
    progress: 0,
    startTime: null,
    endTime: null,
    accuracy: null,
    dataSize: '12,000 conversaciones'
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'running':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'failed':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4" />;
    case 'running':
      return <Clock className="w-4 h-4 animate-spin" />;
    case 'pending':
      return <Clock className="w-4 h-4" />;
    case 'failed':
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

export default function Training() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isTraining, setIsTraining] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const startTraining = () => {
    setIsTraining(true);
    // Simulate training process
    setTimeout(() => {
      setIsTraining(false);
    }, 5000);
  };

  const tabs = [
    { id: 'overview', name: 'Resumen', icon: Brain },
    { id: 'data', name: 'Datos de Entrenamiento', icon: Database },
    { id: 'models', name: 'Modelos', icon: Zap },
    { id: 'testing', name: 'Pruebas', icon: Play },
  ];

  return (
    <div className="space-y-6 max-h-screen overflow-y-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Entrenamiento de IA</h1>
          <p className="text-gray-600 mt-1">Optimización y entrenamiento de modelos conversacionales</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar Modelo</span>
          </button>
          <button 
            onClick={startTraining}
            className={`btn-primary flex items-center space-x-2 ${
              isTraining ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isTraining}
          >
            {isTraining ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isTraining ? 'Entrenando...' : 'Iniciar Entrenamiento'}</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <nav className="-mb-px flex justify-start">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center justify-center space-x-2 py-3 px-6 border-b-2 font-medium text-sm min-w-[180px] transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'border-primary-500 text-primary-600 bg-primary-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {selectedTab === 'overview' && (
        <div className="space-y-6">
          {/* Model Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Progreso de Entrenamiento</h3>
                <p className="text-sm text-gray-600">Evolución de precisión y pérdida</p>
              </div>
              <div className="card-content">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trainingHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="epoch" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Precisión" />
                    <Line type="monotone" dataKey="valAccuracy" stroke="#3b82f6" strokeWidth={2} name="Val. Precisión" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Rendimiento por Métrica</h3>
                <p className="text-sm text-gray-600">Comparación actual vs objetivo</p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {modelPerformance.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{metric.metric}</span>
                        <span className="font-medium">{metric.current}% / {metric.target}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full relative" style={{ width: `${(metric.current / metric.target) * 100}%` }}>
                          <div className="absolute right-0 top-0 h-2 w-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Training Jobs */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Trabajos de Entrenamiento</h3>
              <p className="text-sm text-gray-600">Estado actual de los procesos de entrenamiento</p>
            </div>
            <div className="card-content">
              <div className="space-y-4">
                {trainingJobs.map((job) => (
                  <div key={job.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`flex items-center space-x-2 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(job.status)}`}>
                          {getStatusIcon(job.status)}
                          <span className="capitalize">{job.status === 'running' ? 'Ejecutando' : job.status === 'completed' ? 'Completado' : 'Pendiente'}</span>
                        </div>
                        <h4 className="font-medium text-gray-900">{job.name}</h4>
                      </div>
                      {job.accuracy && (
                        <span className="text-sm font-medium text-green-600">{job.accuracy}% precisión</span>
                      )}
                    </div>
                    
                    {job.status === 'running' && (
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progreso</span>
                          <span className="font-medium">{job.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${job.progress}%` }}></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="block font-medium">Datos</span>
                        <span>{job.dataSize}</span>
                      </div>
                      <div>
                        <span className="block font-medium">Inicio</span>
                        <span>{job.startTime || 'No iniciado'}</span>
                      </div>
                      <div>
                        <span className="block font-medium">Fin</span>
                        <span>{job.endTime || 'En progreso'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'data' && (
        <div className="space-y-6">
          {/* Data Upload */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Cargar Datos de Entrenamiento</h3>
              <p className="text-sm text-gray-600">Sube conversaciones y transcripciones para entrenar el modelo</p>
            </div>
            <div className="card-content">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Arrastra archivos aquí</h4>
                <p className="text-gray-600 mb-4">o haz clic para seleccionar archivos</p>
                <button className="btn-primary">Seleccionar Archivos</button>
                <p className="text-xs text-gray-500 mt-2">Formatos soportados: CSV, JSON, TXT (máx. 100MB)</p>
              </div>
            </div>
          </div>

          {/* Data Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="card-content">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Conversaciones</p>
                    <p className="text-2xl font-bold text-gray-900">23,847</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Mic className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Horas de Audio</p>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Transcripciones</p>
                    <p className="text-2xl font-bold text-gray-900">18,923</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'models' && (
        <div className="space-y-6">
          {/* Model Comparison */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Modelos Disponibles</h3>
              <p className="text-sm text-gray-600">Compara y gestiona diferentes versiones del modelo</p>
            </div>
            <div className="card-content">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-green-300 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-green-900">Modelo Producción</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Activo</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">Versión:</span>
                      <span className="font-medium">v2.1.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Precisión:</span>
                      <span className="font-medium">94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Última actualización:</span>
                      <span className="font-medium">2024-01-30</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-blue-300 bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-blue-900">Modelo Beta</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Pruebas</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Versión:</span>
                      <span className="font-medium">v2.2.0-beta</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Precisión:</span>
                      <span className="font-medium">96.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Última actualización:</span>
                      <span className="font-medium">2024-01-31</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-300 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Modelo Desarrollo</h4>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Desarrollo</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Versión:</span>
                      <span className="font-medium">v2.3.0-dev</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Precisión:</span>
                      <span className="font-medium">En entrenamiento</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Última actualización:</span>
                      <span className="font-medium">2024-01-31</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'testing' && (
        <div className="space-y-6">
          {/* Model Testing */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Pruebas de Modelo</h3>
              <p className="text-sm text-gray-600">Evalúa el rendimiento del modelo con datos de prueba</p>
            </div>
            <div className="card-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Texto de Prueba</label>
                  <textarea
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Escribe una consulta de cliente para probar el modelo..."
                    defaultValue="Hola, tengo problemas con mi conexión a internet. Se corta constantemente y no puedo trabajar desde casa."
                  />
                  <button className="btn-primary mt-3 w-full">Analizar con IA</button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resultado del Análisis</label>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Intención Detectada:</span>
                      <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Soporte Técnico</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Sentimiento:</span>
                      <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Frustrado</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Confianza:</span>
                      <span className="ml-2 text-sm font-medium text-green-600">94.2%</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Respuesta Sugerida:</span>
                      <p className="text-sm text-gray-600 mt-1 p-2 bg-white rounded border">
                        "Lamento escuchar sobre los problemas con su conexión. Entiendo lo frustrante que debe ser, especialmente cuando necesita trabajar desde casa. Permítame ayudarle a diagnosticar y resolver este problema..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}