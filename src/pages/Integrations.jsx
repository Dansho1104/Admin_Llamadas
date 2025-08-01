import React, { useState } from 'react';
import {
  Plug,
  CheckCircle,
  AlertCircle,
  Clock,
  Settings,
  Plus,
  ExternalLink,
  Smartphone,
  Phone,
  MessageSquare,
  Users,
  Database,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Mail
} from 'lucide-react';

// Mock data for integrations
const integrations = [
  {
    id: 1,
    name: 'Twilio',
    description: 'Plataforma de comunicaciones en la nube',
    category: 'Telefonía',
    status: 'connected',
    icon: Phone,
    color: 'bg-red-500',
    lastSync: '2024-01-31 14:30',
    metrics: {
      calls: 1247,
      messages: 3421,
      uptime: '99.9%'
    },
    features: ['Llamadas entrantes', 'Llamadas salientes', 'SMS', 'WhatsApp Business']
  },
  {
    id: 2,
    name: 'WhatsApp Business',
    description: 'Mensajería empresarial de WhatsApp',
    category: 'Mensajería',
    status: 'connected',
    icon: MessageSquare,
    color: 'bg-green-500',
    lastSync: '2024-01-31 14:25',
    metrics: {
      messages: 5643,
      contacts: 2341,
      uptime: '99.8%'
    },
    features: ['Mensajes automáticos', 'Plantillas', 'Multimedia', 'Chatbots']
  },
  {
    id: 3,
    name: 'Salesforce CRM',
    description: 'Sistema de gestión de relaciones con clientes',
    category: 'CRM',
    status: 'connected',
    icon: Users,
    color: 'bg-blue-500',
    lastSync: '2024-01-31 14:20',
    metrics: {
      contacts: 15234,
      leads: 892,
      uptime: '99.7%'
    },
    features: ['Sincronización de contactos', 'Creación de leads', 'Historial de llamadas', 'Reportes']
  },
  {
    id: 4,
    name: 'Microsoft Teams',
    description: 'Plataforma de colaboración empresarial',
    category: 'Colaboración',
    status: 'warning',
    icon: MessageSquare,
    color: 'bg-purple-500',
    lastSync: '2024-01-31 12:15',
    metrics: {
      users: 156,
      channels: 23,
      uptime: '98.2%'
    },
    features: ['Notificaciones', 'Integración de llamadas', 'Bots', 'Reportes']
  },
  {
    id: 5,
    name: 'Google Analytics',
    description: 'Análisis web y de aplicaciones',
    category: 'Analytics',
    status: 'connected',
    icon: BarChart3,
    color: 'bg-orange-500',
    lastSync: '2024-01-31 14:00',
    metrics: {
      events: 12456,
      sessions: 3421,
      uptime: '99.9%'
    },
    features: ['Seguimiento de eventos', 'Conversiones', 'Audiencias', 'Reportes personalizados']
  },
  {
    id: 6,
    name: 'Slack',
    description: 'Plataforma de comunicación empresarial',
    category: 'Colaboración',
    status: 'disconnected',
    icon: MessageSquare,
    color: 'bg-indigo-500',
    lastSync: '2024-01-30 09:30',
    metrics: {
      channels: 45,
      users: 89,
      uptime: '0%'
    },
    features: ['Notificaciones', 'Comandos slash', 'Bots', 'Integraciones']
  },
  {
    id: 7,
    name: 'AWS S3',
    description: 'Almacenamiento en la nube',
    category: 'Almacenamiento',
    status: 'connected',
    icon: Cloud,
    color: 'bg-yellow-500',
    lastSync: '2024-01-31 14:35',
    metrics: {
      files: 8934,
      storage: '2.3 TB',
      uptime: '99.9%'
    },
    features: ['Grabaciones de llamadas', 'Backups automáticos', 'CDN', 'Versionado']
  },
  {
    id: 8,
    name: 'Zapier',
    description: 'Automatización de flujos de trabajo',
    category: 'Automatización',
    status: 'connected',
    icon: Zap,
    color: 'bg-orange-400',
    lastSync: '2024-01-31 14:10',
    metrics: {
      zaps: 23,
      executions: 1567,
      uptime: '99.5%'
    },
    features: ['Triggers automáticos', 'Webhooks', 'Filtros', 'Transformaciones']
  }
];

