'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiZap, FiTrendingUp, FiAward } from 'react-icons/fi';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const stats = [
    { icon: FiZap, value: '500+', label: 'Projects Completed' },
    { icon: FiTrendingUp, value: '98%', label: 'Client Satisfaction' },
    { icon: FiAward, value: '50+', label: 'Awards Won' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00E0FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block mb-6 px-4 py-2 glass rounded-full padding-tag"
          >
            <span className="text-[#00E0FF] font-semibold">
              🚀 Welcome to the Future of Innovation
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-white">TechVision</span>
            <span className="gradient-text">.ai</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto padding-tag"
          >
            Empowering Businesses with{' '}
            <span className="text-[#00E0FF] font-semibold">AI</span> &{' '}
            <span className="text-[#6C63FF] font-semibold">Web Innovation</span>
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We transform ideas into powerful digital experiences that drive
            growth and innovation. Let&apos;s build something extraordinary together.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center padding-tag1"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="padding-tag1 group px-8 py-4 rounded-full bg-linear-to-r from-[#6C63FF] via-[#5C89FF] to-[#00E0FF] text-white font-semibold text-lg flex items-center gap-2 shadow-[0_0_18px_rgba(0,224,255,0.25)] transition-all hover:shadow-[0_0_30px_rgba(0,224,255,0.45)]"
              >
                Get Started
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-white font-semibold rounded-lg text-lg hover:bg-white/10 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-8 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00E0FF]" />
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">TechVision.ai</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto   margin-left1">
              We combine cutting-edge technology with creative excellence to
              deliver solutions that exceed expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: 'AI-Powered',
                description: 'Leverage machine learning and AI to automate and optimize',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Lightning Fast',
                description: 'Optimized performance for the best user experience',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Scalable',
                description: 'Built to grow with your business needs',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Support 24/7',
                description: 'Round-the-clock support whenever you need us',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 md:p-10 group cursor-pointer h-full flex flex-col justify-between hover:shadow-[0_0_25px_rgba(108,99,255,0.2)] transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 lg:mt-24 mb-20 md:mb-24 margin-left1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-12 lg:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#6C63FF]/25 to-[#00E0FF]/25" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let&apos;s discuss how we can help you achieve your goals
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="padding-tag1 px-8 py-4 rounded-full bg-linear-to-r from-[#6C63FF] via-[#5C89FF] to-[#00E0FF] text-white font-semibold text-lg inline-flex items-center gap-2 shadow-[0_0_18px_rgba(0,224,255,0.25)] transition-all hover:shadow-[0_0_30px_rgba(0,224,255,0.45)]"
              >
                Start Your Project
                <FiArrowRight />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
