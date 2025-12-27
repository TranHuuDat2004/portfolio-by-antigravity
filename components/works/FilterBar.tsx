"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterBarProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
}

export function FilterBar({ categories, activeCategory, onSelect }: FilterBarProps) {
    return (
        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={cn(
                        "relative px-4 py-2 text-sm uppercase tracking-widest transition-colors hover:text-primary",
                        activeCategory === category ? "text-primary" : "text-muted-foreground"
                    )}
                >
                    {category}
                    {activeCategory === category && (
                        <motion.div
                            layoutId="filter-pill"
                            className="absolute inset-0 border border-primary rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
