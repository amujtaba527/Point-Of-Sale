import { BarChart, LineChart } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-md border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Sales Overview</h2>
            <LineChart className="text-blue-500" />
          </div>
          <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Sales chart will be displayed here</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-md border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Top Products</h2>
            <BarChart className="text-green-500" />
          </div>
          <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Product performance chart will be displayed here</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-md border border-gray-300">
        <h2 className="text-lg font-semibold mb-4">Detailed Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50">
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