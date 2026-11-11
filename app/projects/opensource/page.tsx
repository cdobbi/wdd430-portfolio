import { connection } from 'next/server';
import ProjectCards from '@/components/ProjectCards';
import { getProjects } from '@/lib/projects-db';

export default async function OpenSourceProjectsPage() {
    await connection();
    const projects = await getProjects('opensource');
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">Open Source Projects</h2>
            <ProjectCards projects={projects} />
        </main>
    );
}
