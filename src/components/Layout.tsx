import React from 'react';
import { Github } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex flex-col">
            {/* Glassmorphism Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">AI</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight">Duplicate Picture Detector</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <a href="#agents" className="hover:text-foreground transition-colors">エージェント</a>
                        <a href="#start" className="hover:text-foreground transition-colors">始め方</a>
                        <a href="#report" className="hover:text-foreground transition-colors">体験記</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/yoshihirototaka/duplicate_picture_detector"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-white/5 rounded-full transition-colors"
                            aria-label="GitHubで表示"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/20 py-8 mt-20">
                <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Duplicate Picture Detector 開発体験記</p>
                    <p className="mt-2">Vite, React, Tailwind, そして AIエージェントで構築。</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
