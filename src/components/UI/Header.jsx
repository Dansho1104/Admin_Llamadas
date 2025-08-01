import React from 'react';
import { Search, User, Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar llamadas, agentes, métricas..."
                className="block w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* AI Status */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
            <Activity className="w-4 h-4 text-green-600 ai-pulse" />
            <span className="text-sm font-medium text-green-700">IA Operativa</span>
          </div>



          {/* User menu */}
          <div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900">Admin Usuario</p>
              <p className="text-xs text-gray-500">Administrador del Sistema</p>
            </div>
            <div>
              <User className="w-5 h-5 text-primary-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}