import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 md:py-24 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-12 justify-between">

                <div className="flex flex-col gap-4 max-w-sm">
                    <Link href="/" className="text-2xl font-bold tracking-tighter lowercase">
                        <span>tranhuudat</span>
                        <span className="font-light opacity-60">2004</span>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                        A passionate Web Developer dedicated to building beautiful and useful applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold uppercase tracking-wider mb-2">Quick Links</h4>
                        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                        <Link href="/assets/resume.pdf" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Resume</Link>
                        <Link href="/works" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold uppercase tracking-wider mb-2">Connect</h4>
                        <Link href="https://github.com/TranHuuDat2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <Github size={16} /> GitHub
                        </Link>
                        <Link href="https://linkedin.com/in/tranhuudat2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <Linkedin size={16} /> LinkedIn
                        </Link>
                        <Link href="mailto:tranhuudat.cv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <Mail size={16} /> Email
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* Placeholder for themes or other footer content */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border/20 text-center md:text-left text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {currentYear} Trần Hữu Đạt. All rights reserved.</p>
                <p>Last updated: <b>December 27th 2025</b></p>
            </div>
        </footer>
    );
}
