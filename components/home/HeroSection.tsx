"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    discount: "60% Discount",
    title: "Winter Collection",
    subtitle: "Best Cloth Collection By 2026!",
    image: "/images/hero-pajama.jpg",
    bg: "bg-[#F0F8FF]",
    link: "/categories/pajamas",
  },
  {
    id: 2,
    discount: "New Arrival",
    title: "Summer Collection",
    subtitle: "Get Ready for the Heat!",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    bg: "bg-[#E0F7FA]",
    link: "/categories/tshirts",
  },
  {
    id: 3,
    discount: "Best Sellers",
    title: "Custom T-Shirts",
    subtitle: "Express Yourself with Inspo Print",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
    bg: "bg-[#FFF9C4]",
    link: "/categories/tshirts",
  },
  {
    id: 4,
    discount: "Cozy Vibes",
    title: "Pajama Party",
    subtitle: "Sleep in Style & Comfort",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop", // Cozy vibes
    bg: "bg-[#F3E5F5]",
    link: "/categories/pajamas",
  },
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return
    const intervalId = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(intervalId)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="relative overflow-hidden group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`relative flex-[0_0_100%] min-w-0 ${slide.bg} pt-16 pb-20 lg:pt-32 lg:pb-40 transition-colors duration-700`}>
              <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-20 lg:px-8">
                {/* Text */}
                <div className="flex-1 text-center lg:text-left z-10">
                  <motion.span
                     key={`discount-${index}`}
                     initial={{ opacity: 0, y: 20 }}
                     animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     className="font-heading text-xl italic text-primary mb-4 block"
                   >
                    {slide.discount}
                  </motion.span>
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-heading text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl"
                  >
                    {slide.title.split(" ").map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </motion.h1>
                  <motion.p
                    key={`subtitle-${index}`}
                    initial={{ opacity: 0 }}
                    animate={selectedIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-6 text-lg text-muted-foreground italic font-heading"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    key={`btn-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-10"
                  >
                    <Link href={slide.link}>
                      <Button size="lg" className="rounded-full bg-primary px-10 py-6 text-lg font-medium text-white shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Shop Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                {/* Images */}
                <div className="relative flex-1">
                   <motion.div
                    key={`img-container-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={selectedIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative z-10 mx-auto max-w-[500px] lg:mr-0"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={600}
                        height={800}
                        className="h-full w-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </motion.div>
                  {/* Decorative Blob */}
                  <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <Button 
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm hidden md:flex items-center justify-center text-foreground transition-all hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button 
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm hidden md:flex items-center justify-center text-foreground transition-all hover:scale-110"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 p-2 rounded-full bg-white/30 backdrop-blur-md">
        {slides.map((_, idx) => (
            <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-3 rounded-full transition-all duration-300 shadow-sm ${
                    idx === selectedIndex ? "bg-primary w-8" : "bg-white w-3 hover:bg-primary/50"
                }`}
            />
        ))}
      </div>

    </section>
  )
}