const availableIntegrations = [
  { name: 'HubSpot', icon: Users, category: 'CRM', description: 'CRM y marketing automation' },
  { name: 'Zendesk', icon: MessageSquare, category: 'Soporte', description: 'Plataforma de atención al cliente' },
  { name: 'Discord', icon: MessageSquare, category: 'Mensajería', description: 'Comunicación para comunidades' },
  { name: 'Telegram', icon: MessageSquare, category: 'Mensajería', description: 'Mensajería instantánea' },
  { name: 'Gmail', icon: Mail, category: 'Email', description: 'Servicio de correo electrónico' },
  { name: 'Outlook', icon: Mail, category: 'Email', description: 'Cliente de correo empresarial' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'connected':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'disconnected':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'connected':
      return <CheckCircle className="w-4 h-4" />;
    case 'warning':
      return <AlertCircle className="w-4 h-4" />;
    case 'disconnected':
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'connected':
      return 'Conectado';
    case 'warning':
      return 'Advertencia';
    case 'disconnected':
      return 'Desconectado';
    default:
      return 'Desconocido';
  }
};

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const categories = [
    { id: 'all', name: 'Todas', count: integrations.length },
    { id: 'Telefonía', name: 'Telefonía', count: integrations.filter(i => i.category === 'Telefonía').length },
    { id: 'Mensajería', name: 'Mensajería', count: integrations.filter(i => i.category === 'Mensajería').length },
    { id: 'CRM', name: 'CRM', count: integrations.filter(i => i.category === 'CRM').length },
    { id: 'Colaboración', name: 'Colaboración', count: integrations.filter(i => i.category === 'Colaboración').length },
    { id: 'Analytics', name: 'Analytics', count: integrations.filter(i => i.category === 'Analytics').length },
  ];

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const warningCount = integrations.filter(i => i.status === 'warning').length;
  const disconnectedCount = integrations.filter(i => i.status === 'disconnected').length;

  return (
    <div className="space-y-6 max-h-screen overflow-y-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integraciones</h1>
          <p className="text-gray-600 mt-1">Gestiona las conexiones con servicios externos</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Agregar Integración</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Plug className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Integraciones</p>
                <p className="text-2xl font-bold text-gray-900">{integrations.length}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Conectadas</p>
                <p className="text-2xl font-bold text-gray-900">{connectedCount}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Con Advertencias</p>
                <p className="text-2xl font-bold text-gray-900">{warningCount}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Desconectadas</p>
                <p className="text-2xl font-bold text-gray-900">{disconnectedCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-100 text-primary-700 border border-primary-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <div key={integration.id} className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedIntegration(integration)}>
              <div className="card-content">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 ${integration.color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                      <p className="text-sm text-gray-600">{integration.category}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                    {getStatusIcon(integration.status)}
                    <span>{getStatusText(integration.status)}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  {Object.entries(integration.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-lg font-bold text-gray-900">{value}</p>
                      <p className="text-xs text-gray-600 capitalize">{key}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Última sincronización:</span>
                  <span className="font-medium">{integration.lastSync}</span>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 btn-secondary text-sm py-2">
                    <Settings className="w-4 h-4 mr-1" />
                    Configurar
                  </button>
                  <button className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Integration Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Agregar Nueva Integración</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableIntegrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{integration.name}</h3>
                        <p className="text-sm text-gray-600">{integration.category}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="btn-secondary"
              >
                Cancelar
              </button>
              <button className="btn-primary">
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Integration Detail Modal */}
      {selectedIntegration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`p-3 ${selectedIntegration.color} rounded-lg`}>
                  <selectedIntegration.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedIntegration.name}</h2>
                  <p className="text-gray-600">{selectedIntegration.description}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedIntegration(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Estado de Conexión</h3>
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${getStatusColor(selectedIntegration.status)}`}>
                  {getStatusIcon(selectedIntegration.status)}
                  <span className="font-medium">{getStatusText(selectedIntegration.status)}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3 mt-6">Métricas</h3>
                <div className="space-y-3">
                  {Object.entries(selectedIntegration.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Funcionalidades</h3>
                <div className="space-y-2">
                  {selectedIntegration.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3 mt-6">Información</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categoría:</span>
                    <span className="font-medium">{selectedIntegration.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Última sincronización:</span>
                    <span className="font-medium">{selectedIntegration.lastSync}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setSelectedIntegration(null)}
                className="btn-secondary"
              >
                Cerrar
              </button>
              <button className="btn-primary flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Configurar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}