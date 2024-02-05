"use client";

import { db } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { User } from "@/types";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserItem } from "./user-item";

export const ActiveUsers = () => {
    const [activeUsers, setActiveUsers] = useState<User[] | null>(null);

    useEffect(() => {
        const usersRef = collection(db, "users");
        const activeUsersQuery = query(usersRef, where("isActive", "==", true));

        const unsubscribe = onSnapshot(activeUsersQuery, (querySnapshot) => {
            const users: any = [];
            querySnapshot.forEach((doc) => {
                users.push(doc.data());
            });

            setActiveUsers(users);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="p-4">
            {activeUsers ? (
                activeUsers.map((item, idx) => <UserItem key={item.uid} data={item} />)
            ) : (
                <p className="text-neutral-500">No active users!</p>
            )}
        </div>
    );
};
