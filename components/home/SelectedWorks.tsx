"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/works/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SelectedWorks() {
    // IDs for: Omacha Shop (1), BrickShop (2), Aptis Practice (4)
    const featuredIds = [1, 2, 4];
    const featuredProjects = PROJECTS.filter(p => featuredIds.includes(p.id));

    return (
        <section className="container mx-auto px-4 md:px-6 py-24" id="works">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-sm font-mono uppercase tracking-widest text-primary">Selected Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary" />
                </div>
                <Link href="/works" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    View All Projects <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
                <Link href="/works" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    View All Projects <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}
