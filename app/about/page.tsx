import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Leaf, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Sparkles,
    title: "Bold Creativity",
    description:
      "Every design starts as a hand-drawn concept brought to life with the latest DTG printing technology. We celebrate originality.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We use eco-friendly water-based inks, organic cotton, and responsible sourcing to minimize our footprint on the planet.",
  },
  {
    icon: Heart,
    title: "Premium Quality",
    description:
      "From fabric selection to the final stitch, every piece passes our rigorous quality checks so your prints stay vibrant wash after wash.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We collaborate with independent artists worldwide, ensuring every purchase supports creative talent and fair wages.",
  },
]

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Unique Designs" },
  { value: "15+", label: "Artist Partners" },
  { value: "98%", label: "Satisfaction Rate" },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Where Art Meets <span className="text-primary">Comfort</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground lg:mx-0">
              PrintPulse was born from a simple idea: everyone deserves to wear something that tells
              their story. We combine cutting-edge print technology with premium fabrics to create
              wearable art that feels as good as it looks.
            </p>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="PrintPulse creative workshop"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What We Stand For
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our core values shape every product we create
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We believe self-expression should not be limited to a canvas. At PrintPulse, we are
              building a world where everyday apparel becomes a medium for art, personality, and
              creativity. Whether it is a bold graphic tee for the weekend or the coziest pajamas
              for bedtime, every piece is crafted to make you feel uniquely you.
            </p>
            <Link href="/categories/tshirts" className="mt-8 inline-block">
              <Button className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Our Collection <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
