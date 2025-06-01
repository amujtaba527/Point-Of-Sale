'use client';

import { Search, Plus, Edit, Trash } from 'lucide-react';
import React from 'react';

export default function ClientsPage() {
  const clients = [
    {
      name: 'Sarah Johnson',
      since: '10/01/2023',
      phone: '555-123-4567',
      email: 'sarah.j@example.com',
      address: '123 Main St, Anytown',
      outstanding: 45.99,
    },
    {
      name: 'Michael Chen',
      since: '12/01/2023',
      phone: '555-987-6543',
      email: 'mchen@example.com',
      address: '456 Oak Ave, Somewhere',
      outstanding: 0,
    },
    {
      name: 'Emma Davis',
      since: '15/01/2023',
      phone: '555-456-7890',
      email: 'emma.d@example.com',
      address: '789 Pine St, Elsewhere',
      outstanding: 123.5,
    },
  ];

  return (
    <div className="p-6 text-black">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          <Plus size={16} />
          <span>Add Client</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or phone..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto">
          <option>All Clients</option>
          <option>With Balance</option>
          <option>Paid</option>
        </select>
      </div>

      <div className=" overflow-x-auto border border-gray-300 rounded-md bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Contact</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Outstanding</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{client.name}</div>
                  <div className="text-sm text-gray-500">Since {client.since}</div>
                </td>
                <td className="px-4 py-3">
                  <div>{client.phone}</div>
                  <div className="text-sm text-gray-500">{client.email}</div>
                </td>
                <td className="px-4 py-3">{client.address}</td>
                <td className="px-4 py-3 font-medium">
                  {client.outstanding === 0 ? (
                    <span className="text-green-600">Paid</span>
                  ) : (
                    <span className="text-orange-500">${client.outstanding.toFixed(2)}</span>
                  )}
                </td>
                <td className="px-4 py-3 flex space-x-2">
                  <button className="text-gray-600 hover:text-blue-600" title="Edit Client">
                    <Edit size={16} />
                  </button>
                  <button className="text-gray-600 hover:text-red-600" title="Delete Client">
                    <Trash size={16} />
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
