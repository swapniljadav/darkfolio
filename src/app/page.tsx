'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      {/* Gradient Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-2xl opacity-20 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <section className="h-screen w-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold leading-tight"
          >
            Hi, I’m Swapnil
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-inter mt-4 max-w-md"
          >
            I craft robust backend systems and clean, modern dashboards that scale.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToAbout}
            className="mt-10 px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            ↓
          </motion.button>
        </section>

        {/* ABOUT SECTION */}
        <section
          ref={aboutRef}
          className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <FadeInWhenVisible>
            <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-4">
              About Me
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p className="text-gray-400 max-w-md font-inter text-base sm:text-lg leading-relaxed">
              Backend-focused developer based in India. I specialize in scalable banking systems,
              batch processors, and enterprise dashboards. 10+ years in PSU banking IT.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <button
              onClick={scrollToTop}
              className="mt-10 px-5 py-2 rounded-full border border-white text-gray-300 hover:bg-white hover:text-black transition"
            >
              ↑ Back to Top
            </button>
          </FadeInWhenVisible>
        </section>

      </div>
    </main>
  );
}
