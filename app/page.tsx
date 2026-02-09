"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { CategoryCards } from "@/components/home/CategoryCards"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { Testimonials } from "@/components/home/Testimonials"
import { PromoBanner } from "@/components/home/PromoBanner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <FeaturedProducts />
      <Testimonials />
      <PromoBanner />
    </>
  )
}
