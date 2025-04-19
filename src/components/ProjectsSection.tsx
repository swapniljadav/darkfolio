'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  slug: { current: string }
  techStack?: string[]
}

function AnimatedProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 p-5 rounded-lg shadow-lg text-white hover:shadow-white/10 transition duration-300"
    >
      <Link href={`/projects/${project.slug.current}`}>
        <div className="cursor-pointer">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-3">{project.description}</p>
          <span className="text-xs text-purple-300 font-mono">/{project.slug.current}</span>

          {project.techStack && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/10 text-white font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  return (
    <section id="projects" className="w-full px-6 py-20 text-left relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedProjectCard key={index} project={project} delay={index * 0.1} />
        ))}
      </div>
    </section>
  )
}
