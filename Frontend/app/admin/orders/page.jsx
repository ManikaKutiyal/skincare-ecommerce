"use client";

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/api';
import { 
  ShoppingBag, 
  Search, 
  Eye, 
  Truck, 
  CheckCircle, 
  Clock,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/orders`);
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch orders', error);
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API_URL}/api/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchOrders();
      if (selectedOrder?.id === id) {
        setSelectedOrder({ ...selectedOrder, status });
      }
    } catch (error) {
      console.error('Failed to update order status', error);
    }
  };

  const filteredOrders = (orders || []).filter(o => 
    o?.id?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
    o?.user?.name?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-primary/30">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border border-secondary/10 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-secondary/10 bg-secondary/5">
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Order ID</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Customer</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Date</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Amount</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Status</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary/10">
            {isLoading ? (
              [1, 2, 3].map(i => (
                <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4"><div className="h-6 w-20 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-32 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-24 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-16 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-24 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-8 w-8 ml-auto bg-secondary/10 rounded-lg"></div></td>
                </tr>
              ))
            ) : filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-secondary/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">{order.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-primary">{order?.user?.name}</p>
                      <p className="text-xs text-primary/40">{order?.user?.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-primary/60">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-medium text-primary">₹{order.total}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="p-2 text-primary/40 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-2 text-primary/40">
                    <ShoppingBag size={48} strokeWidth={1} />
                    <p className="text-sm font-medium">No orders found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {selectedOrder && (
          <OrderDetailsModal 
            order={selectedOrder} 
            onClose={() => setSelectedOrder(null)}
            onUpdateStatus={updateStatus}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Pending: 'bg-amber-100 text-amber-700',
    Shipped: 'bg-blue-100 text-blue-700',
    Delivered: 'bg-emerald-100 text-emerald-700',
  };
  const Icons = {
    Pending: Clock,
    Shipped: Truck,
    Delivered: CheckCircle,
  };
  const Icon = Icons[status] || Clock;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles[status]}`}>
      <Icon size={12} />
      {status}
    </span>
  );
}

function OrderDetailsModal({ order, onClose, onUpdateStatus }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-secondary/20 bg-white shadow-2xl"
      >
        <div className="border-b border-secondary/10 bg-secondary/5 px-8 py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl text-primary">Order {order.id}</h2>
            <StatusBadge status={order.status} />
          </div>
          <p className="mt-1 text-xs text-primary/40 uppercase tracking-widest">Placed on {new Date(order.createdAt).toLocaleString()}</p>
        </div>

        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Customer Info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-3">Customer</h3>
              <p className="text-sm font-medium text-primary">{order.user.name}</p>
              <p className="text-sm text-primary/60">{order.user.email}</p>
            </div>
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-3">Shipping Address</h3>
              <p className="text-sm text-primary/60">{order.user.address}</p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-3">Order Items</h3>
            <div className="space-y-3">
              {(order?.products || []).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-xl border border-secondary/10 p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-secondary/5 border border-secondary/10"></div>
                    <div>
                      <p className="text-sm font-medium text-primary">{item?.name}</p>
                      <p className="text-xs text-primary/40">Qty: {item?.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary">₹{(item?.price || 0) * (item?.quantity || 0)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Update Status */}
          <div className="border-t border-secondary/10 pt-6">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-4">Update Status</h3>
            <div className="flex gap-2">
              {['Pending', 'Shipped', 'Delivered'].map((status) => (
                <button
                  key={status}
                  onClick={() => onUpdateStatus(order.id, status)}
                  className={`flex-1 rounded-xl py-2.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
                    order.status === status 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary/5 text-primary/40 hover:bg-secondary/10'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/10 px-8 py-6 flex items-center justify-between bg-secondary/5">
          <p className="text-sm font-medium text-primary/60">Total Amount</p>
          <p className="font-serif text-2xl text-primary">₹{order.total}</p>
        </div>
      </motion.div>
    </div>
  );
}
