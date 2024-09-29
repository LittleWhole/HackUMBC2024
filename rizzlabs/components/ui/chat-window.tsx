import React from "react";
import Message from "./message";

type ChatWindowProps = {
  messages: { role: 'system' | 'user' | 'assistant'; content: { type: string; text: string }[] }[];
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="w-full h-[80vh] bg-neutral-800 p-5 overflow-y-auto">
      {messages.filter(msg => msg.role !== 'system').map((msg, idx) => (
        <Message key={idx} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
};

export default ChatWindow;
