"use client";
import { useStore } from "@/store/store";

export default function TaskDetails() {

    const task = useStore((state) => state.selectedTask);

    const formatLabel = (label: string, index: number): string => {
        return label.split("-")[index];
    }

    const priorityColor = (priority: string): string => {
        switch (priority) {
            case "Low":
                return "text-green-500";
            case "Medium":
                return "text-yellow-500";
            case "High":
                return "text-red-500";
            default:
                return "text-gray-500";
        }
    }

    return (
        <div className="px-10 py-4">
            <div className="">
                <div className="text-2xl text-gray-800 font-semibold">Task Details</div>
            </div>

            {task ? <div className="my-5">
                <div className="text-gray-800 text-4xl font-semibold">{task?.title}</div>

                <div className="my-5">
                    <div className="flex space-x-6 text-lg">
                        <div className="flex">
                            <div className="font-semibold">Label : </div>
                            <div className="mx-2"><span style={{ color: formatLabel(task.label, 1) }}># </span>{formatLabel(task.label, 0)}</div>
                        </div>

                        <div className="flex">
                            <div className="font-semibold">Priority : </div>
                            <div className={`mx-2 ${priorityColor(task.priority)}`}>{task?.priority}</div>
                        </div>
                    </div>
                </div>
            </div> : <div className="my-5 text-gray-800 text-xl">No task selected</div>}
        </div>
    )
}
