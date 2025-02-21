
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function ChatUI() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [generatedCode, setGeneratedCode] = useState("");
  const [generatedPreview, setGeneratedPreview] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Call Gemini API through Edge Function
      const response = await fetch("https://meosameglgowwuhdupln.functions.supabase.co/generate-ui", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate UI");
      }

      const data = await response.json();

      // Store the prompt and response in Supabase
      const { error } = await supabase
        .from("chat_messages")
        .insert([{
          prompt,
          code_preview: data.code,
          ui_preview: data.preview,
          response: JSON.stringify(data)
        }])
        .select()
        .single();

      if (error) throw error;

      // Update the UI
      setGeneratedCode(data.code);
      setGeneratedPreview(data.preview);
      
      toast({
        title: "Success",
        description: "Your UI has been generated",
      });
      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to process your request",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the UI you want to create..."
              className="min-h-[120px]"
            />
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  Create UI
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Output Section */}
        <div className="bg-background border rounded-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activeTab === "code"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
              onClick={() => setActiveTab("code")}
            >
              Code
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activeTab === "preview"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
          </div>

          {/* Content */}
          <div className="p-4 h-[400px] overflow-auto">
            {activeTab === "code" ? (
              <pre className="whitespace-pre-wrap">{generatedCode}</pre>
            ) : (
              <div className="prose prose-sm max-w-none">
                {generatedPreview ? (
                  <div dangerouslySetInnerHTML={{ __html: generatedPreview }} />
                ) : (
                  <p className="text-muted-foreground">
                    Generated preview will appear here
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
