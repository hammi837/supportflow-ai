import { Bell, Search, LogOut } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 left-64 right-0 z-10">
      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar & Logout */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4 ml-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold text-white cursor-pointer" title={user?.full_name}>
            {user?.full_name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors" title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
