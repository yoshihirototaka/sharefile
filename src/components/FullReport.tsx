import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Terminal, Code, Cpu, Layers, Image as ImageIcon, Trash2, ShieldAlert } from 'lucide-react';

const FullReport: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-200 leading-relaxed">
            {/* 1. Header */}
            <header className="text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                >
                    Antigravity と Jules で作る<br className="hidden md:block" />「家族写真スマート整理」体験記
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-400"
                >
                    AIエージェントと共に挑んだ、Electronアプリ開発の記録
                </motion.p>
            </header>

            {/* 1. Introduction */}
            <section id="report" className="space-y-6 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">1.</span> はじめに：家族写真が「嬉しい悩み」になってきた話
                </h2>
                <div className="prose prose-invert max-w-none">
                    <p>
                        息子が生まれてから約 3 年分の家族写真を、ずっと NAS 上のネットワークフォルダに保存してきました。
                        撮るたびに嬉しいのですが、その裏でじわじわ効いてくるのがこの問題です。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300 my-4">
                        <li>ほとんど同じ写真が微妙な角度違いで大量にある</li>
                        <li>NAS の容量がどんどん増えていく</li>
                        <li>なにか 1 枚を選びたいときに、候補が多すぎて決められない</li>
                    </ul>
                    <p>
                        「重複画像削除ツール」は世の中に色々ありますが、
                        ソースコードが完全に読めるわけではなく、
                        万が一悪意あるコードが紛れていても気付きにくい、という不安もありました。
                    </p>
                    <div className="bg-slate-800/50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
                        <p className="font-semibold text-white mb-2">どうせなら、</p>
                        <ul className="list-none space-y-1 text-slate-300">
                            <li>✅ 中身が分かる自作アプリで</li>
                            <li>✅ AI の力も借りながら</li>
                            <li>✅ <strong>家族写真に特化した「スマート重複クリーナー」を作ってみよう</strong></li>
                        </ul>
                    </div>
                    <p>
                        と思い立ち、今回は <strong>Google Jules</strong> と <strong>Google Antigravity</strong> を使って
                        「類似画像を検出して、安心していらない方だけ削除するアプリ」を作ってみた、という話です。
                    </p>
                </div>
            </section>

            {/* 2. App Intro */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">2.</span> 作ったアプリ「Smart Duplicate Cleaner」のざっくり紹介
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-blue-300">何ができるアプリか（ユーザー目線）</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex gap-2">
                                <ImageIcon className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>指定したフォルダ（NAS 上のネットワークフォルダを含む）をスキャン</span>
                            </li>
                            <li className="flex gap-2">
                                <Layers className="w-5 h-5 text-blue-400 shrink-0" />
                                <span><strong>似た写真同士をグループ化</strong>（全く同じでなくても OK）</span>
                            </li>
                            <li className="flex gap-2">
                                <Trash2 className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>自動的に「低解像度のほう」を削除候補としてマーク</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>1 グループずつ、サムネイル → クリックで拡大表示して確認</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-300">中身はどうなっているか（ざっくり技術編）</h3>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 font-mono text-sm">
                            <div className="flex gap-2 mb-2">
                                <span className="text-purple-400">Framework:</span>
                                <span>Electron + React + TypeScript + Vite</span>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="text-purple-400">UI:</span>
                                <span>Tailwind CSS</span>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="text-purple-400">State:</span>
                                <span>Zustand</span>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="text-purple-400">Logic:</span>
                                <span>sharp (perceptual hashing)</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-purple-400">Test:</span>
                                <span>Playwright</span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400">
                            画像処理ロジックや pHash の実装は、ほぼ AI に任せています。自力でElectron のアプリを作ったこともありません。
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Jules Experience */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">3.</span> まずは Jules でチャレンジしてみた
                </h2>
                <div className="prose prose-invert max-w-none">
                    <p>
                        最初の開発は、Google の自律型コーディングエージェント <strong>Jules</strong> から始めました。
                        Jules は GitHub リポジトリと連携し、Issue ベースでタスクを投げると、
                        クラウド上の VM でコードを編集・テスト・PR 作成までやってくれるエージェントです。
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Issue を投げて PR を受け取る、という開発スタイル</h3>
                    <p>
                        Jules の良さは、とにかく <strong>Issue を書いて任せておける</strong> 点です。
                        Ultra プランだと 64 個のエージェントを並列で動かせるらしく、
                        PR の出力量だけで言えば、人間一人では到底かなわないスピード感があります。
                    </p>

                    <div className="bg-slate-900 rounded-lg p-4 my-4 border border-slate-700">
                        <div className="flex items-center gap-2 text-slate-400 mb-2 border-b border-slate-700 pb-2">
                            <Code className="w-4 h-4" />
                            <span className="text-xs uppercase">Example Issue</span>
                        </div>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                            {`Bug Report: Image Preview Not Working #4

Error Log (Crucial)
...
Not allowed to load local resource: file://hppromini400/...

Request
It seems like Electron's WebSecurity is blocking local file access.
Please fix code to register a custom protocol...`}
                        </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">UNC パスと ERR_INVALID_URL_SCHEME 地獄</h3>
                    <div className="flex items-start gap-4 bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                        <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-red-200 mb-2">NAS 上のネットワークフォルダを扱い始めると一気に難易度が上がりました。</p>
                            <ul className="list-disc pl-4 space-y-1 text-red-100/80 text-sm">
                                <li>パスが <code>\\Hppromini400\...</code> という <strong>UNC パス</strong> になる</li>
                                <li>Electron 側で <code>fileURLToPath</code> を無条件に呼んでしまいクラッシュ</li>
                                <li>Jules が出してくる修正 PR が、別のエラーを生む <strong>PR 無限ループ</strong> に</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">「コードが読めないとレビューできない」という壁</h3>
                    <p>
                        ここで効いてきたのが、自分自身の Electron 経験のなさです。
                        PR の変更差分を見ても、それが正しい修正なのか判断しきれない。
                        つまり、<strong>Jules の出力をレビューできるだけの土台</strong> がこちら側にないと、
                        「すごい速度でコードは出るが、どこまで信用していいか分からない」という状態になります。
                    </p>
                </div>
            </section>

            {/* 4. Antigravity Experience */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">4.</span> Antigravity に乗り換えて完走する
                </h2>
                <div className="prose prose-invert max-w-none">
                    <p>
                        ここで一度、Jules だけで進めるのは難しいと判断し、
                        同じ Google 製の <strong>Antigravity</strong> に開発環境を移すことにしました。
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">implementation_plan.md を見ながら一緒に考える</h3>
                    <p>
                        Antigravity では、「このエラーを再現して直してほしい」と自然言語で依頼すると、
                        <strong>implementation_plan.md</strong> に計画を書き出してくれます。
                        この時点で、「それはやめてほしい」「ここもチェックしてほしい」といった
                        <strong>自然言語でのツッコミ</strong> を入れられるのが、Jules との大きな違いでした。
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">ネットワークドライブ＋ゴミ箱問題とフォールバック実装</h3>
                    <p>
                        Antigravity と一緒にログを眺めていく中で、
                        <strong>Windows ではネットワークドライブ上のファイルはゴミ箱に移動できない</strong>
                        という仕様が判明しました。
                    </p>
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 my-4">
                        <p className="font-semibold text-green-200 mb-2">💡 Antigravity の提案した解決策</p>
                        <ol className="list-decimal pl-4 space-y-1 text-green-100/80">
                            <li>まずは通常通り「ゴミ箱へ移動」する</li>
                            <li>失敗した場合に限り、最後の手段として <code>fs.unlink</code> で物理削除する</li>
                        </ol>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">UI/UX のブラッシュアップ</h3>
                    <p>
                        バックエンドが安定したところで、見た目と使い勝手の改善にも手を入れました。
                        Antigravity の Editor 画面で「ここをもう少し見やすくしたい」と投げるだけで、
                        それなりに整った UI に仕上がっていくので、
                        <strong>コードは追いきれないけれど、「こうなってほしい」という絵はある</strong>
                        というタイプの人とは相性が良いと感じました。
                    </p>
                </div>
            </section>

            {/* 5. Outcome */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">5.</span> 実際どれくらいラクになったか
                </h2>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-bold text-white">成果</h3>
                            <p className="text-slate-300">
                                最終的に、NAS 上の数千枚の家族写真に対して Smart Duplicate Cleaner を実行したところ、
                                <strong>手作業とは比較にならないほど現実的な整理方法</strong> になりました。
                            </p>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    類似画像ごとにグルーピングされた一覧
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    プレビューしながら「どれを残すか」判断
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    サイズ違いは自動的に高解像度を優先
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                                <video
                                    src="/sharefile/assets/demo-video.mp4"
                                    poster="/sharefile/assets/video-thumb.png"
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-center text-xs text-slate-500 mt-2">実際の動作デモ</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">開発ワークフロー</h3>
                    <img
                        src="/sharefile/assets/workflow.png"
                        alt="Development Workflow"
                        className="w-full rounded-lg border border-slate-700"
                    />
                </div>
            </section>

            {/* 6. Comparison */}
            <section id="agents" className="space-y-6 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">6.</span> 使ってみて分かった Jules と Antigravity の使い分け
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                            <Cpu className="w-5 h-5" /> Jules
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">Good</h4>
                                <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
                                    <li>GitHub Issue を投げるだけで作業が進む</li>
                                    <li>並列実行による圧倒的なコード出力量</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Bad</h4>
                                <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
                                    <li>知識がないとレビューできない</li>
                                    <li>「とりあえずマージ」が命取りになる</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">Fit For</h4>
                                <p className="text-sm text-slate-400">
                                    自分がよく知っている言語・フレームワークで、小さめの機能追加やリファクタを高速に回したいとき
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                            <Terminal className="w-5 h-5" /> Antigravity
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">Good</h4>
                                <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
                                    <li>実装前に計画(Plan)をレビューできる</li>
                                    <li>Walkthroughで成果を振り返りやすい</li>
                                    <li>ローカル実行しながらデバッグ依頼ができる</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-2">Note</h4>
                                <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
                                    <li>ローカルセットアップが必要</li>
                                    <li>多機能なので慣れが必要</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-2">Fit For</h4>
                                <p className="text-sm text-slate-400">
                                    実装計画と実行ログを文章として共有しながら、自然言語で介入して進めたいとき（今回のケースに最適）
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-slate-800 text-slate-300">
                                <th className="p-4 font-semibold">比較項目</th>
                                <th className="p-4 font-semibold text-blue-400">Jules</th>
                                <th className="p-4 font-semibold text-purple-400">Antigravity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300 text-sm">
                            <tr className="bg-slate-900/50">
                                <td className="p-4 font-medium text-white">再学習 (Fine-tuning)</td>
                                <td className="p-4">
                                    <span className="text-slate-400">なし (プライベート)</span><br />
                                    プライベートリポジトリは学習に使われない。<br />
                                </td>
                                <td className="p-4">
                                    <span className="text-yellow-400">設定により可変</span><br />
                                    無料プレビュー版は同意設定に依存。<br />
                                </td>
                            </tr>
                            <tr className="bg-slate-900/50">
                                <td className="p-4 font-medium text-white">コスト</td>
                                <td className="p-4">
                                    <span className="text-white">Free / Pro / Ultra</span><br />
                                    無料プランあり (タスク数制限)。<br />
                                    <span className="text-xs text-slate-500">Pro以上でタスク数や利用モデルが強化される。</span>
                                </td>
                                <td className="p-4">
                                    <span className="text-white">Public Preview (Free)</span><br />
                                    現在は個人利用無料 (レート制限あり)。<br />
                                    <span className="text-xs text-slate-500">将来的に有償プランやトークン課金の可能性あり。</span>
                                </td>
                            </tr>
                            <tr className="bg-slate-900/50">
                                <td className="p-4 font-medium text-white">仕様駆動開発<br /><span className="text-xs text-slate-500 font-normal">(Spec-driven)</span></td>
                                <td className="p-4">
                                    <span className="text-blue-300">Issue ベース</span><br />
                                    仕様とテストを渡して「PRを作らせる」スタイル。<br />
                                    仕様 → テスト → コードの流れを作りやすい。
                                </td>
                                <td className="p-4">
                                    <span className="text-purple-300">Artifact ベース</span><br />
                                    実装計画 (Plan) やタスクリストを中間成果物として作成・合意してから実装する。<br />
                                    手戻りを防ぎやすい。
                                </td>
                            </tr>
                            <tr className="bg-slate-900/50">
                                <td className="p-4 font-medium text-white">利用 AI モデル</td>
                                <td className="p-4">
                                    Gemini 2.5 Pro / 3 Pro<br />
                                    <span className="text-xs text-slate-500">長文コンテキストに強いモデルを採用。<br />プランにより使い分け。</span>
                                </td>
                                <td className="p-4">
                                    Gemini 3 Pro (主体)<br />
                                    <span className="text-xs text-slate-500">Claude Sonnet 4.5 や GPT-OSS なども選択可能なマルチモデル構成。</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Detailed Re-training Explanation */}
                <div className="mt-8 space-y-6">
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-yellow-500" />
                            特に重要：Antigravity のデータ利用と再学習について
                        </h3>

                        <div className="space-y-8 text-slate-300 leading-relaxed">
                            <div>
                                <h4 className="font-bold text-white mb-3 text-base border-l-4 border-blue-500 pl-3">Antigravity 無料プレビュー版のデータ利用</h4>
                                <p className="mb-3">
                                    Antigravity を初回セットアップすると、「Antigravity – Terms of Use」という画面で以下の注意書きが表示されます。
                                </p>
                                <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-400">
                                    <li>Antigravity にはセキュリティ上の制限があること</li>
                                    <li>機密性の高いデータには使いすぎない方がよいこと</li>
                                    <li>エージェントの動作は必ず人間が確認すべきであること</li>
                                </ul>
                                <p className="mb-3">
                                    そのうえで、同じ画面に <strong>チェックボックス付きの同意項目</strong> が出ます（要旨）：
                                </p>
                                <blockquote className="bg-slate-800 p-4 rounded border-l-4 border-slate-600 my-4 italic text-slate-400 text-sm">
                                    Google が、Antigravity 上での自分の操作データ（interactions data）を収集・利用することに同意する。<br />
                                    このデータは、Google / Alphabet の研究・製品・サービス・機械学習技術の評価・開発・改善のために使われる。<br />
                                    同意は、アカウント設定やサポートへの連絡でいつでも取り消すことができる。
                                </blockquote>
                                <p className="mt-4 mb-2 font-semibold text-white">ここがポイントで、</p>
                                <ul className="list-disc pl-5 space-y-3">
                                    <li>
                                        <strong className="text-yellow-400">チェックを入れると</strong><br />
                                        Antigravity 上でのやり取りや操作ログが、Google 側の「製品・サービス・機械学習技術の改善」のために利用されうる（≒ モデルの再学習や評価用データに回りうる）
                                    </li>
                                    <li>
                                        <strong className="text-green-400">チェックを外せば</strong><br />
                                        Antigravity を利用するために必要な範囲（レスポンス生成、ログ保存、障害解析や不正利用検知など）には使われるものの、「AI の改善用データセット」という意味では利用されない、という扱いになります。
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm text-slate-400">
                                    また、セットアップ後の設定画面には <code>Enable telemetry</code> のような <strong>テレメトリ用のトグル</strong> も用意されており、ここを OFF にすることで、同様の用途のデータ送信を抑制できる構成になっています。
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-white mb-3 text-base border-l-4 border-purple-500 pl-3">「AI の再学習」にどこまで使われると考えるべきか</h4>
                                <p className="mb-3">
                                    同意文言では、「研究・製品・サービス・機械学習技術の改善」にデータを使う、とされています。<br />
                                    一般的に、Google を含む多くの AI プロバイダは以下のような形でユーザーのインタラクションデータを「AI の改善」に用いています。
                                </p>
                                <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-400">
                                    <li><strong>モデルの事後評価</strong>（どの回答が良かったかの統計分析）</li>
                                    <li><strong>新しい学習用データの構築</strong>（良い／悪い応答例としての再利用）</li>
                                </ul>
                                <p className="mb-3">
                                    Antigravity の同意文言もその流れに沿ったものと考えられるため、現実的には以下のように理解しておくのが良いでしょう。
                                </p>
                                <ul className="list-disc pl-5 space-y-3">
                                    <li>
                                        <strong className="text-yellow-400">チェックを入れている場合</strong><br />
                                        プロンプト、コード、エージェントの実行ログなどが、将来の Gemini 系モデルや関連 ML システムの「学習・評価・改善」の材料として使われる可能性が高い
                                    </li>
                                    <li>
                                        <strong className="text-green-400">チェックを外している場合</strong><br />
                                        サービス提供や安全性確保のための一時的な保存はあっても、「モデル品質を上げるためのトレーニングデータ」には使われない
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. How to Start */}
            <section id="start" className="space-y-8 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-500">7.</span> さあ、始めてみよう
                </h2>
                <p className="text-slate-300">
                    あなたの開発スタイルや目的に合わせて、どちらのエージェントから試すか選んでみてください。
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Jules Steps */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-100">Jules で始める</span>
                        </h3>
                        <div className="space-y-4">
                            <p className="text-slate-300 text-sm min-h-[40px]">
                                GitHub 連携で、Issue ベースの非同期な開発を体験したい方へ。
                            </p>
                            <ol className="list-decimal pl-5 space-y-3 text-slate-300 text-sm marker:text-blue-500">
                                <li>
                                    <strong className="text-white block mb-1">Jules にアクセス</strong>
                                    <a href="https://jules.google.com" className="text-blue-400 hover:underline">jules.google.com</a> でログイン
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">リポジトリを接続</strong>
                                    「Add codebase」から GitHub リポジトリを選択
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">タスク作成</strong>
                                    「New task」から具体的な指示を送信
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">PR レビュー</strong>
                                    生成された PR を確認してマージ
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Antigravity Steps */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-purple-400" />
                            <span className="text-purple-100">Antigravity で始める</span>
                        </h3>
                        <div className="space-y-4">
                            <p className="text-slate-300 text-sm min-h-[40px]">
                                ローカル環境で、対話しながらじっくり設計・実装を進めたい方へ。
                            </p>
                            <ol className="list-decimal pl-5 space-y-3 text-slate-300 text-sm marker:text-purple-500">
                                <li>
                                    <strong className="text-white block mb-1">インストール</strong>
                                    <a href="https://antigravity.google" className="text-blue-400 hover:underline">antigravity.google</a> から DL して実行
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">プロジェクトを開く</strong>
                                    アプリ起動後、ローカルフォルダを選択
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">ミッション作成</strong>
                                    Manager ビューでやりたいことを伝える
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">計画と実行</strong>
                                    Implementation Plan を合意して実装開始
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Source Code */}
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-white text-sm">今回のソースコード</h3>
                        <p className="text-xs text-slate-500">GitHub で公開しています</p>
                    </div>
                    <a href="https://github.com/yoshihirototaka/duplicate_picture_detector" className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                        yoshihirototaka/duplicate_picture_detector
                        <Terminal className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* 8. Glossary */}
            <section className="space-y-6 border-t border-slate-800 pt-8">
                <h2 className="text-2xl font-bold text-white">8. 用語メモ</h2>
                <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                    <div>
                        <dt className="font-bold text-white">Jules</dt>
                        <dd className="text-slate-400">Google の自律型コーディングエージェント。Issue ベースで PR を作成。</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-white">Antigravity</dt>
                        <dd className="text-slate-400">エージェント前提の IDE。計画と実行を自然言語で対話しながら進める。</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-white">Electron</dt>
                        <dd className="text-slate-400">Web 技術でデスクトップアプリを作れるフレームワーク。</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-white">UNC パス</dt>
                        <dd className="text-slate-400"><code>\\Server\Share\...</code> 形式のネットワークパス。Windows 特有の挙動に注意が必要。</dd>
                    </div>
                </dl>
            </section>

            <footer className="text-center text-slate-500 pt-12 pb-6">
                <p>今回の体験記が、Antigravity や Jules に興味がある人のきっかけになれば嬉しいです。</p>
            </footer>
        </article >
    );
};

export default FullReport;
