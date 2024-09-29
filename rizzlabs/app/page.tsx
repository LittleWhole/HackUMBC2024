"use client";
import { Button } from "@/components/ui/button";
import { FilePlusIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import Analysis from "@/components/analysis";
import { Party } from "@/types";
import { Sentiment } from "@/types";
import { Status } from "@/types";

enum Modes {
  ANALYSIS,
  PRACTICE,
  SUGGESTIONS,
}

export default function Home() {
  const [mode, setMode] = useState(Modes.ANALYSIS);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        //TODO do stuff with this data
        console.log(data);
      });
  }, []);

  const handleModeChange = (value: string) => {
    switch (value) {
      case "analysis":
        setMode(Modes.ANALYSIS);
        break;
      case "practice":
        setMode(Modes.PRACTICE);
        break;
      case "suggestions":
        setMode(Modes.SUGGESTIONS);
        break;
    }
  };

  const renderSwitch = (mode: Modes) => {
    switch (mode) {
      case Modes.PRACTICE:
        return (
          <div className="flex h-full flex-col bg-neutral-800">
            <div className="flex flex-row h-full basis-1/8"></div>
            <div className="flex flex-row bottom-0 left-1/2 p-2 mb-4 rounded-lg bg-neutral-900">
              <div className="flex h-12 w-full rounded-lg bg-neutral-800 items-center justify-center">
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
        );
      case Modes.ANALYSIS:
        return(<div className="flex h-full flex-col bg-neutral-800"> 
          <Analysis texts={[
            {
              content: "Hello, how are you?",
              party: Party.USER,
              analysis: {
                sentiment: Sentiment.POSITIVE,
                rizzscore: 60,
                status: Status.GOOD,
                commentary: "Good message lol"
              },
            },
            {
              content: "I am doing well, thank you for asking.",
              party: Party.OTHER,
              analysis: {
                sentiment: Sentiment.POSITIVE,
                rizzscore: 90,
                status: Status.EXCELLENT,
                commentary: "Great response!"
              },
            },
          ]}/>
        </div>);
      case Modes.SUGGESTIONS:
        <div className="flex h-full flex-col bg-neutral-800"> 
        </div>
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex basis-3/12 flex-col p-4 bg-neutral-900">
        <Button>New Person</Button>
      </div>
      <div className="flex basis-3/12 flex-col bg-neutral-800">
        <div className="mt-4 ml-4 text-white">
          <Select onValueChange={handleModeChange}>
            <SelectTrigger className="w-[180px] font-bold">
              <SelectValue placeholder="Select a mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Modes</SelectLabel>
                <SelectItem value="analysis">Analysis</SelectItem>
                <SelectItem value="practice">Practice</SelectItem>
                <SelectItem value="suggestions">Suggestions</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex basis-6/12 flex-col bg-neutral-800">
        {renderSwitch(mode)}
      </div>
      <div className="flex basis-3/12 flex-col bg-neutral-800"></div>
    </div>
  );
}
