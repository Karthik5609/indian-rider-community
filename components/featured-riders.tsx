import {
  MapPin,
  Bike,
  Route,
  Star,
  Trophy,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const riders = [
  {
    name: "Karthik Nair",
    avatar: "KN",
    location: "Bengaluru, Karnataka",
    bike: "Royal Enfield Interceptor 650",
    rides: 142,
    distance: "48,000 km",
    badge: "Trail Blazer",
    bio: "Software engineer by week, highway hunter by weekend. Covered all Southern states on two wheels.",
  },
  {
    name: "Sneha Deshmukh",
    avatar: "SD",
    location: "Pune, Maharashtra",
    bike: "KTM 390 Adventure",
    rides: 98,
    distance: "32,000 km",
    badge: "Mountain Queen",
    bio: "Solo female rider who's conquered Ladakh, Spiti, and Zanskar. Advocate for women in riding.",
  },
  {
    name: "Rajat Singh",
    avatar: "RS",
    location: "Jaipur, Rajasthan",
    bike: "Bajaj Dominar 400",
    rides: 176,
    distance: "62,000 km",
    badge: "Road Legend",
    bio: "Desert riding specialist. Organized 50+ group rides across Rajasthan and Gujarat.",
  },
  {
    name: "Ananya Iyer",
    avatar: "AI",
    location: "Chennai, Tamil Nadu",
    bike: "Honda CB350",
    rides: 85,
    distance: "28,000 km",
    badge: "Coastal Cruiser",
    bio: "Exploring every temple town and beach along India's eastern coast, one ride at a time.",
  },
];

function badgeColor(badge: string) {
  switch (badge) {
    case "Trail Blazer":
      return "bg-primary/10 text-primary border-primary/20";
    case "Mountain Queen":
      return "bg-accent/10 text-accent border-accent/20";
    case "Road Legend":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    case "Coastal Cruiser":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

export function FeaturedRiders() {
  return (
    <section className="border-t border-border/30 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Featured <span className="text-primary">Riders</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Meet some of the most active members of our community. These riders
            inspire thousands with their journeys.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {riders.map((rider) => (
            <article
              key={rider.name}
              className="group rounded-2xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <Avatar className="mx-auto h-20 w-20 border-4 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">
                  {rider.avatar}
                </AvatarFallback>
              </Avatar>

              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {rider.name}
              </h3>

              <div className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {rider.location}
              </div>

              <span
                className={`mt-3 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${badgeColor(rider.badge)}`}
              >
                <Trophy className="h-3 w-3" />
                {rider.badge}
              </span>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {rider.bio}
              </p>

              <div className="mt-4 flex items-center justify-center gap-1 text-xs text-foreground/70">
                <Bike className="h-3.5 w-3.5 text-primary" />
                {rider.bike}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border/30 pt-4">
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    {rider.rides}
                  </p>
                  <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" />
                    Rides
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    {rider.distance}
                  </p>
                  <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Route className="h-3 w-3" />
                    Distance
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
