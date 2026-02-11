
-- Explicit deny for UPDATE
CREATE POLICY "No one can update messages"
ON public.valentine_messages
FOR UPDATE
USING (false);

-- Explicit deny for DELETE
CREATE POLICY "No one can delete messages"
ON public.valentine_messages
FOR DELETE
USING (false);

-- Explicit deny for SELECT (messages are write-only)
CREATE POLICY "No one can read messages"
ON public.valentine_messages
FOR SELECT
USING (false);
