'use client';

import { Search, Plus, FileText } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SalesPage() {
  const router = useRouter();
    const sales = [
    {
      id: 4,
      date: 'May 9, 2023, 09:20 PM',
      client: 'Yasir Nawaz',
      items: 1,
      payment: 'CREDIT',
      total: 24.99,
    },
    {
      id: 3,
      date: 'May 9, 2023, 02:45 PM',
      client: 'Walk-in Customer',
      items: 2,
      payment: 'CASH',
      total: 19.97,
    },
    {
      id: 2,
      date: 'May 8, 2023, 07:30 PM',
      client: 'Hasan Ali',
      items: 2,
      payment: 'CREDIT',
      total: 33.92,
    },
    {
      id: 1,
      date: 'May 8, 2023, 04:15 PM',
      client: 'Walk-in Customer',
      items: 2,
      payment: 'CASH',
      total: 57.97,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Sales</h1>
        <button
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg transition"
          onClick={() => router.push('/sale/newsale')}
        >
          <Plus size={18} />
          <span>New Sale</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by sale ID or client..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
        </div>
        <div className="flex gap-3">
          <select className="border border-gray-200 rounded-xl px-4 py-3 text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option>All Sales</option>
            <option>Credit</option>
            <option>Cash</option>
          </select>
          <select className="border border-gray-200 rounded-xl px-4 py-3 text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option>All Time</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
        <table className="min-w-full text-base">
          <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Sale ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Total (PKR)</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">#{sale.id}</td>
                <td className="px-4 py-3">{sale.date}</td>
                <td className="px-4 py-3">{sale.client}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      sale.payment === 'CASH'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {sale.payment}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold">PKR {sale.total.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <button className="text-gray-500 hover:text-gray-700" title="View Invoice">
                    <FileText size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
