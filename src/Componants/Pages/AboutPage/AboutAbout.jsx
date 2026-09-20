import React from 'react';
import img1 from "../../../assets/Aboutpage/bg-1.jpg"
import img2 from "../../../assets/Aboutpage/bg-2.jpeg"
import img3 from "../../../assets/Aboutpage/bg-3.jpg"
import icon from "../../../assets/star.png"

const AboutAbout = () => {
    return (
        <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left side - Dark box with images */}
                    <div className="bg-[#0a0e28] rounded-3xl p-8 sm:p-12 lg:p-16 min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                            {/* Top Left Image */}
                            <div className="col-span-1 row-span-2">
                                <img
                                    src={img1}
                                    alt="Student studying"
                                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                                />
                            </div>

                            {/* Top Right Image */}
                            <div className="col-span-1">
                                <img
                                    src={img2}
                                    alt="Students collaborating"
                                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="col-span-1">
                                <img
                                    src={img3}
                                    alt="Students in classroom"
                                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Badge */}
                        <div className="flex items-center gap-3">
                            <img className={"w-10"} src={icon} alt="icon"/>
                            <span className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wider">
                            About Us
                          </span>
                        </div>

                        {/* Main heading */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                            Who We Are
                        </h2>

                        {/* Description text */}
                        <div className="space-y-6 text-[16px] sm:text-lg text-gray-700 leading-relaxed text-justify">
                            <p>
                                At Achieve-Via, we believe that an international education can transform a life, opening doors to global careers, independence, and new perspectives.
                            </p>

                            <p>
                                Our purpose is simple: Help Sri Lankan students rise beyond borders and build extraordinary futures.
                            </p>

                            <p>
                                For years, we've supported students as they step confidently into universities across the world. With each journey, we see dreams grow, families proud, and students becoming global citizens.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutAbout;