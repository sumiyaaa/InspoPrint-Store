"use client"

import React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Clock, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@printpulse.com",
    description: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Print Street",
    description: "Brooklyn, NY 11201",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Fri: 9am - 6pm",
    description: "Sat: 10am - 4pm",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            We Would Love to <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Hear From You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground"
          >
            Have a question about our products, need help with an order, or want to collaborate?
            Drop us a message and we will get back to you as soon as possible.
          </motion.p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    className="bg-background border-2 focus:border-primary transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="space-y-2"
                >
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="bg-background border-2 focus:border-primary transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background border-2 focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  required
                  className="bg-background border-2 focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                  className="resize-none bg-background border-2 focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <Button
                  type="submit"
                  className={`w-full gap-2 rounded-full text-base transition-all shadow-lg hover:shadow-xl sm:w-auto ${
                    submitted
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
                  }`}
                  size="lg"
                >
                  {submitted ? (
                    <>
                      <Check className="h-5 w-5" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-96"
          >
            <h2 className="text-2xl font-bold text-foreground">Contact Info</h2>
            <p className="mt-2 text-muted-foreground">
              Prefer to reach out directly? Here is how to find us.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 space-y-6"
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={item}
                  whileHover={{ x: 5 }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 shadow-sm"
                  >
                    <info.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground">{info.title}</p>
                    <p className="text-sm text-foreground">{info.detail}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* FAQ nudge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="mt-10 rounded-xl border border-border bg-gradient-to-br from-muted/30 to-muted/50 p-6 shadow-md"
            >
              <h3 className="font-semibold text-foreground">Frequently Asked</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Orders typically ship within 3-5 business days
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Free shipping on all orders over $75
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  30-day hassle-free returns on all items
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Custom bulk orders available for events
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
