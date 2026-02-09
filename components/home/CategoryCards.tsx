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
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {categories.map((cat) => (
          <motion.div key={cat.name} variants={item}>
            <Link
              href={cat.href}
              className="group relative block overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.0 }}
                className="relative aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <h3 className="font-heading text-4xl font-bold text-white mb-2 tracking-wide italic">
                    {cat.name}
                  </h3>
                  <div
                    className="mt-4 px-6 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Shop Now
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
