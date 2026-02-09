"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react"
import { getProduct, getProductsByCategory } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product/ProductCard"
import { motion } from "framer-motion"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProduct(id)
  const { addItem } = useCart()

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-[60vh] items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
          <p className="mt-2 text-muted-foreground">The product you are looking for does not exist.</p>
          <Link href="/">
            <Button className="mt-4 gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    )
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    const size = selectedSize || product.sizes[1] || product.sizes[0]
    const color = selectedColor || product.colors[0]
    for (let i = 0; i < quantity; i++) {
      addItem(product, size, color)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-7xl px-4 py-8 lg:px-8"
    >
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${product.category}`}
          className="hover:text-foreground"
        >
          {product.category === "tshirts" ? "T-Shirts" : "Pajamas"}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </motion.nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-2xl bg-muted shadow-xl"
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {product.category === "tshirts" ? "T-Shirt" : "Pajamas"}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

          {/* Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <p className="mb-3 text-sm font-semibold text-foreground">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all shadow-sm ${
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Color */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <p className="mb-3 text-sm font-semibold text-foreground">Color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all shadow-sm ${
                    selectedColor === color
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {color}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quantity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <p className="mb-3 text-sm font-semibold text-foreground">Quantity</p>
            <div className="inline-flex items-center rounded-lg border border-border shadow-sm">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted"
              >
                <Minus className="h-4 w-4" />
              </motion.button>
              <span className="flex h-10 w-12 items-center justify-center text-sm font-semibold text-foreground">
                {quantity}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted"
              >
                <Plus className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Add to Cart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={handleAddToCart}
              className={`mt-8 gap-2 rounded-full text-base transition-all shadow-lg hover:shadow-xl ${
                added
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
              }`}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" /> Add to Cart
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-foreground">You May Also Like</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  )
}
