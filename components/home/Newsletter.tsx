"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Image from "next/image"

export function Newsletter() {
  return (
    <section className="py-20 bg-[#F0F8FF] overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-1/4"
          >
             <div className="relative h-[300px] w-full">
                <Image 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
                    alt="Man Sitting"
                    fill
                    className="object-cover object-top mix-blend-multiply"
                />
             </div>
          </motion.div>

          {/* Center Content */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="flex-1 text-center max-w-2xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Our <br /> Latest Offers News
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe news latter
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto bg-white p-2 rounded-full shadow-lg">
               <Input 
                 type="email" 
                 placeholder="Your email here" 
                 className="border-none shadow-none focus-visible:ring-0 rounded-full px-6 py-6"
               />
               <Button size="lg" className="rounded-full px-8 py-6 w-full sm:w-auto">
                 Shop Now
               </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-1/4"
          >
             <div className="relative h-[300px] w-full">
                <Image 
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=600" 
                    alt="Woman Puffer"
                    fill
                    className="object-cover object-top mix-blend-multiply"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
