"use client"
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";


export default function Navbar() {

    const router = useRouter();

    const handleRouting = () => {
        useStore.setState({ selectedTask: null });
        router.push("/dashboard");
    };

    return (
        <div className="">
            <button className="rounded-md hover:text-blue-500" onClick={handleRouting}>Go back to Dashboard</button>
        </div>
    )
}