import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen container mx-auto px-4 md:px-6 py-32 flex flex-col items-center justify-center">
            <div className="text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 uppercase">
                    Get in<br />Touch
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto font-light">
                    Have a project in mind? Let's discuss how we can build something exceptional together.
                </p>
            </div>

            <ContactForm />
        </div>
    );
}
