'use client';

import { Search, Plus, FileText } from 'lucide-react';
import React from 'react';

export default function PurchasesPage() {
  const purchases = [
    {
      id: 4,
      date: 'May 7, 2023, 08:45 PM',
      vendor: 'Premium Coffee Supplies',
      items: 1,
      payment: 'CASH',
      total: 45.0,
    },
    {
      id: 3,
      date: 'May 5, 2023, 04:15 PM',
      vendor: 'Dairy Direct',
      items: 1,
      payment: 'CREDIT',
      total: 14.4,
    },
    {
      id: 2,
      date: 'May 3, 2023, 02:30 PM',
      vendor: 'Bakery Essentials',
      items: 2,
      payment: 'CREDIT',
      total: 51.0,
    },
    {
      id: 1,
      date: 'May 1, 2023, 03:00 PM',
      vendor: 'Premium Coffee Supplies',
      items: 2,
      payment: 'CASH',
      total: 192.5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Purchases</h1>
        <button
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg transition"
        >
          <Plus size={18} />
          <span>New Purchase</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by purchase ID or vendor..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
        </div>
        <div className="flex gap-3">
          <select className="border border-gray-200 rounded-xl px-4 py-3 text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option>All Purchases</option>
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
              <th className="px-4 py-3 text-left">Purchase ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Vendor</th>
              <th className="px-4 py-3 text-left">Total (PKR)</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {purchases.map((purchase) => (
              <tr key={purchase.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">#{purchase.id}</td>
                <td className="px-4 py-3">{purchase.date}</td>
                <td className="px-4 py-3">{purchase.vendor}</td>
                <td className="px-4 py-3 font-semibold">PKR {purchase.total.toFixed(2)}</td>
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
