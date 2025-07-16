import { Plus, Search } from 'lucide-react';
import React from 'react';

const products = [
  {
    name: 'Coffee Beans (1kg)',
    category: 'Beverages',
    stock: 25,
    costPrice: 1500,
    sellingPrice: 2499,
  },
  {
    name: 'Milk (1L)',
    category: 'Dairy',
    stock: 40,
    costPrice: 120,
    sellingPrice: 180,
  },
  {
    name: 'Croissant',
    category: 'Bakery',
    stock: 60,
    costPrice: 80,
    sellingPrice: 120,
  },
  {
    name: 'Espresso Machine',
    category: 'Equipment',
    stock: 5,
    costPrice: 85000,
    sellingPrice: 110000,
  },
  {
    name: 'Chocolate Syrup',
    category: 'Condiments',
    stock: 12,
    costPrice: 450,
    sellingPrice: 700,
  },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Products</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg transition">
          <Plus size={16} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
        <table className="min-w-full text-base">
          <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Cost Price (PKR)</th>
              <th className="px-4 py-3 text-left">Selling Price (PKR)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{product.name}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3 font-semibold">PKR {product.costPrice.toLocaleString()}</td>
                <td className="px-4 py-3 font-semibold">PKR {product.sellingPrice.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;