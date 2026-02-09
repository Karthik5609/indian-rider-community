import { Users, MapPin, Route, Mountain, Calendar, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "12,000+", label: "Registered Riders" },
  { icon: Route, value: "350+", label: "Routes Documented" },
  { icon: Mountain, value: "28", label: "States & UTs" },
  { icon: Calendar, value: "500+", label: "Group Rides Completed" },
  { icon: MapPin, value: "1.2M+", label: "Kilometers Ridden" },
  { icon: Shield, value: "150+", label: "Riding Clubs" },
];

export function StatsBanner() {
  return (
    <section className="border-y border-border/30 bg-primary/5 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
