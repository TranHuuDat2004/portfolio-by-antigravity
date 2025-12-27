"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, GraduationCap, Github } from "lucide-react";

const icons = {
    "Ton Duc Thang University": GraduationCap,
    "GitHub": Github,
    "default": Briefcase
};

export function ExperienceSection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-24" id="experience">
            <div className="mb-16">
                <span className="text-sm font-mono uppercase tracking-widest text-primary">My professional journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Experience & Education</h2>
                <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
                {EXPERIENCE.map((item, index) => {
                    // @ts-ignore - Simple icon mapping
                    const Icon = icons[item.company] || icons["default"];

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="bg-muted/30 border border-border/50 p-6 rounded-xl hover:bg-muted/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{item.role}</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                            <Icon size={16} />
                                            <span className="font-medium">{item.company}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                                        {item.duration}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
