export interface Product {
  id: string
  name: string
  price: number
  category: "tshirts" | "pajamas"
  image: string
  description: string
  sizes: string[]
  colors: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: "ts-001",
    name: "Sunset Vibes Tee",
    price: 29.99,
    category: "tshirts",
    image: "/images/tshirt-1.jpg",
    description:
      "A vibrant sunset-inspired graphic tee made from 100% premium cotton. Perfect for casual outings and weekend adventures. Features a unique hand-drawn sunset design with bold color gradients.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Coral", "White", "Navy"],
    featured: true,
  },
  {
    id: "ts-002",
    name: "Urban Art Tee",
    price: 34.99,
    category: "tshirts",
    image: "/images/tshirt-2.jpg",
    description:
      "Express yourself with this urban art-inspired print. High-quality DTG printing ensures vivid colors that last. Made from a soft cotton-polyester blend for the perfect fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    featured: true,
  },
  {
    id: "ts-003",
    name: "Tropical Paradise Tee",
    price: 27.99,
    category: "tshirts",
    image: "/images/tshirt-3.jpg",
    description:
      "Bring the tropics wherever you go with this colorful palm-tree print. Lightweight and breathable fabric makes it ideal for summer. Machine washable with fade-resistant ink.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Mint", "White", "Sand"],
    featured: false,
  },
  {
    id: "ts-004",
    name: "Retro Wave Tee",
    price: 32.99,
    category: "tshirts",
    image: "/images/tshirt-4.jpg",
    description:
      "A retro-inspired geometric wave pattern that catches every eye. Premium ringspun cotton for ultimate softness. Relaxed fit for all-day comfort.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Peach", "Teal", "White"],
    featured: true,
  },
  {
    id: "ts-005",
    name: "Abstract Bloom Tee",
    price: 31.99,
    category: "tshirts",
    image: "/images/tshirt-5.jpg",
    description:
      "An abstract floral design with a modern twist. The all-over print gives this tee a standout look. Eco-friendly water-based inks on organic cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Lavender", "Cream", "Rose"],
    featured: false,
  },
  {
    id: "ts-006",
    name: "Cosmic Explorer Tee",
    price: 35.99,
    category: "tshirts",
    image: "/images/tshirt-6.jpg",
    description:
      "Journey through the cosmos with this galactic print. Features a detailed space-themed illustration with a bold color palette. Unisex fit in ultra-soft tri-blend fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Midnight", "White"],
    featured: false,
  },
  {
    id: "pj-001",
    name: "Dreamy Cloud Pajamas",
    price: 49.99,
    category: "pajamas",
    image: "/images/pajama-1.jpg",
    description:
      "Drift off to sleep in these cloud-print pajamas. Made from the softest brushed cotton for ultimate bedtime comfort. Set includes matching top and pants with an elastic waistband.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sky Blue", "White", "Pink"],
    featured: true,
  },
  {
    id: "pj-002",
    name: "Starry Night Pajamas",
    price: 54.99,
    category: "pajamas",
    image: "/images/pajama-2.jpg",
    description:
      "Gaze at the stars from the comfort of your bed in these beautiful star-print pajamas. Luxurious satin-touch fabric with a relaxed cut. Features a button-down top and drawstring pants.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Dusty Rose", "Sage"],
    featured: true,
  },
  {
    id: "pj-003",
    name: "Cozy Stripe Pajamas",
    price: 44.99,
    category: "pajamas",
    image: "/images/pajama-3.jpg",
    description:
      "Classic stripes meet modern comfort in these cozy pajamas. Temperature-regulating jersey fabric keeps you comfortable all night. Set includes a loose-fit top and relaxed pants.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream/Blue", "Pink/White", "Gray/White"],
    featured: false,
  },
  {
    id: "pj-004",
    name: "Floral Garden Pajamas",
    price: 52.99,
    category: "pajamas",
    image: "/images/pajama-4.jpg",
    description:
      "Surrounded by blooms in these delightful floral pajamas. Premium modal fabric feels like a dream against your skin. Features a wrap-style top and wide-leg pants.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Rose", "Sage", "Ivory"],
    featured: true,
  },
  {
    id: "pj-005",
    name: "Geometric Dream Pajamas",
    price: 47.99,
    category: "pajamas",
    image: "/images/pajama-5.jpg",
    description:
      "Modern geometric patterns for the style-conscious sleeper. Silky smooth bamboo-blend fabric with natural temperature regulation. Includes a crew-neck top and jogger-style pants.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Teal", "Coral", "Charcoal"],
    featured: false,
  },
  {
    id: "pj-006",
    name: "Animal Print Pajamas",
    price: 51.99,
    category: "pajamas",
    image: "/images/pajama-6.jpg",
    description:
      "Fun animal prints for playful bedtime vibes. Made from 100% organic cotton with a percale weave for softness. Complete set with notch-collar top and pull-on pants.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blush", "Mint", "Lemon"],
    featured: false,
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: "tshirts" | "pajamas"): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
