"use client";

import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "./_components/header";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Dashboard } from "./_components/dashboard";

const DashboardPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/");
        }
    }, [user, router]);

    return (
        <div className="w-full h-full ">
            <Header user={user} />
            <Dashboard />
        </div>
    );
};

export default DashboardPage;
