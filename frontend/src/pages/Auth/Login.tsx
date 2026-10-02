import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Zap, AlertCircle, Loader2 } from 'lucide-react';
import api from '../../services/api';
import { useAuthStore } from '../../stores/authStore';
import type { User } from '../../types';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // 1. Get token
      const tokenRes = await api.post('/auth/login', { email, password });
      const token = tokenRes.data.access_token;
      
      // 2. Set token in localStorage immediately so the next call works (or rely on interceptor which reads from localstorage, so we must set it first or pass it)
      localStorage.setItem('token', token);
      
      // 3. Fetch user profile
      const userRes = await api.get<User>('/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // 4. Save to store
      login(token, userRes.data);
      
      // 5. Redirect
      navigate('/');
    } catch (err: any) {
      localStorage.removeItem('token');
      setError(err.response?.data?.detail || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-2/5 flex-col justify-between bg-gradient-to-br from-gray-900 to-blue-950 p-12 text-white">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-lg p-2 shadow-lg">
            <Zap size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">SupportFlow AI</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Automate customer support without losing the human touch.
          </h1>
          <p className="text-blue-200 text-lg">
            Join thousands of teams resolving tickets faster with AI-powered workflows.
          </p>
        </div>
        
        <div className="text-sm text-gray-400">
          © 2026 SupportFlow AI. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors sm:text-sm"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors sm:text-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all duration-200"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : 'Sign in'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
