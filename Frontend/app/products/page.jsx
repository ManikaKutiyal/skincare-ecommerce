'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDetailModal from '@/components/ProductDetailModal';
import { useCart } from '@/context/CartContext';
import products from '@/lib/products';

function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <article
      className="group mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-muted/35 bg-section shadow-soft cursor-pointer transition hover:shadow-lg"
      onClick={() => onViewDetails(product)}
    >
      <div className="bg-section">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="px-5 pb-5 pt-4">
        <h4 className="text-[1.1rem] leading-[1.15] text-ink sm:text-[1.4rem]">{product.name}</h4>
        <div className="mt-3 text-sm leading-5">
          <p className="text-[0.83rem] uppercase tracking-[0.09em] text-accentSecondary">
            {product.ingredient}
          </p>
          <p className="mt-1 text-[0.9rem] text-muted">{product.benefit}</p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-muted/55 pt-3.5">
          <p className="font-serif text-[1.25rem] text-ink">{product.priceDisplay}</p>
          <button
            type="button"
            onClick={handleAddToCart}
            className={`text-[1rem] font-medium transition duration-300 ${
              isAdding
                ? 'text-green-500'
                : 'text-accentSecondary hover:text-accentPrimary'
            }`}
          >
            {isAdding ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'serums', name: 'Serums & Essences' },
    { id: 'creams', name: 'Creams & Treatments' },
    { id: 'oils', name: 'Oils & Boosters' },
    { id: 'masks', name: 'Masks & Exfoliants' },
    { id: 'specialty', name: 'Specialty Care' },
  ];

  // Filter products based on selected category
  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter((p) => {
        if (selectedFilter === 'serums') return [1, 3, 5, 10, 13, 14, 18, 19].includes(p.id);
        if (selectedFilter === 'creams') return [2, 9, 15, 20].includes(p.id);
        if (selectedFilter === 'oils') return [4, 19].includes(p.id);
        if (selectedFilter === 'masks') return [7, 8, 11, 12, 18].includes(p.id);
        if (selectedFilter === 'specialty') return [6, 14, 16, 17].includes(p.id);
        return true;
      });

  return (
    <main className="bg-base text-ink">
      <Navbar />

      {/* Breadcrumb */}
      <div className="section-shell border-b border-muted/20 py-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <a href="/" className="hover:text-accentPrimary transition">Home</a>
          <span>/</span>
          <span className="text-ink">Products</span>
        </div>
      </div>

      {/* Header */}
      <section className="section-shell py-12 md:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-8">
            <h1 className="text-5xl leading-[1.08] text-ink sm:text-6xl md:text-[3.4rem]">
              Our Clinical Collection
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-accentSecondary">
              Discover our complete range of precision-formulated skincare products designed for measurable results
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedFilter === category.id
                    ? 'bg-accentPrimary text-white'
                    : 'border border-muted/30 text-muted hover:text-ink hover:border-muted/60'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-shell py-12 md:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 text-sm text-muted">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </main>
  );
}
