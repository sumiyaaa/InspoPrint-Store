import React from "react"
import type { Metadata } from "next"
import { DM_Sans, Space_Mono, Playfair_Display } from "next/font/google"

import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { ScrollToTop } from "@/components/layout/ScrollToTop"

const _dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Inspo Print Store | Custom Printed T-Shirts & Pajamas",
  description:
    "Discover vibrant custom-printed T-shirts and cozy pajamas. Express your unique style with Inspo Print— quality fabrics, bold designs, delivered to your door.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${_dmSans.variable} ${_playfair.variable} ${_spaceMono.variable}`}>
        <CartProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  )
}
