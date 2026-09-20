import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../../assets/tes1.png"
import img2 from "../../assets/tes2.png"
import img3 from "../../assets/tes3.png"

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const headerRef = useRef(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);


    const testimonials = [
        {
            id: 1,
            quote: "I got the student visa couple of months back and I would really say that the team, Achieve-via Education, had done a great job in obtaining the visa, especially Harini who was our consultant. They helped me out with my Canada student visa application and I was extremely impressed with the service. Ther are skilled and experienced in the profession which helps many students to get their best fit. I would recommend the team to anybody looking for visa assistance.",
            name: "Kularajah Mayuraj",
            rating: 5,
            image: img1
        },
        {
            id: 2,
            quote: "Great service! I had a lot of issues to consult on and Miss Dulanjika and Miss Harini was kind enough to take me through it all. Friendly on the phone and gave me information straight away that fixed everything. They were able to answer my incessant questions very quickly, Also Miss Avril's willingness to guide and help was particularly very refreshing. The whole process was quick and easy and dealt with very efficiently without any cost to me. I would most definitely recommend Achieve-Via Education to anyone in need of Student Visa services.",
            name: "Shan Dharmawansha",
            rating: 5,
            image: img2
        },
        {
            id: 3,
            quote: "I would like to thank and appreciate Achieve-via Education for helping me with my University application and student visa to Canada. Concentrating on my application and visa while working full time during the pandemic was not a smooth sail, but Harini was so helpful, - understanding and guided me step by step in the process. She is very punctual and made the whole process organized and easier for me. I would also like to thank Avril and Dulanjika for overlooking the application throughout and supporting it whenever needed. My visa was approved within two weeks because of their assistance. I highly recommend them to the prospective students and wish the team very good luck in their future applications.",
            name: "Sangeerthan Ratnakumar",
            rating: 5,
            image: img3
        },
        {
            id: 4,
            quote: "I am extremely happy with Achieve Via Education. They handled my visa application very well. They are very good at what they do, so much so that I got my visa in under 20 working days. Avril, Dulanjika and the rest of the team at Achieve Via Education are professional, knowledgeable and they pay attention to detail. They are genuinely invested in their students and care about the outcome. They are supportive and have been available to support me every stop of the way. I highly recommend Achieve-Via Education! I would like to extend my sincere thanks to the team for the amazing Job!",
            name: "Rachitha Fernando",
            rating: 5,
            image: img1
        },
        {
            id: 5,
            quote: "Achieve - via education consultants are a very efficient establishment. Achieve-via helped my wife and I obtain visas to CANADA. The work they did was very important and they were extremely friendly. Since this was our first time to obtain visas for the purpose of studies Achieve- via was very pro active with our visa needs. I am greatly thankful to Dulanjika and Avril and Harini for constantly helping my wife and I with the visa process. I am overjoyed that I chose Achieve-via as my visa consultants. My advise for any potential overseas traveler seeking a visa consultant is that Achieve via will be the best for you, since they are very committed to their work. Once again thank you Achieve via from the bottom of my heart for helping my wife and I with our future.",
            name: "Anuk Edirisinghe",
            rating: 5,
            image: img2
        }
        ,{
            id: 6,
            quote: "Thank you Achieve via Education for making my Canadian Education dream come true! Dulanjika, Harini and Avril did a great job working hard for my student visa and my husband's work visa. They were very professional, attentive and understanding and got our visas in the very first attempt. I 100% recommend them to anyone pursuing their Canadian higher education dream! Job well done guys! Thanks again!",
            name: "Asra Imtiaz",
            rating: 5,
            image: img2
        }

        ,{
            id: 7,
            quote: "Within few weeks of connecting with Achieve-via I was accepted to Le Cordon Bleu, Adelaide Jan 2021 year but with the Covid situation we decided to differ my travel for a year. For year 2022 through Achieve-via we applied for the visa in November and as they ensured all the required documents were in order, I was lucky to get my visa under 30 days. I will recommend Achieve-via anyday to a prospective student. Thank you Avril, Dulanjika & Harini.",
            name: "Gavin Karunarathne",
            rating: 5,
            image: img2
        }
        ,
        {
            id: 8,
            quote: "My Canadian student visa was granted just in 03 days. Dulanjika did an Excellent service and follow up till the end. Very Supportive & you can count on them. Highly recommended to start your visa process with them to achieve your dream. \" To Achieve your foreign educational dreams visit Achieve-via Education\"",
            name: "Himalshi Wijesuriya",
            rating: 5,
            image: img2
        }

        ,{
            id: 9,
            quote: "Achieve via is a great place and they helped me to get my visa success. Team is really helpful and they supported anytime when I want. they guided me with the whole process and required documents clearly. I could get the visa in less than a month. Special thing is they don't charge from us for anything. I highly recommend this place for your visa success.",
            name: "Ruwan Sampath",
            rating: 5,
            image: img2
        }
        ,{
            id: 10,
            quote: "I landed in Canada recently and received my student visa with the help of Achieve-via Education. I highly appreciate the service provided for me by Ms. Harini Dalugamaarchchi who is an excellent education consultant with high professionalism and very good knowledge of Canadian Student visas. I received my visa within 7 weeks and she helped me in every step of the process with utmost care. I am really grateful for the service they provided and highly recommend Achieve -via education and Ms. Harini for Canada Student Visa.",
            name: "Isuri Gallage",
            rating: 5,
            image: img2
        },
        {
            id: 11,
            quote: "Much appreciation to Achieve Via Education for the commitment and the amount of work they put in to get my Australian visa to follow a MSc in Computer Science at the University of Adelaide. A special shoutout to Ms. Avril Joachim who was extremely reliable and available whenever I had any queries. After a bad experience with another agency I found working with the Achieve Via Education a pleasant experience. Highly recommend them to anyone who is seeking high quality service.",
            name: "Savini Abayarathne",
            rating: 5,
            image: img2
        },
        {
            id: 12,
            quote: "Achieve Via Education institute helped me to materialize one of my life-long missions. Not only did the institute manage to get me admission to University Canada West to follow an MBA it ensured that there will be smooth processing of visa as well. During these hard times managing to get a student visa is not only by luck but an outcome of effort and guidance which I received in abundance from the institute. Harini was my agent and she was really helpful from day one, and it was because of her persuasion and guidance I believe this outcome became a possibility. I'd like to thank Harini for all the guidance and the Achieve Via Education team for all the help and support they provided. I wish the company the best of luck and will be definitely referring the company to all my colleagues.",
            name: "Isuru Baduge",
            rating: 5,
            image: img2
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const autoSlideInterval = setInterval(() => {
            if (!isDragging && scrollRef.current) {
                const nextSlide = (currentSlide + 1) % testimonials.length;
                setCurrentSlide(nextSlide);
                const scrollAmount = nextSlide * (scrollRef.current.scrollWidth / testimonials.length);
                scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(autoSlideInterval);
    }, [currentSlide, isDragging, testimonials.length]);

    // Update currentSlide based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current && !isDragging) {
                const scrollPosition = scrollRef.current.scrollLeft;
                const slideWidth = scrollRef.current.scrollWidth / testimonials.length;
                const newSlide = Math.round(scrollPosition / slideWidth);
                setCurrentSlide(newSlide);
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            return () => scrollElement.removeEventListener('scroll', handleScroll);
        }
    }, [isDragging, testimonials.length]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const slideWidth = scrollRef.current.scrollWidth / testimonials.length;
            let newSlide;

            if (direction === 'left') {
                newSlide = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
            } else {
                newSlide = (currentSlide + 1) % testimonials.length;
            }

            setCurrentSlide(newSlide);
            const scrollAmount = newSlide * slideWidth;
            scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

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
        <div className="w-full bg-white pt-12 md:pt-16 lg:pt-20 px-4 relative overflow-hidden pb-16">

            <style jsx>{`
                @keyframes slideUpFade {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .heading-animate {
                    opacity: 0;
                    transform: translateY(50px);
                }

                .heading-animate.visible {
                    animation: slideUpFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }

                .subheading-animate {
                    opacity: 0;
                    transform: translateY(30px);
                }

                .subheading-animate.visible {
                    animation: slideUpFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
                }

                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>





            {/* Header Section */}
            <div ref={headerRef} className="max-w-9xl xl:max-w-9xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3 md:mb-4 heading-animate ${isHeaderVisible ? 'visible' : ''}`}>
                    Dreams Realised:<br />Student Success Stories
                </h2>
                <p className={`text-sm md:text-base text-gray-600 max-w-xl mx-auto subheading-animate ${isHeaderVisible ? 'visible' : ''}`}>
                    Our students leave Sri Lanka with excitement and return with degrees, careers, and confidence.
                </p>
            </div>


            {/* Testimonials Carousel Container */}
            <div className="relative w-full mx-auto">
                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 md:gap-12 lg:gap-16 overflow-x-auto scroll-smooth px-4 md:px-8 pb-8 select-none"
                    style={{
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[45vw] max-w-[700px]"
                            style={{ scrollSnapAlign: 'center' }}
                        >
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex lg:hidden justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            if (scrollRef.current) {
                                const scrollAmount = index * (scrollRef.current.scrollWidth / testimonials.length);
                                scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                            }
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                            index === currentSlide ? 'bg-blue-950 w-8' : 'bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={() => scroll('left')}
                    className="w-12 h-12 rounded-full bg-blue-950 text-white flex items-center justify-center hover:bg-blue-900 transition-colors shadow-lg"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-12 h-12 rounded-full bg-blue-950 text-white flex items-center justify-center hover:bg-blue-900 transition-colors shadow-lg"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <div className="relative h-[300px] md:h-[400px] lg:h-[400px] select-none" style={{ userSelect: 'none' }}>
            {/* Top-Left Corner Frame */}
            <div
                className="testimonialscard absolute top-0 left-0 w-28 h-36 md:w-36 md:h-44 lg:w-40 lg:h-48 z-10 pointer-events-none"

            />

            {/* Main White Card */}
            <div className="absolute top-12 left-12 md:top-14 md:left-14 lg:top-5 lg:mb-[5rem] lg:left-16 right-0 bottom-0 bg-white shadow-2xl z-40 h-[14rem] md:h-[17rem] lg:h-auto object-fit  -mt-[1.8rem] md:-mt-[1rem] lg:-mt-[0rem] ">
                <div className="h-full flex flex-row md:flex-row">
                    {/* Left Content */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        <p className="text-[9px] md:text-[12px] lg:text-[12px] xl:text-sm text-gray-800 leading-relaxed  md:mb-8 lg:mb-1 xl:mb-8">
                            {testimonial.quote}
                        </p>

                        <div className="flex items-center gap-3">
                            {/* Blue Square */}
                            <div className="w-3 h-3 bg-blue-950 flex-shrink-0" />

                            {/* Yellow Line */}
                            <div className="w-10 h-0.5 bg-yellow-400" />

                            {/* Name and Title */}
                            <div>
                                <h3 className="text-sm md:text-md lg:text-md xl:text-xl  font-extrabold text-yellow-400 tracking-wider">
                                    {testimonial.name}
                                </h3>
                                <div className="flex items-center mt-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className={`w-3 h-3 md:w-4 md:h-4 ${
                                                star <= testimonial.rating ? "text-gray-400" : "text-gray-300"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.387 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.387-2.46a1 1 0 00-1.176 0l-3.387 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.14 9.401c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.287-3.974z" />
                                        </svg>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Image Section
                    <div className="relative w-[10rem] md:w-64 lg:w-72 flex-shrink-0 h-48 md:h-full py-5 px-3 md:p-10  md:p-10 mt-5 md:mt-0 lg:-ml-10 ">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover pointer-events-none select-none"
                            draggable="false"
                        />

                         Bottom-Right Corner Frame on Image
                        <div
                            className="hidden md:blobk absolute bottom-6 right-6 w-20 h-20 md:w-24 md:h-24 lg:w-[8rem] lg:h-[15.5rem] pointer-events-none"
                            style={{
                                borderBottom: '7px solid #001A49',
                                borderRight: '7px solid #001A49',
                                borderTop: '7px solid #001A49',
                            }}
                        />
                    </div>*/}
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-30">
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            i === index ? 'bg-blue-950' : 'bg-blue-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;