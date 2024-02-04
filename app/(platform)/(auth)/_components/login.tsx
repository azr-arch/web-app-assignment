"use client";

import { z } from "zod";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { useState } from "react";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { XCircle } from "lucide-react";

import { useRouter } from "next/navigation";
import { doc, setDoc, updateDoc } from "firebase/firestore";

interface LoginProps {
    toggleLogin: () => void;
}

export const LoginSchema = z.object({
    email: z.string().refine(
        (value) => {
            // Regular expression for email validation
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value);
        },
        {
            message: "Invalid email address",
        }
    ),
    password: z.string().min(6, {
        message: "Password is too short",
    }),
});

export const Login = ({ toggleLogin }: LoginProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        try {
            const newUser = await signInWithEmailAndPassword(formData.email, formData.password);
            if (!newUser) return;

            await updateDoc(doc(db, "users", newUser.user.uid), { isActive: true });
            router.push("/dashboard");
        } catch (error) {
            console.log({ error });
        }
        // Do submit!!!
    };

    return (
        <>
            <p className="mb-6 text-2xl font-medium text-center">Login</p>
            {error ? (
                <div className="flex items-center font-medium p-2 mb-4 border border-rose-500 bg-rose-500/10 rounded-sm">
                    <XCircle className="h-4 w-4 mr-2" />
                    {error.message}
                </div>
            ) : null}
            <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
                <FormInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="example@123.com"
                    clasName="px-2 py-1"
                    onChange={handleChange}
                    required={true}
                    disabled={loading}
                />
                <FormInput
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="123456"
                    clasName="w-full "
                    onChange={handleChange}
                    required={true}
                    disabled={loading}
                />

                <FormSubmit disabled={loading} />
            </form>
            <p className="text-sm text-neutral-600 w-fit mx-auto mt-8">
                Don&apos;t have an account ?
                <span
                    className="text-black cursor-pointer ml-2 hover:text-black/70 transition-colors"
                    onClick={toggleLogin}
                >
                    Register here
                </span>
            </p>
        </>
    );
};
