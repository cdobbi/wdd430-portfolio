import ProjectList from "@/components/ProjectList";

const projects = [
    {
        title: "Warren Ledger",
        description:
            "A rabbitry management application that helps breeders organize rabbits, breedings, litters, pedigrees, and reminders.",
        technologies: ["Vite"],
        link: "https://www.warren-ledger.com/",
    },
    {
        title: "Rabbit Savvy",
        description:
            "An offline study companion that helps rabbit exhibitors and breeders practice their knowledge.",
        technologies: ["JavaScript", "Capacitor"],
        link: "https://cdobbi.github.io/Rabbit-Savvy/",
    },
];

export default function Home() {
    return (
        <main className="container mx-auto px-4 py-12">
            <section className="py-12 text-center">
                <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
                <p className="text-lg">
                    Welcome! Here are some projects I have built.
                </p>
            </section>

            <ProjectList projects={projects} />
        </main>
    );
}