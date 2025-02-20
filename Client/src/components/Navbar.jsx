'use client'

import { useState, useEffect } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandInstagram
} from '@tabler/icons-react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)

        // Prevent body scrolling when the menu is open
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className={`fixed flex justify-center items-center top-0 w-full z-50 transition-all  duration-300  shadow-[0_4px_40px_rgba(0,0,0,0.3)] ${isScrolled ? ' bg-bg1/80 backdrop-blur-lg' : 'bg-transparent'}`}>

            <div className="flex justify-between items-center py-[10px] px-[25px] h-[79px] w-[1440px]">
                <div className="flex items-center w-[180px] h-[59px]">
                    <span className="text-2xl font-bold text-text1 font-logo text-green-500">
                        Algo
                        <span className=' text-black'>Flow AI</span>

                    </span>
                </div>
                <div className="hidden md:flex items-center justify-between font-space w-[645px] h-[45px] py-[10px]">
                    <NavLink href="#" onClick={closeMenu}>About us</NavLink>
                    <NavLink href="#services" onClick={closeMenu}>Service</NavLink>
                    <NavLink href="#case-studies" onClick={closeMenu}>CaseStudies</NavLink>
                    <NavLink href="#projects" onClick={closeMenu}>Blog</NavLink>
                    <NavLink href="#development-approach" onClick={closeMenu}>How It Works</NavLink>
                    <NavLink href="#hire" onClick={closeMenu}>Hire</NavLink>
                </div>
                <div className="items-center hidden md:flex">
                    <button className="bg-gradient-to-bl flex justify-center items-center from-[#6df766] to-[#065510] text-sm text-white w-[124px] h-[42px] px-[25px] py-[14px] rounded transition-colors">Contact Us</button>
                </div>
                <div className="md:hidden relative">
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none relative z-40"
                        style={{ position: 'absolute', top: '-0.75rem', right: '1rem' }}
                    >
                        {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 z-30 bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out h-screen`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 font-space relative z-10 text-black">
                    <MobileNavLink href="#" onClick={closeMenu}>About us</MobileNavLink>
                    <MobileNavLink href="#about" onClick={closeMenu}>Service</MobileNavLink>
                    <MobileNavLink href="#skill" onClick={closeMenu}>CaseStudies</MobileNavLink>
                    <MobileNavLink href="#projects" onClick={closeMenu}>Blog</MobileNavLink>
                    <MobileNavLink href="#contact" onClick={closeMenu}>How It Works</MobileNavLink>
                    <MobileNavLink href="#contact" onClick={closeMenu}>Hire</MobileNavLink>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ href, children, onClick }) {
    return (
        <a href={href} onClick={onClick} className="text-black hover:text-text4 transition-colors duration-300">
            {children}
        </a>
    )
}

function MobileNavLink({ href, onClick, children }) {
    return (
        <a href={href} onClick={onClick} className="text-black hover:text-text4 transition-colors duration-300 text-2xl">
            {children}
        </a>
    )
}