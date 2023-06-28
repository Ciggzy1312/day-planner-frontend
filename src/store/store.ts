import { LabelType, TaskType } from "@/types/types";
import { create } from "zustand";

type StateType = {
    tasks: TaskType[]
    labels: LabelType[],
    selectedTask: TaskType | null,
}

export const useStore = create<StateType>((set) => ({
    tasks: [],
    labels: [],
    selectedTask: null,
}));