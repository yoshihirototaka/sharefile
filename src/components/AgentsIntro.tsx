import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, Brain, Code } from 'lucide-react';

const AgentsIntro: React.FC = () => {
    return (
        <section id="agents" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the Agents</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The AI powerhouses behind the development of Duplicate Picture Detector.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Jules Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Jules</h3>
                        <p className="text-sm text-blue-400 mb-6">The Coding Specialist</p>
                        <p className="text-muted-foreground mb-8">
                            Google's AI coding agent designed for complex logic and GitHub integration.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <DollarSign className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">Pricing</h4>
                                    <p className="text-sm text-muted-foreground">Free tier available. Pro plan at ~$20/mo.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">Privacy</h4>
                                    <p className="text-sm text-muted-foreground">Private by default. No training on private code.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Antigravity Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Antigravity</h3>
                        <p className="text-sm text-purple-400 mb-6">The Agentic IDE</p>
                        <p className="text-muted-foreground mb-8">
                            An agent-first development platform with superior design capabilities and context awareness.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">Pricing</h4>
                                    <p className="text-sm text-muted-foreground">Currently Free Public Preview (Freemium expected).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">Privacy</h4>
                                    <p className="text-sm text-muted-foreground">Privacy policy in place. Opt-out options for training.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Comparison Infographic Placeholder */}
                <div className="mt-16 max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
                        <p className="text-muted-foreground font-mono">Comparison Infographic Placeholder</p>
                        <p className="text-xs text-muted-foreground/50 mt-2">(Jules vs Antigravity Visuals)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentsIntro;
