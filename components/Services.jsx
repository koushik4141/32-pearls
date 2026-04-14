'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
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
  CheckCircle2,
  Trophy,
  Heart
} from 'lucide-react';

const serviceData = [
  {
    title: 'Root Canal Treatment',
    desc: 'Advanced endodontic care to save your natural teeth with painless, precise protocols. Our experts use the latest technology to ensure comfort and long-lasting results.',
    icon: <Syringe size={22} className="text-[#513c2c]" />,
    image: '/rct.png',
    price: 'Starting ₹ 5,990',
    benefits: ['Painless Procedure', 'Expert Endodontists', 'High Success Rate']
  },
  {
    title: 'Dental Fillings',
    desc: 'High-quality, tooth-colored composite fillings to restore and protect damaged teeth. We use bio-compatible materials that blend seamlessly with your natural enamel.',
    icon: <CheckCircle2 size={22} className="text-[#513c2c]" />,
    image: '/fillings.png',
    price: 'Starting ₹ 1,500',
    benefits: ['Natural Look', 'Durable Material', 'Bio-compatible']
  },
  {
    title: 'Dental Crown',
    desc: 'Durable and aesthetic restorations to strengthen teeth. Our crowns are custom-crafted to match your tooth color and provide maximum durability.',
    icon: <ShieldCheck size={22} className="text-[#513c2c]" />,
    image: '/crown.jpg', 
    price: 'Starting ₹ 8,500',
    benefits: ['Metal-Free Options', 'Perfect Fit', 'Full Protection']
  },
  {
    title: 'Dental Bridges',
    desc: 'Fill gaps between teeth with fixed prosthetic solutions. Bridges help maintain facial structure and prevent other teeth from shifting.',
    icon: <Layers size={22} className="text-[#513c2c]" />,
    image: '/bridges.jpg',
    price: 'Starting ₹ 15,000',
    benefits: ['Restores Function', 'Aesthetic Natural Look', 'Permanent Fix']
  },
  {
    title: 'Dentures',
    desc: 'Custom-fit, comfortable prosthetic solutions for complete smile restoration. We offer both partial and full dentures tailored to your lifestyle.',
    icon: <Activity size={22} className="text-[#513c2c]" />,
    image: '/dentures.jpg',
    price: 'Starting ₹ 25,000',
    benefits: ['Custom Comfort', 'Enhanced Chewing', 'Full Rehabilitation']
  },
  {
    title: 'Wisdom Tooth Removal',
    desc: 'Safe and gentle removal of problematic wisdom teeth. Our surgical techniques minimize swelling and promote faster recovery.',
    icon: <Scissors size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Starting ₹ 4,500',
    benefits: ['Surgical Precision', 'Minimal Discomfort', 'Rapid Healing']
  },
  {
    title: 'Implants',
    desc: 'Permanent and natural-looking tooth replacements using world-class titanium technology. The gold standard in tooth replacement.',
    icon: <Zap size={22} className="text-[#513c2c]" />,
    image: '/dental_implants.jpg',
    price: 'Starting ₹ 33,500',
    benefits: ['Permanent Solution', 'Bone Preservation', 'Looks & Feels Natural']
  },
  {
    title: 'Aligners & Braces',
    desc: 'Straighten your teeth with modern orthodontic solutions. From traditional braces to invisible aligners, we have the right fit for you.',
    icon: <Smile size={22} className="text-[#513c2c]" />,
    image: '/braces_aligners.jpg',
    price: 'Starting ₹ 45,000',
    benefits: ['Invisible Options', 'Expert Orthodontists', 'Lifelong Results']
  },
  {
    title: 'Orthognathic Treatment',
    desc: 'Corrective jaw surgery to improve facial aesthetics and functional bite. We work with specialized surgeons for life-changing results.',
    icon: <Stethoscope size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Consultation Advised',
    benefits: ['Facial Harmony', 'Improved Function', 'Life-Changing']
  },
  {
    title: 'TMJ Maxillofacial / Sport Injuries',
    desc: 'Specialized care for jaw joint disorders (TMJ) and facial trauma resulting from sports or accidents.',
    icon: <Activity size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Specialist Consultation Required',
    benefits: ['Pain Relief', 'Joint Stability', 'Trauma Recovery']
  },
  {
    title: 'Corrective Jaw Surgeries',
    desc: 'Advanced procedures to align jaw structure, improving breathing, speech, and overall facial harmony.',
    icon: <Scissors size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Consultation Required',
    benefits: ['Breath Better', 'Perfect Alignment', 'Advanced Care']
  },
  {
    title: 'Sleep Apnea',
    desc: 'Custom dental appliances to help keep airway passages open during sleep, significantly reducing snoring and apnea episodes.',
    icon: <Moon size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Starting ₹ 12,000',
    benefits: ['Better Sleep', 'Snore Reduction', 'Non-Invasive']
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Dedicated dental care for children in a friendly environment. We focus on preventive care and building positive dental habits.',
    icon: <Baby size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Starting ₹ 2,500',
    benefits: ['Kid-Friendly Clinic', 'Preventive Focus', 'Gentle Care']
  },
  {
    title: 'Maxillofacial Trauma',
    desc: 'Expert management of facial fractures and complex injuries. We provide rapid response and reconstructive expertise.',
    icon: <Siren size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Emergency Care',
    benefits: ['Reconstructive Expert', 'Rapid Response', '24/7 Availability']
  },
  {
    title: 'Cleft Lip and Cleft Palate',
    desc: 'Comprehensive surgical and dental management of cleft conditions, restoring function and appearance with compassion.',
    icon: <Dna size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Case-Based Evaluation',
    benefits: ['Expert Surgeons', 'Functional Restoration', 'Compassionate Care']
  },
  {
    title: 'Cyst and Tumors',
    desc: 'Precision diagnosis and surgical removal of oral growths. We use advanced pathology and surgical techniques for patient safety.',
    icon: <Heart size={22} className="text-[#513c2c]" />,
    image: '/logo.png',
    price: 'Diagnostic Advised',
    benefits: ['Precise Removal', 'Pathology Support', 'Safety First']
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Clove-style Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[38px] font-black text-[#ef8139] uppercase tracking-tighter leading-tight">
            Our Treatment, Products and Procedures
          </h2>
          <div className="w-16 h-1.5 bg-[#ef8139] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Action List Section */}
        <div className="space-y-4">
          {serviceData.map((svc, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[24px] border border-gray-100 transition-all duration-300 ${openIndex === i ? 'shadow-premium ring-1 ring-[#ef8139]/10' : 'shadow-sm hover:shadow-md'}`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group"
              >
                <div className="flex items-center gap-6">
                  {/* Service Icon - Clove Style */}
                  <div className="w-12 h-12 shrink-0 bg-[#513c2c]/5 rounded-xl flex items-center justify-center group-hover:bg-[#ef8139]/10 transition-colors">
                    {svc.icon}
                  </div>
                  {/* Service Title */}
                  <span className={`text-lg md:text-xl font-black tracking-tight transition-colors ${openIndex === i ? 'text-[#ef8139]' : 'text-[#333]'}`}>
                    {svc.title}
                  </span>
                </div>
                {/* Toggle Icon */}
                <div className={`transition-all duration-500 rounded-full w-10 h-10 flex items-center justify-center ${openIndex === i ? 'rotate-180 bg-[#ef8139] text-white' : 'bg-gray-50 text-gray-400 group-hover:text-[#ef8139]'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              {/* Accordion Content - Clove Design Replication */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-6 pb-8 md:px-10 md:pb-12 pt-0 border-t border-gray-50">
                      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center mt-8">
                        {/* Detail Image */}
                        <div className="relative rounded-[32px] overflow-hidden bg-gray-50 shadow-inner group aspect-video md:aspect-square">
                          <img 
                            src={svc.image} 
                            alt={svc.title} 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => { e.target.src = '/logo.png'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Detail Text Content */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl font-black text-[#333] mb-4">Service Overview</h4>
                            <p className="text-[#666] leading-relaxed font-medium">
                              {svc.desc}
                            </p>
                          </div>

                          {/* Benefits List */}
                          <div className="space-y-3">
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Key Benefits</p>
                            <div className="flex flex-col gap-2">
                              {svc.benefits.map((b, bi) => (
                                <div key={bi} className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#ef8139]" />
                                  <span className="text-sm font-bold text-[#444]">{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Pricing Block - The "Clove" specific addition */}
                          <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Pricing Estimate</p>
                              <div className="text-2xl font-black text-[#ef8139]">
                                {svc.price}
                              </div>
                            </div>
                            <a 
                              href="#appointment" 
                              className="bg-[#333] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#ef8139] transition-all"
                            >
                              Book Slot
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest"><Trophy size={16}/> ISO Certified</div>
             <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest"><ShieldCheck size={16}/> Sterilization Expert</div>
             <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest"><Smile size={16}/> Painless Experience</div>
          </div>
          <a 
            href="#appointment" 
            className="inline-block bg-[#ef8139] text-white font-black px-12 py-5 rounded-full shadow-gold hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Schedule Consultation Now
          </a>
        </div>
      </div>
    </section>
  );
}
