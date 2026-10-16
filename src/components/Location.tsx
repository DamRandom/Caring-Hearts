'use client';

import { FiMapPin, FiNavigation, FiClock, FiPhone, FiCheckCircle } from 'react-icons/fi';

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3E9] text-[#4A5443] text-xs font-bold uppercase tracking-wider mb-3">
            Location & Community
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C352A] tracking-tight mb-4">
            Visit Our Peaceful Residence
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B56] leading-relaxed">
            Conveniently situated in a serene, friendly Tampa neighborhood, providing a tranquil atmosphere ideal for recovery and positive daily living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Details & Amenities */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div className="bg-white p-7 rounded-3xl border border-[#A7B79C]/30 shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF3E9] text-[#4A5443] flex items-center justify-center shrink-0">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C352A]">Primary Address</h3>
                  <p className="text-sm font-semibold text-[#4A5443] mt-0.5">
                    7914 Flowerfield Dr
                  </p>
                  <p className="text-sm text-[#5F6B56]">
                    Tampa, FL 33615, United States
                  </p>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#4A5443]/10">
                <div className="flex items-center gap-2.5 text-xs text-[#353D30]">
                  <FiClock className="text-[#4A5443] text-base shrink-0" />
                  <div>
                    <span className="font-bold block">Visiting Hours</span>
                    <span className="text-[#5F6B56]">Daily: 10am – 6pm</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#353D30]">
                  <FiPhone className="text-[#4A5443] text-base shrink-0" />
                  <div>
                    <span className="font-bold block">Direct Contact</span>
                    <a href="tel:+11234567890" className="text-[#4A5443] hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhood Highlights */}
            <div className="bg-[#EEF3E9]/60 p-6 rounded-3xl border border-[#A7B79C]/30 space-y-3">
              <h4 className="text-xs font-bold text-[#4A5443] uppercase tracking-wider">
                Neighborhood Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#353D30]">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#4A5443] shrink-0" />
                  <span>Quiet residential cul-de-sac away from high traffic</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#4A5443] shrink-0" />
                  <span>Minutes away from major Tampa healthcare facilities & clinics</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#4A5443] shrink-0" />
                  <span>Close to green parks, nature walks, and community centers</span>
                </li>
              </ul>
            </div>

            {/* Direction Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=7914+Flowerfield+Dr,+Tampa,+FL+33615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#4A5443] hover:bg-[#353D30] text-white font-semibold py-3.5 px-6 rounded-full text-sm shadow-sm transition-all"
              >
                <FiNavigation />
                <span>Get Driving Directions</span>
              </a>
              <a
                href="tel:+11234567890"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EEF3E9] text-[#353D30] border border-[#4A5443]/20 font-semibold py-3.5 px-6 rounded-full text-sm shadow-xs transition-all"
              >
                <FiPhone className="text-[#4A5443]" />
                <span>Call for Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-elevation border-4 border-white bg-[#EEF3E9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.1178834194475!2d-82.57727872546745!3d28.020872611595326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ea11bb219903%3A0x15d08e1aab95a088!2s7914%20Flowerfield%20Dr%2C%20Tampa%2C%20FL%2033615!5e0!3m2!1sen!2sus!4v1742700828039!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Caring Hearts Supportive Service Location Map"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Floating overlay chip */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-[#A7B79C]/30 text-xs font-bold text-[#2C352A] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Scheduled Visits</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

