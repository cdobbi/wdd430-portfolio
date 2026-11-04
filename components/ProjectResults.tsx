"use client";
import { useEffect, useState } from 'react';
import type { Project } from '@/lib/projects-db';
import ProjectCard from './ProjectCard';

export default function ProjectResults({ endpoint }: { endpoint: string }) {
    return <ProjectResultsForEndpoint key={endpoint} endpoint={endpoint} />;
}

function ProjectResultsForEndpoint({ endpoint }: { endpoint: string }) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        fetch(endpoint, { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch projects');
                return res.json();
            })
            .then((data: Project[]) => {
                if (!controller.signal.aborted) setProjects(data);
            })
            .catch((err: unknown) => {
                if (!controller.signal.aborted) {
                    setError(err instanceof Error ? err.message : 'Failed to fetch projects');
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [endpoint]);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;
    if (projects.length === 0) return <p>No projects found.</p>;

    return (
        <section className="grid gap-4 md:grid-cols-2">
            {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
}