import { Plus, Search } from 'lucide-react';

export default function InventoryPage() {
  const inventory = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      sku: 'WEB-001',
      category: 'Electronics',
      stock: 42,
      price: 59.99,
      status: 'In Stock'
    },
    {
      id: 2,
      name: 'Bluetooth Speaker',
      sku: 'BTS-002',
      category: 'Electronics',
      stock: 15,
      price: 89.99,
      status: 'Low Stock'
    },
    {
      id: 3,
      name: 'Smart Watch',
      sku: 'SW-003',
      category: 'Electronics',
      stock: 0,
      price: 199.99,
      status: 'Out of Stock'
    },
    {
      id: 4,
      name: 'Phone Case',
      sku: 'PC-004',
      category: 'Accessories',
      stock: 87,
      price: 19.99,
      status: 'In Stock'
    },
  ];

  return (
    <div className="p-6 text-black">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Inventory</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          <Plus size={16} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by product name or SKU..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Clothing</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-md bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">SKU</th>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{item.sku}</td>
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td className="px-4 py-3">${item.price.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      item.status === 'In Stock'
                        ? 'bg-green-100 text-green-600'
                        : item.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700" title="Edit">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700" title="Delete">
                    Delete
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