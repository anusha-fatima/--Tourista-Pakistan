import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatbotButton from './ChatbotButton';
import ChatbotWindow from './ChatbotWindow';
import { Message } from './types';


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "YOUR_API_KEY");

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      text: "👋 Welcome to Tourista Pakistan! I'm your AI travel assistant.",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: uuidv4(),
      text: "I can help you plan your trip to Pakistan! Ask me anything about destinations, hotels, or travel tips.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
     
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
      });
      
      const prompt = `You are a travel assistant specializing in Pakistan tourism.
      User question: "${userMessage}"
      
      Respond with:
      - Accurate, up-to-date information
      - Cultural insights
      - Practical travel tips
      - Safety recommendations when relevant
      - Keep responses concise (2-3 sentences max)
      
      Format: Friendly, professional tone with emoji when appropriate.`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("API Error:", error);
      return "🚧 I'm having technical difficulties. Please try again later or ask a different question.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: uuidv4(),
      text: inputValue,
      sender: 'user' as const,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      const response = await generateResponse(inputValue);
      setMessages(prev => [...prev, {
        id: uuidv4(),
        text: response,
        sender: 'bot' as const,
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={toggleChat} />
      {isOpen && (
        <ChatbotWindow
          messages={messages}
          inputValue={inputValue}
          onInputChange={(e) => setInputValue(e.target.value)}
          onSendMessage={handleSendMessage}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          isTyping={isTyping}
        />
      )}
    </>
  );
};

export default Chatbot;