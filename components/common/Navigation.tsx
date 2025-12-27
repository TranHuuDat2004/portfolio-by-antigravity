"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/(routes)" }, // Adjusted to point to root, handled via Next.js logic
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
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

    // Close mobile menu on path change
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
                <Link href="/" className="text-2xl font-bold tracking-tighter uppercase relative group overflow-hidden">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        Portfolio
                    </span>
                    <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                        Portfolio
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.filter(item => item.name !== "Home").map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative text-sm font-medium uppercase tracking-wide px-2 py-1 group overflow-hidden"
                        >
                            <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full">
                                {item.name}
                            </span>
                            <span className="absolute top-0 left-0 z-10 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 px-2 py-1">
                                {item.name}
                            </span>
                            {pathname === item.href && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 w-full h-[1px] bg-white"
                                />
                            )}
                        </Link>
                    ))}
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
                                        key={item.href}
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
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
