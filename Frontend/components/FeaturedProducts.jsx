"use client";

import React, { useState, useEffect, useCallback } from 'react';
import './FeaturedProducts.css';
import Link from 'next/link';
import Reveal from './Reveal';

const FEATURED_ITEMS = [
  {
    id: 1,
    category: "BATH & BODY",
    title: "Sunnipindi & Olive Oil Soap",
    price: "450",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800",
    link: "/products/sunnipindi-soap"
  },
  {
    id: 2,
    category: "BATH & BODY",
    title: "Red Sandal & Olive Oil Soap",
    price: "450",
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
    link: "/products/red-sandal-soap"
  },
  {
    id: 3,
    category: "FACE CARE",
    title: "Grape Seed Face Wash",
    price: "650",
    rating: 4.7,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    link: "/products/grape-seed-face-wash"
  },
  {
    id: 4,
    category: "FACE CARE",
    title: "Aloe Vera & Tea Tree Face Wash",
    price: "650",
    rating: 4.6,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    link: "/products/aloe-tea-tree-face-wash"
  },
  {
    id: 5,
    category: "SKIN CARE",
    title: "Skin Brightening Cream",
    price: "1,200",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    link: "/products/skin-brightening-cream"
  },
  {
    id: 6,
    category: "HAIR CARE",
    title: "Shikakai Shampoo",
    price: "750",
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    link: "/products/shikakai-shampoo"
  },
  {
    id: 7,
    category: "HAIR CARE",
    title: "Spa Hair Oil",
    price: "1,450",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800",
    link: "/products/spa-hair-oil"
  }
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="star-icon" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_ITEMS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000); // Slightly slower for a more relaxed feel
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getCardClass = (index) => {
    const total = FEATURED_ITEMS.length;
    const diff = (index - activeIndex + total) % total;
    
    if (diff === 0) return 'card-active';
    if (diff === 1) return 'card-right';
    if (diff === total - 1) return 'card-left';
    return 'card-hidden';
  };

  return (
    <section className="featured-section" id="featured-products">
      <div className="luxury-overlay" />
      <div className="section-shell">
        <Reveal width="100%">
          <div className="featured-header">
            <div className="header-left">
              <span className="editorial-label">EDITORIAL</span>
              <h2 className="section-title">The Featured Edit</h2>
            </div>
            <Link href="/shop" className="read-all-link">
              DISCOVER FULL COLLECTION <span className="arrow">↗</span>
            </Link>
          </div>
        </Reveal>

        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-track">
            {FEATURED_ITEMS.map((item, index) => (
              <div 
                key={item.id} 
                className={`carousel-card ${getCardClass(index)}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} className="card-image" />
                  {getCardClass(index) === 'card-active' && (
                    <div className="card-luxury-badge">
                      <span>SIGNATURE</span>
                    </div>
                  )}
                </div>
                
                <div className="card-content-bottom">
                  <p className="card-mini-label">{item.category}</p>
                  <h3 className="card-bottom-title">{item.title}</h3>
                  <div className="card-bottom-meta">
                    <span className="card-price-small">₹{item.price}</span>
                    {getCardClass(index) === 'card-active' && (
                      <Link href={item.link} className="card-discover-link">
                        Discover ↗
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-indicators">
          {FEATURED_ITEMS.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
