const footerColumns = [
  {
    heading: "Shop",
    links: ["Skincare", "Haircare", "Gift Sets", "Best Sellers"]
  },
  {
    heading: "Support",
    links: ["Contact", "FAQs", "Shipping & Returns", "Track Order"]
  },
  {
    heading: "Company",
    links: ["About Camliqa", "Quality Promise", "Careers", "Press"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-base py-16 sm:py-20 border-t border-divider">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <h3 className="font-serif text-3xl text-primary">CAMLIQA</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary/65">
              Natural Products For Your Natural Beauty
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="rounded-[10px] border border-divider bg-white px-2.5 py-1 text-xs text-primary/70 transition duration-300 ease-out hover:border-secondary/70 hover:text-secondary">
                IG
              </a>
              <a href="#" className="rounded-[10px] border border-divider bg-white px-2.5 py-1 text-xs text-primary/70 transition duration-300 ease-out hover:border-secondary/70 hover:text-secondary">
                TW
              </a>
              <a href="#" className="rounded-[10px] border border-divider bg-white px-2.5 py-1 text-xs text-primary/70 transition duration-300 ease-out hover:border-secondary/70 hover:text-secondary">
                FB
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-secondary/85">{column.heading}</h4>
                <ul className="mt-4 space-y-2 text-sm text-primary/60">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition duration-300 ease-out hover:text-primary">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-divider pt-7 text-sm text-primary/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CAMLIQA. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition duration-300 ease-out hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition duration-300 ease-out hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition duration-300 ease-out hover:text-primary">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
