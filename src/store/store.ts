import { TaskType } from "@/types/types";
import { create } from "zustand";

type StateType = {
    tasks: TaskType[]
}

export const useStore = create<StateType>((set) => ({
    tasks: [],
}));