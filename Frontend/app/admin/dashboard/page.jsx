"use client";

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/api';
import { 
  TrendingUp, 
  ShoppingBag, 
  Package, 
  Users,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    recentOrders: []
  });

  useEffect(() => {
    // In a real app, these would be separate API calls or a combined analytics endpoint
    const fetchData = async () => {
      try {
        const [productsRes, ordersRes, usersRes] = await Promise.all([
          fetch(`${API_URL}/api/products`),
          // These routes would be created next
          fetch(`${API_URL}/api/orders`).catch(() => ({ json: () => [] })),
          fetch(`${API_URL}/api/users`).catch(() => ({ json: () => [] }))
        ]);

        const productsData = await productsRes.json();
        const ordersData = await ordersRes.json();
        const usersData = await usersRes.json();

        const products = Array.isArray(productsData) ? productsData : [];
        const orders = Array.isArray(ordersData) ? ordersData : [];
        const users = Array.isArray(usersData) ? usersData : [];

        setStats({
          totalRevenue: orders.reduce((acc, order) => acc + (order.total || 0), 0),
          totalOrders: orders.length,
          totalProducts: products.length,
          totalUsers: users.length,
          recentOrders: orders.slice(0, 5)
        });
      } catch (error) {
        console.error('Failed to fetch dashboard stats', error);
      }
    };

    fetchData();
  }, []);

  const cards = [
    { name: 'Total Revenue', value: `₹${stats.totalRevenue}`, icon: TrendingUp, change: '+12.5%', isPositive: true },
    { name: 'Total Orders', value: stats.totalOrders, icon: ShoppingBag, change: '+8.2%', isPositive: true },
    { name: 'Total Products', value: stats.totalProducts, icon: Package, change: '0%', isPositive: true },
    { name: 'Total Users', value: stats.totalUsers, icon: Users, change: '+5.4%', isPositive: true },
  ];

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-secondary/10 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-secondary/10 p-2.5 text-secondary">
                <card.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${card.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                {card.change}
                {card.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-primary/50">{card.name}</p>
              <p className="mt-1 font-serif text-3xl text-primary">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl text-primary">Recent Orders</h2>
            <button className="text-xs font-semibold uppercase tracking-widest text-secondary hover:text-highlight transition-colors">
              View All
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-secondary/10 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-secondary/10 bg-secondary/5">
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Order ID</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Customer</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Status</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary/10">
                {stats.recentOrders.length > 0 ? (
                  stats.recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-secondary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-primary">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-primary/60">{order.user.name}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">₹{order.total}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center text-sm text-primary/40 italic">
                      No recent orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Selling Products (Placeholder) */}
        <div className="space-y-6">
          <h2 className="font-serif text-xl text-primary">Top Selling</h2>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-secondary/10 bg-white p-4 shadow-sm">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-secondary/5">
                  <img src="https://www.camliqa.com/wp-content/uploads/2018/06/SKU1_1-600x600.jpg" alt="" className="h-full w-full object-contain p-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-primary">Sunnipindi Soap</p>
                  <p className="text-xs text-primary/40">42 Sales</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-secondary">₹2,898</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
