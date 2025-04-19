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
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'

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
        <HeroSection />

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
        <AboutSection />

        {/* CONTACT */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
