import React from 'react';
import herobg from "../../../assets/Contatc/contactbanner.png";

const ContactHero = () => {
    return (
        <div className="relative w-full h-[300px]  md:h-[400px] lg:h-[420px] overflow-hidden mt-[rem] ">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={herobg}
                    alt="About background"
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/20" />

            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Main Heading */}
                <h1
                    className="text-white text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-1 md:mb-6  mt-10"
                    style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 700 }}
                >
                    Contact
                </h1>

                {/* Breadcrumb Navigation */}
                <nav
                    className="flex items-center justify-center gap-2 sm:gap-3 text-white"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400 }}
                >
          <span className="text-sm sm:text-base text-center leading-8">
            Home Page
          </span>
                    <span className="text-sm sm:text-base leading-8">
            &gt;
          </span>
                    <span className="text-sm sm:text-base text-center leading-8">
            Contact
          </span>
                </nav>
            </div>
        </div>
    );
}
export default ContactHero;