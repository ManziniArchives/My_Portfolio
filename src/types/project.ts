export interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  stars?: number;
  forks?: number;
  language?: string;
  updatedAt: string;
  featured?: boolean;
}