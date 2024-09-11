import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        // Use the native browser Image constructor to preload the next and previous images
        const nextImage = new window.Image();
        const prevImage = new window.Image();
        
        if (currentIndex < images.length - 1) {
            nextImage.src = images[currentIndex + 1]?.image_url;
        }
        if (currentIndex > 0) {
            prevImage.src = images[currentIndex - 1]?.image_url;
        }
    }, [currentIndex, images]);


    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[24rem] md:h-[30rem] lg:h-[36rem]">
            {/* Current Image */}
            <div className="w-full h-full relative">
                <Image
                    src={images[currentIndex].image_url}
                    alt={images[currentIndex].alt_text}
                    fill={true}
                    sizes="100vw" // This forces the image to take full width of the container
                    style={{ objectFit: "cover" }}
                    className="rounded-sm shadow-lg"
                    loading="eager"
                    priority
                />
                {/* Lazy load the rest */}
                {images.map((image, index) => (
                    index !== currentIndex && (
                        <Image
                            key={index}
                            src={image.image_url}
                            alt={image.alt_text}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="hidden" // Load in the background
                            loading="lazy" // Lazy load the rest
                        />
                    )
                ))}
            </div>

            {/* Left Arrow */}
            <div className="absolute inset-y-0 left-2 flex items-center">
                <button
                    onClick={handlePrevClick}
                    className="text-white text-xl md:text-3xl lg:text-4xl rounded-3xl px-1 hover:text-tms-yellow transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            </div>

            {/* Right Arrow */}
            <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                    onClick={handleNextClick}
                    className="text-white text-xl md:text-3xl lg:text-4xl rounded-3xl px-1 hover:text-tms-yellow transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}