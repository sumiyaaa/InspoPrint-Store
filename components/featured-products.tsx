"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const featured = getFeaturedProducts()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="flex items-end justify-between">
        <div>
          <h2
            className={`text-3xl font-bold tracking-tight text-foreground md:text-4xl transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Featured Products
          </h2>
          <p
            className={`mt-2 text-muted-foreground transition-all duration-600 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Our most-loved prints, handpicked for you
          </p>
        </div>
        <Link href="/categories/tshirts" className="hidden md:block">
          <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.slice(0, 4).map((product, i) => (
          <div
            key={product.id}
            className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link href="/categories/tshirts">
          <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
            View All Products <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
