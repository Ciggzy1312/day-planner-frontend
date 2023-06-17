"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useStore } from "@/store/store";
import { Dispatch, SetStateAction, useState } from "react"

export function SelectTag({ setTag }: { setTag: Dispatch<SetStateAction<string>> }) {

    const [labels, setLabels] = useState(useStore((state) => state.labels));

    return (
        <Select onValueChange={(val) => setTag(val)}>
            <SelectTrigger className="w-[180px] mt-2">
                <SelectValue placeholder="Select a tag" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {labels.map((label, index) => (
                        <SelectItem value={label.name.toLowerCase() + "-" + label.color} key={index}>{label.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export function SelectDuration({ setDuration }: { setDuration: Dispatch<SetStateAction<string>> }) {
    return (
        <Select onValueChange={(val) => setDuration(val)}>
            <SelectTrigger className="w-[180px] mt-2">
                <SelectValue placeholder="Select a duration" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="00:05">5 mins</SelectItem>
                    <SelectItem value="00:10">10 mins</SelectItem>
                    <SelectItem value="00:15">15 mins</SelectItem>
                    <SelectItem value="00:30">30 mins</SelectItem>
                    <SelectItem value="00:45">45 mins</SelectItem>
                    <SelectItem value="01:00">1 hour</SelectItem>
                    <SelectItem value="02:00">2 hour</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}