'use client';

import { useRef } from 'react';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import { ShieldCheck, FolderGit2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="relative overflow-x-hidden bg-black text-white scroll-smooth">
      <ScrollProgress />
      <Navbar />

      {/* Background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-2xl opacity-20 z-0" />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="pt-20 h-screen w-full flex flex-col justify-center items-center text-center px-6 bg-black">
          <FadeInWhenVisible>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold leading-tight">
              Hi, I’m Swapnil
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-inter mt-4 mb-6 max-w-md">
              I craft robust backend systems and clean, modern dashboards that scale.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <a
              href="#projects"
              className="mt-12 text-gray-400 hover:text-white transition cursor-pointer"
              aria-label="Scroll to Projects"
            >
              <ChevronDown className="w-5 h-5" />
            </a>
          </FadeInWhenVisible>

          {/* Diagonal Divider - Hero to Projects */}
          <div className="w-full h-[100px] bg-transparent overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <polygon fill="#0f0f0f" points="0,100 100,0 100,100" />
            </svg>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="w-full max-w-6xl mx-auto px-6 py-20 text-center bg-[#0f0f0f]"
        >
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-12">
              Projects
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ADV */}
            <FadeInWhenVisible>
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-left hover:border-white transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-purple-400 w-6 h-6" />
                  <h3 className="text-xl font-sora font-semibold">Aadhaar Data Vault (ADV)</h3>
                </div>
                <p className="text-gray-400 font-inter text-sm mb-4">
                  Secure Aadhaar tokenization and storage system with Oracle integration, HSM-based AES encryption,
                  ADV API orchestration, and scheduled processors for UID compliance.
                </p>
                <p className="text-sm text-gray-500 font-mono">Spring Boot • Oracle • AES-GCM • RHEL • ADV APIs</p>
              </motion.div>
            </FadeInWhenVisible>

            {/* Account Aggregator */}
            <FadeInWhenVisible>
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-left hover:border-white transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FolderGit2 className="text-pink-400 w-6 h-6" />
                  <h3 className="text-xl font-sora font-semibold">Account Aggregator Integration</h3>
                </div>
                <p className="text-gray-400 font-inter text-sm mb-4">
                  Implemented RBI-compliant AA modules with token exchange, consent tracking, and real-time financial
                  data pulling from FIPs using Spring Boot and secure key exchanges.
                </p>
                <p className="text-sm text-gray-500 font-mono">Spring Boot • FIU/FIP • JWT • HTTPS • AA Gateway</p>
              </motion.div>
            </FadeInWhenVisible>
          </div>

          {/* ↓ Scroll to About Button */}
          <FadeInWhenVisible>
            <a
              href="#about"
              className="mt-12 inline-block text-gray-400 hover:text-white transition cursor-pointer"
              aria-label="Scroll to About"
            >
              <ChevronDown className="w-5 h-5" />
            </a>
          </FadeInWhenVisible>

          {/* Diagonal Divider - Projects to About (inverted) */}
          <div className="w-full h-[100px] bg-transparent overflow-hidden rotate-180">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <polygon fill="#000000" points="0,100 100,0 100,100" />
            </svg>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black"
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
