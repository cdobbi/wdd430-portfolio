import SkillsCard from "@/components/SkillsCard";
export default function About() {
    return (
        <main className="mx-auto max-w-4xl px-4 py-12">
            <h1 className="mb-4 text-3xl font-bold">About Me</h1>
            <div className="space-y-4 text-lg">
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
            <SkillsCard skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"]} />
        </main>
    );
}
