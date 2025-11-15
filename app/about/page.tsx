'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiHeart, FiTrendingUp } from 'react-icons/fi';
import Card from '@/components/Card';

export default function About() {
  const values = [
    {
      icon: FiTarget,
      title: 'Mission Driven',
      description:
        'We are committed to delivering innovative solutions that empower businesses to thrive in the digital age.',
    },
    {
      icon: FiHeart,
      title: 'Customer First',
      description:
        'Your success is our success. We prioritize understanding your needs and exceeding your expectations.',
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Innovation',
      description:
        'We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.',
    },
    {
      icon: FiUsers,
      title: 'Team Excellence',
      description:
        'Our diverse team of experts brings together creativity, technical expertise, and industry knowledge.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and tech innovation',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      description: 'Full-stack expert specializing in scalable architectures',
    },
    {
      name: 'Emily Zhang',
      role: 'Head of Design',
      description: 'Award-winning designer focused on user-centered experiences',
    },
    {
      name: 'David Park',
      role: 'Lead AI Engineer',
      description: 'PhD in Machine Learning, pioneering AI solutions',
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section max-w-4xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          About <span className="gradient-text">TechVision.ai</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 leading-relaxed"
        >
          We&apos;re a team of passionate innovators dedicated to transforming
          businesses through cutting-edge technology and creative excellence.
        </motion.p>
      </motion.div>

      {/* Story Section */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-base">
              <p>
                Founded in 2020, TechVision.ai emerged from a simple belief: that
                technology should empower, not complicate. What started as a
                small team of developers and designers has grown into a
                full-service digital innovation agency.
              </p>
              <p>
                Today, we&apos;ve helped over 500 businesses transform their digital
                presence, from ambitious startups to established enterprises. Our
                expertise spans AI solutions, web development, UI/UX design, and
                comprehensive branding strategies.
              </p>
              <p>
                We&apos;re not just building products; we&apos;re building partnerships
                that last. Every project is an opportunity to push boundaries,
                challenge conventions, and create something extraordinary.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[#6C63FF]/20 to-[#00E0FF]/20" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#6C63FF] to-[#00E0FF] flex items-center justify-center text-2xl font-bold">
                    500+
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      Projects Delivered
                    </p>
                    <p className="text-gray-400">Across 30+ industries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#00E0FF] to-[#6C63FF] flex items-center justify-center text-2xl font-bold">
                    98%
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      Client Satisfaction
                    </p>
                    <p className="text-gray-400">Based on 200+ reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#6C63FF] to-[#00E0FF] flex items-center justify-center text-2xl font-bold">
                    50+
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      Industry Awards
                    </p>
                    <p className="text-gray-400">For innovation & design</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Values
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <value.icon className="w-12 h-12 text-[#00E0FF] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The brilliant minds behind TechNova.ai
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="w-full aspect-square rounded-xl bg-linear-to-br from-[#6C63FF]/20 to-[#00E0FF]/20 mb-4 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#00E0FF] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
