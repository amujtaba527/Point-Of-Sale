import { BarChart, LineChart } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight mb-8">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Sales Overview</h2>
            <LineChart className="text-blue-500" />
          </div>
          <div className="h-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Sales chart will be displayed here</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Top Products</h2>
            <BarChart className="text-green-500" />
          </div>
          <div className="h-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Product performance chart will be displayed here</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Detailed Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <BarChart className="text-blue-500" size={20} />
            </div>
            <span className="font-medium">Sales Report</span>
          </button>
          
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50">
            <div className="bg-green-100 p-3 rounded-full mb-2">
              <BarChart className="text-green-500" size={20} />
            </div>
            <span className="font-medium">Inventory Report</span>
          </button>
          
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50">
            <div className="bg-purple-100 p-3 rounded-full mb-2">
              <BarChart className="text-purple-500" size={20} />
            </div>
            <span className="font-medium">Customer Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}