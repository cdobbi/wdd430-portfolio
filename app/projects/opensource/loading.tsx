import ProjectCardsSkeleton from '@/components/ProjectCardsSkeleton';

export default function Loading() {
    return (
        <main>
            <h2 className="mb-4 text-3xl font-bold">Open Source Projects</h2>
            <ProjectCardsSkeleton />
        </main>
    );
}
