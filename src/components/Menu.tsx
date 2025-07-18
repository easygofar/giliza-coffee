"use client"
import React, { useState } from 'react';

import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';

export default function App() {
    // State to manage the mobile menu's visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State to manage the mobile submenu's visibility
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to toggle the submenu
    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    // Function to close Menu in responsive mode
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setIsSubmenuOpen(false);
    }
    return (
        <nav className="relative flex items-center justify-between md:justify-center h-[100px] top-0 left-0 w-full  px-4 sm:px-6 lg:px-8">
            {/* Desktop Menu */}
            <div className="text-white text-2xl font-bold md:hidden">
                <Link href="/"><img className='w-[80px]' src="/images/giliza/giliza-logo-200px.png" alt="Logo" /></Link>
            </div>
            <ul className="hidden md:flex text-white items-center justify-center gap-8">
                <li><Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
                <li><Link href="/products" className="hover:text-gray-300 transition-colors duration-300">Products</Link></li>
                <li><Link href="/about-us" className="hover:text-gray-300 transition-colors duration-300">About Us</Link></li>
                <li className="relative group py-4">
                    <Link href="#" className="flex items-center hover:text-gray-300 transition-colors duration-300">
                        Education
                        <IoMdArrowDropdown className="inline-block ml-1" />
                    </Link>
                    {/* Desktop Dropdown */}
                    <ul className="absolute scale-95 opacity-0 invisible group-hover:scale-100 group-hover:visible group-hover:opacity-100 top-13 mt-2 transition-all duration-200 -left-8 z-20 bg-[#5d0b10] shadow-2xl px-6 py-4 w-[230px] leading-10 rounded-lg border border-amber-700">
                        <li><Link href="/education/brew-like-barista" className="block text-white hover:text-[#79B0AE] transition-colors duration-200">Brew Like Barista</Link></li>
                        <li><Link href="/education/flavor-infusion" className="block text-white hover:text-[#79B0AE] transition-colors duration-200">Flavor Infusion</Link></li>
                        <li><Link href="/education/flying-monkey" className="block text-white hover:text-[#79B0AE] transition-colors duration-200">Flying Monkey</Link></li>
                        <li><Link href="/education/why-arabica" className="block text-white hover:text-[#79B0AE] transition-colors duration-200">Why Arabica</Link></li>
                        <li><Link href="/education/coffee-guide" className="block text-white hover:text-[#79B0AE] transition-colors duration-200">Coffee Guide</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact Us</Link></li>
            </ul>

            {/* Mobile Menu Button (Hamburger Icon) */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu (Overlay) */}
            <div className={`absolute top-[100px] left-0 w-full bg-[#3a0a0d] z-10 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <ul className="flex flex-col items-center justify-center text-white p-5">
                    <li className="w-full text-center py-3"><Link onClick={closeMenu} href="/" className="hover:text-gray-300">Home</Link></li>
                    <li className="w-full text-center py-3"><Link onClick={closeMenu} href="/products" className="hover:text-gray-300">Products</Link></li>
                    <li className="w-full text-center py-3"><Link onClick={closeMenu} href="/about-us" className="hover:text-gray-300">About Us</Link></li>
                    <li className="w-full text-center py-3">
                        <button onClick={toggleSubmenu} className="w-full flex items-center justify-center hover:text-gray-300">
                            Education
                            <IoMdArrowDropdown className={`ml-1 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {/* Mobile Submenu */}
                        {/* {isSubmenuOpen ? ( */}
                        <ul className={`bg-[#5d0b10] rounded-lg  transition-all duration-300 ease-in-out ${isSubmenuOpen ? 'visible opacity-100 h-full scale-100 mt-2 py-2' : 'invisible opacity-0 h-0 scale-80 mt-0 py-0'}`}>
                            <li className="py-2"><Link onClick={closeMenu} href="/education/brew-like-barista" className="hover:text-[#79B0AE]">Brew Like Barista</Link></li>
                            <li className="py-2"><Link onClick={closeMenu} href="/education/flavor-infusion" className="hover:text-[#79B0AE]">Flavor Infusion</Link></li>
                            <li className="py-2"><Link onClick={closeMenu} href="/education/flying-monkey" className="hover:text-[#79B0AE]">Flying Monkey</Link></li>
                            <li className="py-2"><Link onClick={closeMenu} href="/education/why-arabica" className="hover:text-[#79B0AE]">Why Arabica</Link></li>
                            <li className="py-2"><Link onClick={closeMenu} href="/education/coffee-guide" className="hover:text-[#79B0AE]">Coffee Guide</Link></li>
                        </ul>
                        {/* ) : <ul className='invisible hidden'></ul>} */}
                    </li>
                    <li className="w-full text-center py-3"><Link onClick={closeMenu} href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}




