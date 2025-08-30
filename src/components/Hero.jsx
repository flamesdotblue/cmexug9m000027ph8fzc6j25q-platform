import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGalaxy />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 md:pt-28 pb-24 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 mb-6">
            <span className="inline-block size-1.5 rounded-full bg-emerald-400" /> Now boarding for Q4 departures
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Sleep among the stars at <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300">Spacy</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl">
            The first luxury hotel in orbit. Zero-gravity suites, panoramic cosmos views, and cuisine crafted for the final frontier.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              id="book"
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 px-6 py-3 text-sm font-medium transition"
            >
              <Rocket className="size-4" /> Book your orbit
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-medium transition"
            >
              <Star className="size-4" /> Explore amenities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundGalaxy() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.15),transparent_60%)]" />
      <Starfield />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

function Starfield() {
  const stars = Array.from({ length: 90 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
  }));
  return (
    <div className="absolute inset-0">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
          className="absolute rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
        />
      ))}
      <motion.div
        className="absolute -right-40 top-20 h-72 w-72 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.7), rgba(139,92,246,0) 60%)' }}
      />
      <motion.div
        className="absolute -left-40 bottom-20 h-96 w-96 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at 70% 70%, rgba(56,189,248,0.6), rgba(56,189,248,0) 60%)' }}
      />
    </div>
  );
}
