"use server";

interface addUserProps {
    currUser: string;
    otherPersonEmail: string;
}

export const addUser = async ({ currUser, otherPersonEmail }: addUserProps) => {
    try {
        if (!currUser || !otherPersonEmail) return;

        // Using firebase services, collection is "users"
        // Fetch the curr user

        // Add the other perosn, with its email, isActive, createdAt values
    } catch (error) {}
};
