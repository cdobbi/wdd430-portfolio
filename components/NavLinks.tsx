"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map(({ href, label }) => {
                    const isActive = pathname === href;

                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={isActive ? "font-bold text-[#9bd2e9] underline underline-offset-4" : "hover:underline"}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
