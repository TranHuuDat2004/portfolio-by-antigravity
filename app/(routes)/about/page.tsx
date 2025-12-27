import { StorySection } from "@/components/about/StorySection";
import { TechStackTicker } from "@/components/about/TechStackTicker";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6 mb-24">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase relative z-10">
                    The<br />Story
                </h1>
            </div>

            <TechStackTicker />
            <StorySection />

            <div className="container mx-auto px-4 md:px-6 text-center mt-24">
                <p className="text-xl uppercase tracking-widest text-muted-foreground mb-4">Let's create something together</p>
            </div>
        </div>
    );
}
