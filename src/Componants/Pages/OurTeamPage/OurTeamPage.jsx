import React from 'react';
import img1 from "../../../assets/Ourteam/1.jpeg"
import img2 from "../../../assets/Ourteam/2.jpeg"
import img3 from "../../../assets/Ourteam/3.png"
import img4 from "../../../assets/Ourteam/4.png"
import img5 from "../../../assets/Ourteam/5.png"



const OurTeamPage = () => {
    const teamMembers = [
        {
            name: 'Victor Ramanan',
            role: 'Chairman',
            category: 'LEADERSHIP',
            image: img1
        },
        {
            name: 'Akila Perera',
            role: 'Director',
            category: 'CLIENT SERVICES',
            image: img2
        },
        {
            name: 'Wathsala Hapuarachchi',
            role: 'Head of Enrollments',
            category: 'LEADERSHIP',
            image: img3
        },
        {
            name: 'Nadeesha Kahatapitiya',
            role: 'Manager - Enrollments ',
            category: 'STRATEGY',
            image: img4
        },
        {
            name: 'Sonali Goonesekera',
            role: 'Manager - Admissions',
            category: 'LEADERSHIP',
            image: img5
        },

    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-[4rem]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
                        Meet Our Team
                    </h1>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 md:max-w-xl    lg:max-w-4xl xl:max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                            }}
                        >
                            {/* Circular Image with Border */}
                            <div className="relative mb-4 sm:mb-6">
                                <div className="w-[14rem] h-[14rem] md:w-[12rem] md:h-[12rem] lg:w-60 lg:h-60 rounded-full overflow-hidden bg-teal-900 ring-4 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Yellow Corner Icon */}
                                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#FFCC00] rounded-full flex items-center justify-center shadow-md">
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                    </svg>
                                </div>
                            </div>

                            {/* Name and Role */}
                            <div className="space-y-1">
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 uppercase tracking-tight leading-tight">
                                    {member.name}
                                </h3>
                                <p className="text-[10px] sm:text-xs text-[#FFCC00] uppercase tracking-wide font-medium leading-tight px-2">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default OurTeamPage;