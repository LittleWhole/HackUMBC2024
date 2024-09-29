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
        className={`max-w-xs break-words rounded-t-xl p-3 ${
          isSender ? "bg-green-600 text-white  rounded-bl-xl" : "bg-neutral-700 text-white  rounded-br-xl"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
