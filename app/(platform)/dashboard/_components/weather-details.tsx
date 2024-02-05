"use client";

import { Poppins } from "next/font/google";
import { WeatherData, useWeather } from "@/hooks/use-weather";
import { getCurrentDateInfo, cn } from "@/lib/utils";
import Image from "next/image";

const poppinsFamily = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const WeatherDetails = () => {
    const weatherData = useWeather();
    const { monthName, dateOfMonth, weekday, today } = getCurrentDateInfo();

    return (
        <div className="ml-12 my-8 space-y-4">
            <div className={cn("flex  items-center", poppinsFamily.className)}>
                <div className="inline-flex">
                    <span className="text-6xl text-[#271340] font-bold">
                        {weatherData.current.temp_c}
                    </span>
                    <sup>
                        <Image src={"/celcius.svg"} alt="celcius" width={20} height={20} />
                    </sup>
                </div>

                <div className="flex flex-col ml-3">
                    <p className="text-xl text-neutral-500">
                        {`${weekday}, ${dateOfMonth} ${monthName}`}
                    </p>
                    <p className="text-xl text-black font-medium">{weatherData.location.name}</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0  sm:space-x-4 max-w-[400px]">
                <div>
                    <p className="text-sm font-medium text-neutral-400">Wind</p>
                    <span className="text-base text-neutral-600">
                        {weatherData.current.wind_mph}
                    </span>
                </div>
                <div>
                    <p className="text-sm font-medium text-neutral-400">UV</p>
                    <span className="text-base text-neutral-600">{weatherData.current.uv}</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-neutral-400">Humidity</p>
                    <span className="text-base text-neutral-600">
                        {weatherData.current.humidity}%
                    </span>
                </div>
            </div>
        </div>
    );
};
