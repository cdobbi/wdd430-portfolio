import Link from "next/link";
import type { ReactNode } from "react";

export default function ProjectsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
            <header className="mb-8 rounded-lg bg-slate-100 p-6">
                <h1 className="mb-4 text-2xl font-bold">Projects</h1>
                <nav aria-label="Projects navigation">
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/projects">Overview</Link>
                        </li>
                        <li>
                            <Link href="/projects/settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
        </section>
    );
}
