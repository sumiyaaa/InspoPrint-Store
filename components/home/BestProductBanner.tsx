"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function BestProductBanner() {
  return (
    <section className="py-20 bg-[#fbf9e4] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
          
          {/* Left Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-1/3"
          >
             <div className="relative h-[400px] w-full">
                {/* Placeholder for Man with Bag */}
                <Image 
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600" 
                    alt="Man with Bag"
                    fill
                    className="object-cover object-top mix-blend-multiply opacity-80"
                />
             </div>
          </motion.div>

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center max-w-2xl mx-auto z-10"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find The Best Product <br /> from Our Shop
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Designers who are interesten creating state ofthe.
            </p>
            <Button 
                asChild 
                size="lg" 
                className="rounded-full bg-black text-white hover:bg-black/80 px-10 py-6 text-lg font-medium"
            >
              <Link href="/categories/tshirts">Shop Now</Link>
            </Button>
          </motion.div>

           {/* Right Image Placeholder */}
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-1/4"
          >
             <div className="relative h-[300px] w-full">
                {/* Placeholder for Shoes/Stack */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
                 <Image 
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" 
                    alt="Collection"
                    fill
                    className="object-cover object-center rounded-2xl rotate-12 hover:rotate-0 transition-transform duration-500"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
