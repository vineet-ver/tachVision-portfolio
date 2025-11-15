'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
} from 'react-icons/fi';
import Card from '@/components/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      content: 'hello@technova.ai',
      link: 'mailto:hello@technova.ai',
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA 94103',
      link: 'https://maps.google.com',
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
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Have a project in mind? Let&apos;s discuss how we can help bring your
          vision to life
        </p>
      </motion.div>

      <div className="section max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="block"
            >
              <Card>
                <info.icon className="w-8 h-8 text-[#00E0FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-400">{info.content}</p>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 glass rounded-lg flex items-center gap-3 border border-green-500/30"
                >
                  <FiCheck className="w-6 h-6 text-green-500" />
                  <p className="text-green-500 font-semibold">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#6C63FF] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#6C63FF] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#6C63FF] focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#6C63FF] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-linear-to-r from-[#6C63FF] to-[#00E0FF] text-white font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,224,255,0.5)]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </Card>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you&apos;re looking to build a new product, improve an
                existing one, or just want to say hello, we&apos;d love to hear from
                you.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team typically responds within 24 hours during business
                days. For urgent inquiries, please call us directly.
              </p>
            </div>

            <Card className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white font-semibold">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-linear-to-br from-[#6C63FF]/10 to-[#00E0FF]/10">
              <h3 className="text-xl font-bold text-white mb-3">
                Quick Response Guarantee
              </h3>
              <p className="text-gray-400">
                We pride ourselves on our quick response times. Enterprise
                clients enjoy priority 24/7 support with dedicated account
                managers.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section max-w-7xl mx-auto"
      >
        <div className="glass rounded-2xl overflow-hidden h-96 flex items-center justify-center bg-linear-to-br from-[#6C63FF]/10 to-[#00E0FF]/10">
          <div className="text-center">
            <FiMapPin className="w-16 h-16 text-[#00E0FF] mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              San Francisco Bay Area, California
            </p>
            <p className="text-gray-500 text-sm mt-2">Map integration available</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
