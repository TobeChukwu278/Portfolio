import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#resume", label: "Resume" },
        { href: "#featuredworks", label: "Works" },
        { href: "#devnews", label: "Blog" },
        { href: "#connect", label: "Contact" },
    ];

    return (
        <nav className="bg-gray-900 px-4 py-3 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-amber-500">MyPortfolio</div>
                {/* Hamburger */}
                <button
                    className="md:hidden text-amber-500 text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? (
                        <span>&#10005;</span> // X icon
                    ) : (
                        <span>&#9776;</span> // Hamburger icon
                    )}
                </button>
                {/* Nav Links */}
                <ul className={`flex-col md:flex-row md:flex gap-8 md:gap-8 items-center absolute md:static bg-gray-900 md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 z-40 ${menuOpen ? 'flex top-16' : 'hidden md:flex top-[-400px]'}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block py-2 px-4 text-amber-100 hover:text-amber-500 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;