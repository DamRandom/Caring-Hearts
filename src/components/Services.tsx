'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaUserNurse,
  FaUtensils,
  FaBroom,
  FaHandsHelping,
  FaPills,
  FaPalette,
} from 'react-icons/fa';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';

const services = [
  {
    title: '24/7 Nursing & Supervised Care',
    description:
      'Continuous, professional monitoring and support around the clock to safeguard health, emergency response, and overall peace of mind.',
    icon: <FaUserNurse className="text-[#4A5443] text-xl" />,
    image: '/images/nursing-care.png',
    tag: 'Round-the-Clock',
    features: ['Vitals Monitoring', 'Certified Staff', 'Immediate Assistance'],
  },
  {
    title: 'Nutritious & Balanced Meals',
    description:
      'Chef-crafted, wholesome meals and healthy snacks tailored to dietary requirements, promoting physical vitality and mental clarity.',
    icon: <FaUtensils className="text-[#4A5443] text-xl" />,
    image: '/images/nutritious-meals.png',
    tag: 'Nutrition & Wellness',
    features: ['3 Fresh Meals Daily', 'Dietary Restrictions Met', 'Healthy Snacks'],
  },
  {
    title: 'Daily Housekeeping & Laundry',
    description:
      'A spotlessly clean, sanitized, and organized residential setting that respects personal space and maintains dignified living standards.',
    icon: <FaBroom className="text-[#4A5443] text-xl" />,
    image: '/images/daily-housekeeping.png',
    tag: 'Clean Living',
    features: ['Fresh Linens & Laundry', 'Daily Room Tidying', 'Sanitized Common Areas'],
  },
  {
    title: 'Emotional Support & Guidance',
    description:
      'Individual attention and structured group conversations fostering emotional regulation, active listening, and mental health resilience.',
    icon: <FaHandsHelping className="text-[#4A5443] text-xl" />,
    image: '/images/emotional-support.png',
    tag: 'Mental Health Focus',
    features: ['Compassionate Mentorship', 'Coping Strategies', 'Peer Community'],
  },
  {
    title: 'Medication Management',
    description:
      'Careful, scheduled assistance and diligent tracking to ensure all prescribed medications are taken safely and consistently on time.',
    icon: <FaPills className="text-[#4A5443] text-xl" />,
    image: '/images/medication-management.png',
    tag: 'Safety First',
    features: ['Strict Schedule Adherence', 'Physician Coordination', 'Locked Storage'],
  },
  {
    title: 'Recreational & Social Activities',
    description:
      'Engaging recreational games, gardening, walking, and outings designed to stimulate cognitive abilities and build fulfilling camaraderie.',
    icon: <FaPalette className="text-[#4A5443] text-xl" />,
    image: '/images/recreational-activities.png',
    tag: 'Active Lifestyle',
    features: ['Board Games & Arts', 'Outdoor Recreation', 'Community Engagement'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3E9] text-[#4A5443] text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C352A] tracking-tight mb-4">
            Whole-Person Supportive Care
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B56] leading-relaxed">
            Our multidisciplinary approach blends compassionate supervision, structured daily living, and emotional reinforcement to empower every resident.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-[#A7B79C]/30 shadow-soft hover:shadow-elevation transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-[#EEF3E9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#2C352A] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {service.tag}
                </div>

                {/* Service Icon floating badge */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center border border-[#A7B79C]/30 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#2C352A] group-hover:text-[#4A5443] transition-colors mb-2.5">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#5F6B56] leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-1.5 pt-4 border-t border-[#4A5443]/10 mb-5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#353D30] font-medium">
                      <FiCheck className="text-[#4A5443] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Inquire Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-between text-sm font-bold text-[#4A5443] group-hover:text-[#353D30] pt-2"
                >
                  <span>Request Information</span>
                  <div className="w-8 h-8 rounded-full bg-[#EEF3E9] group-hover:bg-[#4A5443] group-hover:text-white flex items-center justify-center transition-colors">
                    <FiArrowUpRight className="text-base" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Quick Call */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#EEF3E9] to-[#F7F4EC] border border-[#A7B79C]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-xl font-bold text-[#2C352A]">Have questions about specific care requirements?</h4>
            <p className="text-sm text-[#5F6B56] mt-1">Our admissions team is available to review personal accommodations and medical needs.</p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 bg-[#4A5443] hover:bg-[#353D30] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-sm transition-all"
          >
            Speak with Admissions
          </Link>
        </div>

      </div>
    </section>
  );
}

