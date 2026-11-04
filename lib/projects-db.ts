export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}
export const projects: Project[] = [
    {
        id: 1,
        title: 'My First Open Source Contribution',
        description: 'A bug fix contributed to a library.',
        type: 'opensource',
        technologies: ['TypeScript', 'React'],
    },
    {
        id: 2,
        title: 'School Project Example',
        description: 'A project completed for a school assignment.',
        type: 'school',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    }
];
export function getProjects(type?: string | null): Project[] {
    if (type) return projects.filter(project => project.type === type);
    return projects;
}
export function getProjectById(id: number): Project | null {
    return projects.find(project => project.id === id) ?? null;
}