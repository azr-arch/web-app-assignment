"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { updateUserStatus } from "@/actions/update-user-status";

interface ConnectivityToggleProps {
    className?: string;
    userId: string;
}

export const ConnectivityToggle = ({ className, userId }: ConnectivityToggleProps) => {
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCurrentStatus = async () => {
            const data = (await getDoc(doc(db, "users", userId))).data();

            if (data) {
                setIsActive(data.isActive);
            }
        };
        getCurrentStatus();
    }, [userId]);

    const handleChange = async () => {
        try {
            setLoading(true);
            await updateUserStatus(userId, !isActive);
        } catch (error) {
            console.log(error);
        } finally {
            setIsActive(!isActive);
            setLoading(false);
        }
    };

    return (
        <div
            role="button"
            onClick={handleChange}
            className={cn(
                `ml-auto peer inline-flex h-6 w-11 shrink-0 cursor-pointer 
                        bg-neutral-200 items-center rounded-full border-2 border-transparent
                         transition-colors focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                          data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
                className,
                loading ? "cursor-not-allowed opacity-50 pointer-events-none" : ""
            )}
        >
            <div
                data-state={isActive ? "checked" : "unchecked"}
                className={cn(
                    `pointer-events-none block h-5 w-5 
                                rounded-full shadow-lg 
                                ring-0 transition-transform data-[state=checked]:translate-x-5 
                                data-[state=unchecked]:translate-x-0`,
                    isActive ? "bg-green-300" : "bg-background"
                )}
            />
        </div>
    );
};
