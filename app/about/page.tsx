import Image from "next/image";
import SkillsCard from "@/components/SkillsCard";

export default function About() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12">
            <div className="grid overflow-hidden rounded-lg bg-[#173b55] text-white shadow-lg md:grid-cols-[55%_45%]">
                <div className="px-6 py-10 sm:px-10 sm:py-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9bd2e9]">
                        My background and skills
                    </p>
                    <h1 className="mb-6 font-serif text-5xl font-bold sm:text-6xl">About Me</h1>
                    <div className="space-y-4 text-base leading-relaxed text-slate-100 sm:text-lg">
                        <p>
                            I’m a mother and grandmother with a passion for rabbits and web
                            development. I raise a rare breed of rabbit and travel across state
                            lines to show them competitively.
                        </p>
                        <p>
                            I enjoy building tools that make livestock record-keeping easier.
                            One project I’m planning is Warren Ledger, a tool for tracking
                            rabbits, healthcare, pedigrees, genetics, coefficients of
                            inbreeding, litters, and breedings. I also hope to include image
                            uploads and document storage.
                        </p>
                    </div>
                    <SkillsCard skills={["HTML", "CSS", "JavaScript", "React", "Python", "C#", "SQL and PostgreSQL", "PHP", "Node.js", "Express", "MongoDB", "Git", "Github", "REST APIs", "Responsive web design", "OOP", "Data Structures", "Software Testing", "Bootstrap", "JSON", "currently learning Next.js & TypeScript"]} />
                </div>
                <div className="relative aspect-403/437 border-t-4 border-[#f18a72] md:aspect-auto md:min-h-full md:border-t-0 md:border-l-4">
                    <Image
                        src="/rabbit-portrait.png"
                        alt="A white rabbit in a red, ornate outfit"
                        fill
                        loading="eager"
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </main>
    );
}
