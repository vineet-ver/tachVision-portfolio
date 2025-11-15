'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import ProjectModal from '@/components/ProjectModal';
import portfolioData from '@/data/portfolio.json';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'AI Solutions',
    'Web Development',
    'UI/UX Design',
    'Branding',
  ];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Explore our latest projects and see how we&apos;ve helped businesses
          transform their digital presence
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-linear-to-r from-[#6C63FF] to-[#00E0FF] text-white'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="section max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative w-full h-64 bg-linear-to-br from-[#6C63FF]/20 to-[#00E0FF]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-white/10">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <FiExternalLink className="w-12 h-12 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold">View Details</p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-sm font-semibold text-[#00E0FF]">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 md:p-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E0FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full glass text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="section max-w-4xl mx-auto glass rounded-3xl p-10 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to Be Our Next Success Story?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Let&apos;s collaborate to create something amazing together
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#6C63FF] to-[#00E0FF] text-white font-semibold rounded-lg text-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,224,255,0.6)] transition-all"
        >
          Start Your Project
          <FiExternalLink />
        </motion.a>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
