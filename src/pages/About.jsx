import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import AboutMeImage from '../assets/IMG_2361~2_1~2.jpeg';

const About = () => {


    return (

        <div className='min-h-screen flex flex-col justify-center px-3 py-15 text-amber-50'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 justify-around items-center'>
                <div data-aos="fade-up" className="w-full md:w-auto flex justify-center">
                    <img
                        src={AboutMeImage}
                        alt='about-me-image'
                        className='w-full max-w-xs md:max-w-sm rounded-sm shadow-lg object-cover'
                    />
                </div>
                <div className='w-full md:w-2/3 mt-8 md:mt-0'>
                    <div className='flex gap-1 items-center mb-4'>
                        <span className='w-5 h-0.5 bg-amber-600'></span>
                        <h1 data-aos="fade-up" data-aos-delay='200' className='text-3xl text-amber-600 font-bold'>About Me</h1>
                    </div>
                    <p data-aos="fade-up" data-aos-delay='400' className='mb-9'>
                        I'm a full stack developer with a passion for crafting seamless digital experiences from front to back. I specialize in building responsive user interfaces and architecting backend systems that would scale. With hands-on experience across the development stack - JavaScript, React, Node.js and databases like MongoDB and MySQL - I thrive on turning ideas into working products.
                    </p>
                    <p data-aos="fade-up" data-aos-delay='200'>
                        I enjoy bridging the gap between design and functionality, always aiming for clean, maintainable code with smooth perfomance. Whether its deploying to the cloud or optimizing a user journey, I bring a problem-solving mindset and a focus on user-centric development to every project.
                    </p>
                </div>
            </div>


            <div data-aos='fade-up' data-aos-delay='200' className="flex gap-6 text-2xl justify-center mt-12">
                <a href="mailto:ejiofortobechi@gmail.com" className="hover:text-amber-500 transition-colors" title="Email">
                    <span className="sr-only">Email</span>
                    <FaEnvelope />
                </a>
                <a href="https://github.com/TobeChukwu278" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" title="GitHub">
                    <span className="sr-only">GitHub</span>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/tobechukwu-ejiofor-493925316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" title="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )

}

export default About