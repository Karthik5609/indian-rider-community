import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, MapPin, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "12,000+", label: "Active Riders" },
  { icon: MapPin, value: "350+", label: "Routes Mapped" },
  { icon: Mountain, value: "28", label: "States Covered" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ride.jpg"
          alt="Motorcycle riders on a mountain highway in Ladakh, India"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Open Community for Indian Riders
          </div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance">
              Ride the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Spirit
              </span>{" "}
              of India
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Connect with thousands of riders across India. Share your journeys,
            plan epic group rides, and discover the most breathtaking routes from
            Ladakh to Kanyakumari.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#auth">
              <Button
                size="lg"
                className="gap-2 bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Start Riding
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#destinations">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border/60 px-8 text-lg bg-transparent"
              >
                Explore Routes
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
