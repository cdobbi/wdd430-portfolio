import { Pool } from 'pg';

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school' | 'personal' | 'probono';
    technologies: string[];
    link?: string;
}

interface ProjectRow extends Omit<Project, 'link'> {
    link: string | null;
}

export const PROJECTS_PER_PAGE = 6;

let pool: Pool | undefined;

function getPool(): Pool {
    if (!pool) {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not configured');
        }
        pool = new Pool({ connectionString: process.env.DATABASE_URL });
    }
    return pool;
}

function toProject(row: ProjectRow): Project {
    const { link, ...project } = row;
    return link === null ? project : { ...project, link };
}

export async function getProjects(type?: string | null): Promise<Project[]> {
    const result = type
        ? await getPool().query<ProjectRow>(
            'SELECT id, title, description, type, technologies, link FROM projects WHERE type = $1 ORDER BY id',
            [type]
        )
        : await getPool().query<ProjectRow>(
            'SELECT id, title, description, type, technologies, link FROM projects ORDER BY id'
        );
    return result.rows.map(toProject);
}

export async function getProjectById(id: number): Promise<Project | null> {
    const result = await getPool().query<ProjectRow>(
        'SELECT id, title, description, type, technologies, link FROM projects WHERE id = $1',
        [id]
    );
    return result.rows.length ? toProject(result.rows[0]) : null;
}

const searchCondition = `
    strpos(lower(title), lower($1)) > 0
    OR strpos(lower(description), lower($1)) > 0
    OR EXISTS (
        SELECT 1 FROM unnest(technologies) AS technology
        WHERE strpos(lower(technology), lower($1)) > 0
    )
`;

export async function fetchFilteredProjects(query: string, page: number): Promise<Project[]> {
    const result = await getPool().query<ProjectRow>(
        `SELECT id, title, description, type, technologies, link FROM projects
         WHERE ${searchCondition}
         ORDER BY id LIMIT $2 OFFSET $3`,
        [query, PROJECTS_PER_PAGE, (page - 1) * PROJECTS_PER_PAGE]
    );
    return result.rows.map(toProject);
}

export async function fetchProjectsPages(query: string): Promise<number> {
    const result = await getPool().query<{ count: string }>(
        `SELECT count(*) FROM projects WHERE ${searchCondition}`,
        [query]
    );
    return Math.ceil(Number(result.rows[0].count) / PROJECTS_PER_PAGE);
}