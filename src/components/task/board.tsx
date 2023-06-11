"use client"
import { useState } from "react";
import { AddTaskCard, TaskCard } from "./card";
import { TaskType } from "@/types/types";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const tasks = [
    {
        title: "Build the Task CRUD API",
        date: "Task Date",
        time: "Task Time",
        priority: "Medium",
        plannedTime: "00:25",
        actualTime: "Task Actual Time",
        isTimeboxed: false,
        isCompleted: false,
        userId: "Task User ID"
    },
    {
        title: "Build the Task Page frontend",
        date: "Task Date",
        time: "Task Time",
        priority: "High",
        plannedTime: "00:45",
        actualTime: "Task Actual Time",
        isTimeboxed: false,
        isCompleted: false,
        userId: "Task User ID"
    },
    {
        title: "Perform the Frontend integration",
        date: "Task Date",
        time: "Task Time",
        priority: "Low",
        plannedTime: "1:12",
        actualTime: "Task Actual Time",
        isTimeboxed: false,
        isCompleted: false,
        userId: "Task User ID"
    }
]

export default function TaskBoard({ tasks }: { tasks: TaskType[] }) {

    const [date, setDate] = useState(new Date().getDate().toString());
    const [day, setDay] = useState(weekdays[new Date().getDay()]);
    const [month, setMonth] = useState(months[new Date().getMonth()]);

    const [taskList, setTaskList] = useState(tasks);

    return (
        <div className="px-40 py-20">
            <div className="">
                <h1 className="text-2xl text-gray-800 font-semibold">{day}</h1>
                <h3 className="text-gray-400 font-medium">{month + " " + date}</h3>
            </div>

            <div className="">
                <AddTaskCard />
            </div>

            <div className="">
                {taskList.map((task) => (
                    <div className="" key={task.title}>
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    )
}