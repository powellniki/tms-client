import React, { useState, useEffect } from "react";


const texts = [
    "Experience and Excellence in Construction Management",
    "Your Trusted Partner for Commercial and Industrial Construction",
    "Tailored Construction Solutions for Middle Tennessee and Beyond",
    "We Don't Just Build Buildings... We Build Relationships"
]


export default function RotatingText() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
                setFade(true);
            }, 800); // 800ms = 0.8 second for fade-out effect
        }, 7000); // 5000ms = 5 seconds for text rotation

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`text-white text-center font-heading text-5xl lg:text-6xl font-bold transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-shadow-light">
                {texts[currentTextIndex]}
            </span>
        </div>
    )
}