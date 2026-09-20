import React from 'react';
import parth from "../../../assets/Vectorline2.png";
import vector from "../../../assets/stepvector.png";
import circleshape from "../../../assets/circleshape.png";

const Parth = () => {
    const steps = [
        {
            id: 1,
            title: "Discover",
            description: "Explore your interests, passions, and goals"
        },
        {
            id: 2,
            title: "Decide",
            description: "Choose the right path for your future"
        },
        {
            id: 3,
            title: "Apply",
            description: "Submit your applications with confidence"
        },
        {
            id: 4,
            title: "Visa Process",
            description: "Navigate through visa requirements smoothly"
        },
        {
            id: 5,
            title: "Take Flight",
            description: "Prepare for your journey abroad"
        },
        {
            id: 6,
            title: "Success",
            description: "Achieve your dreams and thrive"
        }
    ];

    return (
        <div className={" pb-[5rem]"}>
        <div className="bg-[#0A0E28]  to-slate-900 rounded-3xl p-0 sm:p-0 lg:p-0 relative overflow-hidden max-w-7xl 2xl:max-w-[80%] mx-auto min-h-[73rem] xl:min-h-[48rem] ">
            {/* Decorative Circle */}
            {/*<div className="absolute -left-20 -top-20 w-40 h-40 sm:w-60 sm:h-60 rounded-full border-8 border-yellow-400 opacity-80"></div>
            <div className="absolute -left-10 -top-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-yellow-400"></div>*/}

            <div>
                <img className={"absolute left-0 w-[4rem] md:w-[7rem]"} src={circleshape} alt=""/>
            </div>



            {/* Journey Path */}
            <div className="relative">

                {/* Desktop View - Horizontal Flow */}
                <div className="hidden xl:block relative">
                    <div className="  relative overflow-hidden ">
                        {/* Curved Path Line - Desktop */}
                        <div className={"absolute inset-0 w-[100%] mt-[2rem] ml-[2rem]"}>
                            <img src={parth} alt="parth"/>
                        </div>

                        {/* Steps Grid - Desktop */}
                        <div className="relative  grid grid-cols-4 gap-8 lg:gap-  mt-[4rem] min-h-[38rem] pathsection ">
                            {/* Step 1 */}
                            <div className=" card1 relative ml-[5rem] " style={{marginTop: '180px'}}>
                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#FFCC00] hover:bg-gray-200 rounded-2xl mb-6 relative mt-[5rem]">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0e28] rounded-lg"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Discover
                                    </h3>
                                    <p className="text-white/70 text-sm  leading-relaxed max-w-[11rem]">
                                        Share your dreams, ambitions, and interests.
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-5xl lg:text-6xl xl:text-7xl opacity-80 mt-6">
                                    1
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="card2 absolute ml-[16rem] " style={{marginTop: '245px'}}>
                                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#FFCC00] hover:bg-gray-200 rounded-2xl mb-6 relative mt-[5rem]">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0e28] rounded-lg"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Decide
                                    </h3>
                                    <p className="text-white/70 text-sm  leading-relaxed max-w-[11rem]">
                                        We help you choose the best course and destination.
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-5xl lg:text-6xl xl:text-7xl opacity-85 mt-6">
                                    2
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="card3 absolute ml-[26rem] " style={{marginTop: '150px'}}>
                                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#FFCC00] hover:bg-gray-200 rounded-2xl mb-6 relative mt-[5rem]">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0e28] rounded-lg"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Apply
                                    </h3>
                                    <p className="text-white/70 text-sm  leading-relaxed max-w-[11rem]">
                                        Your documents and applications are handled with care.
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-5xl lg:text-6xl xl:text-7xl opacity-76 mt-6">
                                    3
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className=" card4 absolute ml-[40.5rem] " style={{marginTop: '210px'}} >
                                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#FFCC00] hover:bg-gray-200 rounded-2xl mb-6 relative -mt-[3rem]">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0e28] rounded-lg"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Receive Offers
                                    </h3>
                                    <p className="text-white/70 text-sm  leading-relaxed max-w-[11rem]">
                                        We guide you through acceptance and decision-making.
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-5xl lg:text-6xl xl:text-7xl opacity-73 mt-6">
                                    4
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="card5 absolute ml-[54rem] " style={{marginTop: '210px'}}>
                                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#FFCC00] hover:bg-gray-200 rounded-2xl mb-6 relative -mt-[3rem]">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0e28] rounded-lg"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Visa Success
                                    </h3>
                                    <p className="text-white/70 text-sm  leading-relaxed max-w-[11rem]">
                                        We support you until your visa is approved.
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-5xl lg:text-6xl xl:text-7xl opacity-73 mt-6">
                                    5
                                </div>
                            </div>

                            {/* Step 6 */}
                            <div className="card6 absolute ml-[64rem] " style={{marginTop: '70px'}} >
                                <div className="w-14 h-14 lg:w-16 cardsqure6 lg:h-16 bg-[#FFCC00] hover:bg-gray-200 rounded-2xl mb-6 relative -mt-[3rem]">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0e28] rounded-lg"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-bold text-md lg:text-md">
                                        Take Flight
                                    </h3>
                                    <p className="text-white/70 text-sm  leading-relaxed max-w-[11rem]">
                                        You begin your global adventure — prepared and confident.
                                    </p>
                                </div>
                                <div className="ml-[6rem] text-white font-black text-5xl lg:text-6xl xl:text-7xl opacity-73 mt-6">
                                    6
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Growth Chart - Bottom Right */}
                    <div className="bottomvector absolute bottom-0 right-1 lg:-bottom-[6rem] lg:right-1">
                        <img className={"w-[18rem]"} src={vector} alt="vector"/>
                    </div>
                </div>

                {/* Mobile View - Vertical Steps */}
                <div className="xl:hidden space-y-8 py-8 ">
                    <div className=" xl:hidden rounded-3xl p-6 relative overflow-hidden object-fit h-[132rem]">
                        {/* Curved Path Line - Mobile */}
                        <svg className="absolute left-1/2 top-0 h-full w-32 transform -translate-x-1/2" preserveAspectRatio="none" viewBox="0 0 100 800">
                            <path
                                d="M 50 50 Q 70 150, 50 250 T 50 450 T 50 650 T 50 800"
                                stroke="#FFCC00"
                                strokeWidth="3"
                                fill="none"
                            />
                        </svg>

                        {/* Steps List - Mobile */}
                        <div className="relative space-y-8 pb-20 mt-10 ">

                            {/* Step 1 */}
                            <div className="relative  items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className="w-12 h-12 bg-[#FFCC00] rounded-full relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0e28] rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Discover
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    Share your dreams, ambitions, and interests.
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
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className="w-12 h-12 bg-[#FFCC00] rounded-full relative ml-5">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0e28] rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Decide
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    We help you choose the best course and destination.
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
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className="w-12 h-12 bg-[#FFCC00] rounded-full relative mr-5">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0e28] rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Apply
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    Your documents and applications are handled with care.
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
                            <div className="relative  items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className="w-12 h-12 bg-[#FFCC00] rounded-full relative mr-5">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0e28] rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Receive Offers
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    We guide you through acceptance and decision-making.
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

                            {/* Step 5 */}
                            <div className="relative  items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className="w-12 h-12 bg-[#FFCC00] rounded-full relative ml-5">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0e28] rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Visa Success
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    We support you until your visa is approved.
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[#0a0e28] font-black text-3xl opacity-80">
                                                    05
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* Step 6 */}
                            <div className="relative  items-start gap-4">
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className="w-12 h-12 bg-[#FFCC00] rounded-full relative ml-2">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0e28] rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg mt-[5rem] h-[10rem] w-[100%]">
                                    <div className="flex flex-col justify-center h-full ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <h3 className="text-[#0a0e28] font-bold text-xl">
                                                    Take Flight
                                                </h3>
                                                <p className="text-gray-600 text-left text-[15px] mt-2">
                                                    You begin your global adventure — prepared and confident.
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-[#0a0e28] font-black text-3xl opacity-80">
                                                    06
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            {/* Growth Chart - Bottom Right Mobile */}
                            <div className="absolute -bottom-[5rem]   right-4">
                                {/* Growth Chart - Bottom Right */}
                                <div className="">
                                    <img className={"md:w-[10rem] stepbottomimg "} src={vector} alt="vector"/>
                                </div>
                            </div>

                        </div>



                    </div>


                </div>


            </div>



        </div></div>
    );
};

export default Parth;