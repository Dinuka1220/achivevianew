import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import logo1 from "../../assets/country/5.png"
import logo2 from "../../assets/country/1.png"
import logo3 from "../../assets/country/7.png"
import logo4 from "../../assets/country/2.png"
import logo5 from "../../assets/country/8.png"
import img1 from "../../assets/homecountry/uk-students.jpg"
import img2 from "../../assets/homecountry/aus-students.jpg"
import img3 from "../../assets/homecountry/newzealand-students.jpg"
import img4 from "../../assets/homecountry/malaysia-students.jpg"
import img5 from "../../assets/homecountry/singa-students.jpg"

const CountrySection = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const destinations = [
        {
            country: 'UK',
            flag: logo2,
            image: img1,
            description: 'Rich programs, heritage culture, career pathways'
        },
        {
            country: 'Australia',
            flag: logo1,
            image: img2,
            description: 'World-class education, diverse culture, great lifestyle'
        },
        {
            country: 'New Zealand',
            flag: logo3,
            image: img3,
            description: 'Modern education, growing opportunities, multicultural'
        },
        {
            country: 'Malaysia',
            flag: logo4,
            image: img4,
            description: 'Friendly atmosphere, quality education, tech hub'
        },
        {
            country: 'Singapore',
            flag: logo5,
            image: img5,
            description: 'Affordable education, tropical paradise, diverse culture'
        },
    ];

    return (
        <div ref={sectionRef} className="object-fit bg-[#0A0E28] px-4 sm:px-6 lg:px-8 py-12 lg:pb-[7.5rem]  z-10">

            {/*Animations*/}
            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-up {
                    opacity: 0;
                    transform: translateY(60px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-slide-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .animate-delay-200 {
                    transition-delay: 0.2s;
                }
            `}</style>
            <div className="max-w-7xl 2xl:max-w-8xl mx-auto ">
                {/* Header */}
                <div className={`text-center mb-12 animate-slide-up ${isVisible ? 'visible' : ''}`}>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Where Your Journey Can Take You
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Your destination is the first step — your future is the destination.
                    </p>
                </div>

                {/* Cards Container */}
                <div className={`flex flex-col lg:flex-row gap-4 items-stretch animate-slide-up animate-delay-200 ${isVisible ? 'visible' : ''}`}>
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveCard(index)}
                            className={`
                                relative overflow-hidden rounded-3xl lg:rounded-[4rem] cursor-pointer transition-all duration-500 ease-in-out
                                ${activeCard === index
                                ? 'min-h-[200px] sm:min-h-[500px] lg:flex-[2] lg:min-h-[500px]'
                                : 'h-[50px] sm:h-[120px] lg:flex-[0.3] lg:min-h-[500px]'
                            }
                            `}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${dest.image})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6">
                                {/* Expanded View */}
                                {activeCard === index ? (
                                    <div className="space-y-4 animate-fadeIn">
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                                                <img
                                                    src={dest.flag}
                                                    alt={dest.country}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                                    {dest.country}
                                                </h2>
                                                <p className="text-gray-200 text-sm sm:text-base">
                                                    {dest.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Compressed View */
                                    <div className="flex items-end md:items-center lg:flex-col lg:items-start gap-3 lg:space-y-3 lg:gap-0 lg:-ml-2 ">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg -mb-[1rem] md:mb-3 lg:ml-1">
                                            <img
                                                src={dest.flag}
                                                alt={dest.country}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Country name visible on mobile/tablet when compressed */}
                                        <h3 className="text-lg sm:text-xl font-semibold text-white lg:hidden">
                                            {dest.country}
                                        </h3>
                                    </div>
                                )}
                            </div>

                            {/* Vertical Text for Compressed Cards on Large Screens */}
                            {activeCard !== index && (
                                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="transform -rotate-90 whitespace-nowrap">
                                        <span className="text-2xl font-bold text-white tracking-wider">
                                            {dest.country}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountrySection;