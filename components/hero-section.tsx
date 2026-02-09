"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* Text */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            New Collection 2026
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Wear Your{" "}
            <span className="text-primary">Imagination</span>
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0 mx-auto">
            Custom printed T-shirts and cozy pajamas that let you express your
            unique style. Bold designs, premium fabrics, delivered to your door.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link href="/categories/tshirts">
              <Button size="lg" className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Shop T-Shirts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/categories/pajamas">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
              >
                View Pajamas
              </Button>
            </Link>
          </div>
        </div>

        {/* Images */}
        <div
          className={`relative flex-1 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-tshirt.jpg"
                  alt="Custom printed t-shirt collection"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-pajama-small.jpg"
                  alt="Cozy pajama set"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-pajama.jpg"
                  alt="Printed pajamas"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-tshirt-small.jpg"
                  alt="Vibrant t-shirt design"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
