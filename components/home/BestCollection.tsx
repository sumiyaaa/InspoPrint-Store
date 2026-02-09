"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const collectionItems = [
  {
    id: 1,
    name: "Menz Winter Jacket",
    price: "$50.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200",
    link: "/categories/pajamas",
  },
  {
    id: 2,
    name: "Summer Shirt",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=200",
    link: "/categories/tshirts",
  },
  {
    id: 3,
    name: "Casual Pants",
    price: "$60.00",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=200",
    link: "/categories/pajamas",
  },
]

export function BestCollection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Text & Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Best Collection <br /> of This Month
              </h2>
              <p className="text-muted-foreground mb-6">
                Designers who are interesten crea.
              </p>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8">
                <Link href="/categories/tshirts">Shop Now</Link>
              </Button>
            </div>
            
            <div className="relative h-[200px] w-[200px] mt-8">
               <Image 
                 src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=400" 
                 alt="Jeans Stack"
                 fill
                 className="object-cover rounded-lg"
               />
            </div>
          </motion.div>

          {/* Column 2: Center Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
               {/* Vertical text decoration */}
               <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-6xl md:text-8xl font-bold text-gray-100 -z-10 select-none">
                 MENZ
               </div>
               <Image 
                 src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800" 
                 alt="Man in Jacket"
                 fill
                 className="object-cover z-10"
               />
            </div>
          </motion.div>

          {/* Column 3: Product List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {collectionItems.map((item, idx) => (
              <div key={item.id} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
                 <div className="relative h-20 w-20 overflow-hidden rounded-md bg-muted">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                 </div>
                 <div>
                    <h4 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    {idx === 1 ? (
                        <Button size="sm" asChild className="mt-2 h-8 rounded-full bg-primary text-xs">
                           <Link href={item.link}>Shop Now</Link>
                        </Button>
                    ) : (
                         <span className="text-muted-foreground text-sm">{item.price}</span>
                    )}
                 </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
