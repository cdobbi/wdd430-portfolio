import ProjectResults from '@/components/ProjectResults';

export default function SchoolProjectsPage() {
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">School Projects</h2>
            <ProjectResults endpoint="/api/projects?type=school" />
        </main>
    );
}
