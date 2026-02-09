"use client";

import { useState, useMemo } from "react";
import {
  MapPin,
  Navigation,
  Maximize2,
  Mountain,
  Waves,
  TreePine,
  Landmark,
  Route,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const popularRoutes = [
  {
    id: 1,
    name: "Manali - Leh Highway",
    region: "Himachal - J&K",
    distance: "474 km",
    icon: Mountain,
    lat: 32.2396,
    lng: 77.1887,
    zoom: 8,
    highlights: "Rohtang Pass, Keylong, Jispa, Baralacha La, Tanglang La",
  },
  {
    id: 2,
    name: "Mumbai - Goa Coastal",
    region: "Maharashtra - Goa",
    distance: "590 km",
    icon: Waves,
    lat: 16.5449,
    lng: 73.5475,
    zoom: 8,
    highlights: "Konkan Coast, Ratnagiri, Malvan, Beaches",
  },
  {
    id: 3,
    name: "Shillong - Dawki",
    region: "Meghalaya",
    distance: "82 km",
    icon: TreePine,
    lat: 25.1864,
    lng: 91.9527,
    zoom: 10,
    highlights: "Umngot River, Living Root Bridges, Crystal clear waters",
  },
  {
    id: 4,
    name: "Jaipur - Jaisalmer",
    region: "Rajasthan",
    distance: "558 km",
    icon: Landmark,
    lat: 26.4499,
    lng: 71.3959,
    zoom: 8,
    highlights: "Jodhpur, Mehrangarh Fort, Thar Desert, Sam Sand Dunes",
  },
];

function getMapUrl(route: (typeof popularRoutes)[0]) {
  return `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${route.lat},${route.lng}&zoom=${route.zoom}&maptype=satellite`;
}

export function RouteMap() {
  const [selectedRoute, setSelectedRoute] = useState(popularRoutes[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const mapUrl = useMemo(() => getMapUrl(selectedRoute), [selectedRoute]);

  const filteredRoutes = popularRoutes.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="map" className="scroll-mt-20 border-t border-border/30 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Route <span className="text-primary">Planner</span>
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Explore popular motorcycle routes across India with integrated Google
            Maps. Plan your next adventure with detailed route information.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border/50 bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              {filteredRoutes.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    selectedRoute.id === route.id
                      ? "border-primary/50 bg-primary/10"
                      : "border-border/50 bg-card hover:border-primary/20 hover:bg-card/80"
                  }`}
                  onClick={() => setSelectedRoute(route)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        selectedRoute.id === route.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <route.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-foreground">
                        {route.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {route.region}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <Route className="h-3 w-3" />
                          {route.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
              <div className="flex items-center justify-between border-b border-border/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Navigation className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {selectedRoute.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedRoute.region} | {selectedRoute.distance}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5 text-xs bg-transparent"
                  onClick={() => {
                    const url = `https://www.google.com/maps/search/${encodeURIComponent(selectedRoute.name + ", India")}`;
                    window.open(url, "_blank");
                  }}
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Full Map
                </Button>
              </div>

              <div className="relative aspect-[16/10] w-full bg-secondary">
                <iframe
                  title={`Google Maps showing ${selectedRoute.name}`}
                  src={mapUrl}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="border-t border-border/30 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Route Highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedRoute.highlights.split(", ").map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      <MapPin className="h-3 w-3 text-primary" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
