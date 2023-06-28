import FocusBoard from "@/components/focus/board";
import TaskDetails from "@/components/focus/task";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { useStore } from "@/store/store";

function formatDate() {
    const today = new Date();
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
}

// get tasks of today
async function getFocusTasks() {
    try {
        const cookie = cookies().get('token')?.value;
        const response = await axios.get(`http://localhost:5000/api/task/focus?date=${formatDate()}`, { headers: { cookie }, withCredentials: true });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
}


export default async function FocusPage() {

    const tasks = await getFocusTasks();

    return (
        <div className="">

            <div className="my-6 mx-10">
                <Link href="/dashboard">
                    <button className="rounded-md hover:text-blue-500">Go back to Dashboard</button>
                </Link>
            </div>

            <div className="flex space-x-6">
                <FocusBoard tasks={tasks.tasks} d={formatDate()} />
                <TaskDetails />
            </div>
        </div>
    )
}