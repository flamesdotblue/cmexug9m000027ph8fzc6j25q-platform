import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="absolute inset-0 blur-md rounded-full bg-violet-500/40 group-hover:bg-violet-400/50 transition" />
            <Rocket className="relative size-6 text-violet-300 group-hover:text-violet-200 transition" />
          </div>
          <span className="font-semibold tracking-tight">Spacy</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Amenities</a>
          <a href="#rooms" className="hover:text-white transition">Suites</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 hover:bg-violet-500 text-white px-4 py-2 text-sm transition">
          Book now
          <Star className="size-4" />
        </a>
      </div>
    </header>
  );
}
