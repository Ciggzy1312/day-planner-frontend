import axios from "axios";
import TaskBoard from "@/components/task/board";
import { cookies } from "next/headers";

async function getTasks() {
    try {
        const cookie = cookies().get('token')?.value;
        const response = await axios.get("http://localhost:5000/api/task", { headers: { cookie }, withCredentials: true });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export default async function Dashboard() {

    const tasks = await getTasks();

    return (
        <div>
            <TaskBoard tasks={tasks.tasks} />
        </div>
    )
}