'use client'

import { useEffect, useRef, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import FadeInWhenVisible from './FadeInWhenVisible'

interface Project {
  title: string
  description: string
  slug: { current: string }
  techStack?: string[]
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  const fetchProjects = async () => {
    const res = await fetch('/api/projects')
    const data = await res.json()
    setProjects(data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (projects.length >= 3 && containerRef.current) {
      const interval = setInterval(() => {
        const el = containerRef.current
        if (!el) return

        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: 320, behavior: 'smooth' })
        }
      }, 3500)

      return () => clearInterval(interval)
    }
  }, [projects])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    trackMouse: true,
  })

  return (
    <section id="projects" className="w-full px-6 py-20 text-left relative overflow-hidden">
      <FadeInWhenVisible>
        <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-10 text-center">Projects</h2>
      </FadeInWhenVisible>

      {/* Fallback grid for 1–2 projects */}
      {projects.length <= 2 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInWhenVisible key={project.slug.current} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-[#1c1c1c] to-[#101010] border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-white/10">
                <Link href={`/projects/${project.slug.current}`}>
                  <div>
                    <h3 className="text-lg font-bold font-sora mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                    {project.techStack && (
                      <div className="flex flex-wrap gap-1 text-xs text-gray-300 font-mono">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/10 border border-white/10 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      ) : (
        <>
          {/* Arrows for horizontal scroll */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            {...swipeHandlers}
            ref={containerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide flex gap-6 px-2"
          >
            {[...projects, ...projects].map((project, index) => (
              <FadeInWhenVisible key={`${project.slug.current}-${index}`} delay={index * 0.05}>
                <div className="snap-start shrink-0 cursor-pointer opacity-90 hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1c1c1c] to-[#101010] border border-gray-700 rounded-xl w-[300px] p-5 hover:border-white shadow-lg hover:shadow-white/10">
                  <Link href={`/projects/${project.slug.current}`}>
                    <div>
                      <h3 className="text-lg font-bold font-sora mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-4">{project.description}</p>
                      {project.techStack && (
                        <div className="flex flex-wrap gap-1 text-xs text-gray-300 font-mono">
                          {project.techStack.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-white/10 border border-white/10 px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
