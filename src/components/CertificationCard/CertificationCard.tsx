"use client"

import { Certification } from '@/types/certification'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaShieldAlt, FaCode, FaDatabase, FaCloud, FaBriefcase, FaServer } from 'react-icons/fa'

interface CertificationCardProps {
  certification: Certification
}

const categoryIcons = {
  security: FaShieldAlt,
  development: FaCode,
  data: FaDatabase,
  cloud: FaCloud,
  business: FaBriefcase,
  database: FaServer,
}

const categoryColors = {
  security: 'text-green-400 bg-green-400/10',
  development: 'text-blue-400 bg-blue-400/10',
  data: 'text-purple-400 bg-purple-400/10',
  cloud: 'text-orange-400 bg-orange-400/10',
  business: 'text-red-400 bg-red-400/10',
  database: 'text-indigo-400 bg-indigo-400/10',
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const Icon = categoryIcons[certification.category] || FaCode

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-premium-gray border border-white/5 rounded-xl p-6 h-full flex flex-col hover:border-white/20 transition-colors duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${categoryColors[certification.category] || 'text-gray-400 bg-gray-400/10'}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white line-clamp-2 leading-tight">
              {certification.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {certification.issuer}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6 border-t border-white/5 pt-4">
          <span className="capitalize font-medium tracking-wide">{certification.category}</span>
          <span>{certification.date}</span>
        </div>
      </div>

      <Button
        asChild
        variant="outline"
        className="w-full group border-white/10 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/30"
      >
        <a href={certification.verificationLink} target="_blank">
          <span className="flex items-center justify-center">
            View Certificate
            <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </a>
      </Button>
    </motion.div>
  )
}