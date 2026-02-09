"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/data"
import { ProductCard } from "@/components/product/ProductCard"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Products
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our most-loved prints, handpicked for you
          </p>
        </div>
        <Link href="/categories/tshirts" className="hidden md:block">
          <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80 hover:bg-primary/5">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {featured.slice(0, 4).map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center md:hidden"
      >
        <Link href="/categories/tshirts">
          <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80 hover:bg-primary/5">
            View All Products <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
