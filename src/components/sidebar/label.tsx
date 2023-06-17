"use client"
import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"

const colors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA", "#F472B6", "#FCD34D", "#6EE7B7", "#93C5FD", "#D1D5DB"];

export function AddLabel() {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const handleAddLabel = async () => {
        try {
            const res = await axios.post(`/api/label`, {
                name,
                color,
            }, { withCredentials: true });

            console.log(res.data);

        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle>Add Label</DialogTitle>
                <DialogDescription>Create a new label for your workspace</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-3">
                <div className="">
                    <Label htmlFor="name" className="">
                        Name
                    </Label>
                    <Input id="name" className="my-2 w-4/5" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="">
                    <Label htmlFor="name" className="">
                        Priority
                    </Label>
                    <div className="my-2">
                        {colors.map((c) => (
                            <div style={{ backgroundColor: c }} className={`w-6 h-6 cursor-pointer inline-block border-3 rounded-full border-gray-600 mr-4 ${color == c ? `border-2 border-blue-400` : ``}`} key={c} onClick={() => setColor(c)}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <DialogFooter>
                <DialogClose asChild>
                    <Button type="submit" onClick={handleAddLabel}>Create label</Button>
                </DialogClose>
            </DialogFooter>
        </>
    )
}