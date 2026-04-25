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
    image: '/services/rct.jpeg',
    benefits: ['Painless Procedure', 'Expert Endodontists', 'High Success Rate']
  },
  {
    title: 'Dental Fillings',
    desc: 'High-quality, tooth-colored composite fillings to restore and protect damaged teeth. We use bio-compatible materials that blend seamlessly with your natural enamel.',
    icon: <CheckCircle2 size={22} className="text-[#513c2c]" />,
    image: '/fillings.png',
    benefits: ['Natural Look', 'Durable Material', 'Bio-compatible']
  },
  {
    title: 'Dental Crown',
    desc: 'Durable and aesthetic restorations to strengthen teeth. Our crowns are custom-crafted to match your tooth color and provide maximum durability.',
    icon: <ShieldCheck size={22} className="text-[#513c2c]" />,
    image: '/services/rct_zirconia.jpeg', 
    benefits: ['Metal-Free Options', 'Perfect Fit', 'Full Protection']
  },
  {
    title: 'Dental Bridges',
    desc: 'Fill gaps between teeth with fixed prosthetic solutions. Bridges help maintain facial structure and prevent other teeth from shifting.',
    icon: <Layers size={22} className="text-[#513c2c]" />,
    image: '/services/bridge.jpeg',
    benefits: ['Restores Function', 'Aesthetic Natural Look', 'Permanent Fix']
  },
  {
    title: 'Dentures',
    desc: 'Custom-fit, comfortable prosthetic solutions for complete smile restoration. We offer both partial and full dentures tailored to your lifestyle.',
    icon: <Activity size={22} className="text-[#513c2c]" />,
    image: '/services/denture.jpeg',
    benefits: ['Custom Comfort', 'Enhanced Chewing', 'Full Rehabilitation']
  },
  {
    title: 'Wisdom Tooth Removal',
    desc: 'Safe and gentle removal of problematic wisdom teeth. Our surgical techniques minimize swelling and promote faster recovery.',
    icon: <Scissors size={22} className="text-[#513c2c]" />,
    image: '/services/extraction.mp4',
    benefits: ['Surgical Precision', 'Minimal Discomfort', 'Rapid Healing']
  },
  {
    title: 'Implants',
    desc: 'Permanent and natural-looking tooth replacements using world-class titanium technology. The gold standard in tooth replacement.',
    icon: <Zap size={22} className="text-[#513c2c]" />,
    image: '/services/implant.mp4',
    benefits: ['Permanent Solution', 'Bone Preservation', 'Looks & Feels Natural']
  },
  {
    title: 'Aligners & Braces',
    desc: 'Straighten your teeth with modern orthodontic solutions. From traditional braces to invisible aligners, we have the right fit for you.',
    icon: <Smile size={22} className="text-[#513c2c]" />,
    image: '/services/aligners_braces.jpeg',
    benefits: ['Invisible Options', 'Expert Orthodontists', 'Lifelong Results']
  },
  {
    title: 'Laser Dentistry',
    desc: 'Cutting-edge laser technology for precise, less invasive treatments. Ideal for gum contouring, cavity preparation, and whitening.',
    icon: <Zap size={22} className="text-[#513c2c]" />,
    image: '/services/laser.mp4',
    benefits: ['Faster Healing', 'Less Bleeding', 'Minimally Invasive']
  },
  {
    title: 'Maxillofacial Services',
    desc: 'Specialized care for jaw structure, facial trauma, and complex oral surgeries. We provide expert reconstructive solutions.',
    icon: <Activity size={22} className="text-[#513c2c]" />,
    image: '/services/maxillofacial.jpeg',
    benefits: ['Structural Correction', 'Trauma Recovery', 'Expert Care']
  },
  {
    title: 'Teeth Scaling & Polishing',
    desc: 'Professional cleaning to remove plaque and tartar, ensuring healthy gums and a brighter smile.',
    icon: <ShieldCheck size={22} className="text-[#513c2c]" />,
    image: '/services/scaling.mp4',
    benefits: ['Fresher Breath', 'Prevents Cavities', 'Healthy Gums']
  },
  {
    title: 'Sleep Apnea',
    desc: 'Custom dental appliances to help keep airway passages open during sleep, significantly reducing snoring and apnea episodes.',
    icon: <Moon size={22} className="text-[#513c2c]" />,
    image: '/services/sleep_apnea.png',
    benefits: ['Better Sleep', 'Snore Reduction', 'Non-Invasive']
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Dedicated dental care for children in a friendly environment. We focus on preventive care and building positive dental habits.',
    icon: <Baby size={22} className="text-[#513c2c]" />,
    image: '/services/pediatric_dentistry.png',
    benefits: ['Kid-Friendly Clinic', 'Preventive Focus', 'Gentle Care']
  },
  {
    title: 'Cleft Lip & Palate',
    desc: 'Comprehensive surgical and dental management of cleft conditions, restoring function and appearance with compassion.',
    icon: <Dna size={22} className="text-[#513c2c]" />,
    image: '/services/cleft_lip_palate.png',
    benefits: ['Expert Surgeons', 'Functional Restoration', 'Compassionate Care']
  },
  {
    title: 'Oral Cysts & Tumors',
    desc: 'Precision diagnosis and surgical removal of oral growths. We use advanced pathology and surgical techniques for patient safety.',
    icon: <Heart size={22} className="text-[#513c2c]" />,
    image: '/services/oral_cysts_tumors.png',
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
                    <div className="px-4 pb-8 md:px-8 md:pb-12 pt-0 border-t border-gray-50">
                      <div className="mt-8 flex justify-center">
                        {/* Highlights: Ultra-compact smart frame */}
                        <div className="relative rounded-[24px] overflow-hidden bg-black shadow-premium w-full max-w-md group border-[4px] border-white ring-1 ring-gray-100 aspect-video md:h-[300px]">
                          {svc.image.endsWith('.mp4') ? (
                            <video 
                              src={svc.image} 
                              autoPlay 
                              muted 
                              loop 
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <img 
                              src={svc.image} 
                              alt={svc.title} 
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                              onError={(e) => { e.target.src = '/logo.png'; }}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Call to Action - Compact Version */}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                            <a 
                              href="#appointment" 
                              className="bg-[#ef8139] text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg"
                            >
                              Book Now
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
