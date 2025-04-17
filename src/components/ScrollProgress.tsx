'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
