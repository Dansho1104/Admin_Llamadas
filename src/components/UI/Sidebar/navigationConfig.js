import {
  LayoutDashboard,
  PhoneCall,
  TrendingUp,
  Workflow,
  GraduationCap,
  Settings,
  Activity,
  Puzzle,
  Plus
} from 'lucide-react';

export const navigation = [
  { name: 'Nueva conversación', href: '/new-chat', icon: Plus, isSpecial: true },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Gestión de Llamadas', href: '/calls', icon: PhoneCall },
  { name: 'Analíticas', href: '/analytics', icon: TrendingUp },
  { name: 'Entrenamiento', href: '/training', icon: GraduationCap },
  { name: 'Rendimiento', href: '/performance', icon: Activity },
  { name: 'Integraciones', href: '/integrations', icon: Puzzle },
  { name: 'Configuración', href: '/settings', icon: Settings }
];

export const recentItems = [
  'Barra Deslizante Con Estilos',
  'Imagen para Sistema Antici...',
  'Sistema Anticipa Disputas P...'
];