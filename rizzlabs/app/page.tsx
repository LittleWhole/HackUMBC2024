import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-100 flex-col p-4 bg-gray-900">
      <Button>Upload</Button>
      </div>
      <div className="flex w-full flex-col p-4  bg-gray-800">
      </div>
    </div>
  );
}