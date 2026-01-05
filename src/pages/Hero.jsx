import React from 'react';

const Hero = () => {
    const skills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'React'];

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-20 lg:px-12 relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.01]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgb(217, 119, 6) 1px, transparent 1px), linear-gradient(90deg, rgb(217, 119, 6) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className="space-y-8">
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/30 rounded-full border border-amber-600/50">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-amber-100">Available for opportunities</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                TobeChukwu Ejiofor
                            </h1>
                            <div className="w-20 h-1 bg-amber-600"></div>
                        </div>

                        {/* Role & Description */}
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200">
                                Full Stack Developer
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                I specialize in building scalable backend systems and architecting robust server-side solutions. With expertise in API development and database design, I create seamless digital experiences that drive business growth.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                Core Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-2 bg-gray-800/50 text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-700 border border-gray-700 hover:border-amber-600/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="/resume(2).pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                            <button 
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-600 hover:text-white transition-all"
                            >
                                View Projects
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-6 pt-4 text-gray-300">
                            <a href="mailto:ejiofortobechi@gmail.com" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email
                            </a>
                            <a href="https://www.linkedin.com/in/tobechukwu-ejiofor-493925316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://github.com/TobeChukwu278" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Image Side - Hidden on mobile */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {/* Main image container */}
                            <div className="relative z-10">
                                <img
                                    src='./assets/WhatsApp Image 2025-04-09 at 15.44.28_4495f69c.jpg'
                                    alt="TobeChukwu Ejiofor - Full Stack Developer"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-amber-900/20 rounded-2xl -z-10"></div>
                            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gray-800/50 rounded-2xl -z-10"></div>
                            
                            {/* Accent border */}
                            <div className="absolute top-8 left-8 right-8 bottom-8 border-4 border-amber-600 rounded-2xl -z-5 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
