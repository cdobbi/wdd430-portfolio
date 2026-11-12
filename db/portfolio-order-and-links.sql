BEGIN;

ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS sort_order BIGINT;

DELETE FROM public.projects
WHERE title IN ('Tag Track', 'Warren Ledger', 'Rabbit Club Hub');

UPDATE public.projects
SET link = 'https://livestock-lineup.onrender.com/'
WHERE title = 'Livestock Lineup';

COMMIT;
