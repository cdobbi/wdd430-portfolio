import ProjectResults from '@/components/ProjectResults';

export default function OpenSourceProjectsPage() {
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">Open Source Projects</h2>
            <ProjectResults endpoint="/api/projects?type=opensource" />
        </main>
    );
}
