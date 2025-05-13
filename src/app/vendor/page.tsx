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
      address: '101 Brew St, Beanville',
      outstanding: 0,
    },
    {
      name: 'Dairy Direct',
      since: '02/01/2023',
      contact: 'support@dairydirect.com',
      phone: '555-111-4444',
      address: '202 Moo Ln, Milkcity',
      outstanding: 100.0,
    },
    {
      name: 'Bakery Essentials',
      since: '03/01/2023',
      contact: 'orders@bakeryessentials.com',
      phone: '555-333-5555',
      address: '303 Dough Ave, Bakeville',
      outstanding: 150.0,
    },
  ];

  return (
    <div className="p-6 text-black">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Vendors</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          <Plus size={16} />
          <span>Add Vendor</span>
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
          <option>All Vendors</option>
        </select>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-md bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">Vendor</th>
              <th className="px-4 py-3 text-left">Contact</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Outstanding</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vendors.map((vendor, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{vendor.name}</div>
                  <div className="text-sm text-gray-500">Since {vendor.since}</div>
                </td>
                <td className="px-4 py-3">
                  <div>{vendor.phone}</div>
                  <div className="text-sm text-gray-500">{vendor.contact}</div>
                </td>
                <td className="px-4 py-3">{vendor.address}</td>
                <td className="px-4 py-3 font-medium">
                  {vendor.outstanding === 0 ? (
                    <span className="text-green-600">Paid</span>
                  ) : (
                    <span className="text-orange-500">${vendor.outstanding.toFixed(2)}</span>
                  )}
                </td>
                <td className="px-4 py-3 flex space-x-2">
                  <button className="text-gray-600 hover:text-blue-600" title="Edit Vendor">
                    <Edit size={16} />
                  </button>
                  <button className="text-gray-600 hover:text-red-600" title="Delete Vendor">
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
