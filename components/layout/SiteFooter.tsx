'use client'

import Link from "next/link"
import { motion } from "framer-motion"

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-gradient-to-br from-muted/40 via-muted/30 to-muted/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-md"
              >
                <span className="text-sm font-bold text-primary-foreground">IP</span>
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Inspo Print</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Custom printed T-shirts and pajamas that express your unique style. Quality fabrics,
              vibrant prints, delivered to your door.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Shop
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/categories/tshirts"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/pajamas"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Pajamas
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
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
                className="flex-1 rounded-lg border-2 border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 shadow-md cursor-pointer"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground"
        >
          &copy; {new Date().getFullYear()} PrintPulse. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}
