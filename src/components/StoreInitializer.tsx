"use client"

import { useRef } from "react";

import { useStore } from "@/store/store";
import { TaskType } from "@/types/types";

export default function StoreInitializer({ tasks }: { tasks: TaskType[] }) {

    const initialized = useRef(false);

    if (!initialized.current) {
        useStore.setState({ tasks });
        initialized.current = true;
    }

    return null;
}