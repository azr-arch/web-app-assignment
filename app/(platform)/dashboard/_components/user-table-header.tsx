import { User } from "firebase/auth";
import { ConnectivityToggle } from "./connectivity-toggle";

interface UserTableHeaderProps {
    data: User | null | undefined;
}

export const UserTableHeader = ({ data }: UserTableHeaderProps) => {
    if (!data) return null;
    return (
        <div className="py-4 flex items-center">
            <p className="text-neutral-500 font-medium">{data.email?.split("@")[0]}</p>
            <ConnectivityToggle userId={data.uid} />
        </div>
    );
};
