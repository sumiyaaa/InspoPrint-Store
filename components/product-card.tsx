"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.sizes[1] || product.sizes[0], product.colors[0])
  }

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Quick Add */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
            <Button
              onClick={handleAddToCart}
              className="w-full gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
        {/* Info */}
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.category === "tshirts" ? "T-Shirt" : "Pajamas"}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-card-foreground">{product.name}</h3>
          <p className="mt-1 text-base font-bold text-primary">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}
