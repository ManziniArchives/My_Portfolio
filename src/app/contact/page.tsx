"use client"

import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import ContactForm from '@/components/ContactForm/ContactForm'
import Footer from '@/components/Footer/Footer'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-blue-500'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: 'text-green-500'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: personalInfo.linkedin,
    href: 'https://linkedin.com/in/musawenkosi-manzini',
    color: 'text-blue-600'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: personalInfo.github,
    href: 'https://github.com/ManziniArchives',
    color: 'text-purple-500'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Pretoria, South Africa',
    href: null,
    color: 'text-red-500'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-premium-black text-gray-900 dark:text-white pt-24 pb-16">
      <Navigation />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Get in <span className="text-primary-600 dark:text-primary-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="visible"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-premium-gray p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || '#'}
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 ${item.href
                      ? 'hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer group'
                      : 'cursor-default'
                      }`}
                    target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`p-3 rounded-lg bg-gray-100 dark:bg-black/30 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-primary-600 dark:bg-primary-900/20 p-8 rounded-2xl border border-primary-500/20">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-500/20 text-primary-100 dark:text-primary-400">
                  <FaClock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white dark:text-primary-100 mb-2">Response Time</h3>
                  <p className="text-primary-100 dark:text-primary-200/80 leading-relaxed">
                    I typically respond to inquiries within 24 hours. For urgent matters, please feel free to give me a call.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>

      <Footer />
    </div>
  )
}