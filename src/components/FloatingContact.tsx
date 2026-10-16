'use client';

import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { FiMessageSquare, FiX } from 'react-icons/fi';

export default function FloatingContact() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Options */}
      {expanded && (
        <div className="flex flex-col gap-2.5 bg-white p-3.5 rounded-2xl shadow-elevation border border-[#A7B79C]/30 animate-fadeIn text-xs font-semibold text-[#2C352A]">
          <span className="text-[11px] font-bold text-[#5F6B56] px-1 pb-1 border-b border-[#A7B79C]/20 uppercase tracking-wider">
            Quick Inquiries
          </span>
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#EEF3E9] text-[#2C352A] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <FaWhatsapp size={16} />
            </div>
            <span>WhatsApp Chat</span>
          </a>
          <a
            href="tel:+11234567890"
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#EEF3E9] text-[#2C352A] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#4A5443] text-white flex items-center justify-center shrink-0">
              <FaPhoneAlt size={13} />
            </div>
            <span>Call (123) 456-7890</span>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center gap-2.5 bg-[#4A5443] hover:bg-[#353D30] text-white py-3 px-4.5 rounded-full shadow-elevation hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#A7B79C]/40"
        aria-label="Contact options"
      >
        {expanded ? (
          <FiX className="text-xl" />
        ) : (
          <>
            <div className="relative">
              <FiMessageSquare className="text-xl" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-sm font-bold hidden sm:inline">Ask Us Anything</span>
          </>
        )}
      </button>
    </div>
  );
}
