'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 'featured-adv',
    title: 'Aadhaar Vault Integration',
    description: 'Tokenization service with AES encryption, Oracle DB, and secure UIDAI API orchestration.',
    imageUrl: '/adv.png',
    techStack: ['Spring Boot', 'Oracle', 'AES-GCM', 'ADV API'],
  },
  {
    id: 'featured-vkyc',
    title: 'Video KYC Platform',
    description: 'Real-time eKYC with video recording, OTP auth, and 3-tier backend architecture.',
    imageUrl: '/vkyc.png',
    techStack: ['Spring Boot', 'OTP', 'Video KYC', 'PDFGen'],
  },
  {
    id: 'featured-aa',
    title: 'Account Aggregator FIU',
    description: 'Complete FIU system with consent handling, token exchange, and ISO8583 transformation.',
    imageUrl: '/aa.png',
    techStack: ['AA Gateway', 'Keycloak', 'NGINX', 'ISO8583'],
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = featuredProjects[currentIndex];

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  useEffect(() => {
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 overflow-hidden px-4">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold text-center mb-10">Featured Projects</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Nav Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight className="text-white" />
        </button>

        <div className="overflow-hidden rounded-lg relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={current.imageUrl}
                alt={current.title}
                className="w-full h-full object-cover transition duration-500"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                <h3 className="text-2xl sm:text-3xl font-sora font-bold text-white mb-2">{current.title}</h3>
                <p className="text-gray-300 text-sm max-w-xl">{current.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs text-white font-mono">
                  {current.techStack.map((tech) => (
                    <span key={tech} className="bg-white/10 border border-white/20 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
