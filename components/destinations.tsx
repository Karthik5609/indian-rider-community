"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  Thermometer,
  Calendar,
  ChevronRight,
  Mountain,
  Waves,
  TreePine,
  Landmark,
  Bike,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Ladakh",
    tagline: "The Land of High Passes",
    region: "Jammu & Kashmir",
    image: "/images/dest-ladakh.jpg",
    rating: 4.9,
    bestTime: "Jun - Sep",
    altitude: "3,500m+",
    topRoutes: ["Khardung La", "Pangong Lake", "Nubra Valley"],
    description:
      "The ultimate motorcycle destination in India. Ride through the highest motorable passes, pristine lakes, and ancient monasteries.",
    difficulty: "Advanced",
    category: "mountain",
  },
  {
    id: 2,
    name: "Spiti Valley",
    tagline: "The Middle Land",
    region: "Himachal Pradesh",
    image: "/images/dest-spiti.jpg",
    rating: 4.8,
    bestTime: "May - Oct",
    altitude: "3,800m+",
    topRoutes: ["Kunzum Pass", "Key Monastery", "Chandratal"],
    description:
      "A cold desert mountain valley tucked between Tibet and India. Remote, raw, and breathtakingly beautiful landscapes await.",
    difficulty: "Advanced",
    category: "mountain",
  },
  {
    id: 3,
    name: "Goa & Konkan Coast",
    tagline: "Coastal Paradise",
    region: "Goa & Maharashtra",
    image: "/images/dest-goa.jpg",
    rating: 4.6,
    bestTime: "Oct - Mar",
    altitude: "Sea Level",
    topRoutes: ["NH66 Coastal", "Old Goa Heritage", "Malvan"],
    description:
      "Sun-kissed beaches, Portuguese heritage, and the most relaxed riding vibes. Perfect for a laid-back coastal cruise.",
    difficulty: "Beginner",
    category: "coastal",
  },
  {
    id: 4,
    name: "Rajasthan",
    tagline: "Land of Kings",
    region: "Rajasthan",
    image: "/images/dest-rajasthan.jpg",
    rating: 4.7,
    bestTime: "Oct - Mar",
    altitude: "200-800m",
    topRoutes: ["Jaipur - Jaisalmer", "Udaipur Circuit", "Rann of Kutch"],
    description:
      "Ride through the golden desert past majestic forts, ornate havelis, and vibrant cities. Desert camping under a blanket of stars.",
    difficulty: "Intermediate",
    category: "heritage",
  },
  {
    id: 5,
    name: "Kerala",
    tagline: "God's Own Country",
    region: "Kerala",
    image: "/images/dest-kerala.jpg",
    rating: 4.7,
    bestTime: "Sep - Mar",
    altitude: "0-2,600m",
    topRoutes: ["Munnar Tea Gardens", "Wayanad", "Alleppey Backwaters"],
    description:
      "From misty tea plantations to serene backwaters and spice gardens. A sensory feast for every rider.",
    difficulty: "Beginner",
    category: "nature",
  },
  {
    id: 6,
    name: "Meghalaya",
    tagline: "Abode of Clouds",
    region: "Northeast India",
    image: "/images/dest-meghalaya.jpg",
    rating: 4.8,
    bestTime: "Oct - May",
    altitude: "150-1,900m",
    topRoutes: ["Dawki River", "Cherrapunji", "Living Root Bridges"],
    description:
      "Explore the wettest place on earth, crystal-clear rivers, and living root bridges in India's most underrated riding destination.",
    difficulty: "Intermediate",
    category: "nature",
  },
];

const categories = [
  { key: "all", label: "All Destinations", icon: MapPin },
  { key: "mountain", label: "Mountains", icon: Mountain },
  { key: "coastal", label: "Coastal", icon: Waves },
  { key: "nature", label: "Nature", icon: TreePine },
  { key: "heritage", label: "Heritage", icon: Landmark },
];

function difficultyBadge(d: string) {
  switch (d) {
    case "Beginner":
      return "bg-green-500/10 text-green-400";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-400";
    case "Advanced":
      return "bg-red-500/10 text-red-400";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function DestinationCard({
  dest,
}: {
  dest: (typeof destinations)[0];
}) {
  const [expanded, setExpanded] = useState(false);

  function handleExploreRoutes() {
    const mapSection = document.getElementById("map");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dest.image || "/placeholder.svg"}
          alt={`Motorcycle riding in ${dest.name}, ${dest.region}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${difficultyBadge(dest.difficulty)}`}
          >
            {dest.difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {dest.name}
          </h3>
          <p className="text-sm text-primary">{dest.tagline}</p>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {dest.description}
        </p>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Star className="h-4 w-4 text-accent" />
            <span>{dest.rating} Rating</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{dest.bestTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Thermometer className="h-4 w-4 text-primary" />
            <span>{dest.altitude}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{dest.region}</span>
          </div>
        </div>

        <button
          type="button"
          className="mb-4 w-full text-left"
          onClick={() => setExpanded(!expanded)}
        >
          <p className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Top Routes
            <span className="text-primary text-[10px] normal-case font-medium">
              {expanded ? "Hide" : "Show"}
            </span>
          </p>
          {expanded && (
            <div className="flex flex-col gap-2">
              {dest.topRoutes.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {r}
                </span>
              ))}
            </div>
          )}
          {!expanded && (
            <div className="flex flex-wrap gap-1.5">
              {dest.topRoutes.map((r) => (
                <span
                  key={r}
                  className="rounded-md bg-secondary px-2 py-0.5 text-xs text-foreground/70"
                >
                  {r}
                </span>
              ))}
            </div>
          )}
        </button>

        <Button
          variant="outline"
          className="w-full gap-2 border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={handleExploreRoutes}
        >
          <Bike className="h-4 w-4" />
          Explore Routes
          <ChevronRight className="ml-auto h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}

export function Destinations() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? destinations
      : destinations.filter((d) => d.category === activeCategory);

  return (
    <section id="destinations" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Ride <span className="text-primary">Destinations</span>
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Discover India's most iconic motorcycle destinations. From Himalayan
            passes to tropical coastlines, every route tells a story.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/50 bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border/50 bg-card py-16 text-center">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-semibold text-foreground">
              No destinations found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
