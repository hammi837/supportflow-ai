import {
  MessageSquare,
  Ticket,
  Users,
  Bot,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const stats = [
  {
    label: 'Open Tickets',
    value: '24',
    change: '+3 today',
    changeType: 'negative',
    icon: Ticket,
    color: 'bg-red-50 text-red-600',
  },
  {
    label: 'Active Conversations',
    value: '12',
    change: '+5 today',
    changeType: 'positive',
    icon: MessageSquare,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Total Customers',
    value: '1,482',
    change: '+18 this week',
    changeType: 'positive',
    icon: Users,
    color: 'bg-green-50 text-green-600',
  },
  {
    label: 'AI Resolutions',
    value: '87%',
    change: '+2% vs last week',
    changeType: 'positive',
    icon: Bot,
    color: 'bg-purple-50 text-purple-600',
  },
];

const recentTickets = [
  { id: '#1042', customer: 'Sarah Johnson', issue: 'Payment failed on checkout', status: 'open', time: '5m ago' },
  { id: '#1041', customer: 'James Liu', issue: 'Cannot reset my password', status: 'resolved', time: '12m ago' },
  { id: '#1040', customer: 'Maria Garcia', issue: 'Order not delivered after 7 days', status: 'open', time: '34m ago' },
  { id: '#1039', customer: 'Tom Brown', issue: 'Wrong item shipped in order #5521', status: 'pending', time: '1h ago' },
  { id: '#1038', customer: 'Emily Chen', issue: 'Refund not credited to account', status: 'resolved', time: '2h ago' },
];

const statusConfig: Record<string, { label: string; class: string }> = {
  open: { label: 'Open', class: 'bg-red-100 text-red-700' },
  resolved: { label: 'Resolved', class: 'bg-green-100 text-green-700' },
  pending: { label: 'Pending', class: 'bg-yellow-100 text-yellow-700' },
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map(({ label, value, change, changeType, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4 shadow-sm">
            <div className={`p-3 rounded-lg ${color}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold text-gray-800 mt-0.5">{value}</p>
              <p className={`text-xs mt-1 font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-500'}`}>
                <TrendingUp size={12} className="inline mr-1" />
                {change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Tickets + Quick Stats Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Recent Tickets Table */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Recent Tickets</h2>
            <button className="text-sm text-blue-600 hover:underline">View all</button>
          </div>
          <div className="divide-y divide-gray-50">
            {recentTickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold mt-0.5">
                    {ticket.customer.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{ticket.customer}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{ticket.issue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusConfig[ticket.status].class}`}>
                    {statusConfig[ticket.status].label}
                  </span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{ticket.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Summary Panel */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-5">
          <h2 className="font-semibold text-gray-800">Today's Summary</h2>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-50 rounded-lg"><CheckCircle size={18} className="text-green-600" /></div>
            <div>
              <p className="text-sm font-medium text-gray-700">Resolved</p>
              <p className="text-xl font-bold text-gray-800">38</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-yellow-50 rounded-lg"><Clock size={18} className="text-yellow-600" /></div>
            <div>
              <p className="text-sm font-medium text-gray-700">Avg Response Time</p>
              <p className="text-xl font-bold text-gray-800">2m 14s</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-50 rounded-lg"><AlertCircle size={18} className="text-red-600" /></div>
            <div>
              <p className="text-sm font-medium text-gray-700">Escalated to Human</p>
              <p className="text-xl font-bold text-gray-800">5</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-50 rounded-lg"><Bot size={18} className="text-purple-600" /></div>
            <div>
              <p className="text-sm font-medium text-gray-700">AI Handled</p>
              <p className="text-xl font-bold text-gray-800">33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
