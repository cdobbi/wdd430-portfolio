'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function createPageURL(page: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(page));
        return `${pathname}?${params.toString()}`;
    }

    if (totalPages <= 1 && currentPage <= 1) return null;

    return (
        <nav aria-label="Project pagination" className="mt-6 flex items-center gap-4">
            {currentPage > 1 && <Link className="underline" href={createPageURL(Math.min(currentPage - 1, totalPages || 1))}>Previous</Link>}
            <span>Page {currentPage} of {totalPages}</span>
            {currentPage < totalPages && <Link className="underline" href={createPageURL(currentPage + 1)}>Next</Link>}
        </nav>
    );
}
