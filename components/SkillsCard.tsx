interface SkillsCardProps {
    skills: string[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
    return (
        <section aria-label="Skills" className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="rounded border border-[#397695] bg-[#245f7e] px-3 py-1 text-sm font-semibold text-white">
                    {skill}
                </span>
            ))}
        </section>
    );
}

