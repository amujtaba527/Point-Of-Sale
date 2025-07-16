'use client';

import { Search, Plus, Edit, Trash } from 'lucide-react';
import React from 'react';

export default function VendorsPage() {
  const vendors = [
    {
      name: 'Premium Coffee Supplies',
      since: '01/01/2023',
      contact: 'contact@premiumcoffee.com',
      phone: '555-222-3333',
      address: '101 Lahore, Pakistan',
      outstanding: 0,
    },
    {
      name: 'Dairy Direct',
      since: '02/01/2023',
      contact: 'support@dairydirect.com',
      phone: '555-111-4444',
      address: '202 Lahore, Pakistan',
      outstanding: 100.0,
    },
    {
      name: 'Bakery Essentials',
      since: '03/01/2023',
      contact: 'orders@bakeryessentials.com',
      phone: '555-333-5555',
      address: '303 Lahore, Pakistan',
      outstanding: 150.0,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Vendors</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg transition">
          <Plus size={18} />
          <span>New Vendor</span>
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
              <th className="px-4 py-3 text-left">Vendor</th>
              <th className="px-4 py-3 text-left">Contact</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vendors.map((vendor, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{vendor.name}</td>
                <td className="px-4 py-3">{vendor.contact}</td>
                <td className="px-4 py-3">{vendor.phone}</td>
                <td className="px-4 py-3">{vendor.address}</td>
                
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800" title="Edit Vendor">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700" title="Delete Vendor">
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
