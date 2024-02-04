"use client";

import { useState, useEffect } from "react";
import { Login } from "./login";
import { Register } from "./register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export const AuthClient = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
    const [user, loading, error] = useAuthState(auth);

    const router = useRouter();

    const toggleLogin = () => {
        setIsLoginPage((prev) => !prev);
    };

    useEffect(() => {
        if (user) {
            router.push("/dashboard");
        }
    }, [router, user]);

    if (isLoginPage) {
        return <Login toggleLogin={toggleLogin} />;
    }

    return <Register toggleLogin={toggleLogin} />;
};
