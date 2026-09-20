import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img1 from "../../assets/slider1.jpg"
import img2 from "../../assets/slider2.jpg"
import img3 from "../../assets/slider3.jpg"
import img4 from "../../assets/slider4.jpeg"
import img5 from "../../assets/slider5.jpg"
import arrow from "../../assets/arrow2.png"
// Import mobile images
import mobile1 from "../../assets/msl-1.jpg"
import mobile2 from "../../assets/msl-2.jpg"
import mobile3 from "../../assets/msl-3.jpeg"
import mobile4 from "../../assets/msl-4.jpg"
import mobile5 from "../../assets/msl-1.jpg"
import mobile6 from "../../assets/msl-2.jpg"
import mobile7 from "../../assets/msl-3.jpeg"

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Check if screen is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const slides = [
        {
            id: 1,
            name: 'Switzerland',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img1,
            mobileImage: mobile1
        },
        {
            id: 2,
            name: 'Finland',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img2,
            mobileImage: mobile2
        },
        {
            id: 3,
            name: 'Iceland',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img3,
            mobileImage: mobile3
        },
        {
            id: 4,
            name: 'Australia',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img4,
            mobileImage: mobile4
        },
        {
            id: 5,
            name: 'Netherland',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img5,
            mobileImage: mobile5
        },
        {
            id: 6,
            name: 'Ireland',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img2,
            mobileImage: mobile6
        },
        {
            id: 7,
            name: 'Canada',
            description: 'Studying abroad is more than education; it\'s a transformation. Achieve-Via opens the doors for Sri Lankan students to access world-class universities, life-changing opportunities, and a future filled with limitless possibilities.',
            image: img3,
            mobileImage: mobile7
        },
    ];


    useEffect(() => {
        const handleScrollVisibility = () => {
            // Show scroll top button after scrolling 300px
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScrollVisibility);
        return () => window.removeEventListener("scroll", handleScrollVisibility);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlay, slides.length]);

    const goToNextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
    };

    const getVisibleSlides = () => {
        const visible = [];
        for (let i = 0; i < slides.length; i++) {
            const index = (currentIndex + i) % slides.length;
            visible.push({ ...slides[index], position: i });
        }
        return visible;
    };

    const visibleSlides = getVisibleSlides();

    return (
        <div className="w-full h-screen overflow-hidden relative">
            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-slide-in-1 {
          animation: slideIn 1s ease-in-out forwards;
        }
        .animate-slide-in-2 {
          animation: slideIn 1s ease-in-out 0.3s forwards;
          opacity: 0;
        }
        .animate-slide-in-3 {
          animation: slideIn 1s ease-in-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

            <div className="relative max-h-screen w-full max-w-full h-full overflow-hidden z-50">
                {visibleSlides.map((slide, idx) => {
                    const { position } = slide;
                    let className = 'absolute w-[140px] h-[200px] sm:w-[160px] sm:h-[220px] lg:w-[180px] lg:h-[260px] rounded-2xl shadow-2xl bg-cover bg-center transition-all duration-500 ease-in-out';
                    let style = {
                        backgroundImage: `url(${isMobile ? slide.mobileImage : slide.image})`,
                        top: '50%',
                        transform: 'translateY(-50%)'
                    };

                    if (position === 0 || position === 1) {
                        className = 'absolute w-full h-full rounded-none shadow-none bg-cover bg-center transition-all duration-700 ease-in-out';
                        style = {
                            backgroundImage: `url(${isMobile ? slide.mobileImage : slide.image})`,
                            top: 0,
                            left: 0,
                            transform: 'none'
                        };
                    } else if (position === 2) {
                        style.left = 'calc(50% + 60px)';
                        style.transform = 'translateY(-10%)';
                        className += ' hidden sm:block';
                    } else if (position === 3) {
                        style.left = 'calc(50% + 270px)';
                        style.transform = 'translateY(-10%)';
                        className += ' hidden md:block';
                    } else if (position === 4) {
                        style.left = 'calc(50% + 480px)';
                        style.transform = 'translateY(-10%)';
                        className += ' hidden lg:block';
                    } else if (position === 5) {
                        style.left = 'calc(50% + 690px)';
                        style.transform = 'translateY(-10%)';
                        className += ' hidden xl:block';
                    } else {
                        style.left = 'calc(50% + 730px)';
                        style.opacity = 0;
                        style.transform = 'translateY(-10%)';
                    }

                    return (
                        <div key={slide.id} className={className} style={style}>
                            {position === 1 && (
                                <>
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                </>
                            )}
                        </div>
                    );
                })}

                {/* Fixed Content */}
                <div className="absolute top-1/2  left-[16%] transform -translate-x-[9%] md:translate-x-[9%] -translate-y-1/2  md:left-[20px]   lg:left-[60px] max-w-[100%]  sm:max-w-[1500px] text-left text-white transform -translate-y-1/2 z-10">
                    <div className="heroheading text-3xl sm:text-4xl lg:text-5xl xl:text-7xl  font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight mt-[12rem] md:mt-0">
                        Your  Global  Future<br />Begins  Here
                    </div>
                    <div className="herodescription text-sm sm:text-base lg:text-lg -mb-[3.5rem] sm:mb-8 leading-relaxed text-justify md:text-left  md:max-w-[350px] xl:max-w-[550px] ">
                        {slides[currentIndex]?.description || slides[0].description}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-[5rem] md:mt-0">
                        <Link to="/services">
                            <button className="px-6 whitespace-nowrap sm:px-8 w-full md:w-[10rem] py-2 md:py-2.5 border-2 border-[#FFCC00] text-[#FFCC00] font-semibold rounded-full shadow-[#FFCC00] shadow-[0_-2px_2px_-1px_rgba(0,0,0,0.2),0_4px_6px_-1px_rgba(0,0,0,0.2)] transition-all duration-300 text-sm sm:text-base">
                                Our Services
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="px-6 whitespace-nowrap sm:px-8 w-full md:w-[10rem] py-2 md:py-3  bg-[#392BD3] text-white font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm sm:text-base">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Fixed Slide counter */}
                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-12 text-white text-4xl sm:text-5xl lg:text-6xl font-bold opacity-50 z-10">
                    0{currentIndex + 1}
                </div>

                {/* Slider Navigation Arrows - FIXED: Higher z-index and positioned inside slider */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-[100]">
                    <button
                        onClick={goToPrevSlide}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white bg-black/30 backdrop-blur-sm text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center shadow-lg"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white bg-black/30 backdrop-blur-sm text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center shadow-lg"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Hero;