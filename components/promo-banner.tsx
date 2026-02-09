"use client"

import Link from "next/link"
import { ArrowRight, Truck, Shield, RefreshCw } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $75",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Fade-resistant premium prints",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
]

export function PromoBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Features strip */}
      <section ref={ref} className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex items-center gap-4 px-6 py-6 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Express Yourself?
          </h2>
          <p className="max-w-md text-primary-foreground/80">
            Browse our full collection of custom printed apparel and find pieces that speak to you.
          </p>
          <Link href="/categories/tshirts">
            <button className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
