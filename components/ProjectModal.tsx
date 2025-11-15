'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-dark rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <div className="sticky top-0 flex justify-end p-4 bg-linear-to-b from-[#1E1E2F] to-transparent">
            <button
              onClick={onClose}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <div className="px-8 md:px-10 pb-8 md:pb-10">
            {/* Project Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6 bg-linear-to-br from-[#6C63FF]/20 to-[#00E0FF]/20">
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/10">
                {project.title.charAt(0)}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <div>
                <span className="text-sm text-[#00E0FF] font-semibold">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-white mt-2">
                  {project.title}
                </h2>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Extended Description */}
              <p className="text-gray-400">
                This project showcases our expertise in modern web technologies
                and innovative solutions. We worked closely with the client to
                deliver a product that exceeds expectations and drives real
                business value.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full glass text-sm font-medium text-[#00E0FF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  className="flex-1 px-6 py-3 rounded-full bg-linear-to-r from-[#6C63FF] via-[#5C89FF] to-[#00E0FF] text-white font-semibold text-center shadow-[0_0_18px_rgba(0,224,255,0.25)] transition-all hover:shadow-[0_0_28px_rgba(0,224,255,0.45)]"
                >
                  View Live Project
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Case Study
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
