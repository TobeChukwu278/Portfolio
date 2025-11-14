import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "TobeChukwu Ejiofor";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    const codeLines = [
        { color: 'text-purple-400', text: 'const', delay: 0 },
        { color: 'text-blue-400', text: 'developer', delay: 100 },
        { color: 'text-gray-400', text: '=', delay: 200 },
        { color: 'text-yellow-400', text: '{', delay: 300 },
    ];

    const skills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'APIs', 'React'];

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-20 relative overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Floating code snippets */}
            <div className="absolute top-20 left-10 text-amber-600/20 font-mono text-sm hidden lg:block">
                {'</>'}
            </div>
            <div className="absolute bottom-32 right-16 text-amber-600/20 font-mono text-sm hidden lg:block">
                {'{}'}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-6xl relative z-10">
                {/* Terminal-style container */}
                <div className="flex-1 w-full">
                    {/* Terminal header */}
                    <div className="bg-gray-800 rounded-t-lg border-2 border-gray-700 px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 text-gray-400 text-sm font-mono">~/developer-profile</span>
                    </div>

                    {/* Terminal content */}
                    <div className="bg-gray-900/90 backdrop-blur-sm border-2 border-t-0 border-gray-700 rounded-b-lg p-6 md:p-8 shadow-2xl">
                        <div className="font-mono text-sm space-y-2 mb-6">
                            <div>
                                <span className="text-green-400">→</span>
                                <span className="text-gray-400 ml-2">whoami</span>
                            </div>
                            <div className="pl-4 text-amber-100">
                                Full Stack Developer | Backend Specialist
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-10 h-1 bg-amber-600"></div>
                                <span className="text-amber-600 font-semibold tracking-wider text-sm">INIT</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold mb-2">
                                <span className="text-gray-400 font-mono text-2xl md:text-3xl">$ </span>
                                <span className="text-amber-600">{displayedText}</span>
                                <span className={`inline-block w-1 h-8 md:h-12 bg-amber-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                            </h1>
                        </div>

                        <div className="font-mono text-xs md:text-sm space-y-1 mb-8 text-gray-300">
                            <div><span className="text-purple-400">const</span> <span className="text-blue-400">role</span> <span className="text-gray-500">=</span> <span className="text-green-400">"Full Stack Developer"</span>;</div>
                            <div><span className="text-purple-400">const</span> <span className="text-blue-400">passion</span> <span className="text-gray-500">=</span> <span className="text-green-400">"Building scalable web solutions"</span>;</div>
                            <div><span className="text-purple-400">const</span> <span className="text-blue-400">focus</span> <span className="text-gray-500">=</span> <span className="text-green-400">"Backend architecture & APIs"</span>;</div>
                        </div>

                        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                            Specializing in server-side development, database design, and RESTful APIs.
                            I craft robust backend systems that power seamless user experiences.
                        </p>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-800 border border-amber-600/30 text-amber-500 rounded text-xs font-mono hover:border-amber-600 hover:bg-gray-700 transition-all">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/resume(2).pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-amber-600 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-600/50 font-mono text-sm md:text-base"
                            >
                                <span className="mr-2">→</span> DOWNLOAD_CV
                            </a>
                            <button className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded font-semibold hover:bg-amber-600 hover:text-gray-900 transition-all font-mono text-sm md:text-base">
                                VIEW_PROJECTS
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image with code overlay */}
                <div className="flex-1 flex justify-center lg:justify-end relative">
                    <div className="relative group">
                        {/* Code overlay frame */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-600/0 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>

                        <div className="relative">
                            {/* Binary code overlay */}
                            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="font-mono text-amber-600 text-xs leading-tight opacity-30">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <div key={i}>
                                            {Math.random().toString(2).substring(2, 34)}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Crect width='320' height='320' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%23D97706'%3EProfile Image%3C/text%3E%3C/svg%3E"
                                alt="Profile"
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg border-2 border-amber-600 shadow-2xl relative"
                            />

                            {/* Corner brackets */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-600 -translate-x-2 -translate-y-2"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-600 translate-x-2 -translate-y-2"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-600 -translate-x-2 translate-y-2"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-600 translate-x-2 translate-y-2"></div>
                        </div>

                        {/* Status indicator */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-400 text-xs font-mono">AVAILABLE FOR WORK</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom command line */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-sm text-gray-500 hidden md:block">
                <span className="text-green-400">→</span> Ready to collaborate_
            </div>
        </section>
    );
};

export default Hero;