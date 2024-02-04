import { AuthClient } from "./_components/auth-client";

const AuthPage = () => {
    // If Already logged in then do something!!

    return (
        <div className="max-w-[500px] w-full h-auto  p-4 rounded-md">
            <AuthClient />
        </div>
    );
};

export default AuthPage;
