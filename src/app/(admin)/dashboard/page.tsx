"use client";

import { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  ShoppingBag, 
  Users, 
  CreditCard,
  DollarSign
} from 'lucide-react';

// Type definitions
interface SaleRecord {
  id: string;
  date: string;
  client: string;
  paymentType: 'CASH' | 'CREDIT';
  amount: number;
}

interface OverviewCardProps {
  title: string;
  value: number | string;
  change: number;
  icon: React.ReactNode;
}

interface PurchaseRecord {
  id: string;
  date: string;
  vendor: string;
  paymentType: 'CASH' | 'CREDIT';
  amount: number;
}

// Sample data
const sampleSales: SaleRecord[] = [
  { id: '#4', date: 'May 9, 2023, 09:20 PM', client: 'Yasir Nawaz', paymentType: 'CREDIT', amount: 24.99 },
  { id: '#3', date: 'May 9, 2023, 02:45 PM', client: 'Walk-in Customer', paymentType: 'CASH', amount: 19.97 },
  { id: '#2', date: 'May 8, 2023, 07:30 PM', client: 'Hasan Ali', paymentType: 'CREDIT', amount: 33.92 },
  { id: '#1', date: 'May 8, 2023, 04:15 PM', client: 'Walk-in Customer', paymentType: 'CASH', amount: 57.97 },
];

const samplePurchases: PurchaseRecord[] = [
  { id: '#4', date: 'May 7, 2023, 08:45 PM', vendor: 'Premium Coffee Supplies', paymentType: 'CASH', amount: 45.00 },
  { id: '#3', date: 'May 5, 2023, 04:15 PM', vendor: 'Dairy Direct', paymentType: 'CREDIT', amount: 14.40 },
  { id: '#2', date: 'May 3, 2023, 02:30 PM', vendor: 'Bakery Essentials', paymentType: 'CREDIT', amount: 51.00 },
  { id: '#1', date: 'May 1, 2023, 03:00 PM', vendor: 'Premium Coffee Supplies', paymentType: 'CASH', amount: 192.50 },
];

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight mb-2 md:mb-0">Dashboard</h1>
        <p className="text-sm text-gray-500">Last updated: {currentDate}</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <OverviewCard 
          title="Total Sales" 
          value="PKR 136.85" 
          change={12.5} 
          icon={<ShoppingCart className="text-white" />} 
        />
        <OverviewCard 
          title="Total Purchases" 
          value="PKR 302.90" 
          change={5.2} 
          icon={<ShoppingBag className="text-white" />} 
        />
        <OverviewCard 
          title="Credit Due from Clients" 
          value="PKR 169.49" 
          change={-2.1} 
          icon={<Users className="text-white" />} 
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Sales */}
        <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Sales</h2>
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-full text-sm">
              <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sampleSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-indigo-50 transition-all">
                    <td className="px-4 py-3 text-gray-500">{sale.id}</td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{sale.date}</td>
                    <td className="px-4 py-3 font-medium text-gray-700">{sale.client}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                        sale.paymentType === 'CASH' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {sale.paymentType === 'CASH' ? (
                          <DollarSign className="mr-1 h-3 w-3" />
                        ) : (
                          <CreditCard className="mr-1 h-3 w-3" />
                        )}
                        {sale.paymentType}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-right text-indigo-600">PKR {sale.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Recent Purchases */}
        <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Purchases</h2>
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-full text-sm">
              <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider">Vendor</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {samplePurchases.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-indigo-50 transition-all">
                    <td className="px-4 py-3 text-gray-500">{purchase.id}</td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{purchase.date}</td>
                    <td className="px-4 py-3 font-medium text-gray-700">{purchase.vendor}</td>
                    
                    <td className="px-4 py-3 font-semibold text-right text-indigo-600">PKR {purchase.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Card Component
function OverviewCard({ title, value, change, icon }: OverviewCardProps) {
  const isPositiveChange = change >= 0;
  return (
    <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl p-6 flex flex-col gap-2">
      <div className="flex justify-between items-center mb-1">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-1">{title}</p>
          <p className="text-3xl font-extrabold text-gray-800">{value}</p>
        </div>
        <div className="rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 p-3 shadow">
          {icon}
        </div>
      </div>
      <div className={`text-xs font-medium ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>{isPositiveChange ? '+' : ''}{change}% from last month</div>
    </div>
  );
}