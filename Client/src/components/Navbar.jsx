"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import ContactPopup from "./ContactPopup";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when the menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
      <nav
        className={`fixed flex justify-center items-center top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-white/95 backdrop-blur-md"
            : "shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white"
        }`}
      >
        <div className="flex justify-between items-center py-4 px-6 lg:px-8 h-20 w-full max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-text1 font-logo text-green-500">
              Algo
              <span className="text-black">Flow AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            <NavLink href="#" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink href="#services" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink href="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink href="/blog" onClick={closeMenu}>
              Blogs
            </NavLink>
          </div>

          {/* Desktop CTA Button */}
          <div className="items-center hidden lg:flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:scale-[1.02] flex-1 sm:flex-none min-w-[140px] sm:min-w-[180px]"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative mb-6 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-green-500 focus:outline-none transition-colors duration-300"
            >
              <div className="relative">
                <IconMenu2
                  size={30}
                  className={`absolute transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <IconX
                  size={30}
                  className={`absolute transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="text-xl font-bold text-green-500">
                Algo<span className="text-black">Flow AI</span>
              </span>
              <button
                onClick={closeMenu}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IconX size={30} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-6 py-8 space-y-6">
              {[
                { href: "#", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#case-studies", label: "CaseStudies" },
                { href: "/blog", label: "Blogs" },
                { href: "#development-approach", label: "How It Works" },
                { href: "#hire", label: "Hire" },
              ].map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-300 delay-${
                    index * 100
                  }`}
                >
                  <MobileNavLink href={item.href} onClick={closeMenu}>
                    {item.label}
                  </MobileNavLink>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="px-6 py-8 mb-14 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-4 mb-6">
                <SocialIcon icon={IconBrandGithub} href="#" />
                <SocialIcon icon={IconBrandLinkedin} href="#" />
                <SocialIcon icon={IconBrandTwitter} href="#" />
                <SocialIcon icon={IconBrandInstagram} href="#" />
              </div>

              {/* Connect Now Button */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  closeMenu();
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-gray-700 hover:text-green-500 transition-all duration-300 text-lg font-medium py-2 border-b border-transparent hover:border-green-200 transform hover:translate-x-2"
    >
      {children}
    </a>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-100 hover:bg-green-500 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-md"
    >
      <Icon size={18} />
    </a>
  );
}
