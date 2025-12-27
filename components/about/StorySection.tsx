"use client";

import { motion } from "framer-motion";

export function StorySection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
                        From Code<br />to Canvas
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I started my journey as a graphic designer, obsessed with typography and grid systems.
                            But as I delved deeper into the digital realm, I realized that static designs
                            could only tell half the story.
                        </p>
                        <p>
                            Coding became my new medium. It allowed me to breathe life into my creations,
                            transforming passive visuals into immersive experiences. Today, I bridge the gap
                            between design and engineering, building products that not only work flawlessly
                            but also feel vibrant and alive.
                        </p>
                        <p>
                            My approach is minimalist but bold. I believe in stripping away the unnecessary
                            to reveal the essence of a digital product. Every animation, every transition,
                            serves a purpose: to guide, to inform, and to delight.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-square relative bg-muted rounded-2xl overflow-hidden"
                >
                    {/* Placeholder for profile image */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <span className="text-9xl font-black text-neutral-800 uppercase rotate-[-5deg]">
                            Story
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
