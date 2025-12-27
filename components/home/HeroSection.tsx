"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            id="hero"
        >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80 pointer-events-none" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center"
            >
                {/* Profile Card / Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 p-1 rounded-full border border-border/50 bg-background/50 backdrop-blur"
                >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative">
                        <Image src="/assets/my_image1.jpg" alt="Trần Hữu Đạt" fill className="object-cover" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                >
                    Building Digital
                    <br />
                    <span className="text-primary">Experiences</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide mb-10 leading-relaxed"
                >
                    A passionate Software Engineering student specializing in creating efficient, user-centric web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="/works"
                        className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        View my projects <ArrowRight size={20} />
                    </Link>

                    <Link
                        href="/contact"
                        className="px-8 py-3 rounded-full border border-primary/20 bg-background hover:bg-muted transition-colors font-bold text-lg tracking-wide"
                    >
                        Get in touch
                    </Link>
                </motion.div>

                {/* Social Links Small */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 flex items-center gap-6"
                >
                    <Link href="https://linkedin.com/in/tranhuudat2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://github.com/TranHuuDat2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="mailto:tranhuudat.cv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={20} />
                    </Link>
                </motion.div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
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
