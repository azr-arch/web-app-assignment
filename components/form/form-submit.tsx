import { Button } from "../ui/button";

interface FormSubmitProps {
    disabled?: boolean;
}

export const FormSubmit = ({ disabled }: FormSubmitProps) => {
    return (
        <Button
            disabled={disabled}
            type="submit"
            className="px-2 py-1 roundne-sm w-full bg-green-600 hover:bg-green-800 transition-colors"
        >
            Submit
        </Button>
    );
};
