import { getProjects } from '../../../lib/projects-db';
export async function GET(request: Request) {
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    return Response.json(await getProjects(type));
}
