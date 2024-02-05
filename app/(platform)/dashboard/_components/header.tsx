"use client";

import { auth } from "@/lib/firebase";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Logout } from "@/components/logout";
import { User } from "firebase/auth";
import { AddUser } from "./add-user";

interface HeaderProps {
    user: User | null | undefined;
}

export const Header = ({ user }: HeaderProps) => {
    return (
        <header className="px-4 h-16 flex items-center w-full border-b">
            <p className="font-medium text-lg">Dashboard</p>
            <AddUser />
            {user ? <Logout userId={user.uid} /> : null}
        </header>
    );
};
