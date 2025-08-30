import React from 'react';
import { Crown, Star, Rocket } from 'lucide-react';

const rooms = [
  {
    name: 'Nebula Suite',
    desc: 'A grand two-level observatory with 270° dome, private holo-theater, and adaptive gravity control.',
    price: 'from 18,500 cr / night',
    badge: 'Signature',
    accent: 'from-violet-500/30 to-fuchsia-500/30',
  },
  {
    name: 'Lunar Loft',
    desc: 'Minimalist haven with moonrise views, hydrosleep pod, and constellation ceiling.',
    price: 'from 9,900 cr / night',
    badge: 'Popular',
    accent: 'from-sky-500/30 to-cyan-500/30',
  },
  {
    name: 'Cosmic Capsule',
    desc: 'Cozy micro-suite for solo voyagers with panoramic porthole and stasis recliner.',
    price: 'from 4,200 cr / night',
    badge: 'Essential',
    accent: 'from-emerald-500/30 to-teal-500/30',
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Suites and capsules</h2>
            <p className="text-white/70 mt-2 max-w-2xl">
              Choose your orbit. Every room includes observation access, personalized gravity comfort, and concierge robotics.
            </p>
          </div>
          <a href="#book" className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm transition">
            <Rocket className="size-4" /> Check availability
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <article key={room.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className={`absolute -inset-40 bg-gradient-to-br ${room.accent} blur-3xl opacity-0 group-hover:opacity-60 transition`} />
              <div className="relative p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10">
                    <Crown className="size-3.5 text-yellow-300" /> {room.badge}
                  </span>
                  <Star className="size-4 text-yellow-300" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{room.name}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{room.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/80">{room.price}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm transition">
                    Reserve
                    <Rocket className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
