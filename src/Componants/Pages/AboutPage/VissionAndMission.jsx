import React from 'react';
import eye from "../../../assets/Aboutpage/eye.png"
import eyeyellow from "../../../assets/Aboutpage/eyemobile.png"

export default function VisionValuesSection() {
    return (
        <div className="object-fit bg-gray-100 flex items-center justify-center px-4 pb-[7rem] sm:px-6 ">
            <div className="w-full max-w-7xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
                    {/* Our Vision Section */}
                    <div className="rounded-lg lg:rounded-r-none p-1 sm:p-10 lg:p-12 z-10">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            To inspire and empower Sri Lankan students to build brighter, borderless futures through global education.
                        </p>
                    </div>

                    {/* Mobile-only eyeyellow image */}
                    <div className="yellowimg absolute z-0 flex justify-center lg:hidden ">
                        <img src={eyeyellow} alt="Vision" className="max-w-full h-auto " />
                    </div>

                    {/* Desktop-only: yellow shape */}
                    <div className="hidden lg:block relative lg:absolute lg:-right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:justify-end  z-0 overflow-hidden ">
                        <div className="bg-yellow-400 rounded-[1.5rem] p-8 sm:p-12 lg:p-16 w-full max-w-md lg:max-w-none h-[30rem]">
                        </div>
                    </div>

                    {/* Desktop-only: Eye Icon - Positioned to overlap */}
                    <div className="hidden lg:block relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:justify-end  z-20">
                        <div className="flex justify-center lg:justify-end lg:pr-12">
                            <img src={eye} alt="Vision Eye"/>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div className="ourvalue bg-[#0a0e28]  md:w-[97%] rounded-[1.5rem] p-8 sm:p-10 lg:p-12 lg:col-span-2 lg:mt-6 z-10 mt-[17rem] md:mt-[28rem] ">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 sm:mb-8 pl-10">
                            Our Values
                        </h2>
                        <div className="space-y-4 sm:space-y-5 pl-[1rem] md:pl-[7rem]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                                <p className="text-white text-base sm:text-lg">
                                    <span className="font-semibold">Dream First</span> – Every ambition matters
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                                <p className="text-white text-base sm:text-lg">
                                    <span className="font-semibold">Integrity Always</span> – Honest, transparent guidance
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                                <p className="text-white text-base sm:text-lg">
                                    <span className="font-semibold">Excellence</span> – We go the extra mile every time
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                                <p className="text-white text-base sm:text-lg">
                                    <span className="font-semibold">Empowerment</span> – Students should feel confident, capable, and ready
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}