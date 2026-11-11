BEGIN;

ALTER TABLE public.projects DROP CONSTRAINT projects_type_check;
ALTER TABLE public.projects ADD CONSTRAINT projects_type_check
    CHECK (type IN ('opensource', 'school', 'personal', 'probono'));

INSERT INTO public.projects (title, description, type, technologies, link)
SELECT additions.title, additions.description, additions.type, additions.technologies, additions.link
FROM (VALUES
    ('Livestock Lineup', 'A livestock-focused application.', 'personal',
     ARRAY[]::text[], NULL::text),
    ('Rabbit Savvy', 'An offline study companion for rabbit exhibitors and breeders.', 'personal',
     ARRAY['HTML', 'CSS', 'JavaScript', 'Capacitor', 'Node.js'], 'https://cdobbi.github.io/Rabbit-Savvy/'),
    ('Rabbit Club Hub', 'A demo for a rabbit club hub.', 'personal',
     ARRAY[]::text[], 'https://cdobbi.github.io/rabbitclubhub-demo/'),
    ('Rabbit Genome Calculator', 'A calculator for exploring rabbit coat genetics.', 'personal',
     ARRAY['R'], NULL::text),
    ('Sacrament Meeting Planner', 'A school project for viewing and printing meeting programs.', 'school',
     ARRAY['Next.js', 'TypeScript', 'Tailwind'], 'https://sacrament-meetings.onrender.com/'),
    ('Rhinelander Rabbitry', 'A school project showcasing rabbit breeding and information.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript', 'PHP'], 'https://www.rhinelander-rabbitry.com/'),
    ('A Quilting Creation', 'A school project showcasing quilting projects and services.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JSON', 'PHP'], 'https://www.aquiltingcreation.com/'),
    ('Tag Track', 'A pro bono project for 4-H.', 'probono',
     ARRAY[]::text[], NULL::text)
) AS additions(title, description, type, technologies, link)
WHERE NOT EXISTS (SELECT 1 FROM public.projects WHERE projects.title = additions.title);

COMMIT;
