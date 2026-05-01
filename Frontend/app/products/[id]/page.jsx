"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal, { ImageReveal } from '@/components/Reveal';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:5001/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen bg-bg flex items-center justify-center font-serif text-2xl text-primary animate-pulse">Loading Camliqa...</div>;
  if (!product) return <div className="h-screen bg-bg flex items-center justify-center font-serif text-2xl text-primary">Product not found.</div>;

  return (
    <div className="bg-bg font-sans text-ink">
      <Navbar />
      
      <main className="min-h-screen">
        <section className="section-shell py-12 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            
            {/* Image Gallery Mockup */}
            <div className="sticky top-32">
              <Reveal direction="right" width="100%">
                <div className="relative aspect-square overflow-hidden rounded-[40px] border border-secondary/20 shadow-2xl bg-white/50">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </Reveal>
              
              {/* Thumbnails */}
              <div className="mt-6 flex gap-4">
                {[1, 2, 3].map((i) => (
                  <Reveal key={i} delay={0.2 * i} width="80px">
                    <div className="aspect-square w-20 rounded-2xl border border-secondary/20 overflow-hidden bg-white/40 grayscale hover:grayscale-0 transition cursor-pointer">
                      <Image src={product.image} alt="thumbnail" width={80} height={80} className="object-cover h-full w-full" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="pt-4 lg:pt-0">
              <Reveal direction="down" delay={0.2}>
                <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
                  {product.category || "Clinical Collection"}
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <h1 className="font-serif text-[3rem] leading-[1.1] text-primary sm:text-[4rem]">
                  {product.name}
                </h1>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="mt-6 flex items-center gap-6">
                  <span className="text-3xl font-serif text-primary">₹{product.price}</span>
                  <span className="h-10 w-[1px] bg-secondary/30" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-primary/60">
                    {product.stock > 0 ? "In Stock" : "Coming Soon"}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.8}>
                <p className="mt-8 text-[1.1rem] leading-relaxed text-primary/80">
                  {product.description}
                </p>
              </Reveal>

              {/* Attributes */}
              <Reveal delay={1}>
                <div className="mt-10 grid grid-cols-2 gap-8 border-y border-secondary/20 py-8">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">Ideal For</h4>
                    <p className="text-sm text-primary/70">{Array.isArray(product.skinTypes) ? product.skinTypes.join(", ") : "All Skin Types"}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">Key Ingredients</h4>
                    <p className="text-sm text-primary/70">{product.ingredients || "Botanical Extracts"}</p>
                  </div>
                </div>
              </Reveal>

              {/* Actions */}
              <Reveal delay={1.2}>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 rounded-full bg-primary py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-primary/90">
                    Add to Ritual
                  </button>
                  <button className="rounded-full border border-primary/20 px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/5">
                    Find in Boutique
                  </button>
                </div>
              </Reveal>

              {/* Philosophy Note */}
              <Reveal delay={1.4}>
                <div className="mt-16 rounded-3xl bg-secondary/5 p-8 border border-secondary/10">
                  <h4 className="font-serif text-xl text-secondary mb-3 italic">The Camliqa Promise</h4>
                  <p className="text-xs leading-loose text-primary/60 uppercase tracking-wider">
                    Every formulation is meticulously crafted in our clinical labs, ensuring that the integrity of each botanical active is preserved for maximum bio-availability.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* Ingredients Deep Dive Placeholder */}
        <section className="bg-primary py-24 text-white overflow-hidden">
          <div className="section-shell">
            <Reveal>
              <h2 className="text-center font-serif text-4xl sm:text-5xl mb-20 italic">Molecular Integrity</h2>
            </Reveal>
            
            <div className="grid gap-12 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Reveal key={i} delay={0.2 * i}>
                  <div className="text-center">
                    <div className="mx-auto mb-6 h-20 w-20 rounded-full border border-secondary/30 flex items-center justify-center">
                      <span className="text-secondary text-2xl font-serif">{i}</span>
                    </div>
                    <h4 className="uppercase text-[10px] tracking-[0.3em] text-secondary mb-4">Precision Phase</h4>
                    <p className="text-sm text-white/60 leading-relaxed">Advanced stabilization techniques ensure our actives penetrate deeper for longer-lasting radiance.</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
