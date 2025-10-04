import { useState, useEffect } from "react";

export const TypingBio = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return (
        <div className="relative overflow-hidden
                        bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20
                        rounded-xl
                        p-2 sm:p-4 md:p-6
                        border border-white/10
                        mt-2 sm:mt-4 mb-2 sm:mb-4
                        max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto">
            <p className="whitespace-pre-line
                          text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                          text-gray-200 font-medium leading-relaxed break-words">
                {displayedText}
                <span className="animate-pulse">|</span>
            </p>
        </div>
    );
};
