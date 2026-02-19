import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StackSection } from "@/components/StackSection";
import { LibraryStats } from "@/components/LibraryStats";
import { DesignPatterns } from "@/components/DesignPatterns";
import { UserJourneys } from "@/components/UserJourneys";
import { InspirationToCreation } from "@/components/InspirationToCreation";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StackSection />
      <ProjectsSection />
      <LibraryStats />
      <DesignPatterns />
      <UserJourneys />
      <InspirationToCreation />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
