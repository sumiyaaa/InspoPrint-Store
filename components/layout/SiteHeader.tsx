"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingBag, Menu, X, Search } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories/tshirts", label: "T-Shirts" },
  { href: "/categories/pajamas", label: "Pajamas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-heading">Inspo Print</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Cart + Icons */}
        <div className="flex items-center gap-5">
           {/* Search Icon */}
           <button 
             onClick={() => setIsSearchOpen(!isSearchOpen)}
             className="text-foreground hover:text-primary transition-colors"
           >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
           </button>
           
          <Link href="/cart" className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Search Bar Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 max-w-7xl">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-4 p-2 text-gray-400 hover:text-primary transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
