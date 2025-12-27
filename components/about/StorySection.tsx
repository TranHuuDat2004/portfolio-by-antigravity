"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StorySection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-24" id="about">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">My personal story</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
                        About Me
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I am a dedicated Software Engineering student at Ton Duc Thang University with a deep passion
                            for building efficient and user-friendly web solutions. My journey into programming started
                            with a curiosity to understand how things work, and it has grown into a drive to create
                            meaningful applications.
                        </p>
                        <p>
                            I enjoy tackling challenging problems and continuously expanding my skill set in the
                            ever-evolving world of technology. From developing full-stack e-commerce platforms to
                            creating fun, interactive web apps, my goal is to leverage my technical abilities to build
                            impactful products.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border/50">
                            <div>
                                <span className="block text-xs font-mono uppercase text-muted-foreground mb-1">Name</span>
                                <p className="font-medium text-foreground">Trần Hữu Đạt</p>
                            </div>
                            <div>
                                <span className="block text-xs font-mono uppercase text-muted-foreground mb-1">Location</span>
                                <p className="font-medium text-foreground">Ho Chi Minh City, VN</p>
                            </div>
                            <div>
                                <span className="block text-xs font-mono uppercase text-muted-foreground mb-1">Email</span>
                                <p className="font-medium text-foreground">tranhuudat.cv@gmail.com</p>
                            </div>
                            <div>
                                <span className="block text-xs font-mono uppercase text-muted-foreground mb-1">Availability</span>
                                <p className="font-medium text-primary flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Open to Internship
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-[3/4] relative bg-muted rounded-2xl overflow-hidden border border-border"
                >
                    <Image src="/assets/my_image.jpg" alt="Trần Hữu Đạt" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
