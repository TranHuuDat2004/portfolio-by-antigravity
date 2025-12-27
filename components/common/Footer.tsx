import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 md:py-24 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-bold tracking-tighter uppercase">Portfolio</span>
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Creative Developer. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
