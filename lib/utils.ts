import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getCurrentDateInfo(): {
    today: Date;
    weekday: string;
    dateOfMonth: number;
    monthName: string;
} {
    const today = new Date();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return {
        today,
        weekday: weekdays[today.getDay()],
        dateOfMonth: today.getDate(),
        monthName: monthNames[today.getMonth()],
    };
}
