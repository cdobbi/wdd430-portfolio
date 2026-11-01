import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-800 py-4 text-white shadow-md">            <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
            <div className="text-2xl font-bold">Christina Dobbins</div>

            <nav aria-label="Main navigation">
                <ul className="flex gap-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
}
