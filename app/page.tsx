"use client"

import { HeroSection } from "@/components/hero-section"
import { CategoryCards } from "@/components/category-cards"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoBanner } from "@/components/promo-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <FeaturedProducts />
      <PromoBanner />
    </>
  )
}
