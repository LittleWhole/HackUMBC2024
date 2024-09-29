import React from "react";

type MessageProps = {
  text: string;
  isSender: boolean;
  timestamp?: string;
};

const Message: React.FC<MessageProps> = ({ text, isSender }) => {
  return (
    <div
      className={`flex w-full mb-4 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs break-words rounded-lg p-3 ${
          isSender ? "bg-green-400 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
