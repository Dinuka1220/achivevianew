import React, { useEffect, useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import fb from "../../assets/footerimg/Vector (1).png"
import insta from "../../assets/footerimg/Vector (2).png"
import twit from "../../assets/footerimg/Vector (3).png"
import youtube from "../../assets/footerimg/youtube (1).png"
import dotimg from "../../assets/footerimg/dots.png"
import bgshape from "../../assets/footerimg/footerbgshape.png"
import logo from "../../assets/logo.png"
import footerlogo from "../../assets/footerimg/footerlogo.png"
import { Link } from "react-router-dom";
import whatsapp from "../../assets/whatsapp.png"

export default function Footer() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full relative">
            {/* Footer with background image */}
            <div className="relative bg-gray-900 text-white pt-32 sm:pt-40 md:pt-48 mt-[14rem]">
                {/* Footer background image */}
                <div
                    className="
                                absolute hidden md:block
                                bottom-[12rem] lg:bottom-[8rem] right-[2rem] lg:right-[20rem]
                                w-[22rem] h-[12rem] lg:w-[32rem] lg:h-[18rem]
                                bg-contain
                                bg-no-repeat bg-right-bottom
                                z-10
    "
                    style={{ backgroundImage: `url(${footerlogo})` }}
                />


                {/* Shape overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                    style={{ backgroundImage: `url(${bgshape})` }}
                />

                {/* Content wrapper with relative positioning */}
                <div className="relative z-10 ">
                    {/* Overlapping Hero Banner */}
                    <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 -mt-[17rem] sm:-mt-40 md:-mt-[26rem] mb-8 sm:mb-12">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative dots */}
                            <div className="absolute top-4 left-4 sm:top-8 sm:left-16 flex flex-col gap-3">
                                <img className={"w-[15rem]"} src={dotimg} alt="dotimg" />
                            </div>

                            <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            </div>

                            {/* Large yellow circular design */}
                            <div className="absolute -top-10 -right-10 sm:-top-16 sm:-right-16 md:-top-20 md:-right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
                                <div className="w-full h-full rounded-full bg-[#FFCC00] opacity-90"></div>
                                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-8 border-white"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-xl mx-auto items-center justify-center text-center">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                                    Your Future Awaits
                                </h2>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#425466] mb-6 sm:mb-8 leading-tight">
                                    The world is open. Your opportunity is now.
                                </p>
                                <Link to="/contact">
                                    <button className="bg-[#FFCC00] hover:bg-yellow-500 text-gray-900 font-bold px-10 sm:px-[5rem] py-3 sm:py-4 rounded-lg shadow-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-lg">
                                        Talk to Our Advisors
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* Logo and Description */}
                            <div className="sm:col-span-2 lg:col-span-1 min-w-[17rem]">
                                <div className="flex items-center gap-2 mb-4">
                                    <img className={"h-[5rem] w-auto"} src={logo} alt="logo" />
                                </div>
                                <p className="text-sm text-gray-400 text-justify leading-relaxed mb-4">
                                    Achieve-via offers a wide range of opportunities for students in terms of accessing to world class universities. We are committed to offer most accepted and highly recognized study programs and courses ranging from undergraduate to post graduate levels.
                                </p>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/achievevia" target="_blank" className="w-8 h-8 flex items-center justify-center transition-colors">
                                        <img src={fb} alt="fb" />
                                    </a>
                                    <a href="https://www.instagram.com/achieve_via/" target="_blank" className="w-8 h-8 flex items-center justify-center transition-colors">
                                        <img src={insta} alt="insta" />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCnaL5QDfp7KQX_HjjJ05ToA" target="_blank" className="w-8 h-8 flex items-center justify-center transition-colors">
                                        <img className={"w-6"} src={youtube} alt="youtube" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className={"ml-[0rem] lg:ml-[6rem]"}>
                                <h4 className="text-lg font-bold mb-4 mt-7">Quick Links</h4>
                                <ul className="space-y-5 text-sm text-gray-400">
                                    <li><a href="/" className="hover:text-[#FFCC00] transition-colors">Home</a></li>
                                    <li><a href="/about" className="hover:text-[#FFCC00] transition-colors">About Us</a></li>
                                    <li><a href="/services" className="hover:text-[#FFCC00] transition-colors">Our Services</a></li>
                                    <li><a href="/contact" className="hover:text-[#FFCC00] transition-colors">Contact Us</a></li>
                                </ul>
                            </div>

                            {/* Contact Us */}
                            <div className="ml-0 lg:ml-10 mt-7">
                                <h4 className="text-lg font-bold mb-4">Contact Us</h4>

                                <div className="space-y-5 text-sm text-gray-400">

                                    {/* Email */}
                                    <div className="flex items-center gap-3">
                                        <EnvelopeIcon className="w-5 h-5 text-[#FFCC00]" />
                                        <a
                                            href="mailto:info@achieve-via.com"
                                            className="hover:text-white transition"
                                        >
                                            info@achieve-via.com
                                        </a>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <MapPinIcon className="w-5 h-5 text-[#FFCC00] mt-0.5" />
                                        <span>
                                            5A, Elibank Road,<br />
                                            Colombo 05, Sri Lanka.
                                        </span>
                                    </div>

                                    {/* Phone 1 */}
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon className="w-5 h-5 text-[#FFCC00]" />
                                        <a
                                            href="tel:+94777775111"
                                            className="hover:text-white transition"
                                        >
                                            +94 77 777 5111
                                        </a>
                                    </div>

                                    {/* Phone 2 */}
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon className="w-5 h-5 text-[#FFCC00]" />
                                        <a
                                            href="tel:+94706577107"
                                            className="hover:text-white transition"
                                        >
                                            +94 70 657 7107
                                        </a>
                                    </div>

                                </div>

                            </div>

                            {/* Map section */}
                            <div className="mt-[26px]">
                                <h4 className="text-lg font-bold mb-4">Location</h4>
                                <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden min-h-[10rem]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.126881312086!2d79.862285!3d6.886804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bf1ec8d0945%3A0x3405cb9ddad8c59d!2sAchieve-via%20Education%20-%20Study%20Abroad%20Consultants!5e0!3m2!1sen!2slk!4v1768314167182!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-8 py-8 border-t border-gray-800 text-center text-xs text-gray-500">
                            <p>© 2026 Achieve-via Education. All rights reserved. Designed by Hope Digital</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button - FIXED: moved outside footer, uses scroll state */}
            <div
                className={`
                    fixed bottom-6 right-4 z-[9999]
                    transition-all duration-500 ease-in-out
                    ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}
                `}
            >
                <a
                    href="https://wa.me/94706577107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-6 py-2.5 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all duration-300"
                >
                    <img className="w-5 h-5" src={whatsapp} alt="whatsapp" />
                    <span className="text-sm font-semibold">Message Us</span>
                </a>
            </div>
        </div>
    );
}