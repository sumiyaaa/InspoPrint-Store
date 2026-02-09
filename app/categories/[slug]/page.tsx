"use client"

import { use, useState, useMemo } from "react"
import { getProductsByCategory, type Product } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X } from "lucide-react"

const sizeOptions = ["S", "M", "L", "XL", "XXL"]
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $30", min: 0, max: 30 },
  { label: "$30 - $50", min: 30, max: 50 },
  { label: "Over $50", min: 50, max: Infinity },
]

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const category = slug as "tshirts" | "pajamas"
  const categoryName = category === "tshirts" ? "T-Shirts" : "Pajamas"
  const allProducts = getProductsByCategory(category)

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = allProducts
    if (selectedSize) {
      result = result.filter((p) => p.sizes.includes(selectedSize))
    }
    const range = priceRanges[selectedPrice]
    result = result.filter((p) => p.price >= range.min && p.price < range.max)
    return result
  }, [allProducts, selectedSize, selectedPrice])

  const activeFilters = (selectedSize ? 1 : 0) + (selectedPrice !== 0 ? 1 : 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {categoryName}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {category === "tshirts"
            ? "Bold custom prints on premium cotton. Express yourself."
            : "Cozy, playful designs for the best night's sleep."}
        </p>
      </div>

      {/* Filter Toggle (mobile) */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 md:hidden bg-transparent"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters {activeFilters > 0 && `(${activeFilters})`}
        </Button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`${showFilters ? "block" : "hidden"} w-full shrink-0 md:block md:w-56`}
        >
          <div className="sticky top-24 space-y-6 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">Filters</h3>
              {activeFilters > 0 && (
                <button
                  onClick={() => {
                    setSelectedSize(null)
                    setSelectedPrice(0)
                  }}
                  className="text-xs text-primary hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Size */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Price
              </p>
              <div className="flex flex-col gap-1.5">
                {priceRanges.map((range, idx) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(idx)}
                    className={`rounded-lg px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                      selectedPrice === idx
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Active filter pills */}
          {activeFilters > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {selectedSize && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Size: {selectedSize}
                  <button onClick={() => setSelectedSize(null)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedPrice !== 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {priceRanges[selectedPrice].label}
                  <button onClick={() => setSelectedPrice(0)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-semibold text-foreground">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters to find what you are looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSelectedSize(null)
                  setSelectedPrice(0)
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
