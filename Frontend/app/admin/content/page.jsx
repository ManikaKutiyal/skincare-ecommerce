"use client";

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/api';
import { ImageIcon, Save, Plus, Trash2, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContentPage() {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(`${API_URL}/api/banners`);
        const data = await res.json();
        setBanners(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch banners', error);
        setBanners([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch(`${API_URL}/api/banners`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(banners),
      });
      alert('Content updated successfully');
    } catch (error) {
      console.error('Failed to save content', error);
    } finally {
      setIsSaving(false);
    }
  };

  const addBanner = () => {
    setBanners([
      ...banners,
      { id: Date.now().toString(), title: 'New Banner', subtitle: '', image: '', active: true }
    ]);
  };

  const updateBanner = (id, field, value) => {
    setBanners(banners.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const deleteBanner = (id) => {
    setBanners(banners.filter(b => b.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-xl text-primary">Homepage Banners</h2>
          <p className="text-sm text-primary/40">Manage the hero section of your store.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={addBanner}
            className="inline-flex items-center justify-center gap-2 border border-secondary/20 rounded-xl px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:bg-secondary/5 transition-all"
          >
            <Plus size={16} />
            Add Slide
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : (
              <>
                <Save size={16} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {isLoading ? (
          <div className="h-64 bg-white border border-secondary/10 rounded-2xl animate-pulse"></div>
        ) : (banners || []).map((banner, index) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-secondary/10 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">Slide #{index + 1}</span>
              <button 
                onClick={() => deleteBanner(banner.id)}
                className="text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Headline</label>
                  <input
                    type="text"
                    value={banner.title}
                    onChange={(e) => updateBanner(banner.id, 'title', e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Subtitle</label>
                  <textarea
                    value={banner.subtitle}
                    onChange={(e) => updateBanner(banner.id, 'subtitle', e.target.value)}
                    rows={2}
                    className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Image URL</label>
                  <input
                    type="text"
                    value={banner.image}
                    onChange={(e) => updateBanner(banner.id, 'image', e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-secondary/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">Preview</label>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-secondary/20 bg-secondary/5 group">
                  {banner.image ? (
                    <img src={banner.image} alt="Preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-primary/20">
                      <ImageIcon size={48} strokeWidth={1} />
                      <p className="text-xs uppercase tracking-widest font-semibold">No Image Provided</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <p className="font-serif text-xl mb-1">{banner.title}</p>
                      <p className="text-[10px] opacity-80">{banner.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
