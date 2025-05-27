import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/WhatsApp Image 2025-04-09 at 15.44.28_4495f69c.jpg';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div data-aos="fade-up" className="flex gap-2 items-center mb-4">
                        <span className="w-8 h-1 bg-amber-600 rounded"></span>
                        <h4 className="text-amber-600 text-lg font-semibold tracking-wide">Hello</h4>
                    </div>
                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        I Am <span className="text-amber-600">TobeChukwu</span> Ejiofor<span className="text-amber-600">.</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className="text-lg md:text-xl text-amber-100/90 mb-8 max-w-xl">
                        I'm a passionate full stack web developer focused on building modern, responsive, and user-friendly web applications. Let's turn your ideas into reality!
                    </p>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <a
                            href="/resume.pdf"
                            download
                            className="bg-amber-600 text-teal-950 text-lg md:text-xl px-8 py-3 rounded-full shadow hover:bg-amber-500 transition font-semibold inline-block"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                {/* Right: Image */}
                <div data-aos="zoom-in" data-aos-delay="400" className="flex-1 flex justify-center">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-amber-600"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;