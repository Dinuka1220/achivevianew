import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo1 from "../../assets/logo/logo1.png"
import logo2 from "../../assets/logo/logo2.png"
import logo3 from "../../assets/logo/logo3.png"
import logo4 from "../../assets/logo/logo4.png"
import logo5 from "../../assets/logo/logo5.png"
import logo6 from "../../assets/logo/logo6.png"
import plane from "../../assets/plane-png.png"

export default function Logoslider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [planePosition, setPlanePosition] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if section is in viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Calculate scroll progress
                const sectionTop = rect.top;
                const sectionHeight = rect.height;

                const scrollProgress = Math.max(0, Math.min(1,
                    (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)
                ));

                // Move plane from -10% to 110%
                const newPosition = (scrollProgress * 120) - 10;
                setPlanePosition(newPosition);

            } else if (rect.top > windowHeight) {
                setPlanePosition(-10);
            } else if (rect.bottom < 0) {
                setPlanePosition(110);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const slides = [
        { id: 1, name: 'University 1', logo: logo1 },
        { id: 2, name: 'University 2', logo: logo2 },
        { id: 3, name: 'University 3', logo: logo3 },
        { id: 4, name: 'University 4', logo: logo4 },
        { id: 5, name: 'University 5', logo: logo5 },
        { id: 6, name: 'University 6', logo: logo6},
        { id: 7, name: 'University 7', logo: logo4},
    ];

    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const getSlidePosition = (index) => {
        const diff = ((index - currentIndex + totalSlides) % totalSlides);
        const normalizedDiff = diff > totalSlides / 2 ? diff - totalSlides : diff;
        return normalizedDiff;
    };

    const getSlideStyle = (index) => {
        const position = getSlidePosition(index);
        const isCentered = position === 0;
        const isVisible = Math.abs(position) <= 3;

        return {
            transform: `translateX(${position * 100}%) scale(${isCentered ? 1.1 : 0.8})`,
            zIndex: isCentered ? 10 : 1,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            position,
            isCentered
        };
    };

    return (
        <section
            ref={sectionRef}
            className="absolute relative bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center pt-0   md:pt-16   pb-16 px-4 overflow-hidden z-99 "
        >
            <div className="w-full relative">
                {/* Slider Container */}
                <div className="relative h-[22rem] overflow-visible">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {slides.map((slide, index) => {
                            const { position, isCentered, transform, zIndex, opacity, pointerEvents } = getSlideStyle(index);

                            return (
                                <div
                                    key={slide.id}
                                    className="absolute transition-all duration-500 ease-in-out"
                                    style={{ transform, zIndex, opacity, pointerEvents }}
                                >
                                    <div
                                        className={`
                                            w-64 h-48 flex items-center justify-center rounded-2xl overflow-hidden
                                            ${isCentered ? 'shadow-2xl' : 'shadow-md'}
                                            bg-white
                                        `}
                                    >
                                        <img
                                            src={slide.logo}
                                            alt={slide.name}
                                            className="w-full h-full object-contain p-4"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center items-center gap-[2rem] md:pb-20 relative z-20">
                    <button
                        onClick={handlePrev}
                        className="bg-white hover:bg-gray-100 rounded-full p-3 md:p-4 shadow-lg transition-all hover:scale-110"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="bg-white hover:bg-gray-100 rounded-full p-3 md:p-4 shadow-lg transition-all hover:scale-110"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
                    </button>
                </div>
            </div>

            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[2.4rem] bg-[#0A0E28] z-10">
            </div>

            {/* Airplane Animation - Top Layer at Bottom */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[12rem] pointer-events-none z-50">
                <div
                    className="relative transition-transform duration-100 ease-linear"
                    style={{
                        transform: `translateX(${planePosition}vw)`,
                        left: '-30%'
                    }}
                >
                    <img
                        src={plane}
                        alt="Airplane"
                        className="absolute w-24 h-24 md:w-[15rem] md:h-[15rem] object-contain opacity-90 transform  z-30 "
                    />

                </div>





            </div>
        </section>
    );
}