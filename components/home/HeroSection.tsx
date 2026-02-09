"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
          >
            New Collection 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Wear Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Imagination</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0 mx-auto"
          >
            Custom printed T-shirts and cozy pajamas that let you express your
            unique style. Bold designs, premium fabrics, delivered to your door.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link href="/categories/tshirts">
              <Button size="lg" className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Shop T-Shirts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/categories/pajamas">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent hover:border-primary/50 transition-all hover:scale-105"
              >
                View Pajamas
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative flex-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="/images/hero-tshirt.jpg"
                  alt="Custom printed t-shirt collection"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="/images/hero-pajama-small.jpg"
                  alt="Cozy pajama set"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="mt-8 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="/images/hero-pajama.jpg"
                  alt="Printed pajamas"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="/images/hero-tshirt-small.jpg"
                  alt="Vibrant t-shirt design"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
