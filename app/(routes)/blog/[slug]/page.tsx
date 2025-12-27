"use client";

import { BLOG_POSTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">

                {/* Back Button */}
                <Link href="/#blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                    {/* Main Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 text-sm">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>Trần Hữu Đạt</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>October 14, 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag size={16} />
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 bg-muted">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div
                                className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </motion.div>
                    </div>

                    {/* Sidebar / TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-muted/30 border border-border rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Related Posts</h3>
                                <div className="space-y-4">
                                    {BLOG_POSTS.filter(p => p.id !== post.id).map(related => (
                                        <Link key={related.id} href={related.link} className="block group">
                                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                                {related.title}
                                            </h4>
                                            <span className="text-xs text-muted-foreground">Read more →</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </article>
    );
}
