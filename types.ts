export type User = {
    uid: string;
    email: string;
    isActive: boolean;
    lastActive: number;
    createdAt: number;
    updatedAt: number;
    friends: User[];
};
