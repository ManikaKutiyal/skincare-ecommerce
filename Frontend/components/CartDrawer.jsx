"use client";
import React from 'react';
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "../store/useCartStore";

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCartStore();

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity"
                    onClick={closeCart}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
                        <h2 className="text-2xl font-serif text-ink">Your Cart</h2>
                        <button
                            onClick={closeCart}
                            className="rounded-full p-2 text-ink/70 transition hover:bg-black/5 hover:text-ink"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        {items.length === 0 ? (
                            <div className="flex h-full flex-col items-center justify-center text-center space-y-4 text-ink/60">
                                <p>Your luxury cart is empty.</p>
                                <button
                                    onClick={closeCart}
                                    className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-80"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                {items.map((item) => (
                                    <div key={item.cartId} className="flex gap-4 border-b border-black/5 pb-6">
                                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-base">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="font-medium text-ink">{item.name}</h3>
                                                    <button
                                                        onClick={() => removeFromCart(item.cartId)}
                                                        className="text-ink/40 transition hover:text-red-500"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                                <p className="text-sm text-ink/60">{item.size}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center rounded-full border border-black/10 px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                                        className="p-1 text-ink/70 hover:text-ink"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                                        className="p-1 text-ink/70 hover:text-ink"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <p className="font-semibold text-ink">{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t border-black/10 bg-base/50 px-6 py-6 backdrop-blur-md">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-lg font-medium text-ink">Subtotal</span>
                                <span className="text-xl font-semibold text-ink">${cartTotal().toFixed(2)}</span>
                            </div>
                            <p className="mb-6 text-sm text-ink/60">Shipping and taxes calculated at checkout.</p>
                            <button className="w-full rounded-full bg-ink py-4 text-base font-medium text-white shadow-lg transition hover:opacity-90">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
