import { useCallback, useEffect, useRef, useState } from "react";

const useCountdownTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const startCountdown = useCallback(() => {
        console.log("starting countdown...");

        // Prevent multiple intervals
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft <= 1) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);
    }, []);

    const resetCountdown = useCallback(() => {
        console.log("resetting countdown...");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        // Cleanup interval on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;