'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiArrowRight, FiShield, FiHeart } from 'react-icons/fi';

export default function Hero() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ duration: 900, once: true });
    });
  }, []);

  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-b from-[#F7F4EC] via-[#FCFBF7] to-[#FCFBF7] overflow-hidden">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D8E2C6]/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-[#A7B79C]/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left" data-aos="fade-up">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3E9] border border-[#A7B79C]/40 text-[#4A5443] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#5F6B56] animate-pulse"></span>
              <span>Dedicated Mental Health & Supportive Living for Men</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C352A] tracking-tight leading-[1.15] mb-6">
              Providing Comfort,{' '}
              <span className="text-[#4A5443] underline decoration-[#A7B79C]/60 decoration-wavy decoration-2">
                Dignity & Care
              </span>{' '}
              for Every Mind.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4A5443]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              At <strong>Caring Hearts Supportive Service</strong>, we offer a safe, warm, and structured home in Tampa, FL. Our compassionate team provides 24/7 personalized care, fostering mental wellness, stability, and genuine community.
            </p>

            {/* Key Benefits Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm font-medium text-[#353D30]">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#A7B79C]/30 shadow-xs">
                <FiShield className="text-[#4A5443]" />
                <span>24/7 Professional Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#A7B79C]/30 shadow-xs">
                <FiHeart className="text-[#4A5443]" />
                <span>Personalized Living Plans</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#A7B79C]/30 shadow-xs">
                <FiCheckCircle className="text-[#4A5443]" />
                <span>Structured & Nurturing Home</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4A5443] hover:bg-[#353D30] text-[#FCFBF7] text-base font-semibold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Schedule a Private Visit</span>
                <FiArrowRight className="text-lg" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EEF3E9] text-[#353D30] border border-[#4A5443]/20 text-base font-semibold py-3.5 px-7 rounded-full shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Cards */}
          <div
            className="lg:col-span-5 flex justify-center relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Background glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A7B79C]/30 to-[#D8E2C6]/40 rounded-3xl transform rotate-2 scale-105 filter blur-xs -z-10" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-elevation border-4 border-white/90 bg-[#EEF3E9]">
              <Image
                src="/images/hero.png"
                alt="Compassionate caregiver and resident at Caring Hearts"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Badge 1 - Bottom Location Tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#A7B79C]/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B56]">
                    Our Residence
                  </div>
                  <div className="text-sm font-bold text-[#2C352A]">
                    Tampa, FL • Peaceful & Secure
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#EEF3E9] text-[#4A5443] flex items-center justify-center font-bold text-xs">
                  24/7
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

