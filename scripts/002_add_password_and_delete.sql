-- Add password column to comments table
ALTER TABLE public.comments ADD COLUMN IF NOT EXISTS password TEXT NOT NULL DEFAULT '';

-- Allow anyone to delete comments (password check handled in app layer)
CREATE POLICY "allow_delete_comments" ON public.comments
  FOR DELETE USING (true);

-- Delete all existing test comments
DELETE FROM public.comments;
