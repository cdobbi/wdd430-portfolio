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
    -- ('Rabbit Club Hub', 'A demo for a rabbit club hub.', 'personal',
    --  ARRAY[]::text[], 'https://cdobbi.github.io/rabbitclubhub-demo/'),
    ('Sacrament Meeting Planner', 'A school project for viewing and printing meeting programs.', 'school',
     ARRAY['Next.js', 'TypeScript', 'Tailwind'], 'https://sacrament-meetings.onrender.com/'),
    ('Rhinelander Rabbitry', 'A school project showcasing rabbit breeding and information.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript', 'PHP'], 'https://www.rhinelander-rabbitry.com/'),
    ('A Quilting Creation', 'A school project showcasing quilting projects and services.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JSON', 'PHP'], 'https://www.aquiltingcreation.com/'),
    ('Grand Tetons', 'A community website featuring local events and the Teton Chamber of Commerce.', 'school',
     ARRAY[]::text[], 'https://cdobbi.github.io/cse270-teton/'),
    ('Time for Slime', 'A website showcasing slime products.', 'personal',
     ARRAY['HTML', 'CSS', 'JavaScript'], 'https://cdobbi.github.io/time4slime/'),
    ("What's the Time", 'A class time converter for different time zones and daylight saving changes.', 'personal',
     ARRAY['Next.js', 'TypeScript'], 'https://whatsthetime-e0j8.onrender.com/'),
    ('WDD 131 About Me', 'A personal introduction page created for a web fundamentals course.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript'], 'https://cdobbi.github.io/wdd131/index.html'),
    ('Temple Gallery', 'A gallery of temples built for a web development course.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript'], 'https://cdobbi.github.io/wdd131/filtered-temples.html'),
    ('Rabbit Breed Review', 'A form for reviewing rabbit breeds.', 'school',
     ARRAY['HTML', 'CSS', 'JavaScript'], 'https://cdobbi.github.io/wdd131/form.html'),
    ('Explore England', 'A page presenting facts about England.', 'school',
    --  ARRAY['HTML', 'CSS', 'JavaScript'], 'https://cdobbi.github.io/wdd131/place.html'),
    -- ('Tag Track', 'A pro bono project for 4-H.', 'probono',
     ARRAY[]::text[], NULL::text)
) AS additions(title, description, type, technologies, link)
WHERE NOT EXISTS (SELECT 1 FROM public.projects WHERE projects.title = additions.title);

COMMIT;
