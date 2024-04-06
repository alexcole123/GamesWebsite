import { useEffect, useState } from "react";
import "./timer.css";

export function Timer(): JSX.Element {
    const [startTime, setStartTime] = useState<number>(Date.now());
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            setDuration(elapsedTime);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [startTime]);

    const formatDuration = (milliseconds: number): string => {
        const seconds = Math.floor(milliseconds / 1000) % 60;
        const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
        const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
    
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };
    

    return (
        <div className="timer">
            <span>Time spent on website: {formatDuration(duration)}</span>
        </div>
    );
}
