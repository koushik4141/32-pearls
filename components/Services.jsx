'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  Activity, 
  Scissors, 
  Smile, 
  ShieldCheck, 
  Layers, 
  Syringe, 
  Baby, 
  Dna, 
  Siren, 
  Moon, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const serviceData = [
  {
    title: 'Root Canal Treatment',
    desc: 'Advanced endodontic care to save your natural teeth with painless, precise protocols. Our experts use the latest technology to ensure comfort and long-lasting results.',
    icon: <Syringe size={24} className="text-[#333]" />
  },
  {
    title: 'Dental Fillings',
    desc: 'High-quality, tooth-colored composite fillings to restore and protect damaged teeth. We use bio-compatible materials that blend seamlessly with your natural enamel.',
    icon: <CheckCircle2 size={24} className="text-[#333]" />
  },
  {
    title: 'Dental Crown',
    desc: 'Durable and aesthetic restorations to strengthen teeth. Our crowns are custom-crafted to match your tooth color and provide maximum durability.',
    icon: <ShieldCheck size={24} className="text-[#333]" />
  },
  {
    title: 'Dental Bridges',
    desc: 'Fill gaps between teeth with fixed prosthetic solutions. Bridges help maintain facial structure and prevent other teeth from shifting.',
    icon: <Layers size={24} className="text-[#333]" />
  },
  {
    title: 'Dentures',
    desc: 'Custom-fit, comfortable prosthetic solutions for complete smile restoration. We offer both partial and full dentures tailored to your lifestyle.',
    icon: <Activity size={24} className="text-[#333]" />
  },
  {
    title: 'Wisdom Tooth Removal',
    desc: 'Safe and gentle removal of problematic wisdom teeth. Our surgical techniques minimize swelling and promote faster recovery.',
    icon: <Scissors size={24} className="text-[#333]" />
  },
  {
    title: 'Implants',
    desc: 'Permanent and natural-looking tooth replacements using world-class titanium technology. The gold standard in tooth replacement.',
    icon: <Zap size={24} className="text-[#333]" />
  },
  {
    title: 'Aligners & Braces',
    desc: 'Straighten your teeth with modern orthodontic solutions. From traditional braces to invisible aligners, we have the right fit for you.',
    icon: <Smile size={24} className="text-[#333]" />
  },
  {
    title: 'Orthognathic Treatment',
    desc: 'Corrective jaw surgery to improve facial aesthetics and functional bite. We work with specialized surgeons for life-changing results.',
    icon: <Stethoscope size={24} className="text-[#333]" />
  },
  {
    title: 'TMJ Maxillofacial / Sport Injuries',
    desc: 'Specialized care for jaw joint disorders (TMJ) and facial trauma resulting from sports or accidents.',
    icon: <Activity size={24} className="text-[#333]" />
  },
  {
    title: 'Corrective Jaw Surgeries',
    desc: 'Advanced procedures to align jaw structure, improving breathing, speech, and overall facial harmony.',
    icon: <Scissors size={24} className="text-[#333]" />
  },
  {
    title: 'Sleep Apnea',
    desc: 'Custom dental appliances to help keep airway passages open during sleep, significantly reducing snoring and apnea episodes.',
    icon: <Moon size={24} className="text-[#333]" />
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Dedicated dental care for children in a friendly environment. We focus on preventive care and building positive dental habits.',
    icon: <Baby size={24} className="text-[#333]" />
  },
  {
    title: 'Maxillofacial Trauma',
    desc: 'Expert management of facial fractures and complex injuries. We provide rapid response and reconstructive expertise.',
    icon: <Siren size={24} className="text-[#333]" />
  },
  {
    title: 'Cleft Lip and Cleft Palate',
    desc: 'Comprehensive surgical and dental management of cleft conditions, restoring function and appearance with compassion.',
    icon: <Dna size={24} className="text-[#333]" />
  },
  {
    title: 'Cyst and Tumors',
    desc: 'Precision diagnosis and surgical removal of oral growths. We use advanced pathology and surgical techniques for patient safety.',
    icon: <Activity size={24} className="text-[#333]" />
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Clove-style Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-black text-[#ef8139] uppercase tracking-tight">
            Our Treatment, Products and Procedures
          </h2>
          <div className="w-20 h-1.5 bg-[#ef8139] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Action List Section */}
        <div className="space-y-4">
          {serviceData.map((svc, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow transition-all overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full h-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <div className="flex items-center gap-6">
                  {/* Service Icon */}
                  <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center">
                    {svc.icon}
                  </div>
                  {/* Service Title */}
                  <span className="text-xl font-bold text-[#333] tracking-tight">
                    {svc.title}
                  </span>
                </div>
                {/* Toggle Icon */}
                <div className={`text-[#ef8139] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown size={28} />
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-6 md:px-24 md:pb-8 pt-0 border-t border-gray-50 translate-y-[-1px]">
                      <p className="text-[#666] leading-relaxed mb-6 font-medium">
                        {svc.desc}
                      </p>
                      <a 
                        href="#appointment" 
                        className="inline-flex items-center gap-2 text-[#ef8139] font-black uppercase text-sm tracking-wider hover:gap-3 transition-all"
                      >
                        Learn More & Book Consultation <span>→</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Final CTA consistent with the project's aesthetics but linked to this section */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">Experience World-Class Dental Care</p>
          <a 
            href="#appointment" 
            className="inline-block bg-[#ef8139] text-white font-black px-12 py-5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Start Your Treatment Today
          </a>
        </div>
      </div>
    </section>
  );
}
