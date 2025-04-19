'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroContent {
  mainLine: string
  subtext?: string
}

export default function HeroSection() {
  const [hero, setHero] = useState<HeroContent | null>(null)

  useEffect(() => {
    fetch('/api/hero')
      .then((res) => res.json())
      .then((data) => setHero(data))
  }, [])

  if (!hero) return null

  const hasSubtext = !!hero.subtext

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6"
    >
      {/* MAIN LINE */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`font-sora font-bold text-white ${
          hasSubtext ? 'text-5xl sm:text-6xl' : 'text-6xl sm:text-7xl'
        }`}
      >
        {hero.mainLine}
      </motion.h1>

      {/* SUBTEXT (optional) */}
      {hasSubtext && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-300 max-w-xl text-base sm:text-lg font-inter"
        >
          {hero.subtext}
        </motion.p>
      )}

      {/* Scroll Chevron */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 text-white animate-bounce"
      >
        <a href="#featured">
          <ChevronDown className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
        </a>
      </motion.div>
    </section>
  )
}
