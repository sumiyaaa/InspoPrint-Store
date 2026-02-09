"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Heart, Eye } from "lucide-react"
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
    <Link href={`/product/${product.id}`} className="group block cursor-pointer h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 rounded-xl group-hover:shadow-lg transition-all duration-300">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
           
           {/* Overlays */}
           <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

           {/* New Badge (conditional mock) */}
           {product.featured && (
             <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                New
             </span>
           )}

           {/* Action Buttons (Right Side) */}
           <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <button className="p-2.5 bg-white rounded-full shadow-md hover:bg-primary hover:text-white text-foreground transition-colors duration-200">
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2.5 bg-white rounded-full shadow-md hover:bg-primary hover:text-white text-foreground transition-colors duration-200 delay-75">
                <Eye className="w-4 h-4" />
              </button>
           </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Button
              onClick={handleQuickAdd}
              className="w-full rounded-full bg-white hover:bg-primary text-foreground hover:text-white shadow-xl font-bold uppercase tracking-wider text-xs h-10 gap-2 transition-all duration-300 hover:scale-105 border-none"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>
        {/* Info */}
        <div className="text-center space-y-2">
           {/* Stars */}
           <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-3 h-3 text-accent fill-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
           </div>
          <h3 className="text-lg font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors font-heading">{product.name}</h3>
          <div className="flex items-center justify-center gap-2">
             <span className="text-base font-bold text-foreground">${product.price.toFixed(2)}</span>
             <span className="text-sm text-muted-foreground line-through decoration-destructive/50 decoration-2">${(product.price * 1.2).toFixed(2)}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
