'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import FadeInWhenVisible from './FadeInWhenVisible'

interface AboutData {
    title: string
    content: string
    imageUrl?: string
    grayscale?: boolean
}
  
export default function AboutSection() {
  const [about, setAbout] = useState<AboutData | null>(null)

  useEffect(() => {
    fetch('/api/about')
      .then((res) => res.json())
      .then((data) => setAbout(data))
  }, [])

  if (!about) return null

  const { title, content, imageUrl, grayscale } = about

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      <FadeInWhenVisible>
        <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-4">{title}</h2>
      </FadeInWhenVisible>

      {imageUrl && (
        <FadeInWhenVisible>
          <img
            src={imageUrl}
            alt="About"
            className={`w-40 h-40 rounded-full mb-6 object-cover border-2 border-white/20 shadow-md ${
            grayscale ? 'grayscale' : ''
            }`}
           />
        </FadeInWhenVisible>
      )}

      <FadeInWhenVisible>
        <p className="text-gray-400 max-w-md font-inter text-base sm:text-lg leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <a href="#contact" aria-label="Scroll to Contact">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="mt-10 text-gray-400 hover:text-white transition"
          >
            ↓
          </motion.div>
        </a>
      </FadeInWhenVisible>
    </section>
  )
}
