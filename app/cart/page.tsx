"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center lg:px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg"
        >
          <ShoppingBag className="h-12 w-12 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-3xl font-bold text-foreground"
        >
          Your cart is empty
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 max-w-sm text-muted-foreground"
        >
          Looks like you have not added anything to your cart yet. Start browsing our collection!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <Link href="/categories/tshirts">
            <Button className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Shop T-Shirts
            </Button>
          </Link>
          <Link href="/categories/pajamas">
            <Button variant="outline" className="gap-2 rounded-full border-2 hover:scale-105 transition-all">
              Shop Pajamas
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-7xl px-4 py-10 lg:px-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-1 text-muted-foreground">
            {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearCart}
          className="text-sm font-medium text-destructive transition-colors hover:text-destructive/80 cursor-pointer"
        >
          Clear Cart
        </motion.button>
      </motion.div>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="divide-y divide-border rounded-xl border border-border bg-card shadow-lg">
            <AnimatePresence>
              {items.map((item) => (
              <motion.div
                key={`${item.product.id}-${item.size}-${item.color}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 p-4 md:gap-6 md:p-6"
              >
                {/* Image */}
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted md:h-32 md:w-32">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/product/${item.product.id}`}
                      className="font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Size: {item.size} &middot; Color: {item.color}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="inline-flex items-center rounded-lg border border-border shadow-sm">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-muted"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </motion.button>
                      <span className="flex h-8 w-10 items-center justify-center text-sm font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-muted"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </motion.button>
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="font-bold text-foreground">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/" className="mt-6 inline-block">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground hover:scale-105 transition-transform cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-80"
        >
          <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-foreground">Order Summary</h2>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal ({totalItems} items)</span>
                <span className="text-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span className="text-foreground">
                  {totalPrice >= 75 ? "Free" : "$5.99"}
                </span>
              </div>
              {totalPrice < 75 && (
                <p className="text-xs text-accent">
                  Add ${(75 - totalPrice).toFixed(2)} more for free shipping!
                </p>
              )}
              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span>${(totalPrice + (totalPrice >= 75 ? 0 : 5.99)).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                Proceed to Checkout
              </Button>
            </motion.div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Taxes calculated at checkout
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
