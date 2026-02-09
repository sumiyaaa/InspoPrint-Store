"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Leaf, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    icon: Sparkles,
    title: "Bold Creativity",
    description:
      "Every design starts as a hand-drawn concept brought to life with the latest DTG printing technology. We celebrate originality.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We use eco-friendly water-based inks, organic cotton, and responsible sourcing to minimize our footprint on the planet.",
  },
  {
    icon: Heart,
    title: "Premium Quality",
    description:
      "From fabric selection to the final stitch, every piece passes our rigorous quality checks so your prints stay vibrant wash after wash.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We collaborate with independent artists worldwide, ensuring every purchase supports creative talent and fair wages.",
  },
]

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Unique Designs" },
  { value: "15+", label: "Artist Partners" },
  { value: "98%", label: "Satisfaction Rate" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function Counter({ value }: { value: string }) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLParagraphElement>(null)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = numericValue / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= numericValue) {
              setDisplayValue(numericValue)
              clearInterval(timer)
            } else {
              setDisplayValue(Math.floor(start))
            }
          }, 16)
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericValue, hasAnimated])

  return (
    <motion.p ref={ref} className="text-3xl font-bold text-primary md:text-4xl">
      {value.includes('+') ? (
        <>{displayValue}{value.includes('K') ? 'K+' : '+'}</>
      ) : value.includes('%') ? (
        <>{displayValue}%</>
      ) : (
        value
      )}
    </motion.p>
  )
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Where Art Meets <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Comfort</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground lg:mx-0"
            >
              PrintPulse was born from a simple idea: everyone deserves to wear something that tells
              their story. We combine cutting-edge print technology with premium fabrics to create
              wearable art that feels as good as it looks.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="flex-1"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="PrintPulse creative workshop"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.05)" }}
              className="px-6 py-10 text-center transition-colors"
            >
              <Counter value={stat.value} />
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What We Stand For
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our core values shape every product we create
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-xl border border-border bg-card p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shadow-sm"
              >
                <value.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We believe self-expression should not be limited to a canvas. At PrintPulse, we are
              building a world where everyday apparel becomes a medium for art, personality, and
              creativity. Whether it is a bold graphic tee for the weekend or the coziest pajamas
              for bedtime, every piece is crafted to make you feel uniquely you.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/categories/tshirts" className="mt-8 inline-block">
                <Button className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                  Explore Our Collection <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { label: "Eco-Friendly Inks", icon: "🌱" },
              { label: "Premium Cotton", icon: "✨" },
              { label: "Fast Shipping", icon: "🚚" },
              { label: "Secure Payment", icon: "🔒" }
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <span className="text-3xl">{badge.icon}</span>
                <p className="text-sm font-medium text-center text-foreground">{badge.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
