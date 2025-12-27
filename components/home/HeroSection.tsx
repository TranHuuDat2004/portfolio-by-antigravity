"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
        >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80 pointer-events-none" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
                >
                    IMMERSIVE
                    <br />
                    EXPERIENCE.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide"
                >
                    Crafting digital narratives with code and motion.
                    <br />
                    Senior Creative Developer & UI/UX Specialist.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
