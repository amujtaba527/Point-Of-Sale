import { Settings, User, Lock, Bell, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight mb-8">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
          <div className="flex items-center mb-6">
            <Settings className="text-blue-500 mr-3" size={24} />
            <h2 className="text-xl font-bold text-gray-800">System Settings</h2>
          </div>
          <p className="text-gray-600 mb-6">Configure general system preferences and application behavior.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow transition">Configure</button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
          <div className="flex items-center mb-6">
            <User className="text-green-500 mr-3" size={24} />
            <h2 className="text-xl font-bold text-gray-800">User Management</h2>
          </div>
          <p className="text-gray-600 mb-6">Manage user accounts, roles and permissions.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow transition">Manage Users</button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
          <div className="flex items-center mb-6">
            <Lock className="text-purple-500 mr-3" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Security</h2>
          </div>
          <p className="text-gray-600 mb-6">Configure security settings and access controls.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow transition">Security Settings</button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
          <div className="flex items-center mb-6">
            <Bell className="text-yellow-500 mr-3" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
          </div>
          <p className="text-gray-600 mb-6">Manage notification preferences and alerts.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow transition">Notification Settings</button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
          <div className="flex items-center mb-6">
            <CreditCard className="text-pink-500 mr-3" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Billing</h2>
          </div>
          <p className="text-gray-600 mb-6">View and manage billing information and payment methods.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow transition">Billing Settings</button>
        </div>
      </div>
    </div>
  );
}