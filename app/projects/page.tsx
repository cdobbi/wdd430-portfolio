import { Suspense } from 'react';
import { connection } from 'next/server';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import ProjectCards from '@/components/ProjectCards';
import ProjectCardsSkeleton from '@/components/ProjectCardsSkeleton';
import { fetchFilteredProjects, fetchProjectsPages, PROJECTS_PER_PAGE } from '@/lib/projects-db';

type SearchParams = Promise<{ query?: string | string[]; page?: string | string[] }>;

async function ProjectSearchResults({ searchParams }: { searchParams: SearchParams }) {
    await connection();
    const params = await searchParams;
    const query = typeof params.query === 'string' ? params.query.replace(/\0/g, '').trim().slice(0, 200) : '';
    const pageValue = typeof params.page === 'string' ? params.page : '';
    const parsedPage = Number(pageValue);
    const maxPage = Math.floor(2147483647 / PROJECTS_PER_PAGE);
    const page = /^\d+$/.test(pageValue) && Number.isSafeInteger(parsedPage) && parsedPage >= 1 && parsedPage <= maxPage
        ? parsedPage : 1;
    const [projects, totalPages] = await Promise.all([
        fetchFilteredProjects(query, page),
        fetchProjectsPages(query),
    ]);

    return (
        <>
            <ProjectCards projects={projects} />
            {page > totalPages && totalPages > 0 && <p className="mt-4">This page has no results. Use Previous to return to earlier pages.</p>}
            <Pagination currentPage={page} totalPages={totalPages} />
        </>
    );
}

export default function ProjectsPage({ searchParams }: { searchParams: SearchParams }) {
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">Projects Overview</h2>
            <p>Explore my open source and school projects.</p>
            <Suspense fallback={<p>Loading search...</p>}>
                <ProjectSearch />
            </Suspense>
            <Suspense fallback={<ProjectCardsSkeleton />}>
                <ProjectSearchResults searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
