
CREATE TABLE public.valentine_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.valentine_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert messages"
ON public.valentine_messages
FOR INSERT
WITH CHECK (true);
