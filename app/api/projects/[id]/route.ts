import { getProjectById } from '@/lib/projects-db';
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const projectId = Number(id);
    if (!/^\d+$/.test(id) || !Number.isSafeInteger(projectId) || projectId < 1) {
        return Response.json({ error: 'Invalid project ID' }, { status: 400 });
    }
    const project = await getProjectById(projectId);
    if (!project) {
        return new Response('Project not found', { status: 404 });
    }
    return Response.json(project);
}