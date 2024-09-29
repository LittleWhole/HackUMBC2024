import React from "react";

type MessageProps = {
  role: 'user' | 'assistant';
  content: { type: string; text: string }[];
};

const Message: React.FC<MessageProps> = ({ role, content }) => {
  return (
    <div className={`flex w-full mb-4 ${
      role==='user' ? "justify-end" : "justify-start"
    }`}>
      {content.map((item, idx) => (
        <div key={idx} className={`max-w-xs break-words rounded-t-xl p-3 ${
          role === 'user' ? "bg-pink-700 text-white  rounded-bl-xl" : "bg-neutral-700 text-white  rounded-br-xl"
        }`}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Message;
