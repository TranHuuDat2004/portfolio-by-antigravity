"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export function TechStackTicker() {
    return (
        <div className="w-full py-12 overflow-hidden bg-muted/30 border-y border-border/40">
            <div className="flex">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60,
                    }}
                    className="flex gap-16 pr-16 whitespace-nowrap"
                >
                    {/* Duplicate list to create seamless loop */}
                    {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
                        <span
                            key={`${skill}-${i}`}
                            className="text-4xl md:text-6xl font-black uppercase text-muted-foreground/20"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
