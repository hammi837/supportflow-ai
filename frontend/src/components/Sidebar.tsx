import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  MessageSquare,
  Users,
  Ticket,
  Bot,
  Mic,
  Workflow,
  BookOpen,
  Plug,
  BarChart2,
  Settings,
  Zap,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { label: 'Inbox', icon: Inbox, to: '/inbox' },
  { label: 'Conversations', icon: MessageSquare, to: '/conversations' },
  { label: 'Customers', icon: Users, to: '/customers' },
  { label: 'Tickets', icon: Ticket, to: '/tickets' },
  { label: 'AI Agents', icon: Bot, to: '/agents' },
  { label: 'Voice AI', icon: Mic, to: '/voice' },
  { label: 'Workflows', icon: Workflow, to: '/workflows' },
  { label: 'Knowledge', icon: BookOpen, to: '/knowledge' },
  { label: 'Integrations', icon: Plug, to: '/integrations' },
  { label: 'Analytics', icon: BarChart2, to: '/analytics' },
  { label: 'Settings', icon: Settings, to: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-screen fixed top-0 left-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-700">
        <div className="bg-blue-600 rounded-lg p-1.5">
          <Zap size={20} className="text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight">SupportFlow AI</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
            H
          </div>
          <div>
            <p className="text-sm font-medium text-white">Hammad</p>
            <p className="text-xs text-gray-400">Owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
