import products from "@/lib/products";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[18px] border border-muted/35 bg-section shadow-soft">
      <div className="bg-section">
        <img
          src={product.image}
          alt={product.name}
          className="h-[394px] w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="px-6 pb-6 pt-5">
        <h4 className="text-[1.9rem] leading-[1.08] text-ink">{product.name}</h4>
        <div className="mt-3 text-sm leading-5">
          <p className="text-[0.9rem] uppercase tracking-[0.1em] text-accentSecondary">{product.ingredient}</p>
          <p className="mt-1.5 text-[0.9rem] text-muted">{product.benefit}</p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-muted/55 pt-4">
          <p className="font-serif text-[1.35rem] text-ink">{product.price}</p>
          <button
            type="button"
            className="text-[1.15rem] font-medium text-accentSecondary transition duration-300 hover:text-accentPrimary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductSection() {
  return (
    <section className="section-shell py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-5xl leading-[1.08] text-ink sm:text-6xl md:text-[3.4rem]">Our Clinical Collection</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-accentSecondary">
            Each product is formulated with precision-targeted actives for measurable results
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
