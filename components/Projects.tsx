'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ExternalLink, Star, GitFork, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  readme?: {
    content: string;
    images: string[];
    videos: string[];
  };
}

export function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchReadme = async (repo: string) => {
      try {
        const response = await fetch(`https://api.github.com/repos/Danielmehany/${repo}/readme`);
        if (!response.ok) return null;
        const data = await response.json();
        const content = atob(data.content);
        
        // Extract image and video links from README
        const imageRegex = /!\[.*?\]\((.*?)\)/g;
        const videoRegex = /\[.*?\]\((.*?\.(?:mp4|webm))\)/g;
        
        const images = [...content.matchAll(imageRegex)].map(match => match[1]);
        const videos = [...content.matchAll(videoRegex)].map(match => match[1]);
        
        return { content, images, videos };
      } catch (err) {
        console.error(`Error fetching README for ${repo}:`, err);
        return null;
      }
    };

    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Danielmehany/repos?sort=updated&per_page=10');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        
        // Filter out the personal website repository
        const filteredData = data.filter((repo: GitHubRepo) => 
          !repo.name.toLowerCase().includes('daniel-mehany-website')
        );

        // Fetch README for each project
        const projectsWithReadme = await Promise.all(
          filteredData.map(async (project: GitHubRepo) => {
            const readme = await fetchReadme(project.name);
            return { ...project, readme };
          })
        );

        setProjects(projectsWithReadme);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse bg-background border-border">
                <CardHeader className="space-y-2">
                  <div className="h-6 bg-secondary rounded w-3/4"></div>
                  <div className="h-4 bg-secondary rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-secondary rounded w-full mb-2"></div>
                  <div className="h-4 bg-secondary rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Featured Projects</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-destructive/10 border-destructive">
              <CardContent className="pt-6">
                <p className="text-destructive">Error: {error}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col bg-background border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate text-white">{project.name}</span>
                  <Link
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </CardTitle>
                {project.language && (
                  <CardDescription className="text-white">{project.language}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative">
                  <p className={`text-white ${expandedProjects.has(project.id) ? '' : 'line-clamp-2'}`}>
                    {project.description || 'No description available'}
                  </p>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-primary hover:underline mt-1 flex items-center gap-1 text-sm"
                  >
                    {expandedProjects.has(project.id) ? (
                      <>Show less <ChevronUp className="h-4 w-4" /></>
                    ) : (
                      <>Show more <ChevronDown className="h-4 w-4" /></>
                    )}
                  </button>
                </div>

                {expandedProjects.has(project.id) && project.readme && (
                  <div className="mt-4 space-y-4">
                    {project.readme.images.length > 0 && (
                      <div className="space-y-4">
                        {project.readme.images.map((img, index) => (
                          <div key={index} className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                            <Image
                              src={img}
                              alt={`${project.name} screenshot ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {project.readme.videos.length > 0 && (
                      <div className="space-y-4">
                        {project.readme.videos.map((video, index) => (
                          <video
                            key={index}
                            controls
                            className="w-full rounded-lg border border-border"
                            src={video}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {project.topics && project.topics.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-background text-white border border-border"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-4 text-sm text-white">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-white" />
                    <span>{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4 text-white" />
                    <span>{project.forks_count}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="https://github.com/Danielmehany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-primary"
          >
            View all projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
} 