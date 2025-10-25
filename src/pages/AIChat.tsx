import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { Send, FileText, Sparkles, Loader2 } from "lucide-react";
import { sendMessageToGemini, type ChatMessage } from "@/services/gemini";

const AIChat = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: t("chatbot.greeting"),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = [
    t("aiChat.suggestions.ventilation"),
    t("aiChat.suggestions.energy"),
    t("aiChat.suggestions.lighting"),
    t("aiChat.suggestions.compliance"),
  ];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(input, messages);
      const aiResponse: ChatMessage = {
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      const errorResponse: ChatMessage = {
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                {t("aiChat.title")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("aiChat.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat Area */}
            <Card className="lg:col-span-2 flex flex-col h-[600px]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        msg.role === "user"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p>{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-6 border-t">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder={t("chatbot.placeholder")}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSend}
                    className="bg-gradient-to-r from-accent to-emerald-light"
                    disabled={isLoading || !input.trim()}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4 mr-2" />
                    )}
                    {t("chatbot.send")}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">{t("aiChat.quickSuggestions")}</h3>
                </div>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3"
                      onClick={() => setInput(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">{t("aiChat.knowledgeBase")}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("aiChat.knowledge.buildingCode")}</li>
                  <li>• {t("aiChat.knowledge.energyStandards")}</li>
                  <li>• {t("aiChat.knowledge.fireSafety")}</li>
                  <li>• {t("aiChat.knowledge.accessibility")}</li>
                  <li>• {t("aiChat.knowledge.sustainability")}</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
