"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        image: string;
        description: string;
        tech: string[];
        link: string;
        github?: string;
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
            className="group relative w-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted mb-6 border border-border/50">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className={cn(
                    "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                )}>
                    <Link href={project.link} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <ArrowUpRight size={20} />
                    </Link>
                    {project.github && (
                        <Link href={project.github} target="_blank" className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform">
                            <Github size={20} />
                        </Link>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-start gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-primary border border-primary/20 px-2 py-0.5 rounded">
                            {project.year}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 max-w-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-xs font-medium text-foreground/80 bg-muted px-2 py-1 rounded">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
