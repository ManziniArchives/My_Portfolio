import { Project } from '@/types/project';

export const featuredProjects: Project[] = [
  {
    id: 'football-management-system',
    name: 'Football Management System',
    description: 'A scouting system for identifying young football talents with advanced analytics and reporting capabilities.',
    githubUrl: 'https://github.com/ManziniArchives/football-management-system',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    language: 'JavaScript',
    updatedAt: '2024-01-15',
    featured: true
  }
];

export const defaultProjects: Project[] = [
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    githubUrl: 'https://github.com/ManziniArchives/portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    language: 'TypeScript',
    updatedAt: '2024-11-06',
    featured: true
  },
  {
    id: 'data-analytics-dashboard',
    name: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and business intelligence.',
    githubUrl: 'https://github.com/ManziniArchives/analytics-dashboard',
    technologies: ['Python', 'React', 'D3.js', 'PostgreSQL'],
    language: 'Python',
    updatedAt: '2024-02-20',
    featured: false
  },
  {
    id: 'cybersecurity-scanner',
    name: 'Cybersecurity Scanner',
    description: 'Automated security vulnerability scanner for web applications.',
    githubUrl: 'https://github.com/ManziniArchives/security-scanner',
    technologies: ['Python', 'Flask', 'Nmap', 'Security Tools'],
    language: 'Python',
    updatedAt: '2024-03-10',
    featured: false
  }
];