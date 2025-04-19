'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  techStack: string[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  techStack,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    const handleScroll = () => {
      if (!modalRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);
    };

    const current = modalRef.current;
    current?.addEventListener('scroll', handleScroll);
    return () => current?.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black/80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 origin-left"
            style={{ scaleX: scrollProgress }}
          />

          <motion.div
            className="relative bg-white/10 border border-white/20 rounded-lg max-w-2xl w-full h-[80vh] overflow-y-auto text-left shadow-xl pt-16 px-6 pb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content (No Image) */}
            <h2 className="text-2xl font-sora font-bold mb-4 text-white">{title}</h2>
            <p className="text-gray-300 font-inter mb-6 whitespace-pre-line">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full border border-white/20 bg-white/10 text-white font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
