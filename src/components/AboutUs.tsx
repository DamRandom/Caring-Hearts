'use client';

import Image from 'next/image';
import { FiHome, FiHeart, FiUsers, FiAward } from 'react-icons/fi';

const pillars = [
  {
    icon: <FiHome className="text-[#4A5443] text-xl" />,
    title: 'Sanctuary & Stability',
    desc: 'A calm, peaceful residential setting designed to provide structure, security, and a restful atmosphere.',
  },
  {
    icon: <FiHeart className="text-[#4A5443] text-xl" />,
    title: 'Dignity & Compassion',
    desc: 'Every resident is treated as an individual with inherent value, respect, and unique life goals.',
  },
  {
    icon: <FiUsers className="text-[#4A5443] text-xl" />,
    title: 'Supportive Brotherhood',
    desc: 'A positive peer environment where men feel understood, valued, and encouraged to regain independence.',
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with House Thumbnail and Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative" data-aos="fade-right">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-elevation border-4 border-white">
              <Image
                src="/images/house-thumbnail.jpg"
                alt="Caring Hearts Residential Home in Tampa, FL"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-[#A7B79C]/30 flex items-center gap-3">
                <div className="p-3 bg-[#EEF3E9] rounded-xl text-[#4A5443]">
                  <FiAward className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C352A]">Licensed Supportive Living</h4>
                  <p className="text-xs text-[#5F6B56]">Tampa, Florida • Safe & Caring Community</p>
                </div>
              </div>
            </div>

            {/* Accent decorative badge */}
            <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#4A5443] text-white px-4 py-2.5 rounded-2xl shadow-lg text-xs font-bold items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A7B79C]"></span>
              Compassionate Care Since Day One
            </div>
          </div>

          {/* Right Column: Story & Mission */}
          <div className="lg:col-span-7 order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3E9] text-[#4A5443] text-xs font-bold uppercase tracking-wider mb-4">
              About Our Sanctuary
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C352A] tracking-tight leading-tight mb-6">
              More Than a Care Facility—A True Home for Rebuilding.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#353D30]/90 leading-relaxed font-normal">
              <p>
                At <strong>Caring Hearts Supportive Service</strong>, we are committed to transforming lives. We provide a dignified, structured, and warm sanctuary exclusively designed for men facing mental health challenges and life transitions.
              </p>
              <p>
                We believe that healing flourishes in an environment of safety, genuine empathy, and consistent support. Our dedicated caregivers work hand-in-hand with each resident to build daily routines, nurture emotional balance, and foster lasting self-worth.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="mt-8 pt-6 border-t border-[#4A5443]/15">
              {/* Mobile: horizontal scroll carousel | sm+: 3-col grid */}
              <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/70 border border-[#A7B79C]/25 shadow-xs hover:shadow-sm transition-shadow snap-start flex-shrink-0 w-[75vw] sm:w-auto"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EEF3E9] flex items-center justify-center mb-3">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#2C352A] mb-1.5">{pillar.title}</h3>
                    <p className="text-xs text-[#5F6B56] leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              {/* Mobile scroll hint dots */}
              <div className="flex sm:hidden justify-center gap-1.5 mt-3">
                {pillars.map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#4A5443]/30" />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

