import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, UserPlus, Play } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        title: "Sign Up",
        description: "Create a Google Cloud account and sign up for the Antigravity preview waitlist.",
        color: "text-green-400",
        bg: "bg-green-400/10"
    },
    {
        icon: Terminal,
        title: "Install Prerequisites",
        description: "Ensure you have VS Code and Node.js installed on your machine.",
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        icon: Play,
        title: "Start Coding",
        description: "Launch Antigravity or install the Jules extension to begin your AI pair programming journey.",
        color: "text-pink-400",
        bg: "bg-pink-400/10"
    }
];

const HowToStart: React.FC = () => {
    return (
        <section id="start" className="py-24 bg-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How to Start</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Ready to build with AI? Here is how to get started with these tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl -z-10" />
                            <div className="p-8 rounded-2xl border border-white/10 h-full hover:border-white/20 transition-colors bg-background/50 backdrop-blur-sm">
                                <div className={`w-12 h-12 rounded-lg ${step.bg} flex items-center justify-center mb-6 ${step.color}`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6">{step.description}</p>

                                {/* Screenshot Placeholder */}
                                <div className="aspect-video rounded-lg bg-black/40 border border-white/5 flex items-center justify-center">
                                    <span className="text-xs text-muted-foreground/50">Screenshot Placeholder</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToStart;
