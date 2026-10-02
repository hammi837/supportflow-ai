import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import api from '../services/api';
import type { User } from '../types';

export default function ProtectedRoute() {
  const { isAuthenticated, setUser, logout, token } = useAuthStore();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsVerifying(false);
        return;
      }
      
      try {
        const response = await api.get<User>('/auth/me');
        setUser(response.data);
      } catch (error) {
        logout();
      } finally {
        setIsVerifying(false);
      }
    };

    verifyToken();
  }, [token, setUser, logout]);

  if (isVerifying) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
