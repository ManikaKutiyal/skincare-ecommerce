"use client";

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/api';
import { Tag, Plus, Trash2, Calendar, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiscountsPage() {
  const [discounts, setDiscounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchDiscounts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/discounts`);
      const data = await res.json();
      setDiscounts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch discounts', error);
      setDiscounts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Remove this discount code?')) {
      try {
        await fetch(`${API_URL}/api/discounts/${id}`, { method: 'DELETE' });
        fetchDiscounts();
      } catch (error) {
        console.error('Failed to delete discount', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
        >
          <Plus size={16} />
          Create Coupon
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          [1, 2].map(i => (
            <div key={i} className="h-40 bg-white border border-secondary/10 rounded-2xl animate-pulse"></div>
          ))
        ) : discounts.length > 0 ? (
          discounts.map((discount) => (
            <motion.div
              key={discount.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-2xl border border-secondary/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
                  <Tag size={18} />
                </div>
                <button 
                  onClick={() => handleDelete(discount.id)}
                  className="p-1.5 text-primary/30 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold tracking-widest text-primary font-serif uppercase">{discount.code}</h3>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-primary/60">
                    <Percent size={12} />
                    {discount.percent}% OFF
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary/60">
                    <Calendar size={12} />
                    Expires: {new Date(discount.expiry).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-secondary/5">
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  new Date(discount.expiry) > new Date() ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}>
                  {new Date(discount.expiry) > new Date() ? 'Active' : 'Expired'}
                </span>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="flex flex-col items-center gap-2 text-primary/40">
              <Tag size={48} strokeWidth={1} />
              <p className="text-sm font-medium">No active discounts</p>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <DiscountModal 
            onClose={() => setIsModalOpen(false)}
            onSuccess={() => {
              setIsModalOpen(false);
              fetchDiscounts();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function DiscountModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    code: '',
    percent: '',
    expiry: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/api/discounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      onSuccess();
    } catch (error) {
      console.error('Failed to create discount', error);
    }
  };

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
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-secondary/20 bg-white p-8 shadow-2xl"
      >
        <h2 className="font-serif text-2xl text-primary mb-6">Create Discount Code</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Coupon Code</label>
            <input
              type="text"
              placeholder="e.g. SUMMER25"
              value={formData.code}
              onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})}
              className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Discount %</label>
              <input
                type="number"
                placeholder="20"
                value={formData.percent}
                onChange={(e) => setFormData({...formData, percent: e.target.value})}
                className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Expiry Date</label>
              <input
                type="date"
                value={formData.expiry}
                onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary/60 hover:text-primary transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-white rounded-xl px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
            >
              Create Coupon
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
