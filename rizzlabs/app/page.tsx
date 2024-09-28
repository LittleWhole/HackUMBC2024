import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex basis-1/4 w-100 flex-col p-4 bg-gray-900">
        <Button>Upload</Button>
      </div>
      <div className="flex basis-3/4 w-full flex-col p-4 bg-gray-800">
        <div className="flex flex-row h-full basis-1/8"></div>
        <div className="flex flex-row bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-gray-900">
          <div className="flex h-12 rounded-lg bg-gray-800 items-center justify-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="h-full w-full px-4 py-2 bg-transparent outline-none"
            />
            <Button className="px-4">Send</Button>
          </div>
        </div>

      </div>
    </div>
  );
}