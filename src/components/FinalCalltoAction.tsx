'use client';

import { useState } from 'react';
import { FiPhone, FiMail, FiCalendar, FiClock, FiCheck, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function FinalCalltoAction() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Supportive Living',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate interactive submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Residential Supportive Living',
        preferredDate: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-[#F7F4EC]/60 to-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3E9] text-[#4A5443] text-xs font-bold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C352A] tracking-tight mb-4">
            Take the First Step Towards Stability
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B56] leading-relaxed">
            Whether you are exploring placement for a loved one, a patient referral, or for yourself, our caring admissions counselors are here to help every step of the way.
          </p>
        </div>

        {/* 2-Column Contact & Form Box */}
        <div className="bg-white rounded-3xl border border-[#A7B79C]/30 shadow-elevation overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#4A5443] to-[#353D30] text-[#FCFBF7] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D8E2C6]">
                Direct Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">
                We are Here for You
              </h3>
              <p className="text-sm text-[#FCFBF7]/80 leading-relaxed mb-8">
                Reach out confidentially today. We provide transparent answers on availability, individualized daily programs, and admission steps.
              </p>

              {/* Contact Channels List */}
              <div className="space-y-5">
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#A7B79C] text-[#2C352A] flex items-center justify-center shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D8E2C6] block font-medium">Direct Admissions Call</span>
                    <span className="text-base font-bold text-white group-hover:text-[#D8E2C6] transition-colors">
                      (123) 456-7890
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/11234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D8E2C6] block font-medium">Chat on WhatsApp</span>
                    <span className="text-base font-bold text-white group-hover:text-[#D8E2C6] transition-colors">
                      Quick Message & Inquiry
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@caringhearts.com"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#A7B79C] text-[#2C352A] flex items-center justify-center shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D8E2C6] block font-medium">Email Admissions</span>
                    <span className="text-sm font-semibold text-white">
                      info@caringhearts.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Promise */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#D8E2C6]">
              <FiClock className="text-base shrink-0 text-[#A7B79C]" />
              <span>Prompt, confidential response within 2–4 business hours.</span>
            </div>
          </div>

          {/* Right Column: Tour & Consultation Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2C352A] mb-2">
              Schedule a Private Tour or Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B56] mb-6">
              Complete the quick form below and our staff will connect with you to arrange a convenient time.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#EEF3E9] border border-[#A7B79C]/50 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#4A5443] text-white mx-auto flex items-center justify-center text-2xl mb-4">
                  <FiCheck />
                </div>
                <h4 className="text-lg font-bold text-[#2C352A] mb-1">Inquiry Received</h4>
                <p className="text-sm text-[#5F6B56]">
                  Thank you for reaching out to Caring Hearts. An admissions advisor will contact you shortly to answer any questions or confirm your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#353D30] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#A7B79C]/40 bg-[#FCFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5443] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#353D30] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#A7B79C]/40 bg-[#FCFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5443] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#353D30] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#A7B79C]/40 bg-[#FCFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5443] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#353D30] mb-1.5">
                      Care of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#A7B79C]/40 bg-[#FCFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5443] transition-all"
                    >
                      <option>Residential Supportive Living</option>
                      <option>24/7 Supervised Care</option>
                      <option>Mental Health Recovery Support</option>
                      <option>General Admissions Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#353D30] mb-1.5 flex items-center gap-1.5">
                    <FiCalendar className="text-[#4A5443]" />
                    <span>Preferred Tour Date (Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#A7B79C]/40 bg-[#FCFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5443] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#353D30] mb-1.5">
                    How Can We Support You?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the situation, timeline, or any specific accommodations needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#A7B79C]/40 bg-[#FCFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5443] transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#4A5443] hover:bg-[#353D30] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                  >
                    <FiSend className="text-base" />
                    <span>Send Confidential Request</span>
                  </button>
                  <p className="text-[11px] text-[#5F6B56] text-center mt-2">
                    🔒 All health inquiries are strictly confidential and HIPAA-conscious.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

