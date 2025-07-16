"use client";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type Product = {
  id: string;
  name: string;
  code: string;
  price: number;
  quantity: number;
  discount: number; // per item discount
};

const NewSale: React.FC = () => {
  const [saleType, setSaleType] = useState<"Cash" | "Credit">("Cash");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  useEffect(() => {
    setInvoiceNumber(`INV-${uuidv4().slice(0, 8)}`);
  }, []);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [customer, setCustomer] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [orderDiscount, setOrderDiscount] = useState<number>(0);
  const [orderDiscountType, setOrderDiscountType] = useState<"%" | "PKR">("PKR");
  // const [paymentMethod, setPaymentMethod] = useState<string>("Cash");
  // const [amountTendered, setAmountTendered] = useState<number>(0);

  const handleAddProduct = (name: string, price: number) => {
    const newProduct: Product = {
      id: uuidv4(),
      name,
      code: uuidv4().slice(0, 5),
      price,
      quantity: 1,
      discount: 0,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, field: keyof Product, value: number) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const subtotal = products.reduce((acc, p) =>
    acc + (p.price * p.quantity - p.discount), 0);

  const calcOrderDiscount = () => {
    return orderDiscountType === "%"
      ? subtotal * (orderDiscount / 100)
      : orderDiscount;
  };

  const tax = 0; // no tax for now
  const grandTotal = subtotal - calcOrderDiscount() + tax;
  const changeDue = 0 - grandTotal;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-4 md:p-8 w-full max-w-screen-2xl mx-auto text-black">
      {/* Header Card */}
      <div className="bg-white/90 border border-gray-200 rounded-2xl mb-6 shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight text-indigo-700">New Sale</h1>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Invoice: <span className="font-semibold text-gray-700">#{invoiceNumber}</span></span>
            <span>Date: <span className="font-semibold text-gray-700">{date}</span></span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-gray-600">Sale Type</label>
          <select
            value={saleType}
            onChange={(e) => setSaleType(e.target.value as "Cash" | "Credit")}
            className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Customer & Product Entry */}
        <div className="space-y-6 md:col-span-2">
          {/* Customer Card */}
          <div className="bg-white border border-gray-200 rounded-xl shadow p-5 space-y-3">
            <label className="block font-semibold text-gray-700 mb-1">Customer</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Select or search customer..."
                value={customer ?? ""}
                onChange={(e) => setCustomer(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => alert("Add new customer modal")}
                className="text-sm px-3 py-2 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
              >
                + Add
              </button>
            </div>
          </div>

          {/* Product Entry Card */}
          <div className="bg-white border border-gray-200 rounded-xl shadow p-5 space-y-3">
            <label className="block font-semibold text-gray-700 mb-1">Add Product</label>
            <input
              type="text"
              placeholder="Scan barcode or enter product name..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value) {
                  handleAddProduct(e.currentTarget.value, 100); // default price for demo
                  e.currentTarget.value = "";
                }
              }}
            />

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-2 border rounded-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-gray-500">Product</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-500">Code</th>
                    <th className="px-3 py-2 text-right font-semibold text-gray-500">Qty</th>
                    <th className="px-3 py-2 text-right font-semibold text-gray-500">Price</th>
                    <th className="px-3 py-2 text-right font-semibold text-gray-500">Discount</th>
                    <th className="px-3 py-2 text-right font-semibold text-gray-500">Total</th>
                    <th className="px-3 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 && (
                    <tr>
                      <td colSpan={7} className="text-center text-gray-400 py-4">No products added.</td>
                    </tr>
                  )}
                  {products.map((p) => (
                    <tr key={p.id} className="border-b last:border-b-0">
                      <td className="px-3 py-2">{p.name}</td>
                      <td className="px-3 py-2">{p.code}</td>
                      <td className="px-3 py-2 text-right">
                        <input
                          type="number"
                          value={p.quantity}
                          onChange={(e) => updateProduct(p.id, "quantity", parseInt(e.target.value))}
                          className="w-16 rounded-2xl border border-gray-200 bg-white px-3 py-3 text-base text-right focus:outline-none focus:ring-2 focus:ring-indigo-200"
                          min={1}
                        />
                      </td>
                      <td className="px-3 py-2 text-right">
                        <input
                          type="number"
                          value={p.price}
                          onChange={(e) => updateProduct(p.id, "price", parseFloat(e.target.value))}
                          className="w-20 rounded-2xl border border-gray-200 bg-white px-3 py-3 text-base text-right focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                      </td>
                      <td className="px-3 py-2 text-right">
                        <input
                          type="number"
                          value={p.discount}
                          onChange={(e) => updateProduct(p.id, "discount", parseFloat(e.target.value))}
                          className="w-20 rounded-2xl border border-gray-200 bg-white px-3 py-3 text-base text-right focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                      </td>
                      <td className="px-3 py-2 text-right font-semibold">
                        {(p.price * p.quantity - p.discount).toFixed(2)}
                      </td>
                      <td className="px-3 py-2 text-right">
                        <button
                          type="button"
                          onClick={() => removeProduct(p.id)}
                          className="flex items-center gap-1 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 rounded-2xl font-semibold shadow transition"
                          title="Remove"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Right: Summary Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6 flex flex-col gap-4 h-fit">
        <label className="font-semibold text-gray-700">Order Discount</label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={orderDiscount}
                  onChange={(e) => setOrderDiscount(parseFloat(e.target.value))}
                  className="w-24 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="0.00"
                />
                <select
                  value={orderDiscountType}
                  onChange={(e) => setOrderDiscountType(e.target.value as "%" | "PKR")}
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  <option value="PKR">PKR</option>
                  <option value="%">%</option>
                </select>
              </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Summary</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span className="font-medium">PKR {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Order Discount:</span>
              <span className="font-medium text-red-500">- PKR {calcOrderDiscount().toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Grand Total:</span>
              <span className="text-indigo-700">PKR {grandTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Change Due:</span>
              <span className="font-medium {changeDue < 0 ? 'text-red-500' : 'text-green-600'}">PKR {changeDue < 0 ? 0 : changeDue.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all">
              Proceed & Print
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all">
              Proceed
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-2xl font-semibold shadow transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSale;
