"use client";

import { connectFirestoreEmulator } from "firebase/firestore";
import { useEffect, useState } from "react";

export type WeatherData = typeof dummyData;

const dummyData = {
    location: {
        name: "Mumbai",
        region: "Maharashtra",
        country: "India",
        lat: 18.98,
        lon: 72.83,
        tz_id: "Asia/Kolkata",
        localtime_epoch: 1707129332,
        localtime: "2024-02-05 16:05",
    },
    current: {
        last_updated_epoch: 1707129000,
        last_updated: "2024-02-05 16:00",
        temp_c: 32,
        temp_f: 89.6,
        is_day: 1,
        condition: {
            text: "Overcast",
            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
            code: 1009,
        },
        wind_mph: 9.4,
        wind_kph: 15.1,
        wind_degree: 310,
        wind_dir: "NW",
        pressure_mb: 1014,
        pressure_in: 29.94,
        precip_mm: 0,
        precip_in: 0,
        humidity: 38,
        cloud: 0,
        feelslike_c: 37.9,
        feelslike_f: 100.3,
        vis_km: 3,
        vis_miles: 1,
        uv: 7,
        gust_mph: 24.8,
        gust_kph: 40,
    },
};

export const useWeather = () => {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        // const getWeather = async () => {
        //     try {
        //         const res = await fetch(
        //             `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=mumbai`
        //         );
        //         const data = await res.json();
        //         console.log({ data });
        //     } catch (error) {
        //         console.log({ error });
        //     }
        // };
        // getWeather();
    }, []);

    return dummyData as WeatherData;
};
