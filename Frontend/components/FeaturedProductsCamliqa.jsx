"use client";

import { useCartStore } from "../store/useCartStore";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: "soap-sunnipindi-olive",
    name: "SUNNIPINDI & OLIVE OIL SOAP",
    price: "₹69/-",
    benefit:
      "Removes dead skin cells, makes skin smooth, soft, and gives a natural glow.",
    category: "Soap / Skincare",
    size: "100 GM",
    image: "https://www.camliqa.com/wp-content/uploads/2018/06/SKU1_1-600x600.jpg"
  },
  {
    id: "soap-red-sandal-olive",
    name: "RED SANDAL & OLIVE OIL SOAP",
    price: "₹69/-",
    benefit: "Provides skin glow and shine while smoothing texture.",
    category: "Soap / Skincare",
    size: "100 GM",
    image: "https://m.media-amazon.com/images/I/715MfIKop-L._AC_UF1000,1000_QL80_.jpg"
  }
];

export default function FeaturedProductsCamliqa() {
  const { addToCart } = useCartStore();

  return (
    <motion.section
      id="featured-products"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="section-shell py-12 sm:py-14 lg:py-18"
    >
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-secondary sm:text-xs">
          Featured Products
        </p>
        <h2 className="mt-3 font-serif text-3xl text-primary sm:text-4xl">Direct To Cart Essentials</h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {featuredProducts.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            className="rounded-2xl border border-secondary/45 bg-white/45 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-34px_rgba(26,26,62,0.42),0_0_55px_rgba(108,63,197,0.16)]"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-secondary">{product.category}</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-primary">{product.name}</h3>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.32em] text-primary/60">
                  {product.size}
                </p>
              </div>

              <div className="w-28 shrink-0 sm:w-32">
                <div className="aspect-square overflow-hidden rounded-xl border border-secondary/35 bg-white/80 p-3 shadow-[0_18px_40px_-34px_rgba(26,26,62,0.55)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary/75">{product.benefit}</p>

            <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-4">
              <p className="font-serif text-2xl text-primary">{product.price}</p>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="group text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
              >
                <span className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-secondary after:transition-transform after:duration-300 group-hover:after:scale-x-110">
                  Add to Cart
                </span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
