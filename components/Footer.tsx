'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:hello@technova.ai', label: 'Email' },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    Services: [
      { name: 'AI Solutions', href: '/services#ai' },
      { name: 'Web Development', href: '/services#web' },
      { name: 'UI/UX Design', href: '/services#design' },
      { name: 'Branding', href: '/services#branding' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-[#1E1E2F] text-gray-300 pt-24 md:pt-28 lg:pt-32 pb-16 mt-24">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#6C63FF]/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 lg:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="padding-tag1 flex-1 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#6C63FF] outline-none transition-colors text-base text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="padding-tag1 px-8 py-4 rounded-full bg-linear-to-r from-[#6C63FF] via-[#5C89FF] to-[#00E0FF] text-white font-semibold shadow-[0_0_18px_rgba(0,224,255,0.25)] transition-all hover:shadow-[0_0_28px_rgba(0,224,255,0.45)]"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-3xl font-bold gradient-text drop-shadow-[0_0_12px_rgba(0,224,255,0.35)]">
                TechNova.ai
              </h2>
            </Link>
            <p className="text-gray-400 text-base mb-6 max-w-xs">
              Empowering businesses with AI & Web Innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-xl glass hover:bg-white/10 transition-colors hover:shadow-[0_0_12px_rgba(108,99,255,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-semibold text-lg tracking-wide">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-[#00E0FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base text-gray-400 text-center md:text-left">
              © {currentYear} TechNova.ai. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#00E0FF] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#00E0FF] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#00E0FF] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
