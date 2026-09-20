import React, { useState } from 'react';
import leftimg from "../../../assets/Aboutpage/bg-4.jpg"

const Card3D = ({ children, className = "", disabled = false }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (disabled) return;
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovering(false);
    };

    const handleMouseEnter = () => {
        if (!disabled) setIsHovering(true);
    };

    return (
        <div
            className={`transition-transform duration-500 ease-out ${className}`}
            style={{
                transform: isHovering && !disabled
                    ? `perspective(1000px)
               rotateX(${rotation.x * 0.3}deg)
               rotateY(${rotation.y * 0.3}deg)
               scale(1.03)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </div>
    );
};

const WhyChoceUs = () => {
    const bulletPoints = [
        "Personalised guidance shaped around your dreams",
        "A team that cares and supports you fully",
        "Access to strong global university networks",
        "A smooth, stress-free journey from start to finish"

    ];

    return (
        <div className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gray-50">


            {/* Mobile/Tablet Layout (stacked) */}
            <div className="block lg:hidden max-w-2xl mx-auto">
                <div className="relative px-4 sm:px-6">
                    {/* Image Card - Top Layer */}
                    <Card3D className="relative z-20 mb-[-60px]   md:mb-[0px]  " disabled={false}>
                        <div
                            className="relative overflow-hidden shadow-2xl"
                            style={{
                                borderRadius: "24px",
                                minHeight: "280px"
                            }}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={leftimg}
                                    alt="Students collaborating"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30"></div>
                            </div>
                        </div>
                    </Card3D>

                    {/* Text Card - Bottom Layer */}
                    <Card3D className="relative z-10" disabled={false}>
                        <div
                            className="relative overflow-hidden shadow-2xl bg-[#0A0E28] px-6 py-8 sm:px-8 sm:py-10 pt-20"
                            style={{
                                borderRadius: '24px',
                                minHeight: '320px'
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent)]"></div>

                            <div className="relative z-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 leading-tight">
                                     Why Sri Lankan Students <br /> Choose Achieve-Via

                                </h2>

                                <ul className="space-y-2.5 mb-5">
                                    {bulletPoints.map((point, index) => (
                                        <li key={index} className="text-white text-sm sm:text-base flex items-start">
                                            <span className="mr-2 mt-1 text-white flex-shrink-0">●</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-white font-bold text-base sm:text-lg leading-snug">
                                    We don't just send you abroad — we help you become future-ready.

                                </p>
                            </div>
                        </div>
                    </Card3D>
                </div>
            </div>

            {/* Desktop Layout (side by side overlapping) */}
            <div className="hidden lg:block max-w-[100%] md:max-w-[100%] xl:max-w-[90%]   3xl:max-w-[70%] mx-auto relative mt-[8rem] xl:mt-[7rem]">
                <div className="relative flex items-center justify-center min-h-[450px] xl:min-h-[500px]">
                    {/* Back Card - Blue/Dark Card (Right side, behind) */}
                    <Card3D className="absolute right-[7rem] w-[65%] z-10">
                        <div
                            className="relative overflow-hidden shadow-2xl bg-[#0A0E28] px-12 py-12 lg:px-16 lg:py-[5rem]"
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                                borderRadius: '24px',
                                transform: "rotateY(-20deg) rotateX(0deg)",
                                minHeight: '380px'
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent)]"></div>

                            <div className="relative z-10 ml-[17rem] flex flex-col h-full">
                                <h2 className="  text-md   xl:text-3xl font-bold text-yellow-400 mb-6 leading-tight">
                                    Choose Achieve-Via <br /> Why Sri Lankan Students

                                </h2>

                                <ul className="space-y-3 mb-7">
                                    {bulletPoints.map((point, index) => (
                                        <li key={index} className="text-white text-sm xl:text-lg flex items-start">
                                            <span className="mr-2 mt-1 text-white flex-shrink-0">●</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-white font-bold text-sm xl:text-2xl leading-snug">
                                    We don't just send you abroad — we help you become future-ready.

                                </p>
                            </div>
                        </div>
                    </Card3D>

                    {/* Front Card - Image Card (Left side, in front) */}
                    <Card3D className="absolute left-[7rem] w-[45%] z-20">
                        <div
                            className="relative overflow-hidden shadow-2xl transition-transform duration-700 ease-out"
                            style={{
                                perspective: "1200px",
                                transform: "rotateY(20deg) rotateX(0deg)",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                borderRadius: "24px",
                                minHeight: "380px"
                            }}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={leftimg}
                                    alt="Students collaborating"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20"></div>
                            </div>
                        </div>
                    </Card3D>
                </div>
            </div>
        </div>
    );
};

export default WhyChoceUs;