"use client"

import { Project } from '@/types/project'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaCalendar } from 'react-icons/fa'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getLanguageColor = (language?: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'text-yellow-400 bg-yellow-400/10',
      'TypeScript': 'text-blue-400 bg-blue-400/10',
      'Python': 'text-green-400 bg-green-400/10',
      'Java': 'text-red-400 bg-red-400/10',
      'HTML': 'text-orange-400 bg-orange-400/10',
      'CSS': 'text-purple-400 bg-purple-400/10',
    }
    return colors[language || ''] || 'text-gray-400 bg-gray-400/10'
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-premium-gray border border-white/5 rounded-xl p-6 h-full flex flex-col hover:border-white/20 transition-colors duration-300"
    >
      {project.featured && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-white/5 rounded border border-white/5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pt-4 border-t border-white/5">
        <div className="flex items-center space-x-4">
          {project.stars !== undefined && (
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <FaStar className="w-3.5 h-3.5" />
              <span>{project.stars}</span>
            </div>
          )}
          {project.forks !== undefined && (
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <FaCodeBranch className="w-3.5 h-3.5" />
              <span>{project.forks}</span>
            </div>
          )}
        </div>
        {project.language && (
          <span className={`px-2.5 py-1 rounded text-xs font-medium ${getLanguageColor(project.language)}`}>
            {project.language}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-1.5">
            <FaCalendar className="w-3 h-3" />
            <span>Updated {project.updatedAt}</span>
          </div>
        </div>

        <Button
          href={project.githubUrl}
          target="_blank"
          variant="outline"
          className="w-full group border-white/10 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/30"
        >
          <span className="flex items-center justify-center">
            <FaGithub className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
            View on GitHub
          </span>
        </Button>
      </div>
    </motion.div>
  )
}