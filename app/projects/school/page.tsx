import { Suspense } from 'react';
import { connection } from 'next/server';
import ProjectCards from '@/components/ProjectCards';
import ProjectCardsSkeleton from '@/components/ProjectCardsSkeleton';
import { getProjects } from '@/lib/projects-db';

async function SchoolProjectList() {
    await connection();
    const projects = await getProjects('school');
    return <ProjectCards projects={projects} />;
}

export default function SchoolProjectsPage() {
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">School Projects</h2>
            <Suspense fallback={<ProjectCardsSkeleton />}>
                <SchoolProjectList />
            </Suspense>
        </main>
    );
}
