"use client";

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/api';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Package,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/products`);
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch products', error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await fetch(`${API_URL}/api/products/${id}`, { method: 'DELETE' });
        fetchProducts();
      } catch (error) {
        console.error('Failed to delete product', error);
      }
    }
  };

  const filteredProducts = (products || []).filter(p => 
    p?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
    p?.category?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-primary/30">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-secondary/10 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
          />
        </div>
        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-secondary/10 bg-secondary/5">
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Product</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Category</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Price</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40">Stock</th>
              <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary/10">
            {isLoading ? (
              [1, 2, 3].map(i => (
                <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4"><div className="h-10 w-48 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-24 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-16 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-6 w-20 bg-secondary/10 rounded-lg"></div></td>
                  <td className="px-6 py-4"><div className="h-8 w-8 ml-auto bg-secondary/10 rounded-lg"></div></td>
                </tr>
              ))
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-secondary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-secondary/10 bg-secondary/5">
                        <img src={product.image} alt="" className="h-full w-full object-contain p-1" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-primary">{product.name}</p>
                        <p className="text-[10px] text-primary/40 uppercase tracking-widest">{product.size || 'Standard Size'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-primary/60">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-primary">₹{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      product.stock === 'in-stock' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {product.stock === 'in-stock' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                      {product.stock === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => {
                          setEditingProduct(product);
                          setIsModalOpen(true);
                        }}
                        className="p-2 text-primary/40 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-primary/40 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-2 text-primary/40">
                    <Package size={48} strokeWidth={1} />
                    <p className="text-sm font-medium">No products found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal - Simplified for now */}
      <AnimatePresence>
        {isModalOpen && (
          <ProductModal 
            product={editingProduct} 
            onClose={() => setIsModalOpen(false)} 
            onSuccess={() => {
              setIsModalOpen(false);
              fetchProducts();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductModal({ product, onClose, onSuccess }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    price: '',
    category: 'Skincare',
    description: '',
    image: '',
    stock: 'in-stock',
    skinTypes: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = product ? 'PUT' : 'POST';
    const url = product ? `${API_URL}/api/products/${product.id}` : `${API_URL}/api/products`;
    
    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      onSuccess();
    } catch (error) {
      console.error('Failed to save product', error);
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
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-secondary/20 bg-white p-8 shadow-2xl"
      >
        <h2 className="font-serif text-2xl text-primary mb-6">{product ? 'Edit Product' : 'Add New Product'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Price (₹)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              >
                <option value="Soap">Soap</option>
                <option value="Serum">Serum</option>
                <option value="Cleanser">Cleanser</option>
                <option value="Sunscreen">Sunscreen</option>
                <option value="Moisturizer">Moisturizer</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Stock Status</label>
              <select
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
                className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              >
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
              className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              required
            />
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
              {product ? 'Update Product' : 'Create Product'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
