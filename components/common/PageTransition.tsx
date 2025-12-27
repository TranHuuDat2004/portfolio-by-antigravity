"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
    children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} // Using simple fade for now to avoid complexity with clipPath masking issues
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-screen flex flex-col"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
