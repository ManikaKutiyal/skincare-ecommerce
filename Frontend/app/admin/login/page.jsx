"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminStore } from '@/store/useAdminStore';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAdminStore((state) => state.login);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid administrative credentials');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDFCFB]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8"
      >
        <div className="text-center mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-secondary mb-2">CAMLIQA</p>
          <h1 className="font-serif text-3xl text-primary">Admin Access</h1>
          <p className="mt-2 text-sm text-primary/60">Please enter your password to continue to the dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-primary/30">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-white border border-secondary/20 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
            {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-xl py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Authenticate
          </button>
        </form>

        <p className="mt-10 text-center text-[10px] text-primary/40 uppercase tracking-widest">
          Secured Clinical Portal &copy; 2026
        </p>
      </motion.div>
    </div>
  );
}
