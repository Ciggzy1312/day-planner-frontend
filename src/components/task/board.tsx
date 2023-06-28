"use client"
import { useState } from "react";
import { AddTaskCard, TaskCard } from "./card";
import { useStore } from "@/store/store";
import Link from "next/link";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function TaskBoard({ d }: { d: number }) {

    const todayDate = new Date().getDate();

    const [date, setDate] = useState(new Date(d).getDate().toString());
    const [day, setDay] = useState(weekdays[new Date(d).getDay()]);
    const [month, setMonth] = useState(months[new Date(d).getMonth()]);

    const formatDate = (date: number): string => {
        const today = new Date(date);
        const yyyy: string = today.getFullYear().toString();
        let mm: string = (today.getMonth() + 1).toString();
        let dd: string = today.getDate().toString();

        if (today.getMonth() + 1 < 10) {
            mm = "0" + mm;
        }

        if (today.getDate() < 10) {
            dd = "0" + dd;
        }

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        return formattedToday;
    };

    const tasks = useStore((state) => state.tasks.filter((task) => task.date === formatDate(d)));

    const [taskList, setTaskList] = useState(tasks);

    return (
        <div className="px-10 py-4">
            <div className="">
                <div className="flex justify-between">
                    <h1 className="text-2xl text-gray-800 font-semibold">{day}</h1>
                    <Link href={"/focus"}>{todayDate.toString() == date && <button className="text-sm text-blue-200 font-medium hover:text-blue-400">Focus</button>}</Link>
                </div>
                <h3 className="text-gray-400 font-medium">{month + " " + date}</h3>
            </div>

            <div className="">
                <AddTaskCard setTaskList={setTaskList} date={formatDate(d)} />
            </div>

            <div className="">
                {taskList.map((task, index) => (
                    <div className="" key={index}>
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    )
}