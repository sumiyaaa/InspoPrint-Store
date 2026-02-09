"use client"

import { Box, Lock, RefreshCcw } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Box,
    title: "Free Shipping Method",
    description: "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
  },
  {
    icon: Lock,
    title: "Secure Payment System",
    description: "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
  },
  {
    icon: RefreshCcw,
    title: "Secure Payment System",
    description: "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
  },
]

export function PromoBanner() {
  return (
    <section className="py-24 bg-white border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div className="mb-2">
                 <feature.icon className="h-10 w-10 text-foreground stroke-1" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
