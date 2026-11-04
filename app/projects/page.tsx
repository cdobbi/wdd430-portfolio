import ProjectResults from '@/components/ProjectResults';

export default function ProjectsPage() {
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">Projects Overview</h2>
            <p>Explore my open source and school projects.</p>
            <ProjectResults endpoint="/api/projects" />
        </main>
    );
}
