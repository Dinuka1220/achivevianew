import React, { useState, useRef, useEffect } from 'react';
import circle from "../../assets/circle.jpg"
import parth from "../../assets/vectorline.png"
import vector from "../../assets/stepvector.png"
import step1 from "../../assets/step1.gif"
import step2 from "../../assets/step2.gif"
import step3 from "../../assets/step3.gif"
import step5 from "../../assets/step5.gif"

const JourneySteps = () => {
    const headerRef = useRef(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    // Intersection Observer for header animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsHeaderVisible(true);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 py-8 md:py-16 px-0 md:px-8 lg:px-16 relative overflow-hidden max-w-[90%] mx-auto">
            <style jsx>{`
                @keyframes slideUpFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(80px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes orbitRotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes counterRotate {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(-360deg);
                    }
                }

                .heading-animate {
                    opacity: 0;
                    transform: translateY(80px);
                }

                .heading-animate.visible {
                    animation: slideUpFromBottom 1s ease-out forwards;
                }

                .orbit-container {
                    animation: orbitRotate 18s linear infinite;
                }

                .graduate-icon {
                    animation: counterRotate 18s linear infinite;
                }
            `}</style>

            {/* Header with bottom-to-top animation */}
            <h1
                ref={headerRef}
                className={`text-3xl md:text-5xl lg:text-6xl font-black text-[#0a0e28] text-center md:mb-8 md:mb-12 px-4 md:pb-16   heading-animate ${isHeaderVisible ? 'visible' : ''}`}
            >
                Start Your Journey in 4 Simple Steps
            </h1>

            {/* Students Image with Graduate Icon */}
            <div className="relative circleimg mx-auto md:absolute mr-[11rem] md:mr-[0rem] top-[3rem] md:left-4 lg:left-8 md:top-[12rem] 2xl:top-[10rem] xl:left-[2rem] w-48 h-48 md:w-64 md:h-64 lg:w-70 lg:h-70 mb-8 md:mb-0 z-20">
                {/* Main Circle Image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 shadow-2xl">
                    <img
                        src={circle}
                        alt="Students"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Orbiting Graduate Icon Container */}
                <div className="absolute inset-0 orbit-container">
                    <div className="relative w-full h-full">
                        {/* Graduate Icon - positioned at top, counter-rotates to stay upright */}
                        <div className="absolute top-0 left-1/2 graduate-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-30">
                            <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto">
                {/* Desktop View - Horizontal Flow */}
                <div className="hidden xl:block relative">
                    <div className="bg-[#0a0e28] rounded-3xl lg:rounded-[36px] p-8 lg:p-16 relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
                        {/* Curved Path Line - Desktop */}
                        <div className="absolute inset-0 w-[80%] md:w-[100%] lg:w-[80%] mt-[5rem] ml-[8rem] md:ml-[2rem] lg:ml-[8rem]">
                            <img src={parth} alt="path" />
                        </div>

                        {/* Steps Grid - Desktop */}
                        <div className="relative grid grid-cols-4 gap-8 lg:gap- mt-[4rem]">
                            {/* Step 1 */}
                            <div className="relative ml-[6rem]" style={{marginTop: '120px'}}>
                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mb-6 relative mt-[4rem]">
                                    <img className="scale-150" src={step1} alt="step1" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Dream & Discover
                                    </h3>
                                    <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                                        Explore your pathways
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-7xl lg:text-8xl xl:text-8xl opacity-80 mt-6">
                                    1
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="absolute ml-[25rem]" style={{marginTop: '0px'}}>
                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mb-6 relative mt-[4rem]">
                                    <img className="scale-[2]" src={step2} alt="step2" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Choose Your Future
                                    </h3>
                                    <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                                        Select your course and country
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-7xl lg:text-8xl xl:text-8xl opacity-85 mt-6">
                                    2
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="absolute ml-[41rem]" style={{marginTop: '20px'}}>
                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mb-6 relative mt-[5rem]">
                                    <img className="scale-150" src={step3} alt="step3" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Apply with Confidence
                                    </h3>
                                    <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                                        We prepare everything
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-7xl lg:text-8xl xl:text-8xl opacity-76 mt-6">
                                    3
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="absolute ml-[58rem] -mb-[50rem]">
                                <div className="w-14 h-14 lg:w-16 lg:h-26 rounded-2xl mb-6 relative -mt-[3rem] flex items-center justify-center">
                                    <img
                                        src={step5}
                                        alt="flight"
                                        className="w-[30rem] h-[50rem] object-contain transition-transform scale-[2]"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Take Flight
                                    </h3>
                                    <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                                        Begin your global adventure
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-7xl lg:text-8xl xl:text-8xl opacity-73 mt-6">
                                    4
                                </div>
                            </div>
                        </div>

                        {/* Growth Chart - Bottom Right */}
                        <div className="absolute bottom-0 right-1 lg:bottom-0 lg:right-1">
                            <img className="w-[10rem] lg:w-[18rem]" src={vector} alt="vector" />
                        </div>
                    </div>
                </div>

                {/* Mobile View - Vertical Flow */}
                <div className="xl:hidden md:mt-[12rem] lg:mt-[12rem]">
                    <div className="bg-[#0a0e28] rounded-3xl p-6 relative overflow-hidden object-fit h-[100rem]">
                        {/* Curved Path Line - Mobile */}
                        <svg className="absolute left-1/2 top-0 h-[85%] w-32 transform -translate-x-1/2" preserveAspectRatio="none" viewBox="0 0 100 800">
                            <path
                                d="M 50 50 Q 70 150, 50 250 T 50 450 T 50 650 T 50 800"
                                stroke="#FFCC00"
                                strokeWidth="3"
                                fill="none"
                            />
                        </svg>

                        {/* Steps List - Mobile */}
                        <div className="relative flex flex-col items-center space-y-8 pb-20 mt-10">
                        {/* Step 1 */}
                            <div className="relative items-start gap-4 mt-[4rem]">
                                <div className="flex flex-col items-center flex-shrink-0 z-10 ml-4">
                                    <div className="w-12 h-12 rounded-full relative">
                                        <img className="scale-[3]" src={step1} alt="step1" />
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Dream & Discover
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    Explore your pathways
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[#0a0e28] font-black text-3xl opacity-80">
                                                    01
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10 ml-4">
                                    <div className="w-12 h-12 rounded-full relative mb-[4rem] mt-[2rem]">
                                        <img className="scale-[3]" src={step2} alt="step2" />
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-1 h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full text-left">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Choose Your Future
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    Select your course and country
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[#0a0e28] font-black text-3xl opacity-80">
                                                    02
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10 ml-4">
                                    <div className="w-12 h-12 rounded-full relative mt-[2rem]">
                                        <img className="scale-[3]" src={step3} alt="step3" />
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-16 h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full text-left">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Apply with Confidence
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    We prepare everything
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[#0a0e28] font-black text-3xl opacity-80">
                                                    03
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10 ml-4">
                                    <div className="w-12 h-12 rounded-full relative mt-[2rem]">
                                        <img className="scale-[3]" src={step5} alt="step5" />
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-16 h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full text-left">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Take Flight
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    Begin your global adventure
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[#0a0e28] font-black text-3xl opacity-80">
                                                    04
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Growth Chart - Bottom Right Mobile */}
                        <div className="absolute bottom-4 right-4">
                            <img className="md:w-[10rem] stepbottomimg" src={vector} alt="vector" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneySteps;