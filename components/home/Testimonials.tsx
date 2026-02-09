"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    content: "The quality is outstanding! The prints are vibrant and haven't faded after multiple washes. Absolutely love my new tees!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Mike Chen",
    role: "Graphic Designer",
    content: "Finally found a store that gets custom printing right. The colors are exactly as I expected and the fabric feels premium.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    name: "Emma Davis",
    role: "Student",
    content: "Best pajamas ever! Super comfortable and the designs are so unique. I've already ordered three more sets!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join thousands of happy customers who love our products
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={item}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl border border-border/50 bg-card p-8 shadow-md hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/5" />
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-foreground mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
