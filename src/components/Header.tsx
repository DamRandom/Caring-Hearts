'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiArrowRight } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#4A5443]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#FCFBF7]/15'
          : 'bg-[#4A5443] py-4 border-b border-[#FCFBF7]/10 shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FCFBF7] rounded-lg"
        >
          <Image
            src="/logo/logo-card-background-removed.png"
            alt="Caring Hearts Supportive Service"
            width={160}
            height={72}
            className="object-contain h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3.5 py-2 text-[15px] font-medium text-[#FCFBF7] hover:text-white hover:bg-[#FCFBF7]/15 rounded-full transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+11234567890"
            className="flex items-center gap-2 text-sm font-semibold text-[#FCFBF7] hover:text-white px-3 py-2 rounded-full hover:bg-[#FCFBF7]/15 transition-colors"
          >
            <FiPhone className="text-[#FCFBF7] text-base" />
            <span className="hidden md:inline">(123) 456-7890</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FCFBF7] hover:bg-white text-[#4A5443] hover:text-[#353D30] text-sm font-semibold py-2.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Schedule a Visit</span>
            <FiArrowRight className="text-sm" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#FCFBF7] p-2 rounded-lg hover:bg-[#FCFBF7]/15 focus:outline-none focus:ring-2 focus:ring-[#FCFBF7] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#2C352A]/60 backdrop-blur-sm z-40 animate-fadeIn">
          <div className="bg-[#4A5443] border-b border-[#FCFBF7]/15 shadow-2xl px-6 py-8 flex flex-col space-y-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-lg font-semibold text-[#FCFBF7] hover:text-white hover:bg-[#FCFBF7]/15 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#FCFBF7]/15 flex flex-col gap-3">
              <a
                href="tel:+11234567890"
                className="flex items-center justify-center gap-2 text-base font-semibold text-[#FCFBF7] bg-[#FCFBF7]/15 py-3 px-4 rounded-xl hover:bg-[#FCFBF7]/25 transition-colors"
              >
                <FiPhone className="text-[#FCFBF7]" />
                <span>Call (123) 456-7890</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#FCFBF7] text-[#4A5443] hover:bg-white py-3.5 px-4 rounded-xl font-bold shadow-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>Schedule a Tour</span>
                <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

