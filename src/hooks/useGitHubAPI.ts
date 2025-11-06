import { useState, useEffect } from 'react'
import { Project } from '@/types/project'
import { defaultProjects } from '@/data/projects'

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export function useGitHubAPI(username: string = 'ManziniArchives') {
  const [projects, setProjects] = useState<Project[]>(defaultProjects)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`)

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories')
        }

        const repos: GitHubRepo[] = await response.json()

        const transformedProjects: Project[] = repos
          .filter(repo => !repo.fork && repo.description)
          .map(repo => ({
            id: repo.id.toString(),
            name: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description,
            githubUrl: repo.html_url,
            technologies: repo.tags || repo.topics.slice(0, 5),
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
            featured: repo.stargazers_count > 5
          }))

        // Combine with default projects and remove duplicates
        const combinedProjects = [
          ...defaultProjects.filter(p => !transformedProjects.find(tp => tp.githubUrl === p.githubUrl)),
          ...transformedProjects
        ].slice(0, 12) // Limit to 12 projects

        setProjects(combinedProjects)
      } catch (err) {
        console.error('Error fetching GitHub projects:', err)
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
        // Keep default projects on error
        setProjects(defaultProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [username])

  return { projects, loading, error, refetch: () => fetchProjects() }
}