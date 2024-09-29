"use client";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter, useParams } from "next/navigation";

interface Message {
  id: number;
  content: string;
}

//Static dynamic paths for testings
export const getStaticPaths: GetStaticPaths = async () => {
  const chatRooms = ["1", "2", "3", "4"];

  const paths = chatRooms.map((room) => ({
    params: { id: room },
  }));

  return {
    paths,
    fallback: false,
  };
};

//Creates new dynamic paths
/*
export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db("your_database_name"); // Replace with your database name
  const chatrooms = await db.collection("chatrooms").find({}).toArray(); // Replace with your collection name

  return chatrooms.map((chatroom) => ({
    id: chatroom._id.toString(), // Ensure to convert ObjectId to string
  }));
}
*/
export default function Chatroom() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      //TODO: fetch messages
      console.log("Chatroom ID: ${id}");
    }
  });

  return (
    <div>
      <h1>Welcome to Chatroom: {id}</h1>
      <Textarea placeholder="Message RizzLabs" />
      <Button>Send</Button>
    </div>
  );
}
