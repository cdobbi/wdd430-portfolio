'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const urlQuery = searchParams.get('query') ?? '';
    const input = useRef<HTMLInputElement>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        if (input.current) input.current.value = urlQuery;
    }, [urlQuery, pathname]);

    useEffect(() => () => {
        if (timer.current) clearTimeout(timer.current);
    }, []);

    function handleSearch(term: string) {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', '1');
            if (term.trim()) params.set('query', term);
            else params.delete('query');
            replace(`${pathname}?${params.toString()}`, { scroll: false });
        }, 300);
    }

    return (
        <div className="my-4">
            <label htmlFor="project-search" className="mr-2 font-semibold">Search projects</label>
            <input ref={input} id="project-search" type="search" maxLength={200} defaultValue={urlQuery}
                onChange={event => handleSearch(event.target.value)}
                placeholder="Search projects..." className="rounded border border-slate-400 px-3 py-2" />
        </div>
    );
}
