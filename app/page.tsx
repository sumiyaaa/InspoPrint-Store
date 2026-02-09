"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { CategoryCards } from "@/components/home/CategoryCards"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { BestProductBanner } from "@/components/home/BestProductBanner"
import { BestCollection } from "@/components/home/BestCollection"
import { Newsletter } from "@/components/home/Newsletter"
import { Testimonials } from "@/components/home/Testimonials"
import { PromoBanner } from "@/components/home/PromoBanner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <FeaturedProducts />
      <BestCollection />
      <BestProductBanner />
      <Testimonials />
      <PromoBanner />
      <Newsletter />
    </>
  )
}
