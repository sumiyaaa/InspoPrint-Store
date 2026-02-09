import React from "react"
import type { Metadata } from "next"
import { DM_Sans, Space_Mono } from "next/font/google"

import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const _dmSans = DM_Sans({ subsets: ["latin"] })
const _spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inspoprint Store | Custom Printed T-Shirts & Pajamas",
  description:
    "Discover vibrant custom-printed T-shirts and cozy pajamas. Express your unique style with nspoprint— quality fabrics, bold designs, delivered to your door.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  )
}
