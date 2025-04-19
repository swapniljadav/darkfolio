'use client';

import { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import ProjectModal from './ProjectModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 'adv',
    title: 'Aadhaar Data Vault (ADV)',
    description: 'Secure tokenization platform with Oracle DB, AES-GCM encryption, and API orchestration.',
    techStack: ['Spring Boot', 'Oracle', 'AES-GCM', 'HSM', 'ADV API'],
  },
  {
    id: 'aa',
    title: 'Account Aggregator Implementation',
    description: 'FIU setup with Keycloak, ISO8583, XML mapping, and secure backend orchestration.',
    techStack: ['Spring Boot', 'Keycloak', 'NGINX', 'AA Gateway', 'ISO8583'],
  },
  {
    id: 'vkyc',
    title: 'Video KYC Solution',
    description: 'Spring Boot 3-tier architecture with eKYC, OTP APIs, PDF generation, and doc flow.',
    techStack: ['Spring Boot', 'eKYC', 'OTP', 'PDFGen', 'REST API'],
  },
  {
    id: 'otp',
    title: 'eKYC OTP Services',
    description: 'Encrypted OTP-based eKYC flow with AES/SHA256 and UIDAI endpoint automation.',
    techStack: ['Spring Boot', 'SHA256', 'AES', 'OTP', 'UIDAI'],
  },
  {
    id: 'cbs',
    title: 'Finacle CBS Upgrade Testing',
    description: 'Tested modules for Aadhaar Vault, AA, Video KYC & BC Point. UAT + Logs + Release.',
    techStack: ['Finacle', 'Testing', 'CBS', 'UAT', 'Aadhaar Vault'],
  },
];

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === activeId);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    trackMouse: true,
  });

  return (
    <section id="projects" className="w-full px-6 py-20 text-left relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-10 text-center text-white">
        Projects
      </h2>

      {/* Scroll buttons */}
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          {...swipeHandlers}
          ref={containerRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide flex gap-6 px-2"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className="snap-start shrink-0 cursor-pointer opacity-80 hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1c1c1c] to-[#101010] border border-gray-700 rounded-xl w-[300px] p-5 hover:border-white shadow-lg hover:shadow-white/10"
            >
              <h3 className="text-lg font-bold font-sora mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3 line-clamp-4">{project.description}</p>
              <div className="flex flex-wrap gap-1 text-xs text-gray-300 font-mono">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 border border-white/10 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          isOpen={!!activeProject}
          onClose={() => setActiveId(null)}
          title={activeProject.title}
          description={activeProject.description}
          techStack={activeProject.techStack}
        />
      )}
    </section>
  );
}
