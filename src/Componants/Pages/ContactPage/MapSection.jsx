import React from 'react';

export default function MapSection() {
    return (
        <section className=" pb-[0rem] md:pb-[4rem] lg:pb-[7rem] bg-gray-50">
            <div className="max-w-full mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.126881312086!2d79.862285!3d6.886804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bf1ec8d0945%3A0x3405cb9ddad8c59d!2sAchieve-via%20Education%20-%20Study%20Abroad%20Consultants!5e0!3m2!1sen!2slk!4v1768314167182!5m2!1sen!2slk"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}