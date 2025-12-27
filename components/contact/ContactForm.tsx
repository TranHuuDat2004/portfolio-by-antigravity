"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form Submitted:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col items-center justify-center text-center p-8 bg-muted rounded-xl border border-border"
                    >
                        <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-2xl font-bold uppercase mb-2">Message Sent</h3>
                        <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        noValidate
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider">
                                Name
                            </label>
                            <input
                                id="name"
                                {...register("name")}
                                className="w-full bg-background border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                placeholder="JOHN DOE"
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                className="w-full bg-background border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                placeholder="HELLO@EXAMPLE.COM"
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                id="message"
                                {...register("message")}
                                rows={5}
                                className="w-full bg-background border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="TELL ME ABOUT YOUR PROJECT..."
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-foreground text-background font-bold uppercase tracking-widest py-4 rounded-md hover:bg-foreground/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isSubmitting && <Loader2 className="animate-spin w-4 h-4" />}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
