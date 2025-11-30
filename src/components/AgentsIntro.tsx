import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, Brain, Code } from 'lucide-react';

const AgentsIntro: React.FC = () => {
    return (
        <section id="agents" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">エージェント紹介</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Duplicate Picture Detector開発を支えたAIの強力なパートナーたち。
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
                        <p className="text-sm text-blue-400 mb-6">コーディングのスペシャリスト</p>
                        <p className="text-muted-foreground mb-8">
                            複雑なロジックとGitHub統合のために設計されたGoogleのAIコーディングエージェント。
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <DollarSign className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">価格</h4>
                                    <p className="text-sm text-muted-foreground">無料枠あり。Proプランは約$20/月。</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">プライバシー</h4>
                                    <p className="text-sm text-muted-foreground">デフォルトでプライベート。プライベートコードでの学習は行われません。</p>
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
                        <p className="text-sm text-purple-400 mb-6">エージェンティックIDE</p>
                        <p className="text-muted-foreground mb-8">
                            優れたデザイン能力とコンテキスト認識を持つ、エージェントファーストの開発プラットフォーム。
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">価格</h4>
                                    <p className="text-sm text-muted-foreground">現在無料パブリックプレビュー中（将来的にフリーミアム予定）。</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-sm">プライバシー</h4>
                                    <p className="text-sm text-muted-foreground">プライバシーポリシーあり。学習へのオプトアウトオプションあり。</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Comparison Infographic Placeholder */}
                <div className="mt-16 max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
                        <p className="text-muted-foreground font-mono">比較インフォグラフィック（プレースホルダー）</p>
                        <p className="text-xs text-muted-foreground/50 mt-2">（Jules vs Antigravity ビジュアル）</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentsIntro;
