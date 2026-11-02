import ProjectList from "@/components/ProjectList";

const projects = [
    {
        title: "Rabbit Savvy",
        description:
            "An offline study companion that helps rabbit exhibitors and breeders practice their knowledge.",
        technologies: ["HTML, CSS, JavaScript, Capacitor & Node.js, No backend"],
        link: "https://cdobbi.github.io/Rabbit-Savvy/",
    },
    {
        title: "Rhinelander Rabbitry",
        description:
            "A Rabbitry website for showcasing and managing rabbit breeding and links to rabbit information.",
        technologies: ["HTML, CSS, JavaScript, No middle tier & PHP"],
        link: "https://www.rhinelander-rabbitry.com/",
    },
    {
        title: "A Quilting Creation",
        description:
            "A website showcasing quilting projects and services.",
        technologies: ["HTML, CSS, JavaScript , Bootstrap, JSON & PHP"],
        link: "https://www.aquiltingcreation.com/",
    },
    {
        title: "Time for Slime",
        description:
            "A website to purchase slime.",
        technologies: ["HTML, CSS, Javascript, No middle tier or backend"],
        link: "https://cdobbi.github.io/time4slime/",
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