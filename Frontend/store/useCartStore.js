import { create } from 'zustand';

const createCartState = (set, get) => ({
    items: [],
    isOpen: false,

    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

    addToCart: (product) => {
        set((state) => {
            const productId = product.id || `${product.name}-${product.size || 'default'}`;
            const existingItem = state.items.find(item => item.cartId === productId);

            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.cartId === productId ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                    isOpen: true,
                };
            }
            return {
                items: [...state.items, { ...product, cartId: productId, quantity: 1 }],
                isOpen: true
            };
        });
    },

    removeFromCart: (cartId) => {
        set((state) => ({
            items: state.items.filter(item => item.cartId !== cartId)
        }));
    },

    updateQuantity: (cartId, quantity) => {
        set((state) => ({
            items: state.items.map(item =>
                item.cartId === cartId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        }));
    },

    cartTotal: () => {
        return get().items.reduce((total, item) => {
            const priceStr = String(item.price).replace(/[^0-9.]/g, '');
            const price = parseFloat(priceStr) || 0;
            return total + (price * item.quantity);
        }, 0);
    },

    cartCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
    }
});

export const useCartStore = create(createCartState);
