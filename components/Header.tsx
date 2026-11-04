import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="border-b-5 border-[#f18a72] bg-slate-800 py-4 text-white shadow-md">            <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
            <div className="text-2xl font-bold">Christina Dobbins</div>

            <NavLinks />
        </div>
        </header>
    );
}
