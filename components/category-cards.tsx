"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    name: "T-Shirts",
    description: "Bold, vibrant custom prints on premium cotton",
    href: "/categories/tshirts",
    image: "/images/cat-tshirts.jpg",
    count: "6 Products",
  },
  {
    name: "Pajamas",
    description: "Cozy comfort with playful printed designs",
    href: "/categories/pajamas",
    image: "/images/cat-pajamas.jpg",
    count: "6 Products",
  },
]

export function CategoryCards() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="text-center">
        <h2
          className={`text-3xl font-bold tracking-tight text-foreground md:text-4xl transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Shop by Category
        </h2>
        <p
          className={`mt-2 text-muted-foreground transition-all duration-600 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Find the perfect piece for every occasion
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            href={cat.href}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${(i + 1) * 150}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={cat.image || "/placeholder.svg"}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/40" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-background/80">
                  {cat.count}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-background md:text-3xl">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-background/80">{cat.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-background transition-transform group-hover:translate-x-1">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
