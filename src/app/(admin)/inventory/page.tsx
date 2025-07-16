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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Inventory</h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg transition">
          <Plus size={18} />
          <span>Add Item</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search inventory..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4">
        <table className="min-w-full text-base">
          <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">SKU</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Price (PKR)</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{item.name}</td>
                <td className="px-4 py-3">{item.sku}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td className="px-4 py-3 font-semibold">PKR {item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    item.status === 'In Stock'
                      ? 'bg-green-100 text-green-700'
                      : item.status === 'Low Stock'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}