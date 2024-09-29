import React, { useState } from "react";
import Message from "./message";

type ChatWindowProps = {
  messages: { text: string; isSender: boolean }[];
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="w-full h-[80vh] bg-gray-100 rounded-lg p-5 overflow-y-auto">
      {messages.map((msg, idx) => (
        <Message key={idx} text={msg.text} isSender={msg.isSender} />
      ))}
    </div>
  );
};

export default ChatWindow;
