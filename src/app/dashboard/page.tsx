import axios from "axios";
import TaskBoard from "@/components/task/board";
import { cookies } from "next/headers";
import { useStore } from "@/store/store";
import StoreInitializer from "@/components/StoreInitializer";

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

    useStore.setState({ tasks: tasks.tasks });

    return (
        <div>
            <StoreInitializer tasks={tasks.tasks} />
            <TaskBoard />
        </div>
    )
}