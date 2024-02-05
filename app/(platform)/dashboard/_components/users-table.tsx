"use client";

import { Separator } from "@/components/ui/separator";
import { UserTableHeader } from "./user-table-header";

import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ActiveUsers } from "./active-users";

export const UsersTable = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className="w-full p-4  rounded-md shadow-sm">
            {/* This is current user User*/}
            <UserTableHeader data={user} />
            <Separator className="w-full my-2" />

            <ActiveUsers />
        </div>
    );
};
