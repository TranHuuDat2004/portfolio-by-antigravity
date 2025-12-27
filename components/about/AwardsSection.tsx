"use client";

import { motion } from "framer-motion";
import { AWARDS } from "@/lib/constants";
import Image from "next/image";

export function AwardsSection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-24 bg-muted/20" id="awards">
            <div className="mb-16">
                <span className="text-sm font-mono uppercase tracking-widest text-primary">Recognition & Accomplishments</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Awards & Achievements</h2>
                <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {AWARDS.map((award) => (
                    <div key={award.id} className="contents">
                        {/* Award Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-background border border-border p-8 rounded-2xl shadow-sm"
                        >
                            <span className="text-sm font-mono text-primary mb-2 block">{award.date}</span>
                            <h3 className="text-2xl font-bold mb-1">{award.title}</h3>
                            <p className="text-lg font-medium text-foreground/80 mb-4">{award.competition}</p>
                            <p className="text-sm text-muted-foreground mb-6 border-b border-border pb-4">
                                {award.issuer}
                            </p>

                            <ul className="space-y-3">
                                {award.description.map((desc, i) => (
                                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                                        <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Award Photo Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col"
                        >
                            <h3 className="text-xl font-bold mb-6">A Proud Moment</h3>
                            <div className="relative flex-grow min-h-[300px] rounded-xl overflow-hidden bg-muted">
                                <Image src={award.image} alt={award.title} fill className="object-cover" />
                            </div>
                            <p className="text-sm text-center text-muted-foreground mt-4 italic">
                                Receiving the design award at Ton Duc Thang University, 2023.
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
