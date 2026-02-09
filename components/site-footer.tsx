'use client';

import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">PP</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">PrintPulse</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Custom printed T-shirts and pajamas that express your unique style. Quality fabrics,
              vibrant prints, delivered to your door.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Shop
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/categories/tshirts"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/pajamas"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pajamas
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay Updated
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Subscribe for new drops and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} PrintPulse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
