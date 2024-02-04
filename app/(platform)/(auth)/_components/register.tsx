import { useState } from "react";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";

import { XCircle } from "lucide-react";
import { doc, setDoc } from "firebase/firestore";

interface RegisterProps {
    toggleLogin: () => void;
}

export const Register = ({ toggleLogin }: RegisterProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newUser = await createUserWithEmailAndPassword(formData.email, formData.password);
            if (!newUser) return;

            const userData = {
                uid: newUser.user.uid,
                email: newUser.user.email,
                isActive: false,
                lastActive: Date.now(),
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            await setDoc(doc(db, "users", newUser.user.uid), userData);
            toggleLogin();
        } catch (error) {
            console.log({ error });
        }
    };

    console.log({ loading });

    return (
        <>
            <p className="mb-6 text-2xl font-medium text-center">Register</p>
            {error ? (
                <div className="flex items-center font-medium p-2 mb-4 border border-rose-500 bg-rose-500/10 rounded-sm">
                    <XCircle className="h-4 w-4 mr-2" />
                    {error.message}
                </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-4 text-xl">
                <FormInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="example@123.com"
                    onChange={handleChange}
                    disabled={loading}
                />
                <FormInput
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="123456"
                    onChange={handleChange}
                    disabled={loading}
                />
                <FormSubmit disabled={loading} />
            </form>
            <p className="text-sm text-neutral-600 w-fit mx-auto mt-8">
                Already have an account ?
                <span
                    className="text-black cursor-pointer ml-2 hover:text-black/70 transition-colors"
                    onClick={toggleLogin}
                >
                    Login here
                </span>
            </p>
        </>
    );
};
