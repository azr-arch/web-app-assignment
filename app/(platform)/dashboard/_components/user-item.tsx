"use client";

import { cn } from "@/lib/utils";
import { User } from "@/types";

interface UserItemProps {
    data: User;
}

export const UserItem = ({ data }: UserItemProps) => {
    return (
        <li key={data.uid} className="flex items-center justify-between">
            {data.email.split("@")[0]}
            <span className="text-xs">{data.createdAt}</span>
            <span className={cn("text-xs", data.isActive ? "text-green-500" : "text-neutral-500")}>
                {data.isActive ? "online" : "offline"}
            </span>
        </li>
    );
};
