"use client";

import { auth } from "@/lib/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { Button } from "./ui/button";

import { LogOut } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

export const Logout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const success = await signOut();
            if (success) {
                router.push("/");
            }
        } catch (error) {
            console.log({ error });
        }
    };

    return (
        <Button
            disabled={loading}
            onClick={handleLogout}
            size={"sm"}
            className="h-fit w-auto py-2 ml-auto"
        >
            <LogOut className="w-4 h-4" />
        </Button>
    );
};
