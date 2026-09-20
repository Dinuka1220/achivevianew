import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Choosing Your Course & Destination",
            description: "Your future should align with your passions. We help you discover the right degree, the right university, and the right country — so you can build the life you imagine.",

        },
        {
            id: 2,
            title: "Application Preparation",
            description: "Dreams deserve precision. Our team prepares every part of your application so you can submit with confidence:",
            bullets: [
                "Polished documents",
                "Compelling SOPs",
                "Properly organised submissions",
                "Close guidance at every step"
            ],

        },
        {
            id: 3,
            title: "Visa Success Support",
            description: "The visa process can be overwhelming — but with us, it becomes manageable and clear. We guide you through:",
            bullets: [
                "Financial preparations",
                "Document checklists",
                "Visa interviews",
                "Compliance requirements"
            ],
            description2:"Our methodical support has helped us maintain an exceptional success rate. "
        },
        {
            id: 4,
            title: "Pre-Departure Guidance",
            description: "The journey doesn't end with a visa — it's just beginning.",
            bullets: [
                "Accommodation options",
                "Travel arrangements",
                "Packing lists",
                "Cultural preparation",
                "Settling-in advice"
            ],
            description2: "You leave Sri Lanka confident and ready for your new life."
        },
        {
            id: 5,
            title: "Post-Arrival Support",
            description: "Once you land, you're not alone. We provide orientation guidance, student community connections, and settlement tips — ensuring you feel supported, even abroad."
        }
    ];

    return (
        <div className="object-fit bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
                    What We Offer
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* First Row - 3 cards */}
                    {services.slice(0, 3).map((service) => (
                        <div
                            key={service.id}
                            className="bg-white text-gray-900 hover:bg-[#0A0E28] hover:text-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col relative group h-full"
                        >
                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-4">
                                    {service.id}. {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4 text-gray-600 group-hover:text-gray-300">
                                    {service.description}
                                </p>

                                {/* Bullets if available */}
                                {service.bullets && (
                                    <ul className="space-y-2 mt-4">
                                        {service.bullets.map((bullet, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 group-hover:text-gray-300">
                                                • {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Description2 if available */}
                                {service.description2 && (
                                    <p className="text-sm leading-relaxed mt-4 text-gray-600 group-hover:text-gray-300">
                                        {service.description2}
                                    </p>
                                )}
                            </div>

                            {/* Arrow Icon */}
                            <div className="flex justify-end mt-6">
                                <div className="bg-slate-900 group-hover:bg-white text-white group-hover:text-[#0A0E28] rounded-full p-2 group-hover:scale-110 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row - 2 cards centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {services.slice(3, 5).map((service) => (
                        <div
                            key={service.id}
                            className="bg-white text-gray-900 hover:bg-[#0A0E28] hover:text-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col relative group h-full"
                        >
                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-4">
                                    {service.id}. {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4 text-gray-600 group-hover:text-gray-300">
                                    {service.description}
                                </p>

                                {/* Bullets if available */}
                                {service.bullets && (
                                    <ul className="space-y-2 mt-4">
                                        {service.bullets.map((bullet, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 group-hover:text-gray-300">
                                                • {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Description2 if available */}
                                {service.description2 && (
                                    <p className="text-sm leading-relaxed mt-4 text-gray-600 group-hover:text-gray-300">
                                        {service.description2}
                                    </p>
                                )}
                            </div>

                            {/* Arrow Icon */}
                            <div className="flex justify-end mt-6">
                                <div className="bg-slate-900 group-hover:bg-white text-white group-hover:text-[#0A0E28] rounded-full p-2 group-hover:scale-110 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;