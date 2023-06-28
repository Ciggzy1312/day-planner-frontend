"use client"
import { useState } from "react";
import { AddTaskCard, TaskCard } from "@/components/task/card";
import { TaskType } from "@/types/types";
import { useStore } from "@/store/store";

export default function FocusBoard({ tasks, d }: { tasks: TaskType[], d: string }) {

    const [taskList, setTaskList] = useState(tasks);

    const handleSelectedTask = (task: TaskType) => {
        useStore.setState({ selectedTask: task });
    }

    return (
        <div className="px-10 py-4">
            <div className="">
                <div className="text-2xl text-gray-800 font-semibold">Focus on today tasks</div>
            </div>

            <div className="">
                <AddTaskCard setTaskList={setTaskList} date={d} />
            </div>

            <div className="">
                {taskList.map((task: TaskType, index: number) => (
                    <div className="cursor-pointer" key={index} onClick={() => handleSelectedTask(task)} >
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    )
}