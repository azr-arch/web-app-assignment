"use client";

import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateUserStatus = async (userId: string, status: boolean) => {
    try {
        const usersRef = doc(db, "users", userId);
        await updateDoc(usersRef, { isActive: status });
    } catch (error) {
        console.log(error);
        return null;
    }
};
