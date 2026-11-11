import type { Project } from '@/lib/projects-db';
import ProjectCard from './ProjectCard';

export default function ProjectCards({ projects }: { projects: Project[] }) {
    if (projects.length === 0) return <p>No projects found.</p>;

    return (
        <section className="grid gap-4 md:grid-cols-2">
            {projects.map(project => <ProjectCard key={project.id} {...project} />)}
        </section>
    );
}
