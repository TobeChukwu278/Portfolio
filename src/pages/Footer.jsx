import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-amber-100 py-6 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
                <div className="text-lg font-semibold tracking-wide">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </div>
                <div className="flex gap-6 text-2xl">
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
        </footer>
    )
}

export default Footer