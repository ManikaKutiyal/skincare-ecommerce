const footerColumns = [
  {
    heading: "Shop",
    links: ["All Products", "Serums", "Creams", "Cleansers", "Treatments", "Gift Sets"]
  },
  {
    heading: "Learn",
    links: ["Ingredient Guide", "Skin Concerns", "Routine Builder", "Clinical Studies", "Blog"]
  },
  {
    heading: "Support",
    links: ["Contact Us", "FAQs", "Shipping & Returns", "Track Order", "Store Locator"]
  },
  {
    heading: "Company",
    links: ["About Us", "Sustainability", "Careers", "Press", "Partnerships"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-base py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <h3 className="font-serif text-2xl text-ink">Clinical Luxury</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/68">
              Science-backed formulations for visible results.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="rounded-[10px] border border-muted/55 bg-section px-2.5 py-1 text-xs text-ink/70 transition duration-300 ease-out hover:border-ink/25 hover:text-ink">
                IG
              </a>
              <a href="#" className="rounded-[10px] border border-muted/55 bg-section px-2.5 py-1 text-xs text-ink/70 transition duration-300 ease-out hover:border-ink/25 hover:text-ink">
                TW
              </a>
              <a href="#" className="rounded-[10px] border border-muted/55 bg-section px-2.5 py-1 text-xs text-ink/70 transition duration-300 ease-out hover:border-ink/25 hover:text-ink">
                FB
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-ink/70">{column.heading}</h4>
                <ul className="mt-4 space-y-2 text-sm text-ink/66">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition duration-300 ease-out hover:text-ink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-muted/55 pt-7 text-sm text-ink/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Clinical Luxury. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition duration-300 ease-out hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="transition duration-300 ease-out hover:text-ink">
              Terms of Service
            </a>
            <a href="#" className="transition duration-300 ease-out hover:text-ink">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
