'use client';

import { motion } from 'framer-motion';
import {
    SiSpringboot,
    SiGit,
    SiDocker,
    SiNodedotjs,
    SiReact,
    SiOracle,
    SiNginx,
  } from 'react-icons/si';

const icons = [
  SiSpringboot, SiGit, SiDocker,
  SiNodedotjs, SiReact, SiOracle, SiNginx,
];

export default function TechLoop() {
  const loopIcons = [...icons, ...icons]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden bg-black py-12 border-y border-white/10">
      <motion.div
        className="flex gap-10 text-white items-center w-max px-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 40,
          repeat: Infinity,
        }}
      >
        {loopIcons.map((Icon, idx) => (
          <Icon key={idx} className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 hover:text-white transition" />
        ))}
      </motion.div>
    </div>
  );
}
