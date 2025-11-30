import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, PenTool, Layers, Video } from 'lucide-react';

const ExperienceReport: React.FC = () => {
    return (
        <section id="report" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        The Experience Report
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        From zero Electron experience to a polished desktop app.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* The Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">The Challenge</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The goal was to build <strong>Duplicate Picture Detector</strong>, a desktop application to manage photo libraries.
                            However, I had <span className="text-white font-semibold">no prior experience with Electron</span>.
                            The complexity of setting up a desktop environment, handling file systems, and ensuring cross-platform compatibility was daunting.
                        </p>
                    </motion.div>

                    {/* The Journey: Jules vs Antigravity */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <h4 className="text-xl font-bold mb-4 text-blue-400">Experience with Jules</h4>
                            <p className="text-muted-foreground mb-4">
                                While powerful, Jules proved challenging for a beginner.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">×</span> Required reading complex error logs.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">×</span> Needed manual PR management.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">×</span> High friction for rapid iteration.
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <PenTool className="w-24 h-24" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-purple-400">Experience with Antigravity</h4>
                            <p className="text-muted-foreground mb-4">
                                Antigravity was a game-changer, especially for design and workflow.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span> <strong className="text-white">Magnificent Design Skill</strong>: Created a beautiful UI effortlessly.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span> <strong className="text-white">Implementation Plan</strong>: Allowed highlighting specific lines to communicate context clearly.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span> Seamless "Agentic" workflow.
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* The Outcome */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">The Outcome</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Despite the initial lack of experience, the application was successfully built with a premium look and feel.
                            Key features like <strong>HEIC support</strong>, <strong>Safe Deletion (trash)</strong>, and a <strong>Smart UI</strong> were implemented efficiently.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Demo Video Placeholder */}
                            <div className="flex-1 aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center group cursor-pointer hover:border-white/20 transition-colors">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <Video className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">Watch Demo Video</span>
                                </div>
                            </div>

                            {/* Workflow Infographic Placeholder */}
                            <div className="flex-1 aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center">
                                <div className="text-center">
                                    <Layers className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                    <span className="text-xs text-muted-foreground">Workflow Infographic</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceReport;
