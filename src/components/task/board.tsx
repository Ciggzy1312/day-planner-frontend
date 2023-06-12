"use client"
import { useState } from "react";
import { AddTaskCard, TaskCard } from "./card";
import { useStore } from "@/store/store";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function TaskBoard({ d }: { d: number }) {

    const tasks = useStore((state) => state.tasks.filter((task) => new Date(task.date).getDate() === new Date(d).getDate()));

    const [date, setDate] = useState(new Date(d).getDate().toString());
    const [day, setDay] = useState(weekdays[new Date(d).getDay()]);
    const [month, setMonth] = useState(months[new Date(d).getMonth()]);

    const [taskList, setTaskList] = useState(tasks);

    return (
        <div className="px-10 py-20">
            <div className="">
                <h1 className="text-2xl text-gray-800 font-semibold">{day}</h1>
                <h3 className="text-gray-400 font-medium">{month + " " + date}</h3>
            </div>

            <div className="">
                <AddTaskCard setTaskList={setTaskList} date={d} />
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