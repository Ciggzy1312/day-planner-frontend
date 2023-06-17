import TaskBoard from "@/components/task/board";

const arr = new Array(7).fill(0);

const formatDate = (index: number) => {
    const d = new Date()
    return d.setDate(d.getDate() + index);
};

export default async function Dashboard() {

    return (
        <div>
            <div className="flex">
                {arr.map((_, index) => (
                    <TaskBoard key={index} d={formatDate(index)} />
                ))}
            </div>
        </div>
    )
}