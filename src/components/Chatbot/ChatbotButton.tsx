import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ChatbotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatbotButton = ({ isOpen, onClick }: ChatbotButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-pakistan-green hover:bg-pakistan-green/90'}`}
      size="icon"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? <X /> : <MessageCircle />}
    </Button>
  );
};

export default ChatbotButton;
