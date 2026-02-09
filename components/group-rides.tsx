"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronRight,
  Bike,
  Shield,
  Plus,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const rides = [
  {
    id: 1,
    title: "Delhi to Spiti Valley Expedition",
    organizer: "Himalayan Riders Club",
    date: "Mar 15 - Mar 22, 2026",
    startPoint: "India Gate, New Delhi",
    endPoint: "Kaza, Spiti Valley",
    distance: "1,200 km",
    difficulty: "Advanced",
    riders: 18,
    maxRiders: 25,
    description:
      "An epic 8-day expedition through some of the most dramatic landscapes in India. We'll cross Kunzum Pass, visit Key Monastery, and camp under the stars in Chandratal.",
    tags: ["Multi-day", "Camping", "High Altitude"],
    avatars: ["RK", "SM", "AP", "DG"],
    filters: ["Multi-day", "Mountain"],
  },
  {
    id: 2,
    title: "Goa Coastal Weekend Ride",
    organizer: "Konkan Cruisers",
    date: "Mar 8 - Mar 9, 2026",
    startPoint: "Panaji, Goa",
    endPoint: "Gokarna, Karnataka",
    distance: "320 km",
    difficulty: "Beginner Friendly",
    riders: 32,
    maxRiders: 40,
    description:
      "A relaxed weekend coastal cruise from Goa to Gokarna. Beach stops, seafood, and sunset views. Perfect for new riders joining their first group ride.",
    tags: ["Weekend", "Coastal", "Beginner"],
    avatars: ["NS", "PK", "RT", "MJ"],
    filters: ["This Weekend", "Beginner Friendly", "Coastal"],
  },
  {
    id: 3,
    title: "Rajasthan Desert Circuit",
    organizer: "Desert Hawks MC",
    date: "Mar 28 - Apr 2, 2026",
    startPoint: "Jaipur, Rajasthan",
    endPoint: "Jaisalmer, Rajasthan",
    distance: "850 km",
    difficulty: "Intermediate",
    riders: 22,
    maxRiders: 30,
    description:
      "Ride through the golden heart of Rajasthan. Magnificent forts, desert camping under the stars, and the legendary Sam Sand Dunes. Chai stops at traditional dhabas.",
    tags: ["Heritage", "Desert", "Camping"],
    avatars: ["VR", "KS", "BN", "TL"],
    filters: ["Multi-day"],
  },
  {
    id: 4,
    title: "Western Ghats Monsoon Run",
    organizer: "Deccan Riders",
    date: "Apr 12 - Apr 13, 2026",
    startPoint: "Pune, Maharashtra",
    endPoint: "Mahabaleshwar, Maharashtra",
    distance: "240 km",
    difficulty: "Intermediate",
    riders: 15,
    maxRiders: 20,
    description:
      "Experience the lush green Western Ghats on a thrilling weekend ride. Winding ghat roads, misty mountain tops, and strawberry fields at the destination.",
    tags: ["Weekend", "Mountain", "Scenic"],
    avatars: ["AK", "SN", "RD", "PL"],
    filters: ["This Weekend", "Mountain"],
  },
];

const filterOptions = [
  "All Rides",
  "This Weekend",
  "Multi-day",
  "Beginner Friendly",
  "Mountain",
  "Coastal",
];

function difficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner Friendly":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "Advanced":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

function RideCard({ ride }: { ride: (typeof rides)[0] }) {
  const [joined, setJoined] = useState(false);
  const [riderCount, setRiderCount] = useState(ride.riders);
  const spotsLeft = ride.maxRiders - riderCount;

  function handleJoin() {
    if (joined) {
      setJoined(false);
      setRiderCount((prev) => prev - 1);
    } else {
      setJoined(true);
      setRiderCount((prev) => prev + 1);
    }
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {ride.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              {ride.organizer}
            </p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${difficultyColor(ride.difficulty)}`}
          >
            {ride.difficulty}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {ride.description}
        </p>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{ride.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Bike className="h-4 w-4 text-primary" />
            <span>{ride.distance}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{ride.startPoint}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Clock className="h-4 w-4 text-primary" />
            <span>
              {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} left
            </span>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {ride.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border/30 pt-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {ride.avatars.map((a) => (
                <Avatar key={a} className="h-8 w-8 border-2 border-card">
                  <AvatarFallback className="bg-primary/10 text-[10px] font-bold text-primary">
                    {a}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {riderCount} riders joined
            </span>
          </div>
          <Button
            size="sm"
            className={
              joined
                ? "gap-1 bg-green-500/10 text-green-400 hover:bg-red-500/10 hover:text-red-400"
                : "gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
            }
            onClick={handleJoin}
          >
            {joined ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Joined
              </>
            ) : (
              <>
                Join Ride
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function GroupRides() {
  const [activeFilter, setActiveFilter] = useState("All Rides");
  const [showOrganizeForm, setShowOrganizeForm] = useState(false);

  const filteredRides =
    activeFilter === "All Rides"
      ? rides
      : rides.filter((r) => r.filters.includes(activeFilter));

  return (
    <section
      id="rides"
      className="scroll-mt-20 border-t border-border/30 bg-secondary/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Group <span className="text-primary">Rides</span>
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Join organized rides across India or plan your own. From weekend
              getaways to multi-day expeditions, there is something for every
              rider.
            </p>
          </div>
          <Button
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setShowOrganizeForm(!showOrganizeForm)}
          >
            <Plus className="h-4 w-4" />
            {showOrganizeForm ? "Cancel" : "Organize a Ride"}
          </Button>
        </div>

        {showOrganizeForm && (
          <div className="mb-10 rounded-2xl border border-primary/20 bg-card p-6">
            <h3 className="mb-4 font-display text-xl font-bold text-foreground">
              Plan a New Group Ride
            </h3>
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setShowOrganizeForm(false);
              }}
            >
              <div>
                <label
                  htmlFor="rideName"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Ride Name
                </label>
                <input
                  id="rideName"
                  type="text"
                  placeholder="e.g. Bangalore to Coorg Weekend"
                  className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label
                  htmlFor="rideDate"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Date
                </label>
                <input
                  id="rideDate"
                  type="date"
                  className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label
                  htmlFor="rideStart"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Starting Point
                </label>
                <input
                  id="rideStart"
                  type="text"
                  placeholder="e.g. MG Road, Bangalore"
                  className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label
                  htmlFor="rideEnd"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Destination
                </label>
                <input
                  id="rideEnd"
                  type="text"
                  placeholder="e.g. Coorg, Karnataka"
                  className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="rideDesc"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Description
                </label>
                <textarea
                  id="rideDesc"
                  rows={3}
                  placeholder="Describe your ride plan, what to expect, gear needed..."
                  className="w-full resize-none rounded-xl border border-border/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div className="flex gap-3 sm:col-span-2">
                <Button
                  type="submit"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4" />
                  Create Ride
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-border/50 bg-transparent text-foreground hover:bg-secondary"
                  onClick={() => setShowOrganizeForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        <div className="mb-8 flex flex-wrap gap-3">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/50 bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredRides.length === 0 ? (
          <div className="rounded-2xl border border-border/50 bg-card py-16 text-center">
            <Users className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-semibold text-foreground">
              No rides match this filter
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different filter or organize your own ride!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
