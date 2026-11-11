BEGIN;

ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS sort_order BIGINT;

UPDATE public.projects
SET link = 'https://livestock-lineup.onrender.com/'
WHERE title = 'Livestock Lineup';

UPDATE public.projects
SET link = 'https://cdobbi.github.io/TagTrack/',
    description = 'A pro bono project for tracking junior livestock eligibility.'
WHERE title = 'Tag Track';

INSERT INTO public.projects (title, description, type, technologies, link, sort_order)
SELECT 'Warren Ledger', 'A rabbitry management application.', 'personal',
       ARRAY[]::text[], 'https://www.warren-ledger.com/', 25
WHERE NOT EXISTS (SELECT 1 FROM public.projects WHERE title = 'Warren Ledger');

UPDATE public.projects
SET link = 'https://www.warren-ledger.com/', sort_order = 25
WHERE title = 'Warren Ledger';

COMMIT;
