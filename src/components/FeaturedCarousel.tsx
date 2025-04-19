'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FeaturedProject {
  title: string
  description: string
  techStack: string[]
}

export default function FeaturedCarousel() {
  const [projects, setProjects] = useState<FeaturedProject[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch('/api/featured')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  useEffect(() => {
    if (projects.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [projects])

  const current = projects[currentIndex]

  if (projects.length === 0) return null

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold text-center mb-10">
        Featured Projects
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {projects.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Previous Project"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Next Project"
            >
              <ChevronRight className="text-white" />
            </button>
          </>
        )}

        <div className="overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-8 rounded-lg shadow-lg text-white min-h-[250px] sm:min-h-[300px]"
            >
              <h3 className="text-2xl sm:text-3xl font-sora font-bold mb-2">
                {current.title}
              </h3>
              <p className="text-gray-300 text-sm max-w-3xl">{current.description}</p>
              {current.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 text-xs text-white font-mono">
                  {current.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 border border-white/20 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
