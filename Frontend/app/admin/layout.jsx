"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAdminStore } from '@/store/useAdminStore';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Star, 
  Tag, 
  Image as ImageIcon, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Reviews', href: '/admin/reviews', icon: Star },
  { name: 'Discounts', href: '/admin/discounts', icon: Tag },
  { name: 'Content', href: '/admin/content', icon: ImageIcon },
];

export default function AdminLayout({ children }) {
  const { isAuthenticated, logout } = useAdminStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated && pathname !== '/admin/login') {
    return null;
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#FDFCFB] text-[#1A1A3E]">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } fixed inset-y-0 left-0 z-50 flex flex-col border-r border-secondary/20 bg-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          {isSidebarOpen && (
            <span className="font-serif text-xl font-medium tracking-wider text-secondary">
              CAMLIQA <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50">Admin</span>
            </span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded-lg p-1 hover:bg-secondary/10"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-secondary/10 text-secondary' 
                    : 'text-primary/60 hover:bg-secondary/5 hover:text-secondary'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-secondary' : 'text-primary/40 group-hover:text-secondary'}`} />
                {isSidebarOpen && <span className="ml-3">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-secondary/10 p-4">
          <button
            onClick={() => {
              logout();
              router.push('/admin/login');
            }}
            className="flex w-full items-center rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition-all hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-secondary/10 bg-white/80 px-8 backdrop-blur-md">
          <h1 className="font-serif text-xl text-primary">
            {navItems.find(item => item.href === pathname)?.name || 'Admin'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-secondary/5 text-secondary">
              A
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
