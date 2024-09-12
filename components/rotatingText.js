import React, { useState, useEffect } from "react";


const texts = [
    "Experience and excellence in construction management",
    "Your trusted partner for commercial and industrial construction",
    "Tailored construction solutions for Middle Tennessee and beyond",
    "We don't just build buildings... We build relationships"
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
            }, 1000); // 800ms = 0.8 second for fade-out effect
        }, 7000); // 5000ms = 5 seconds for text rotation

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`text-white text-center font-heading text-5xl lg:text-6xl font-bold transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-shadow-heavy">
                {texts[currentTextIndex]}
            </span>
        </div>
    )
}