import React from 'react';
import SnakeGame from './components/SnakeGame';
import MusicPlayer from './components/MusicPlayer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center gap-12">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-6xl font-black tracking-tighter italic uppercase">
            Neon<span className="text-emerald-500">Rhythm</span>
          </h1>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
            Music Sync • Retro Gaming • AI Beats
          </p>
        </motion.header>

        <div className="flex flex-col items-center gap-12 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SnakeGame />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <MusicPlayer />
          </motion.div>
        </div>

        <footer className="mt-auto pt-8 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          &copy; 2026 Neon Rhythm Studio • Built with AI
        </footer>
      </main>
    </div>
  );
}
