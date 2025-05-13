"use client";

import { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  ShoppingBag, 
  Users, 
  Truck, 
  BellRing,
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

interface LowStockItem {
  id: string;
  name: string;
  image: string;
  currentStock: number;
  threshold: number;
  price: number;
}

// Sample data
const sampleSales: SaleRecord[] = [
  { id: '#4', date: 'May 9, 2023, 09:20 PM', client: 'Emma Davis', paymentType: 'CREDIT', amount: 24.99 },
  { id: '#3', date: 'May 9, 2023, 02:45 PM', client: 'Walk-in Customer', paymentType: 'CASH', amount: 19.97 },
  { id: '#2', date: 'May 8, 2023, 07:30 PM', client: 'Sarah Johnson', paymentType: 'CREDIT', amount: 33.92 },
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
    <div className="p-4 md:p-6 w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">Last updated: {currentDate}</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <OverviewCard 
          title="Total Sales" 
          value="$136.85" 
          change={12.5} 
          icon={<ShoppingCart className="text-blue-500" />} 
        />
        <OverviewCard 
          title="Total Purchases" 
          value="$302.90" 
          change={5.2} 
          icon={<ShoppingBag className="text-blue-500" />} 
        />
        <OverviewCard 
          title="Credit Due from Clients" 
          value="$169.49" 
          change={-2.1} 
          icon={<Users className="text-blue-500" />} 
        />
        <OverviewCard 
          title="Amount Owed to Vendors" 
          value="$528.25" 
          change={-8.3} 
          icon={<Truck className="text-blue-500" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Sales */}
          <div className="bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold p-4 border-b">Recent Sales</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleSales.map((sale) => (
                    <tr key={sale.id}>
                      <td className="px-4 py-3 text-sm text-gray-500">{sale.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{sale.date}</td>
                      <td className="px-4 py-3 text-sm font-medium">{sale.client}</td>
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
                      <td className="px-4 py-3 text-sm font-medium text-right">${sale.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Purchases */}
          <div className="bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold p-4 border-b">Recent Purchases</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {samplePurchases.map((purchase) => (
                    <tr key={purchase.id}>
                      <td className="px-4 py-3 text-sm text-gray-500">{purchase.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{purchase.date}</td>
                      <td className="px-4 py-3 text-sm font-medium">{purchase.vendor}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                          purchase.paymentType === 'CASH' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {purchase.paymentType === 'CASH' ? (
                            <DollarSign className="mr-1 h-3 w-3" />
                          ) : (
                            <CreditCard className="mr-1 h-3 w-3" />
                          )}
                          {purchase.paymentType}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-right">${purchase.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
    <div className="bg-white p-4 rounded-lg shadow relative overflow-hidden">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="rounded-full bg-blue-50 p-2">
          {icon}
        </div>
      </div>
      <div className={`text-xs ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
        {isPositiveChange ? '+' : ''}{change}% from last month
      </div>
    </div>
  );
}