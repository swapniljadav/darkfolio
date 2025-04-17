'use client';

import { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 'adv',
    title: 'Aadhaar Data Vault (ADV)',
    description: 'Secure tokenization platform with Oracle DB, AES-GCM encryption, and API orchestration.',
    techStack: ['Spring Boot', 'Oracle', 'AES-GCM', 'HSM', 'ADV API'],
    imageUrl: 'https://picsum.photos/id/1011/300/160?grayscale',
  },
  {
    id: 'aa',
    title: 'Account Aggregator Implementation',
    description: 'FIU setup with Keycloak, ISO8583, XML mapping, and secure backend orchestration.',
    techStack: ['Spring Boot', 'Keycloak', 'NGINX', 'AA Gateway', 'ISO8583'],
    imageUrl: 'https://picsum.photos/id/1012/300/160?grayscale',
  },
  {
    id: 'vkyc',
    title: 'Video KYC Solution',
    description: 'Spring Boot 3-tier architecture with eKYC, OTP APIs, PDF generation, and doc flow.',
    techStack: ['Spring Boot', 'eKYC', 'OTP', 'PDFGen', 'REST API'],
    imageUrl: 'https://picsum.photos/id/1013/300/160?grayscale',
  },
  {
    id: 'otp',
    title: 'eKYC OTP Services',
    description: 'Encrypted OTP-based eKYC flow with AES/SHA256 and UIDAI endpoint automation.',
    techStack: ['Spring Boot', 'SHA256', 'AES', 'OTP', 'UIDAI'],
    imageUrl: 'https://picsum.photos/id/1014/300/160?grayscale',
  },
  {
    id: 'cbs',
    title: 'Finacle CBS Upgrade Testing',
    description: 'Tested modules for Aadhaar Vault, AA, Video KYC & BC Point. UAT + Logs + Release.',
    techStack: ['Finacle', 'Testing', 'CBS', 'UAT', 'Aadhaar Vault'],
    imageUrl: 'https://picsum.photos/id/1015/300/160?grayscale',
  },
];

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === activeId);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      containerRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
    },
    onSwipedRight: () => {
      containerRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
    },
    trackMouse: true,
  });

  return (
    <section id="projects" className="w-full px-6 py-20 text-left relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-10 text-center">Projects</h2>

      <div
        {...swipeHandlers}
        ref={containerRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide flex gap-6"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveId(project.id)}
            className="snap-start shrink-0 cursor-pointer bg-gradient-to-br from-[#1c1c1c] to-[#101010] border border-gray-700 rounded-xl w-[300px] p-5 hover:border-white transition shadow-lg hover:shadow-white/10"
          >
            <div className="rounded-md overflow-hidden mb-3 border border-gray-700">
              <img
                src={project.imageUrl}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/300x160?text=Project';
                }}
                className="w-full h-40 object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <h3 className="text-lg font-bold font-sora mb-2">{project.title}</h3>
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

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          isOpen={!!activeProject}
          onClose={() => setActiveId(null)}
          title={activeProject.title}
          description={activeProject.description}
          techStack={activeProject.techStack}
          imageUrl={activeProject.imageUrl}
        />
      )}
    </section>
  );
}
