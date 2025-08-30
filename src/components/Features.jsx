import React from 'react';
import { Wifi, Coffee, Shield, Crown, Users, Bath, Star, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Crown,
    title: 'Zero-G Luxury',
    desc: 'Spacious suites with panoramic observation domes and adaptive gravity bedding.',
  },
  {
    icon: Wifi,
    title: 'Quantum Wi‑Fi',
    desc: 'Latency-optimized link for crisp calls, streaming nebulae in 8K, and holo-meetings.',
  },
  {
    icon: Coffee,
    title: 'Orbital Dining',
    desc: 'Michelin-grade cuisine engineered for microgravity by award-winning astro-chefs.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Active radiation shielding, triple-redundant life support, and 24/7 mission crew.',
  },
  {
    icon: Bath,
    title: 'Stellar Spa',
    desc: 'Hydro-stasis therapy, starlight saunas, and weightless mineral floats.',
  },
  {
    icon: Users,
    title: 'Crewed Experiences',
    desc: 'Guided spacewalks, telescope lounges, and astronomy workshops for all ages.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Amenities beyond Earth</h2>
            <p className="text-white/70 mt-2 max-w-2xl">
              Every detail at Spacy is crafted for comfort in the cosmos — from gravity-adaptive rooms to celestial cuisine.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/60">
            <Star className="size-5 text-yellow-300" />
            Rated 4.9 by 12,000+ star travelers
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 size-32 rounded-full bg-violet-500/20 blur-2xl group-hover:bg-violet-400/25 transition" />
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 ring-1 ring-white/15">
                  <Icon className="size-5 text-violet-200" />
                </span>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
          <Sparkles className="size-4 text-violet-300" /> All stays include launch, re-entry, and pre-flight training.
        </div>
      </div>
    </section>
  );
}
