import { Project } from '@/types/project';

export const featuredProjects: Project[] = [
  {
    id: 'football-management-system',
    name: 'Football Management System',
    description: 'A scouting system for identifying young football talents with advanced analytics and reporting capabilities.',
    githubUrl: 'https://github.com/gitLunga/FMT.git',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    language: 'JavaScript',
    updatedAt: '2024-01-15',
    featured: true
  },
  {
    id: 'mpumalanga-ai-pathfinder',
    name: 'Mpumalanga AI Pathfinder',
    description: 'Educational platform with AI-powered navigation and learning tools for students in Mpumalanga region.',
    githubUrl: 'https://github.com/ManziniArchives/pathfinder-edu-mpumalanga.git',
    technologies: ['Vite', 'TypeScript', 'React', 'Tailwind CSS'],
    language: 'TypeScript',
    updatedAt: '2024-11-06',
    featured: true
  },
  {
    id: 'manzini-wanderlust',
    name: 'Manzini Wanderlust',
    description: 'Travel and exploration platform featuring destination discovery and trip planning capabilities.',
    githubUrl: 'https://github.com/ManziniArchives/manzini-wanderlust.git',
    technologies: ['Vite', 'TypeScript', 'React', 'Tailwind CSS'],
    language: 'TypeScript',
    updatedAt: '2024-11-06',
    featured: true
  }
];

export const defaultProjects: Project[] = [
  {
    id: 'campusconnect',
    name: 'CampusConnect',
    description: 'Campus connectivity platform facilitating student interactions and resource sharing.',
    githubUrl: 'https://github.com/aytee-80/CampusConnect.git',
    technologies: ['TypeScript', 'JavaScript', 'CSS'],
    language: 'TypeScript',
    updatedAt: '2024-10-15',
    featured: false
  },
  {
    id: 'property-finder',
    name: 'Property Finder',
    description: 'Real estate discovery platform for finding and listing properties with advanced search capabilities.',
    githubUrl: 'https://github.com/aquamarinemichelle/Property_Finder.git',
    technologies: ['Java', 'PHP', 'JavaScript'],
    language: 'Java',
    updatedAt: '2024-09-20',
    featured: false
  }
];