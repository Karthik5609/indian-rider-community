"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  MapPin,
  Users,
  Compass,
  MessageSquare,
  User,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#feed", label: "Community", icon: MessageSquare },
  { href: "#rides", label: "Group Rides", icon: Users },
  { href: "#destinations", label: "Destinations", icon: Compass },
  { href: "#map", label: "Route Map", icon: MapPin },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
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

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="#auth">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
          </Link>
          <Link href="#auth">
            <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <User className="h-4 w-4" />
              Join Now
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3 border-t border-border/50 pt-4">
              <Link href="#auth" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
              <Link href="#auth" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <User className="h-4 w-4" />
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
