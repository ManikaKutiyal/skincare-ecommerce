"use client";

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/api';
import { Star, Trash2, CheckCircle, XCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/reviews`);
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch reviews', error);
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Delete this review?')) {
      try {
        await fetch(`${API_URL}/api/reviews/${id}`, { method: 'DELETE' });
        fetchReviews();
      } catch (error) {
        console.error('Failed to delete review', error);
      }
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API_URL}/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchReviews();
    } catch (error) {
      console.error('Failed to update review status', error);
    }
  };

  const filteredReviews = (reviews || []).filter(r => 
    r?.comment?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
    r?.user?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-primary/30">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search reviews..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border border-secondary/10 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="h-48 bg-white border border-secondary/10 rounded-2xl animate-pulse"></div>
          ))
        ) : filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-secondary/10 bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={14} 
                        className={star <= review.rating ? 'fill-secondary text-secondary' : 'text-primary/20'} 
                      />
                    ))}
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    review.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {review.status}
                  </span>
                </div>
                <p className="text-sm text-primary/80 italic mb-4">“{review.comment}”</p>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center text-[10px] text-secondary font-bold">
                    {review.user.charAt(0)}
                  </div>
                  <p className="text-xs font-medium text-primary">{review.user}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                {review.status !== 'approved' && (
                  <button 
                    onClick={() => updateStatus(review.id, 'approved')}
                    className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all"
                    title="Approve"
                  >
                    <CheckCircle size={16} />
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(review.id)}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="flex flex-col items-center gap-2 text-primary/40">
              <Star size={48} strokeWidth={1} />
              <p className="text-sm font-medium">No reviews found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
