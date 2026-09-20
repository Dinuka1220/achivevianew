import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import icon from "../../../assets/Contatc/icon.png"
import youtube from "../../../assets/Contatc/youtube.png"
import instar from "../../../assets/Contatc/instar.png"
import fb from "../../../assets/Contatc/fb.png"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        subject: ''
    });

    const subjects = ['General Inquiry', 'Brand Identity', 'UI/UX', 'Packaging Design'];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubjectSelect = (subject) => {
        setFormData({
            ...formData,
            subject
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
    };

    return (
        <div>
        <div className="min-h-screen bg-[#11152e] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden max-w-[90%] mx-auto my-[3rem] lg:my-[7rem] rounded-[3rem]">
            {/* Decorative gradient orbs */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-60 lg:h-60 bg-gradient-to-br from-yellow-400/60 to-transparent rounded-full blur- top-[35rem] left-10 sm:left-20 -z-0"></div>
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/60 to-transparent rounded-full  top-20 left-32 sm:left-64 -z-0"></div>
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/60 to-transparent rounded-full  bottom-32 right-64 -z-0 hidden lg:block"></div>
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-800 rounded-full  bottom-[5rem] left-1/3 -z-0 hidden lg:block"></div>

            <div className="w-full max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-100 font-normal">
                        Any question or remarks? Just write us a message!
                    </h1>
                </div>

                {/* Main Container */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-[50px] p-4 sm:p-6 lg:p-0 overflow-hidden border-2 border-gray-500">
                    {/* Left Side - Contact Information */}
                    <div className="lg:w-2/5 bg-[rgb(215,218,242)/60]  backdrop-blur-md opacity-6 rounded-3xl lg:rounded-[50px] p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-8 sm:mb-12 lg:mb-16 max-w-[19rem]">
                                Let’s Build Your Global Future
                            </h2>

                            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                                {/*Content*/}
                                <div className="flex items-center gap-4">
                                   <h1 className={"text-md text-[#8D8D8D]  text-justify"}>Whether you're dreaming of studying in the UK, Australia, Canada, Malaysia, or beyond Achieve-Via is here to guide you every step of the way.</h1>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4 ">
                                   <p className={"text-md text-[#8D8D8D]  text-justify mt-[4rem]"}>Your dream deserves a team that believes in it as much as you do.</p>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 sm:gap-5 mt-12 sm:mt-16 lg:mt-5 pb-[8rem]">
                                <a
                                    href="https://www.youtube.com/channel/UCnaL5QDfp7KQX_HjjJ05ToA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    <img className="w-full" src={youtube} alt="YouTube" />
                                </a>

                                <a
                                    href="https://www.instagram.com/achieve_via/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    <img className="w-full" src={instar} alt="Instagram" />
                                </a>

                                <a
                                    href="https://www.facebook.com/achievevia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    <img className="w-full" src={fb} alt="Facebook" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-gray-200 text-sm sm:text-base font-medium mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-400 text-gray-200 py-2 focus:outline-none focus:border-gray-200 transition-colors text-sm sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-200 text-sm sm:text-base font-medium mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-400 text-gray-200 py-2 focus:outline-none focus:border-gray-200 transition-colors text-sm sm:text-base"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-gray-200 text-sm sm:text-base font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-400 text-gray-200 py-2 focus:outline-none focus:border-gray-200 transition-colors text-sm sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-200 text-sm sm:text-base font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-200 text-sm">+94</span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="flex-1 bg-transparent border-b border-gray-400 text-gray-200 py-2 focus:outline-none focus:border-gray-200 transition-colors text-sm sm:text-base"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* referred Destination */}
                            <div>
                                <label className="block text-gray-200 text-sm sm:text-base font-medium mb-2">
                                    Referred Destination
                                </label>
                                <input
                                    type="text"
                                    name="referredDestination"
                                    value={formData.referredDestination}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-400 text-gray-200 py-2 focus:outline-none focus:border-gray-200 transition-colors text-sm sm:text-base"
                                    required
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <label className="block text-gray-200 text-sm sm:text-base font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message.."
                                    rows="1"
                                    className="w-full bg-transparent border-b border-gray-400 text-gray-200 py-2 focus:outline-none focus:border-gray-200 transition-colors resize-none placeholder-gray-500 text-sm sm:text-base"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    className="bg-gray-200 hover:bg-white text-[#11152e] font-medium py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg"
                                >
                                    Send Message
                                </button>
                            </div>

                            <div className="absolute hidden md:block right-20 -bottom-6 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                                <img className={"w-[10rem]"} src={icon} alt="icon"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div></div>
    );
}