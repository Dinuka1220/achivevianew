import React from 'react';

const TeamGuide = () => {
    return (
        <div className="relative bg-[#0a0e28] min-h-screen w-full overflow-hidden py-20 px-4 sm:px-6 lg:px-8 object-fit">
            {/* Decorative floating elements */}
            <div className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] bg-red-600 rounded-full blur-[7.65px] right-[5%] top-[67%] lg:right-[10%]" />
            <div className="absolute w-2.5 h-2.5 sm:w-[10px] sm:h-[10px] bg-white rounded-full blur-[7.65px] right-[15%] bottom-[13%] lg:right-[25%]" />
            <div className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] bg-red-600 rounded-full blur-[7.65px] left-[7%] top-[47%] lg:left-[8%]" />
            <div className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] bg-[#3300ff] rounded-full blur-[7.65px] right-[5%] top-0 lg:right-[12%]" />
            <div className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] bg-[#3300ff] rounded-full blur-[7.65px] left-[33%] top-[56%] lg:left-[37%]" />
            <div className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] bg-[#3300ff] rounded-full blur-[7.65px] left-[15%] bottom-[25%] lg:left-[17%]" />
            <div className="absolute w-6 h-6 sm:w-[27px] sm:h-[27px] bg-[#0085ff] rounded-full blur-[7.65px] right-[20%] top-[42%] lg:right-[27%]" />


            <div className="absolute w-[10rem] h-[10rem] sm:w-[10rem] sm:h-[10rem] bg-[#D5BC00] rounded-full right-[20%] top-[38%] lg:right-[17%] opacity-40" />
            <div className="absolute w-[7rem] h-[7rem] sm:w-[7rem] sm:h-[7rem] bg-[#D5BC00] rounded-full right-[20%] top-[54%] lg:right-[14%] opacity-40" />
            <div className="absolute w-[4rem] h-[4rem] sm:w-[4rem] sm:h-[4rem] bg-[#D5BC00] rounded-full right-[20%] top-[62%] lg:right-[21%] opacity-40" />

            {/* Content Container */}
            <div className="max-w-6xl mx-auto">
                {/* First Section - Team */}
                <div className="mb-16 sm:mb-24 lg:mb-32">
                    <h2 className="text-[#ffcc00] font-extrabold text-3xl sm:text-3xl lg:text-4xl xl:text-[48px] leading-tight mb-6 sm:mb-8">
                        A Team Built to Guide Your Future
                    </h2>

                    <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl xl:text-[20px] leading-relaxed mb-8 sm:mb-12 max-w-4xl">
                        The Achieve-Via team consists of skilled counsellors, accredited advisors, and experienced documentation experts who understand what it takes to succeed internationally.
                    </p>

                    <div className="space-y-6 sm:space-y-8 pl-[1rem] lg:pl-[8rem]">
                        <h3 className="text-white font-semibold text-xl sm:text-xl lg:text-2xl xl:text-[20px] pt-3">
                            We know
                        </h3>

                        <ul className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg lg:text-xl xl:text-[17px] max-w-3xl">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>The challenges Sri Lankan students face</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>The requirements of global universities</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>The process that leads to approvals and visas</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>The emotional journey of leaving home for the first time</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Section - Track Record */}
                <div>
                    <h2 className="text-[#ffcc00] font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] leading-tight mb-6 sm:mb-8">
                        A Track Record You Can Trust
                    </h2>

                    <div className="space-y-6 sm:space-y-8  pl-[1rem] lg:pl-[8rem] ">
                        <h3 className="text-white font-semibold text-xl sm:text-xl lg:text-2xl xl:text-[20px] pt-8">
                            Our results speak for themselves:
                        </h3>

                        <ul className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg lg:text-xl xl:text-[17px] max-w-3xl">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>500+ students placed in top global universities</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>98% visa success rate</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>Long-standing partnerships with universities in key destinations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">●</span>
                                <span>Transparent processes trusted by families</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamGuide;