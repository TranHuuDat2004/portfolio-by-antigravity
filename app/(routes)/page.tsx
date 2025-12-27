import { HeroSection } from "@/components/home/HeroSection";
import { SelectedWorks } from "@/components/home/SelectedWorks";
import { BlogSection } from "@/components/home/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SelectedWorks />
      <BlogSection />
    </div>
  );
}
