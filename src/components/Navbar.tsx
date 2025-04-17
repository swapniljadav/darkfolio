'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 fixed top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* LOGO ONLY */}
        <Link href="#hero" className="flex items-center group">
          <Image
            src="/darkfolio-logo.png"
            alt="darkfolio logo"
            width={140}
            height={40}
            className="h-auto w-[180px] object-contain transition-transform group-hover:scale-110"
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <div className="space-x-6 font-inter text-sm text-gray-300 hidden sm:flex">
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
