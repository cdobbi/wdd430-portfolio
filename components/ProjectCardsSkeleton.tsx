export default function ProjectCardsSkeleton() {
    return (
        <div role="status" aria-label="Loading projects" className="grid gap-4 md:grid-cols-2">
            <div className="h-40 animate-pulse rounded bg-slate-200" />
            <div className="h-40 animate-pulse rounded bg-slate-200" />
        </div>
    );
}
