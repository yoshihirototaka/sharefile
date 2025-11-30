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
                        開発体験記
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Electron経験ゼロから、洗練されたデスクトップアプリ完成まで。
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
                            <h3 className="text-2xl font-bold">課題</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            目標は写真ライブラリを整理するデスクトップアプリ <strong>Duplicate Picture Detector</strong> を作ることでした。
                            しかし、私には <span className="text-white font-semibold">Electronの経験が全くありませんでした</span>。
                            デスクトップ環境の構築、ファイルシステムの操作、クロスプラットフォーム互換性の確保など、複雑な課題が山積みでした。
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
                            <h4 className="text-xl font-bold mb-4 text-blue-400">Julesでの体験</h4>
                            <p className="text-muted-foreground mb-4">
                                強力ですが、初心者には少しハードルが高かったです。
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">×</span> 複雑なエラーログを読み解く必要があった。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">×</span> 手動でのPR管理が必要だった。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">×</span> 高速なイテレーションには少し摩擦があった。
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
                            <h4 className="text-xl font-bold mb-4 text-purple-400">Antigravityでの体験</h4>
                            <p className="text-muted-foreground mb-4">
                                Antigravityは、特にデザインとワークフローにおいて革新的でした。
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span> <strong className="text-white">素晴らしいデザインスキル</strong>: 美しいUIを努力なしに作成できました。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span> <strong className="text-white">実装計画機能</strong>: 特定の行をハイライトして、コンテキストを明確に伝えることができました。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span> シームレスな「エージェンティック」ワークフロー。
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
                            <h3 className="text-2xl font-bold">成果</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            当初の経験不足にもかかわらず、プレミアムなルック＆フィールのアプリを完成させることができました。
                            <strong>HEICサポート</strong>、<strong>安全な削除（ゴミ箱）</strong>、<strong>スマートなUI</strong>などの主要機能も効率的に実装されました。
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Demo Video Placeholder */}
                            <div className="flex-1 aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center group cursor-pointer hover:border-white/20 transition-colors">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <Video className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">デモビデオを見る</span>
                                </div>
                            </div>

                            {/* Workflow Infographic Placeholder */}
                            <div className="flex-1 aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center">
                                <div className="text-center">
                                    <Layers className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                    <span className="text-xs text-muted-foreground">ワークフロー図</span>
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
