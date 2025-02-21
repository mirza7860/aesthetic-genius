
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GEMINI_API_KEY = "AIzaSyBCgswcsV3ceAFyvz6f4B7gMxE3cZqBllA";
const MODEL_NAME = "gemini-pro";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    
    // Enhance the prompt with specific UI/UX guidelines
    const enhancedPrompt = `
    You are an expert UI/UX designer and developer. Create a modern, responsive React component based on this description: "${prompt}"

    Follow these guidelines:
    1. Use Tailwind CSS for styling
    2. Ensure the component is responsive and mobile-friendly
    3. Include clear TypeScript types
    4. Follow accessibility best practices
    5. Use modern React patterns and hooks
    6. Implement proper error handling
    
    Return the response in this JSON format:
    {
      "code": "// The complete React component code here",
      "preview": "// A simplified HTML preview of how the component will look"
    }
    
    Make the code concise but complete and ensure it can be rendered immediately.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: enhancedPrompt
          }]
        }]
      })
    });

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;
    
    // Parse the JSON response from the generated text
    const matches = generatedText.match(/```json\n([\s\S]*?)\n```/);
    let parsedResponse = {};
    
    if (matches && matches[1]) {
      try {
        parsedResponse = JSON.parse(matches[1]);
      } catch (error) {
        console.error("Failed to parse JSON response:", error);
        // Fallback to raw text if JSON parsing fails
        parsedResponse = {
          code: generatedText,
          preview: "Preview not available"
        };
      }
    } else {
      parsedResponse = {
        code: generatedText,
        preview: "Preview not available"
      };
    }

    return new Response(JSON.stringify(parsedResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
