'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#353D30] text-[#FCFBF7] pt-16 pb-12 border-t border-[#4A5443]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Grid - mobile: brand full + 2-col links, tablet+: 2-col, desktop: 4-col */}
        <div className="pb-14 border-b border-white/10">
          {/* Brand Row - always full width */}
          <div className="mb-10 lg:hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-[#A7B79C]/40">
                <Image
                  src="/logo/logo-card-background-removed.png"
                  alt="Caring Hearts Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Caring Hearts
              </span>
            </div>
            <p className="text-sm text-[#FCFBF7]/80 leading-relaxed max-w-sm">
              Dedicated to offering safe, compassionate, and structured residential living for men navigating mental health recovery and emotional well-being.
            </p>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D8E2C6] text-xs font-semibold">
                Licensed Supportive Living • Tampa, FL
              </span>
            </div>
          </div>

          {/* Links row - 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            
            {/* Col 1: Brand - hidden on mobile (shown above), visible on lg */}
            <div className="hidden lg:block lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-[#A7B79C]/40">
                  <Image
                    src="/logo/logo-card-background-removed.png"
                    alt="Caring Hearts Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Caring Hearts
                </span>
              </div>
              
              <p className="text-sm text-[#FCFBF7]/80 leading-relaxed max-w-sm">
                Dedicated to offering safe, compassionate, and structured residential living for men navigating mental health recovery and emotional well-being.
              </p>

              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D8E2C6] text-xs font-semibold">
                  Licensed Supportive Living • Tampa, FL
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#A7B79C]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-[#FCFBF7]/85">
                <li>
                  <Link href="#home" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#philosophy" className="hover:text-white transition-colors">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-white transition-colors">
                    Location &amp; Map
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Schedule a Visit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Care Services */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#A7B79C]">
                Specialized Care
              </h4>
              <ul className="space-y-2 text-sm text-[#FCFBF7]/85">
                <li>24/7 Supervised Nursing</li>
                <li>Chef-Prepared Balanced Meals</li>
                <li>Routine Medication Oversight</li>
                <li>Daily Housekeeping &amp; Laundry</li>
                <li>Social &amp; Recreational Outings</li>
                <li>Emotional &amp; Group Guidance</li>
              </ul>
            </div>

            {/* Col 4: Contact & Socials */}
            <div className="col-span-2 lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#A7B79C]">
                Contact &amp; Address
              </h4>
              
              <div className="space-y-3 text-sm text-[#FCFBF7]/85">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#A7B79C] mt-1 shrink-0" />
                  <span>7914 Flowerfield Dr, Tampa, FL 33615</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#A7B79C] shrink-0" />
                  <a href="tel:+11234567890" className="hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#A7B79C] shrink-0" />
                  <a href="mailto:info@caringhearts.com" className="hover:text-white transition-colors">
                    info@caringhearts.com
                  </a>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://wa.me/11234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-colors text-white"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors text-white"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram size={15} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FCFBF7]/60">
          <p>© {new Date().getFullYear()} Caring Hearts Supportive Service. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Tampa, FL • Men&apos;s Supportive Care</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

