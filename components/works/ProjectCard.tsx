"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        image: string;
        video?: string;
        description: string;
        tech: string[];
        link: string;
        year: string;
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={project.link} target="_blank" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    {/* Fallback image if video fails or while loading. In real app, use real images. */}
                    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                        {/* Placeholder for no image */}
                        <span className="text-4xl font-bold opacity-20">{project.title[0]}</span>
                    </div>

                    {/* We would put an Image component here, but for now using a div placeholder or simple img if available 
              If using real images, use next/image. For this demo, I rely on the placeholder div above 
              and overlay "Image" text if you want, or just colors. 
              Let's simulate an image with a gradient since we don't have files.
          */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                        project.id % 2 === 0 ? "from-indigo-500/20 to-purple-500/20" : "from-emerald-500/20 to-teal-500/20",
                        isHovered ? "opacity-0" : "opacity-100"
                    )} />

                    {/* Video Preview on Hover (Simulated with simple color change or animation for now as we lack video files) */}
                    <div className={cn(
                        "absolute inset-0 bg-neutral-900 transition-opacity duration-500 flex items-center justify-center",
                        isHovered ? "opacity-100" : "opacity-0"
                    )}>
                        <span className="text-sm font-mono text-primary animate-pulse">PLAYING PREVIEW...</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-2 py-1 rounded-full text-xs font-mono uppercase border border-border">
                        {project.category}
                    </div>
                </div>

                <div className="mt-4 flex items-start justify-between">
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2 max-w-sm">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs text-muted-foreground/60 border border-border/50 px-1.5 py-0.5 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
