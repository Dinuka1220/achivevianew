import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.png"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('/');
    const location = useLocation();
    const activePath = location.pathname;

    useEffect(() => {
        setActiveSection(window.location.pathname);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-[#0A0E28]/80 backdrop-blur-lg z-[99]">

            <div className=" px-4 md:px- xl:px-32">
                <div className="flex items-center justify-between  h-[6rem]">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img
                                src={logo}
                                alt="ACH Logo"
                                className="h-12 md:h-10 lg:h-16 w-auto object-contain cursor-pointer"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden header md:flex items-center space-x-8 md:space-x-5 lg:space-x-12 xl:ml-[10rem]">
                        <Link
                            to="/"
                            className={`text-lg md:text-[14px] xl:text-[17px] transition-colors ${
                                activePath === "/" ? "text-yellow-400" : "text-white hover:text-gray-300"
                            }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className={`text-lg md:text-[14px] xl:text-[17px] transition-colors ${
                                activePath === "/about" ? "text-yellow-400" : "text-white hover:text-gray-300"
                            }`}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/services"
                            className={`text-lg md:text-[14px] xl:text-[17px] transition-colors ${
                                activePath === "/services" ? "text-yellow-400" : "text-white hover:text-gray-300"
                            }`}
                        >
                            Our Services
                        </Link>

                        <Link
                            to="/ourteam"
                            className={`text-lg md:text-[14px] xl:text-[17px] transition-colors ${
                                activePath === "/ourteam" ? "text-yellow-400" : "text-white hover:text-gray-300"
                            }`}
                        >
                            Our Team
                        </Link>

                        <Link
                            to="/contact"
                            className={`text-lg md:text-[14px] xl:text-[17px] transition-colors ${
                                activePath === "/contact" ? "text-yellow-400" : "text-white hover:text-gray-300"
                            }`}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/*Request a call button*/}
                    <div className={"hidden md:block"}>
                        <Link to="/contact">
                            <button className="px-6 md:px-1 lg:px-8 w-full md:w-[8rem] lg:w-[10.5rem] py-2 md:py-1.5 lg:py-2.5   border-2 border-[#FFCC00] text-[#FFCC00] font-semibold rounded-full  transition-all duration-300 text-sm md:text-[15px]  lg:text-bace whitespace-nowrap hover:shadow-[#FFCC00] hover:shadow-[0_-2px_2px_-1px_rgba(0,0,0,0.2),0_4px_6px_-1px_rgba(0,0,0,0.2)]"
                                    onClick={() => {
                                        setActiveSection('/contact');

                                    }}>
                                Request a Call
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-78 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-4 space-y-3 border-t border-white/10">
                        <Link
                            to="/"
                            className={`block text-lg py-2 px-4 rounded-lg transition-colors ${
                                activePath === "/" ? "text-yellow-400 bg-white/10" : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className={`block text-lg py-2 px-4 rounded-lg transition-colors ${
                                activePath === "/about" ? "text-yellow-400 bg-white/10" : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/services"
                            className={`block text-lg py-2 px-4 rounded-lg transition-colors ${
                                activePath === "/services" ? "text-yellow-400 bg-white/10" : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Services
                        </Link>

                        <Link
                            to="/ourteam"
                            className={`block text-lg py-2 px-4 rounded-lg transition-colors ${
                                activePath === "/ourteam" ? "text-yellow-400 bg-white/10" : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Team
                        </Link>

                        <Link
                            to="/contact"
                            className={`block text-lg py-2 px-4 rounded-lg transition-colors ${
                                activePath === "/contact" ? "text-yellow-400 bg-white/10" : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>

                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            <button
                                className="px-6 md:px-1 lg:px-8 w-full md:w-[8rem] lg:w-[10.5rem] py-2 md:py-1.5 lg:py-2.5 border-2 border-[#FFCC00] text-[#FFCC00] font-semibold rounded-full transition-all duration-300 text-sm md:text-[15px] lg:text-base mt-5"
                            >
                                Request a Call
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;