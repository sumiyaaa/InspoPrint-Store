"use client"

import { useSearchParams } from "next/navigation"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product/ProductCard"
import { motion } from "framer-motion"
import { Suspense } from "react"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Search Results
        </h1>
        <p className="mt-2 text-muted-foreground">
          Found {filteredProducts.length} results for "{query}"
        </p>
      </motion.div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No products found matching your search.</p>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
