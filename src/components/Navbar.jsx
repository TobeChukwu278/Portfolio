import React from 'react'

const Navbar = () => {
    return (
        <nav className=" border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold text-white">TAGDev</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#hero" className="text-gray-200 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#about" className="text-gray-200 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#resume" className="text-gray-200 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Resume</a>
                        <a href="#featuredworks" className="text-gray-200 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Works</a>
                        <a href="#devnews" className="text-gray-200 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                        <a href="#connect" className="text-gray-200 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        <span className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium cursor-not-allowed">Tobe Chukwu</span>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar