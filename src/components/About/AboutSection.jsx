import React from 'react';

const AboutSection = () => {
    return (
        <section className="bg-white py-12 px-6 lg:px-24 scroll-element" id="about-us">
            <div className="max-w-7xl mx-auto text-center scroll-element">
                <h2 className="text-4xl font-bold text-[#A60000] mb-6">About Aptech</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Aptech is a renowned institution committed to empowering students with cutting-edge technology skills. 
                    Our mission is to bridge the gap between education and industry requirements through dynamic and 
                    industry-oriented programs, shaping the innovators of tomorrow.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:space-x-10  space-y-6 lg:space-y-0 items-center mt-8 scroll-element">
                <div className="bg-[#A60000] rounded-lg shadow-lg overflow-hidden cursor-pointer w-full lg:w-1/3 text-center p-6">
                    <h3 className="text-2xl font-semibold text-[#FFB900]  mb-4">Our Mission</h3>
                    <p className="text-white text-md leading-relaxed">
                        We aim to provide quality education that empowers students to become tech-savvy, problem-solving 
                        professionals equipped to excel in the ever-evolving tech industry.
                    </p>
                </div>

                <div className="bg-[#A60000] rounded-lg shadow-lg cursor-pointer overflow-hidden w-full lg:w-1/3 text-center p-6">
                    <h3 className="text-2xl font-semibold text-[#FFB900]  mb-4">Our Vision</h3>
                    <p className="text-white text-md leading-relaxed">
                        Aptech envisions a world where technology is accessible, and every learner is equipped to harness 
                        it, creating solutions that impact society positively and promote innovation.
                    </p>
                </div>

                <div className="bg-[#A60000] rounded-lg shadow-lg overflow-hidden cursor-pointer w-full lg:w-1/3 text-center p-5">
                    <h3 className="text-2xl font-semibold text-[#FFB900]  mb-4">Why Choose Us?</h3>
                    <p className="text-white text-md leading-relaxed">
                        Our curriculum, designed in collaboration with industry experts, ensures that you gain practical 
                        experience, mentorship, and the latest skills needed to succeed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
