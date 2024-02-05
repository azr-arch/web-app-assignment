"use client";

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormErrors } from "./form-errors";

interface FormInputProps {
    id: string;
    name?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    (
        { id, label, type, placeholder, disabled, required, errors, className, onChange, name },
        ref
    ) => {
        return (
            <div className="space-y-2">
                <div className="space-y-1">
                    {label ? (
                        <Label
                            htmlFor={id}
                            className="text-sm md:text-base font-medium text-neutral-700"
                        >
                            {label}
                        </Label>
                    ) : null}

                    <Input
                        name={name}
                        className={className}
                        id={id}
                        type={type}
                        required={required}
                        disabled={disabled}
                        ref={ref}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                </div>

                <FormErrors id={id} errors={errors} />
            </div>
        );
    }
);

FormInput.displayName = "FormInput";
