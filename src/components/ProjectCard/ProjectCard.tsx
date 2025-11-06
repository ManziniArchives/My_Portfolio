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
      'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Python': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Java': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'HTML': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'CSS': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    }
    return colors[language || ''] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl p-6 h-full flex flex-col"
    >
      {project.featured && (
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center space-x-4">
          {project.stars !== undefined && (
            <div className="flex items-center space-x-1">
              <FaStar className="w-4 h-4" />
              <span>{project.stars}</span>
            </div>
          )}
          {project.forks !== undefined && (
            <div className="flex items-center space-x-1">
              <FaCodeBranch className="w-4 h-4" />
              <span>{project.forks}</span>
            </div>
          )}
        </div>
        {project.language && (
          <span className={`px-2 py-1 rounded text-xs font-medium ${getLanguageColor(project.language)}`}>
            {project.language}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <FaCalendar className="w-3 h-3" />
            <span>Updated {project.updatedAt}</span>
          </div>
        </div>

        <Button
          href={project.githubUrl}
          target="_blank"
          variant="outline"
          className="w-full group"
        >
          <span className="flex items-center justify-center">
            <FaGithub className="w-4 h-4 mr-2" />
            View on GitHub
          </span>
        </Button>
      </div>
    </motion.div>
  )
}