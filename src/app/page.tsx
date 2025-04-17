'use client';

import { motion } from 'framer-motion';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import ProjectsSection from '@/components/ProjectsSection';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TechLoop from '@/components/TechLoop';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black text-white scroll-smooth min-h-screen scrollbar-hide">
      {/* Background Blobs */}
      <div className="pointer-events-none absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-purple-600 rounded-full blur-[200px] opacity-30 z-0" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[200px] opacity-30 z-0" />

      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />

        {/* HERO SECTION */}
        <section
          id="hero"
          className="pt-20 h-screen w-full flex flex-col justify-center items-center text-center px-6"
        >
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
            <a href="#featured" aria-label="Scroll to Featured">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="mt-12 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </a>
          </FadeInWhenVisible>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="featured" className="pt-10">
          <FeaturedCarousel />
          <div className="mt-6 flex justify-center">
            <a href="#projects" aria-label="Scroll to Projects">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="text-gray-400 hover:text-white transition"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="pt-24">
          <ProjectsSection />
          <div className="mt-6 flex justify-center">
            <a href="#experience" aria-label="Scroll to Experience">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="text-gray-400 hover:text-white transition"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </a>
          </div>
        </section>

        {/* TECH LOOP */}
        <TechLoop />

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <ExperienceSection />
          <div className="mt-6 flex justify-center">
            <a href="#about" aria-label="Scroll to About">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="text-gray-400 hover:text-white transition"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
        >
          <FadeInWhenVisible>
            <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-4">About Me</h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="text-gray-400 max-w-md font-inter text-base sm:text-lg leading-relaxed">
              Backend-focused developer based in India. I specialize in scalable banking systems,
              batch processors, and enterprise dashboards. 10+ years in PSU banking IT.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <a href="#contact" aria-label="Scroll to Contact">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="mt-10 text-gray-400 hover:text-white transition"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </a>
          </FadeInWhenVisible>
        </section>

        {/* CONTACT */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
