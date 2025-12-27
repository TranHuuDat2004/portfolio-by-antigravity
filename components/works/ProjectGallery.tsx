"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web", "Mobile", "Design"];

export function ProjectGallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div className="w-full">
            <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
            />

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
