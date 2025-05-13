'use client';

import { Search, Plus, FileText, ChevronDown } from 'lucide-react';
import React from 'react';

export default function SalesPage() {
  const sales = [
    {
      id: 4,
      date: 'May 9, 2023, 09:20 PM',
      client: 'Emma Davis',
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
      client: 'Sarah Johnson',
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
    <div className="p-6 text-black">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Sales</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          <Plus size={16} />
          <span>New Sale</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by sale ID or client..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Sales</option>
            <option>Credit</option>
            <option>Cash</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Time</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-md bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">Sale ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Items</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">#{sale.id}</td>
                <td className="px-4 py-3">{sale.date}</td>
                <td className="px-4 py-3">{sale.client}</td>
                <td className="px-4 py-3 flex items-center space-x-1">
                  <span>{sale.items} items</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </td>
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
                <td className="px-4 py-3 font-semibold">${sale.total.toFixed(2)}</td>
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
