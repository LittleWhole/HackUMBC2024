"use client";
import { Button } from "@/components/ui/button";
import { FilePlusIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
export default function Home() {
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex basis-1/4 w-100 flex-col p-4 bg-gray-900">
        <Button>Upload</Button>
      </div>
      <div className="flex basis-3/4 w-full flex-col bg-gray-800">
        <div className="flex flex-row h-full basis-1/8"></div>
        <div className="flex flex-row bottom-0 left-1/2 p-4 bg-gray-900">
          <div className="flex h-12 w-full rounded-lg bg-gray-800 items-center justify-center">
            <Button className="px-3 py-3 ml-2">
              <FilePlusIcon />
            </Button>
            <input
              type="text"
              placeholder="Type a message..."
              className="h-full flex-1 px-4 py-2 bg-transparent outline-none text-white"
            />
            <Button className="px-4 py-2 mr-2">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
