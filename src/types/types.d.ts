export type TaskType = {
    id: string
    title: string
    label: string
    priority: string
    date: string
    plannedTime: string
    actualTime: string
    isTimeboxed: boolean
    isCompleted: boolean
    userId: string
}

export type LabelType = {
    id: string
    name: string
    color: string
    userId: string
}