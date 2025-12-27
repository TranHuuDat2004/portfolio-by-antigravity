import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { PageTransition } from "@/components/common/PageTransition";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Immersive Creative Portfolio",
  description: "A showcase of creative development and design work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(outfit.variable, inter.variable, "font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground")}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
            {/* Note: PageTransition is best applied inside specific pages or a template.tsx, 
            but for global transitions, we can wrap content here if we use usePathname in PageTransition */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
