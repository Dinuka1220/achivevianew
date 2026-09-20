import React, { useEffect, useState, useRef } from 'react';

const VideoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Intersection Observer for fade-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Auto-play video when visible
    useEffect(() => {
        if (isVisible && videoRef.current) {
            videoRef.current.play().catch(err => console.log('Video autoplay failed:', err));
        }
    }, [isVisible]);

    // Determine which video to show based on screen size
    const videoSource = isMobile
        ? "/video1.mp4"  // Mobile: video2
        : "/video1.mp4"; // Desktop: video1

    return (
        <section ref={sectionRef} className="w-full   md:mt-[0rem] lg:mt-[2rem]  h-[20rem]  md:h-screen relative overflow-hidden flex items-center justify-center">
            <video
                ref={videoRef}
                key={videoSource}
                className={`w-full h-full transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default VideoSection;