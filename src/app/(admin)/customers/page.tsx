'use client';

import { Search, Plus, Edit, Trash } from 'lucide-react';
import React from 'react';

export default function ClientsPage() {
  const clients = [
    {
      name: 'Yasir Nawaz',
      since: '10/01/2023',
      phone: '555-123-4567',
      email: 'yasir.n@example.com',
      address: '123 Lahore, Pakistan',
      outstanding: 45.99,
    },
    {
      name: 'Hasan Ali',
      since: '12/01/2023',
      phone: '555-987-6543',
      email: 'hassan.a@example.com',
      address: '456 Lahore, Pakistan',
      outstanding: 0,
    },
    {
      name: 'Waseem Kamal',
      since: '15/01/2023',
      phone: '555-456-7890',
      email: 'waseem.k@example.com',
      address: '789 Lahore, Pakistan',
      outstanding: 123.5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Customers</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg transition">
          <Plus size={18} />
          <span>New Customer</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name, phone, or email..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
        <table className="min-w-full text-base">
          <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Since</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Outstanding (PKR)</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{client.name}</td>
                <td className="px-4 py-3">{client.since}</td>
                <td className="px-4 py-3">{client.phone}</td>
                <td className="px-4 py-3">{client.email}</td>
                <td className="px-4 py-3">{client.address}</td>
                <td className="px-4 py-3 font-medium">
                  {client.outstanding === 0 ? (
                    <span className="text-green-600">Paid</span>
                  ) : (
                    <span className="text-orange-500">PKR {client.outstanding.toFixed(2)}</span>
                  )}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800" title="Edit"><Edit size={16} /></button>
                  <button className="text-red-500 hover:text-red-700" title="Delete"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
