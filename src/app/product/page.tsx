import React from 'react';

const Product = () => {
  return (
    <div className="flex justify-center items-center text-black">
      
      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="bg-white rounded-lg shadow p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Stock</th>
                <th className="text-left p-2">Cost Price</th>
                <th className="text-left p-2">Selling Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Coffee Beans (1kg)</td>
                <td className="p-2">Beverages</td>
                <td className="p-2">25</td>
                <td className="p-2">$15.00</td>
                <td className="p-2">$24.99</td>
              </tr>
              {/* Add more products as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;