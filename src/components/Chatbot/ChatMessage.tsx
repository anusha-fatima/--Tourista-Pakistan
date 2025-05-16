import { Avatar } from "@/components/ui/avatar";
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBotMessage = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBotMessage ? 'justify-start' : 'justify-end'} mb-4`}>
      {isBotMessage && (
        <Avatar className="h-8 w-8 mr-2">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-pakistan-green text-white text-xs">🧭</div>
        </Avatar>
      )}
      
      <div className={`px-4 py-2 rounded-xl max-w-[80%] ${
        isBotMessage ? 'bg-white border border-gray-200 text-gray-700' 
                    : 'bg-pakistan-green text-white'
      }`}>
        <p className="text-sm">{message.text}</p>
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {!isBotMessage && (
        <Avatar className="h-8 w-8 ml-2">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-500 text-white text-xs">You</div>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;