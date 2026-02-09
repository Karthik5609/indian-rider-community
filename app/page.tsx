import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsBanner } from "@/components/stats-banner";
import { CommunityFeed } from "@/components/community-feed";
import { GroupRides } from "@/components/group-rides";
import { Destinations } from "@/components/destinations";
import { RouteMap } from "@/components/route-map";
import { FeaturedRiders } from "@/components/featured-riders";
import { AuthSection } from "@/components/auth-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBanner />
      <CommunityFeed />
      <GroupRides />
      <Destinations />
      <RouteMap />
      <FeaturedRiders />
      <AuthSection />
      <Footer />
    </main>
  );
}
