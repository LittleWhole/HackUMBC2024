import React from "react";

type MessageProps = {
  role: 'user' | 'assistant';
  content: { type: string; text: string }[];
};

const Message: React.FC<MessageProps> = ({ role, content }) => {
  return (
    <div style={{ textAlign: role === 'user' ? 'right' : 'left', marginBottom: '10px' }}>
      {content.map((item, idx) => (
        <div key={idx} style={{ backgroundColor: role === 'user' ? '#e0e0e0' : '#f0f0f0', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Message;
