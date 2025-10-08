import { useEffect, useState } from "react";

export const AnimatedStat = ({ value, color }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1200; // tổng thời gian animation (ms)
        const frames = 60; // số frame (fps)
        const stepTime = duration / frames;
        const increment = (value - start) / frames;

        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value; // dừng chính xác ở value
                clearInterval(interval);
            }
            setDisplayValue(Number(start.toFixed(2))); // luôn ép kiểu số
        }, stepTime);

        return () => clearInterval(interval);
    }, [value]);

    const isNumber = typeof displayValue === "number" && !isNaN(displayValue);

    return (
        <div className={`text-3xl font-bold text-${color}`}>
            {isNumber
                ? (Number.isInteger(value)
                    ? Math.round(displayValue)
                    : displayValue.toFixed(1))
                : "0"}
            +
        </div>
    );
};
