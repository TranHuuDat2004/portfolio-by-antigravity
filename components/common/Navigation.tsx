"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/(routes)" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/works" },
    { name: "Contact", href: "/contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 mix-blend-difference text-white",
                scrolled ? "py-4 bg-transparent backdrop-blur-none" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter lowercase relative group overflow-hidden">
                    <span>tranhuudat</span>
                    <span className="font-light opacity-80">2004</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.filter(item => item.name !== "Home").map((item) => (
                        <Link
                            key={item.name}
                            href={item.href === "/(routes)" ? "/" : item.href}
                            className="relative text-sm font-medium uppercase tracking-wide px-3 py-1 group overflow-hidden hover:text-primary transition-colors"
                        >
                            {item.name}
                            {pathname === item.href && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 w-full h-[1px] bg-primary"
                                />
                            )}
                        </Link>
                    ))}

                    <div className="h-4 w-[1px] bg-white/20 mx-2" />

                    <Link href="/resume" className="text-sm font-bold uppercase tracking-wider px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2">
                        Resume <Download size={14} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed inset-0 bg-background text-foreground z-40 flex flex-col items-center justify-center mix-blend-normal"
                        >
                            <div className="flex flex-col items-center gap-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i + 0.3 }}
                                    >
                                        <Link
                                            href={item.href === "/(routes)" ? "/" : item.href}
                                            className="text-4xl font-bold uppercase tracking-tighter hover:opacity-50 transition-opacity"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Link href="/resume" className="text-xl font-bold uppercase tracking-wider px-6 py-3 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-all flex items-center gap-2 mt-4">
                                        Resume <Download size={18} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
