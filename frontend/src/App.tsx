import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';

// Placeholder pages
const Placeholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-64">
    <p className="text-gray-400 text-lg">{name} — Coming Soon</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
