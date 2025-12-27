import { ProjectGallery } from "@/components/works/ProjectGallery";

export default function WorksPage() {
    return (
        <div className="min-h-screen container mx-auto px-4 md:px-6 py-32">
            <div className="mb-16">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 uppercase">
                    Selected<br />Works
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl font-light">
                    A collection of projects exploring the intersection of design, technology, and user experience.
                </p>
            </div>

            <ProjectGallery />
        </div>
    );
}
