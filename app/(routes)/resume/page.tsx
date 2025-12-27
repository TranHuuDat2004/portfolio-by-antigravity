"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, File } from "lucide-react";

export default function ResumePage() {
    return (
        <div className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">My Professional Profile</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Download My Resume</h2>
                        <div className="h-1 w-20 bg-primary mx-auto" />
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">

                    {/* Left Column: Preview Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/3 relative"
                    >
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-muted/50 shadow-2xl backdrop-blur-sm">
                            <Image
                                src="/assets/summary.PNG"
                                alt="Resume Preview"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Download Options */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >

                        {/* Option 1: Summary CV */}
                        <div className="bg-background/50 border border-border p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors backdrop-blur-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <FileText size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">Summary CV (1 Page)</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                A concise, one-page version focusing on key skills and standout projects. Ideal for a quick overview of my qualifications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/assets/resume/TranHuuDat-Resume-Summary.pdf"
                                    download
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                                >
                                    <Download size={18} /> English Version
                                </a>
                                <a
                                    href="/assets/resume/TranHuuDat-Resume-Summary-VN.pdf"
                                    download
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background hover:bg-muted font-bold transition-colors"
                                >
                                    <Download size={18} /> Vietnamese Version
                                </a>
                            </div>
                        </div>

                        {/* Option 2: Full CV */}
                        <div className="bg-background/50 border border-border p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors backdrop-blur-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <File size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">Full CV (Detailed)</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                The comprehensive version, including all projects, experiences, and achievements in detail. Best for in-depth review.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/assets/resume/TranHuuDat-Resume-Full.pdf"
                                    download
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border bg-background hover:bg-muted font-bold transition-colors"
                                >
                                    <Download size={18} /> Download Full CV
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
