"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  {
    name: "T-Shirts",
    description: "Bold, vibrant custom prints on premium cotton",
    href: "/categories/tshirts",
    image: "/images/cat-tshirts.jpg",
    count: "6 Products",
  },
  {
    name: "Pajamas",
    description: "Cozy comfort with playful printed designs",
    href: "/categories/pajamas",
    image: "/images/cat-pajamas.jpg",
    count: "6 Products",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export function CategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-2 text-muted-foreground">
          Find the perfect piece for every occasion
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {categories.map((cat) => (
          <motion.div key={cat.name} variants={item}>
            <Link
              href={cat.href}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/30 to-transparent transition-opacity group-hover:from-foreground/70" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-background/90">
                    {cat.count}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-background md:text-3xl">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-background/90">{cat.description}</p>
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-background"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
