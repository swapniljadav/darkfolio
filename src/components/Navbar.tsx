'use client';

import { useEffect } from 'react';

export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);

    if (target) {
      const yOffset = -70; // adjust if navbar overlaps
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Optional: force re-scroll even on repeat clicks
      setTimeout(() => {
        if (Math.abs(window.scrollY - y) < 5) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/70 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-sora font-bold text-white">darkfolio</div>
        <div className="space-x-6 text-sm font-inter text-gray-300">
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className="hover:text-white transition">Home</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="hover:text-white transition">Projects</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-white transition">About</a>
        </div>
      </nav>
    </header>
  );
}
