import { UsersTable } from "./users-table";
import { WeatherDetails } from "./weather-details";

export const Dashboard = () => {
    return (
        <div className="w-full p-4">
            <WeatherDetails />
            <UsersTable />
        </div>
    );
};
