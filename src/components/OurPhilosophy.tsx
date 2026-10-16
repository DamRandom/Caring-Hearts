'use client';

import { FiHeart, FiShield, FiUserCheck, FiSmile } from 'react-icons/fi';

const philosophies = [
  {
    icon: <FiHeart className="text-[#4A5443] text-2xl" />,
    title: 'Empathy First',
    description:
      'We listen patiently and validate each resident’s personal journey without judgment, meeting them wherever they are with warmth and understanding.',
  },
  {
    icon: <FiShield className="text-[#4A5443] text-2xl" />,
    title: 'Dignity & Respect',
    description:
      'Every individual is treated with the highest regard, honoring their privacy, personal autonomy, and right to live a meaningful, valued life.',
  },
  {
    icon: <FiUserCheck className="text-[#4A5443] text-2xl" />,
    title: 'Individualized Care',
    description:
      'Tailored living and wellness roadmaps crafted around unique emotional, physical, and cognitive requirements rather than a one-size-fits-all model.',
  },
  {
    icon: <FiSmile className="text-[#4A5443] text-2xl" />,
    title: 'Holistic Growth',
    description:
      'We look beyond mental health symptoms to nourish emotional resilience, healthy habits, social camaraderie, and renewed hope for the future.',
  },
];

export default function OurPhilosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#F7F4EC]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3E9] text-[#4A5443] text-xs font-bold uppercase tracking-wider mb-3">
            Guiding Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C352A] tracking-tight mb-4">
            Our Care Philosophy
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B56] leading-relaxed">
            At Caring Hearts, compassionate action is at the core of everything we do. We believe in providing unconditional support grounded in empathy, safety, and mutual respect.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {philosophies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-[#A7B79C]/30 shadow-soft hover:shadow-elevation transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EEF3E9] flex items-center justify-center mb-6 shadow-xs border border-[#A7B79C]/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2C352A] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#5F6B56] leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Quote Card */}
        <div
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#4A5443] to-[#353D30] rounded-3xl p-8 sm:p-12 text-[#FCFBF7] shadow-elevation relative overflow-hidden"
          data-aos="zoom-in"
        >
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <svg
              className="w-10 h-10 text-[#A7B79C] mx-auto mb-4 opacity-70"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg sm:text-2xl font-medium italic text-[#FCFBF7] leading-relaxed mb-6">
              “Healing happens when people are truly heard, unconditionally respected, and surrounded by a community that believes in their inherent strength.”
            </p>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#A7B79C]"></span>
              <span className="text-sm font-semibold tracking-wider uppercase text-[#D8E2C6]">
                The Caring Hearts Promise
              </span>
              <span className="h-px w-8 bg-[#A7B79C]"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

