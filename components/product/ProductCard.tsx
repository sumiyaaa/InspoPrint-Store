"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.sizes[1] || product.sizes[0], product.colors[0])
  }

  return (
    <Link href={`/product/${product.id}`} className="group block cursor-pointer">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl border border-border bg-card shadow-md hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-primary hover:text-primary-foreground hover:scale-110 z-10"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
        {/* Info */}
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.category === "tshirts" ? "T-Shirt" : "Pajamas"}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-card-foreground line-clamp-1">{product.name}</h3>
          <p className="mt-1 text-base font-bold text-primary">${product.price.toFixed(2)}</p>
        </div>
      </motion.div>
    </Link>
  )
}
