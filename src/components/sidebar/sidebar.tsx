"use client"
import { BacklogIcon } from "@/static/icons/BacklogIcon";
import { AddLabelIcon, HomeIcon, SomedayIcon, TodayIcon } from "@/static/icons/SidebarIcons";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { AddLabel, Labels } from "./label";
import { useState } from "react";
import { useStore } from "@/store/store";

export function Sidebar() {

    const [labels, setLabels] = useState(useStore(state => state.labels));

    return (
        <div className="w-[12rem] px-4 py-4">
            <h1 className="text-xl text-gray-800 font-semibold mb-4">Sidebar</h1>

            <div className="">
                <ul className="text-gray-600">
                    <li className="mb-1 py-1 rounded px-2 cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="">
                                <HomeIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-gray-800 font-medium">Home</h3>
                        </div>
                    </li>

                    <li className="mb-1 py-1 rounded px-2 cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="">
                                <TodayIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-gray-800 font-medium">Today</h3>
                        </div>
                    </li>

                    <li className="mb-1 py-1 rounded px-2 cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="">
                                <SomedayIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-gray-800 font-medium">Someday</h3>
                        </div>
                    </li>

                    <li className="mb-1 py-1 rounded px-2 cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="">
                                <BacklogIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-gray-800 font-medium">Backlog</h3>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="my-6 border border-b border-gray-200"></div>

            <div className="">
                <div className="mb-1 py-1 px-2 cursor-pointer rounded flex justify-between items-center space-x-2">
                    <h3 className="text-gray-800 text-sm font-medium">Labels</h3>
                    <Dialog>
                        <DialogTrigger>
                            <AddLabelIcon className="w-4 h-4" />
                        </DialogTrigger>

                        <DialogContent>
                            <AddLabel setLabels={setLabels} />
                        </DialogContent>
                    </Dialog>
                </div>

                <Labels labels={labels} />
            </div>
        </div>
    )
}