"use client";

import { auth } from "@/lib/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { Button } from "./ui/button";

import { LogOut } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { updateCurrentUser } from "firebase/auth";
import { updateUserStatus } from "@/actions/update-user-status";

interface LogoutProps {
    userId: string;
}

export const Logout = ({ userId }: LogoutProps) => {
    const [signOut, loading, error] = useSignOut(auth);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            // Making current user offline
            await updateUserStatus(userId, false);

            const success = await signOut();
            if (success) {
                router.push("/");
            }
        } catch (error) {
            console.log({ error });
        }
    };

    return (
        <Button disabled={loading} onClick={handleLogout} size={"sm"} className="h-fit w-auto py-2">
            <LogOut className="w-4 h-4" />
        </Button>
    );
};
