import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rooms from './components/Rooms';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Rooms />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Spacy • The Space Hotel</p>
          <div className="text-sm text-white/60">Orbit 12, Lagrange Point L5 • +1 (555) 000-SPACE</div>
        </div>
      </footer>
    </div>
  );
}
