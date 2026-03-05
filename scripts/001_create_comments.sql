CREATE TABLE IF NOT EXISTS public.comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Anyone can read comments
CREATE POLICY "allow_select_comments" ON public.comments
  FOR SELECT USING (true);

-- Anyone can insert comments (no auth required for a wedding guestbook)
CREATE POLICY "allow_insert_comments" ON public.comments
  FOR INSERT WITH CHECK (true);
