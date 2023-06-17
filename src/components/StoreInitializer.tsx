"use client"

import { useRef } from "react";

import { useStore } from "@/store/store";
import { LabelType, TaskType } from "@/types/types";

export default function StoreInitializer({ tasks, labels }: { tasks: TaskType[], labels: LabelType[] }) {

    const initialized = useRef(false);

    if (!initialized.current) {
        useStore.setState({ tasks, labels });
        initialized.current = true;
    }

    return null;
}