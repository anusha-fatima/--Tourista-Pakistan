import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { Message } from './types';

interface ChatbotWindowProps {
  messages: Message[];
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
}

const ChatbotWindow = ({ 
  messages, 
  inputValue, 
  onInputChange, 
  onSendMessage,
  onKeyDown,
  isTyping
}: ChatbotWindowProps) => {
  const chatContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="fixed bottom-20 right-6 z-50 w-80 md:w-96 shadow-xl animate-fade-in">
      <CardHeader className="bg-pakistan-green text-white py-3">
        <CardTitle className="text-lg flex items-center">
          <span className="mr-2">🧭</span> Tourista Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent ref={chatContentRef} className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="px-4 py-2 rounded-xl bg-white border border-gray-200">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="border-t p-3 flex gap-2">
        <Input
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          placeholder="Ask about planning your trip..."
          className="flex-grow"
        />
        <Button 
          onClick={onSendMessage} 
          size="icon" 
          disabled={!inputValue.trim() || isTyping}
          className="bg-pakistan-green hover:bg-pakistan-green/90"
        >
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChatbotWindow;