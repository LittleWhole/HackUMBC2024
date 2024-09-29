import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";

export default function UploadSheet(setConvo: Dispatch<SetStateAction<never[]>>) {
    const [input, setInput] = useState("");

    const handleSave = () => {
        setConvo(JSON.parse(input));
        console.log("Conversation saved:", input);
    };

    return (
        <div className="mr-4 mt-4 self-end">
            <Sheet>
                <SheetTrigger asChild>
                    <Button>Upload</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Upload new conversations</SheetTitle>
                        <SheetDescription>
                            Upload updated conversations/DMs from this person to the database.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="conversation">
                                Conversation
                            </Label>
                            <Textarea id="conversation" placeholder="Insert formatted conversation here..." value={input} className="col-span-3" onChange={(e) => setInput(e.target.value)} />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="button" onClick={handleSave}>Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}