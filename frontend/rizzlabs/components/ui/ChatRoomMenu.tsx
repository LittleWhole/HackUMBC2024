// Example component to navigate to a chatroom
import Link from "next/link";
import { FC } from "react";

const ChatRoomsList: FC = () => {
  const chatRoomIDs: string[] = ["1", "2", "3", "4"]; // Example chatroom IDs

  return (
    <div>
      <h1>Available Chatrooms</h1>
      <ul>
        {chatRoomIDs.map((room) => (
          <li key={room}>
            <Link href={`/chatroom/${room}`}>Join Chatroom {room}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomsList;
