import React from 'react';
import SkillMeter from '../components/SkillMeter';

const Resume = () => {
    return (
        <div className='px-4 overflow-y-hidden min-h-screen'>
            <div data-aos="fade-up" className="flex flex-col items-center mt-10 mb-8">
                <h1 className="text-5xl font-extrabold text-amber-600 tracking-tight drop-shadow mb-2">
                    Resume
                </h1>
                <span className="w-24 h-1 bg-amber-500 rounded mb-4"></span>
                <p className="max-w-2xl text-center text-lg text-amber-100/90 font-light">
                    A quick overview of my education, skills, and experience as a developer.<br />
                    Download my full resume or explore my journey below.
                </p>
            </div>

            <div className='flex gap-3 items-stretch'>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-amber-600 mb-6">Education :</h1>
                    <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-xl mx-auto mb-8 flex flex-col gap-2 border-l-4 border-amber-600 h-full min-h-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="inline-block bg-amber-600 w-3 h-3 rounded-full"></span>
                            <h4 className="text-sm text-amber-400 font-semibold">2020 - 2023</h4>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-200">Senior Secondary School Certificate</h2>
                        <p className="text-amber-100 mt-2">
                            Completed my secondary education with a strong foundation in mathematics and science, developing analytical and problem-solving skills essential for my journey as a developer.
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-amber-600 mb-6">Experience:</h1>
                    <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-xl mx-auto mb-8 flex flex-col gap-2 border-l-4 border-amber-600 h-full min-h-30">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="inline-block bg-amber-600 w-3 h-3 rounded-full"></span>
                            <h4 className="text-sm text-amber-400 font-semibold">2024 - Present</h4>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-200">Web Developer</h2>
                        <p className="text-amber-100 mt-2">
                            Building and maintaining modern web applications using technologies like React, Node.js, and MongoDB. Focused on creating responsive user interfaces, optimizing performance, and delivering seamless user experiences.
                        </p>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="flex flex-col items-center mt-16">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-1 bg-amber-600 rounded"></span>
                    <h1 data-aos="fade-up" data-aos-delay='200' className="text-4xl text-amber-600 font-extrabold tracking-wide drop-shadow">My Skills</h1>
                    <span className="w-8 h-1 bg-amber-600 rounded"></span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-wrap justify-center gap-8">
                    <div data-aos="fade-up" data-aos-delay='400' className="flex flex-col items-center gap-4">
                        <SkillMeter skill="React" level={60} icon="⚛️" />
                        <SkillMeter skill="Node.js" level={40} icon="🟩" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay='500' className="flex flex-col items-center gap-4">
                        <SkillMeter skill="MongoDB" level={75} icon="🍃" />
                        <SkillMeter skill="CSS" level={75} icon="🎨" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume