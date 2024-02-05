import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormSubmitProps {
    className?: string;
    disabled?: boolean;
}

export const FormSubmit = ({ className, disabled }: FormSubmitProps) => {
    return (
        <Button
            disabled={disabled}
            type="submit"
            className={cn(
                "roundne-sm w-full bg-green-600 hover:bg-green-800 transition-colors",
                className
            )}
            size={"sm"}
        >
            Submit
        </Button>
    );
};
