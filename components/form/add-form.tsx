"use client";

import { useState } from "react";
import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";

export const AddForm = () => {
    const onSubmit = (formData: FormData) => {
        const data = formData.get("email");

        if (!data) return;
    };

    return (
        <div className="space-y-1">
            <form action={onSubmit} className="space-y-2">
                <FormInput
                    id="1234"
                    name="email"
                    className="text-sm px-2 py-1 h-9"
                    placeholder="Friend's email"
                    type="email"
                />
                <FormSubmit className="w-fit bg-blue-400 " />
            </form>
        </div>
    );
};
