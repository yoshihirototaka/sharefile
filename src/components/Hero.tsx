import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>AI-Powered Development Journey</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                >
                    Building <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Duplicate Picture Detector
                    </span>
                    <br /> with AI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    A transparent experience report on pair programming with Google's Jules and Antigravity agents to build a desktop application from scratch.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#agents"
                        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
                    >
                        Meet the Agents <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#report"
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        Read the Report
                    </a>
                </motion.div>

                {/* Placeholder for Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm aspect-video flex items-center justify-center overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center p-8">
                        <Sparkles className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <p className="text-white/40 font-mono text-sm">Hero Infographic Placeholder</p>
                        <p className="text-white/20 text-xs mt-2">(AI Generation Failed - Rate Limit)</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
