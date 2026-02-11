import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    const apiKey = Deno.env.get('CALLMEBOT_API_KEY');
    if (!apiKey) {
      throw new Error('CALLMEBOT_API_KEY is not configured');
    }

    const phone = '917982257479';
    const text = encodeURIComponent(`💌 Valentine Message Received!\n\n${(message || 'She said YES! 💕').substring(0, 500)}`);
    
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apiKey}`;
    
    const response = await fetch(url);
    const responseText = await response.text();
    
    if (!response.ok) {
      throw new Error(`CallMeBot API failed [${response.status}]: ${responseText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('WhatsApp notification error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
