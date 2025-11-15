'use client';

import { motion } from 'framer-motion';
import {
  FiCpu,
  FiCode,
  FiLayout,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
} from 'react-icons/fi';
import Card from '@/components/Card';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: FiCpu,
      title: 'AI Solutions',
      tagline: 'Intelligent automation for the future',
      description:
        'Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI-Powered Chatbots',
        'Computer Vision',
        'Data Mining & Analysis',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiCode,
      title: 'Web Development',
      tagline: 'Building the digital future',
      description:
        'Create fast, scalable, and secure web applications that deliver exceptional user experiences across all devices.',
      features: [
        'Custom Web Applications',
        'E-Commerce Platforms',
        'Progressive Web Apps',
        'API Development',
        'CMS Integration',
        'Performance Optimization',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      tagline: 'Designing experiences that matter',
      description:
        'Craft intuitive and beautiful interfaces that delight users and drive engagement through thoughtful design.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Interface Design',
        'Design Systems',
        'Mobile App Design',
        'Accessibility Optimization',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Branding',
      tagline: 'Building memorable brands',
      description:
        'Develop a cohesive brand identity that resonates with your audience and sets you apart from the competition.',
      features: [
        'Brand Strategy',
        'Logo Design',
        'Visual Identity',
        'Brand Guidelines',
        'Marketing Collateral',
        'Brand Positioning',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,499',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Single page application',
        'Responsive design',
        'Basic SEO optimization',
        '1 month support',
        'Basic analytics',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-page application',
        'Custom design system',
        'Advanced SEO & performance',
        '3 months support',
        'Advanced analytics',
        'CMS integration',
        'API development',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale projects',
      features: [
        'Full-stack application',
        'AI/ML integration',
        'Custom infrastructure',
        '12 months support',
        'Dedicated team',
        'Priority support',
        'Custom integrations',
        'Security audit',
      ],
      popular: false,
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
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </motion.div>

      {/* Services Grid */}
      <section className="section max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              id={service.title.toLowerCase().replace(/\//g, '-').replace(' ', '-')}
            >
              <Card className="h-full">
                <div
                  className={`w-16 h-16 rounded-xl bg-linear-to-r ${service.gradient} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#00E0FF] font-semibold mb-4">
                  {service.tagline}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FiCheck className="w-5 h-5 text-[#00E0FF] shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our
            commitment to quality and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-linear-to-r from-[#6C63FF] to-[#00E0FF] text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <Card
                className={`h-full ${
                  plan.popular ? 'border-2 border-[#6C63FF]' : ''
                }`}
                hover={false}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FiCheck className="w-5 h-5 text-[#00E0FF] shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-linear-to-r from-[#6C63FF] to-[#00E0FF] text-white shadow-lg hover:shadow-[0_0_25px_rgba(0,224,255,0.5)]'
                        : 'glass text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)]'
                    }`}
                  >
                    Get Started
                    <FiArrowRight />
                  </motion.button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="section max-w-4xl mx-auto glass rounded-3xl p-10 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Let&apos;s discuss your unique requirements and create a tailored plan
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-linear-to-r from-[#6C63FF] to-[#00E0FF] text-white font-semibold rounded-lg text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-[0_0_30px_rgba(0,224,255,0.6)] transition-all"
          >
            Contact Us
            <FiArrowRight />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
