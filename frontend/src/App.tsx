import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './stores/authStore';

// Placeholder pages
const Placeholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-64">
    <p className="text-gray-400 text-lg">{name} — Coming Soon</p>
  </div>
);

// Redirects authenticated users away from public routes like /login
const PublicRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout title="Dashboard"><Dashboard /></MainLayout>} />
          <Route path="/inbox" element={<MainLayout title="Inbox"><Placeholder name="Inbox" /></MainLayout>} />
          <Route path="/conversations" element={<MainLayout title="Conversations"><Placeholder name="Conversations" /></MainLayout>} />
          <Route path="/customers" element={<MainLayout title="Customers"><Placeholder name="Customers" /></MainLayout>} />
          <Route path="/tickets" element={<MainLayout title="Tickets"><Placeholder name="Tickets" /></MainLayout>} />
          <Route path="/agents" element={<MainLayout title="AI Agents"><Placeholder name="AI Agents" /></MainLayout>} />
          <Route path="/voice" element={<MainLayout title="Voice AI"><Placeholder name="Voice AI" /></MainLayout>} />
          <Route path="/workflows" element={<MainLayout title="Workflows"><Placeholder name="Workflows" /></MainLayout>} />
          <Route path="/knowledge" element={<MainLayout title="Knowledge Base"><Placeholder name="Knowledge Base" /></MainLayout>} />
          <Route path="/integrations" element={<MainLayout title="Integrations"><Placeholder name="Integrations" /></MainLayout>} />
          <Route path="/analytics" element={<MainLayout title="Analytics"><Placeholder name="Analytics" /></MainLayout>} />
          <Route path="/settings" element={<MainLayout title="Settings"><Placeholder name="Settings" /></MainLayout>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
