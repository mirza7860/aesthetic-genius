
import { ChatUI } from "@/components/ChatUI";

const Chat = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">AI Design Partner</h1>
        <ChatUI />
      </div>
    </div>
  );
};

export default Chat;
