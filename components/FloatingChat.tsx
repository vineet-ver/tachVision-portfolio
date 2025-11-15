'use client';

import { motion } from 'framer-motion';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-linear-to-r from-[#6C63FF] to-[#00E0FF] rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(0,224,255,0.6)] transition-all z-50 flex items-center justify-center group"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <FiX className="w-7 h-7 text-white" />
        ) : (
          <FiMessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-28 right-8 w-80 sm:w-96 glass rounded-2xl shadow-2xl z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-linear-to-r from-[#6C63FF] to-[#00E0FF] p-4">
            <h3 className="text-white font-bold text-lg">TechNova.ai Assistant</h3>
            <p className="text-white/80 text-sm">How can we help you today?</p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <div className="glass rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                👋 Hi! I&apos;m your AI assistant. Ask me about our services, pricing, or schedule a consultation.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <button className="w-full text-left p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                <p className="text-white font-semibold text-sm">📅 Schedule a Consultation</p>
              </button>
              <button className="w-full text-left p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                <p className="text-white font-semibold text-sm">💰 View Pricing</p>
              </button>
              <button className="w-full text-left p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                <p className="text-white font-semibold text-sm">📧 Contact Sales</p>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#6C63FF] outline-none"
              />
              <button className="px-4 py-2 bg-linear-to-r from-[#6C63FF] to-[#00E0FF] rounded-lg text-white font-semibold text-sm hover:shadow-lg transition-all">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
