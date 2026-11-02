interface SkillsCardProps {
    skills: string[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
    return (
        <section className="mt-8 rounded-lg bg-white p-4 text-grey-900">
            {skills.map((skill, index) => (
                <span key={index} className="inline-block mr-2 mb-2 rounded bg-gray-200 px-2 py-1">
                    {skill}
                </span>
            ))}
        </section>
    );
} 