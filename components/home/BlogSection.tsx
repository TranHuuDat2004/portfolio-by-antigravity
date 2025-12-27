"use client";

import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogSection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-24" id="blog">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-sm font-mono uppercase tracking-widest text-primary">Sharing my knowledge</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">From The Blog</h2>
                    <div className="h-1 w-20 bg-primary" />
                </div>
                <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    View All Posts <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group border border-border rounded-xl overflow-hidden bg-background hover:border-primary/50 transition-colors"
                    >
                        <Link href={post.link} className="block">
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
                <Link href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    View All Posts <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}
