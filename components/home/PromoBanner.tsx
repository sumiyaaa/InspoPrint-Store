"use client"

import Link from "next/link"
import { ArrowRight, Truck, Shield, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $75",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Fade-resistant premium prints",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function PromoBanner() {
  return (
    <>
      {/* Features strip */}
      <section className="border-y border-border bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 px-6 py-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 shadow-sm"
              >
                <f.icon className="h-5 w-5 text-primary" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" 
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl"
          >
            Ready to Express Yourself?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-md text-primary-foreground/90"
          >
            Browse our full collection of custom printed apparel and find pieces that speak to you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/categories/tshirts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg hover:shadow-xl transition-shadow"
              >
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
