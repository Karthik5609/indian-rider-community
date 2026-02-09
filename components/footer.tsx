import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Rider Feed", href: "#feed" },
    { label: "Group Rides", href: "#rides" },
    { label: "Leaderboard", href: "#" },
    { label: "Events", href: "#" },
  ],
  Explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "Route Planner", href: "#map" },
    { label: "Ride Guides", href: "#" },
    { label: "Gear Reviews", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Safety Guidelines", href: "#" },
    { label: "Report an Issue", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Community Guidelines", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L8 8H3l4 6-2 8h4l3-4 3 4h4l-2-8 4-6h-5L12 2z" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                Ride<span className="text-primary">India</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              India's open motorcycle community. Connecting riders, sharing
              journeys, and building the road ahead together. From every corner
              of the subcontinent.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Community-driven, based across India
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                hello@rideindia.community
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +91 98765 43210
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            2026 RideIndia Community. Open source and community-driven.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with passion by Indian riders, for Indian riders.
          </p>
        </div>
      </div>
    </footer>
  );
}
