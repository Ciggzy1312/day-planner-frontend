"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectDuration, SelectTag } from "./select";
import { TaskType } from "@/types/types";
import axios from "axios";
import { DialogClose } from "@radix-ui/react-dialog";
import { CheckIcon } from "@/static/icons/Check";
import { PauseIcon, PlayIcon } from "@/static/icons/TimerIcon";
import { BacklogIcon } from "@/static/icons/BacklogIcon";
import { InfoIcon } from "@/static/icons/InfoIcon";

const priorities = ["Low", "Medium", "High"]

export function TaskCard({ task }: { task: TaskType }) {

    const [isCompleted, setIsCompleted] = useState(task.isCompleted);
    const [isClicked, setIsClicked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleComplete = async () => {
        try {

            setIsCompleted(!isCompleted);

            const res = await axios.put(`/api/task/${task.id}/complete`, {
                isCompleted: !isCompleted,
            }, { withCredentials: true });

        } catch (error: any) {
            console.log(error.response.data);
            setIsCompleted(!isCompleted);
        }
    };

    const handlePlaying = async () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="my-6 p-4 w-80 border-2 border-gray-100 rounded-md">
            <div className="" onClick={() => setIsClicked(!isClicked)}>
                <div className="flex justify-between">
                    <div className="text-sm">{task.priority}</div>
                    <div className="text-xs self-center bg-gray-100 rounded-md px-2 font-semibold text-gray-400">{task.plannedTime}</div>
                </div>
                <div className="my-2">
                    <h1 className="">{task.title}</h1>
                </div>

                <div className="flex justify-between">
                    <div className="">
                        {isCompleted
                            ? <div onClick={handleComplete}><CheckIcon className="w-[1.5rem] font-bold text-green-500 cursor-pointer" /></div>
                            : <div onClick={handleComplete}><CheckIcon className="w-[1.5rem] text-gray-500 cursor-pointer hover:text-green-500" /></div>}
                    </div>

                    <div className="inline-block text-gray-400 text-xs font-medium mr-2 self-center">
                        <h1><span className="text-yellow-500"># </span>{task.label}</h1>
                    </div>
                </div>
            </div>

            {isClicked &&
                <div className="mt-2 pt-2 flex border-t border-gray-200 text-sky-300">
                    <div className="">
                        <div className=""><BacklogIcon className="w-[1.5rem]" /></div>
                    </div>

                    <div className="">
                        <div className=""><InfoIcon className="mx-2 w-[1.5rem]" /></div>
                    </div>

                    <div className="">
                        {isPlaying
                            ? <div onClick={handlePlaying}><PauseIcon className="w-[1.5rem]" /></div>
                            : <div onClick={handlePlaying}><PlayIcon className="w-[1.5rem]" /></div>}
                    </div>
                </div>
            }
        </div>
    )
}

export function AddTaskCard({ setTaskList, date }: { setTaskList: Dispatch<SetStateAction<TaskType[]>>, date: number }) {

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [duration, setDuration] = useState("");
    const [priority, setPriority] = useState("");

    const handleOpen = () => {
        setTitle("");
        setTag("");
        setDuration("");
        setPriority("");
    }

    const handleAddTask = async () => {
        try {
            const res = await axios.post("/api/task", {
                title,
                label: tag,
                plannedTime: duration,
                priority,
                date: new Date(date).toString(),
                actualTime: "00:00",
                isTimeboxed: false,
                isCompleted: false,
            }, { withCredentials: true })

            console.log(res.data);

            setTaskList((prev) => [...prev, res.data.task]);

        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    return (
        <Dialog onOpenChange={handleOpen}>
            <DialogTrigger asChild>
                <div className="my-6 p-1.5 w-80 border-2 border-gray-100 rounded-md cursor-pointer">+ Add Task</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Add a task</DialogTitle>
                    <DialogDescription>
                        Add a new task to your day
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-3">
                    <div className="">
                        <Label htmlFor="name" className="">
                            Title
                        </Label>
                        <Input id="name" className="my-2 w-4/5" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="flex justify-between">
                        <div className="">
                            <Label htmlFor="name" className="">
                                Tag
                            </Label>
                            <SelectTag setTag={setTag} />
                        </div>

                        <div className="">
                            <Label htmlFor="name" className="">
                                Duration
                            </Label>
                            <SelectDuration setDuration={setDuration} />
                        </div>
                    </div>

                    <div className="">
                        <Label htmlFor="name" className="">
                            Priority
                        </Label>
                        <div className="my-2">
                            {priorities.map((p) => (
                                <div className={`cursor-pointer inline-block px-3 py-0.5 border rounded-md border-gray-400 text-sm font-medium mr-2 ${priority == p ? `border-2 border-blue-400` : ``}`} key={p} onClick={() => setPriority(p)}>
                                    <h1>{p}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={handleAddTask}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}