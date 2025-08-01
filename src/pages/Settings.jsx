import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  Key,
  Mail,
  Phone,
  Save,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';

const settingsSections = [
  {
    id: 'profile',
    title: 'Perfil de Usuario',
    icon: User,
    description: 'Gestiona tu información personal y preferencias'
  },
  {
    id: 'notifications',
    title: 'Notificaciones',
    icon: Bell,
    description: 'Configura alertas y notificaciones del sistema'
  },
  {
    id: 'security',
    title: 'Seguridad',
    icon: Shield,
    description: 'Configuración de seguridad y autenticación'
  },
  {
    id: 'system',
    title: 'Sistema',
    icon: Database,
    description: 'Configuración general del sistema'
  },
  {
    id: 'appearance',
    title: 'Apariencia',
    icon: Palette,
    description: 'Personaliza la interfaz y tema'
  },
  {
    id: 'integrations',
    title: 'Integraciones',
    icon: Globe,
    description: 'Gestiona conexiones con servicios externos'
  }
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    profile: {
      name: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      phone: '+34 123 456 789',
      role: 'Administrador',
      avatar: ''
    },
    notifications: {
      emailAlerts: true,
      pushNotifications: true,
      smsAlerts: false,
      weeklyReports: true,
      systemMaintenance: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5
    },
    system: {
      language: 'es',
      timezone: 'Europe/Madrid',
      dateFormat: 'DD/MM/YYYY',
      autoBackup: true,
      debugMode: false
    },
    appearance: {
      theme: 'light',
      sidebarCollapsed: false,
      compactMode: false,
      animations: true
    }
  });

  const updateSetting = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            value={settings.profile.name}
            onChange={(e) => updateSetting('profile', 'name', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={settings.profile.email}
            onChange={(e) => updateSetting('profile', 'email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            value={settings.profile.phone}
            onChange={(e) => updateSetting('profile', 'phone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rol
          </label>
          <select
            value={settings.profile.role}
            onChange={(e) => updateSetting('profile', 'role', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          >
            <option value="Administrador">Administrador</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Agente">Agente</option>
            <option value="Analista">Analista</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cambiar Contraseña
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Nueva contraseña"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirmar contraseña"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          />
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      {Object.entries({
        emailAlerts: 'Alertas por Email',
        pushNotifications: 'Notificaciones Push',
        smsAlerts: 'Alertas por SMS',
        weeklyReports: 'Reportes Semanales',
        systemMaintenance: 'Mantenimiento del Sistema'
      }).map(([key, label]) => (
        <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h4 className="text-sm font-medium text-gray-900">{label}</h4>
            <p className="text-sm text-gray-500">Recibir notificaciones sobre {label.toLowerCase()}</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications[key]}
              onChange={(e) => updateSetting('notifications', key, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div>
          <h4 className="text-sm font-medium text-gray-900">Autenticación de Dos Factores</h4>
          <p className="text-sm text-gray-500">Añade una capa extra de seguridad a tu cuenta</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.security.twoFactorAuth}
            onChange={(e) => updateSetting('security', 'twoFactorAuth', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tiempo de Sesión (minutos)
          </label>
          <input
            type="number"
            value={settings.security.sessionTimeout}
            onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expiración de Contraseña (días)
          </label>
          <input
            type="number"
            value={settings.security.passwordExpiry}
            onChange={(e) => updateSetting('security', 'passwordExpiry', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Idioma
          </label>
          <select
            value={settings.system.language}
            onChange={(e) => updateSetting('system', 'language', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zona Horaria
          </label>
          <select
            value={settings.system.timezone}
            onChange={(e) => updateSetting('system', 'timezone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Europe/Madrid">Madrid (UTC+1)</option>
            <option value="America/New_York">New York (UTC-5)</option>
            <option value="America/Los_Angeles">Los Angeles (UTC-8)</option>
            <option value="Asia/Tokyo">Tokyo (UTC+9)</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Respaldo Automático</h4>
            <p className="text-sm text-gray-500">Crear respaldos automáticos del sistema</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.system.autoBackup}
              onChange={(e) => updateSetting('system', 'autoBackup', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex space-x-4">
          <button className="btn-secondary flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Exportar Configuración
          </button>
          <button className="btn-secondary flex items-center">
            <Upload className="w-4 h-4 mr-2" />
            Importar Configuración
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tema
        </label>
        <div className="grid grid-cols-3 gap-4">
          {['light', 'dark', 'auto'].map((theme) => (
            <button
              key={theme}
              onClick={() => updateSetting('appearance', 'theme', theme)}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                settings.appearance.theme === theme
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-8 h-8 mx-auto mb-2 rounded ${
                theme === 'light' ? 'bg-white border border-gray-300' :
                theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-white to-gray-800'
              }`}></div>
              <span className="text-sm font-medium capitalize">{theme === 'auto' ? 'Automático' : theme === 'light' ? 'Claro' : 'Oscuro'}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {Object.entries({
          sidebarCollapsed: 'Sidebar Contraído',
          compactMode: 'Modo Compacto',
          animations: 'Animaciones'
        }).map(([key, label]) => (
          <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <h4 className="text-sm font-medium text-gray-900">{label}</h4>
              <p className="text-sm text-gray-500">Personalizar la apariencia de {label.toLowerCase()}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.appearance[key]}
                onChange={(e) => updateSetting('appearance', key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'security':
        return renderSecuritySettings();
      case 'system':
        return renderSystemSettings();
      case 'appearance':
        return renderAppearanceSettings();
      default:
        return <div>Sección en desarrollo...</div>;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
        <p className="text-gray-600 mt-1">Gestiona las preferencias y configuración del sistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="card-content p-2">
              <nav className="space-y-3">
                {settingsSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-start px-6 py-5 text-left text-sm font-medium transition-all duration-200 rounded-xl mx-1 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-md'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:shadow-sm'
                      }`}
                    >
                      <Icon className="w-6 h-6 mr-5 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-base">{section.title}</div>
                        <div className="text-sm text-gray-500 mt-2 leading-relaxed">{section.description}</div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-xl font-semibold text-gray-900">
                {settingsSections.find(s => s.id === activeSection)?.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {settingsSections.find(s => s.id === activeSection)?.description}
              </p>
            </div>
            <div className="card-content">
              {renderContent()}
              
              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
                <button className="btn-secondary flex items-center">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restablecer
                </button>
                <button className="btn-primary flex items-center">
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}