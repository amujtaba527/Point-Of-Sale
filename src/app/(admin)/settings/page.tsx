import { Settings, User, Lock, Bell, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-md border border-gray-300 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Settings className="text-blue-500 mr-3" size={20} />
            <h2 className="text-lg font-semibold">System Settings</h2>
          </div>
          <p className="text-gray-600 mb-4">Configure general system preferences and application behavior.</p>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            Configure
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-md border border-gray-300 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <User className="text-green-500 mr-3" size={20} />
            <h2 className="text-lg font-semibold">User Management</h2>
          </div>
          <p className="text-gray-600 mb-4">Manage user accounts, roles and permissions.</p>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            Manage Users
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-md border border-gray-300 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Lock className="text-purple-500 mr-3" size={20} />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          <p className="text-gray-600 mb-4">Configure security settings and access controls.</p>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            Security Settings
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-md border border-gray-300 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Bell className="text-yellow-500 mr-3" size={20} />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <p className="text-gray-600 mb-4">Set up email and system notifications.</p>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            Notification Settings
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-md border border-gray-300 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <CreditCard className="text-red-500 mr-3" size={20} />
            <h2 className="text-lg font-semibold">Payment Methods</h2>
          </div>
          <p className="text-gray-600 mb-4">Configure payment gateways and methods.</p>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            Payment Settings
          </button>
        </div>
      </div>
    </div>
  );
}