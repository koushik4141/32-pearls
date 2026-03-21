'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Shield, Clock, Heart, ChevronLeft } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="text-[#1DE9B6]" />,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions using state-of-the-art titanium implants for a natural look and feel.',
    tag: 'Advanced Tech'
  },
  {
    icon: <Shield className="text-[#D4AF37]" />,
    title: 'Teeth Cleaning',
    desc: 'Professional dental prophylaxis to remove tartar, plaque, and stains for healthier gums and a brighter smile.',
    tag: 'Preventive'
  },
  {
    icon: <Clock className="text-[#1DE9B6]" />,
    title: 'Implant Dentures',
    desc: 'Implant-retained dentures offering superior stability and comfort compared to conventional removable dentures.',
    tag: 'Stable Fit'
  },
  {
    icon: <Heart className="text-[#D4AF37]" />,
    title: 'Dental Checkup',
    desc: 'Comprehensive general dental examinations to identify issues early and maintain optimal oral health.',
    tag: 'Routine Care'
  },
  {
    icon: <Sparkles className="text-[#1DE9B6]" />,
    title: 'Dental Restoration',
    desc: 'High-quality fillings, crowns, and bridges to restore damaged teeth to full function and appearance.',
    tag: 'Aesthetics'
  },
  {
    icon: <Shield className="text-[#D4AF37]" />,
    title: 'BPS Dentures',
    desc: 'Premium Biofunctional Prosthetic System (BPS) dentures engineered for perfect fit, comfort, and aesthetics.',
    tag: 'Premium'
  }
];

export default function Services() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const [active, setActive] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-32 bg-[#050807] relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#1DE9B6]/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DE9B6]">Our Expertise</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight">
                    World-Class <br />
                    <span className="text-[#8E9391]">Dental Solutions</span>
                </h2>
            </motion.div>
            
            <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-[#A2A9A7] text-lg max-w-sm leading-relaxed"
            >
                Leveraging advanced bio-technology to restore function, aesthetics, and confidence to your smile.
            </motion.p>
        </div>

        {/* Horizontal Navigation Controls */}
        <div className="flex justify-between items-end mb-12">
            <div className="flex-1" />
            <div className="flex gap-4">
                <button 
                    onClick={() => scroll('left')}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all focus:outline-none group/scroll-btn"
                >
                    <ChevronLeft size={24} className="group-hover/scroll-btn:-translate-x-1 transition-transform" />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all focus:outline-none group/scroll-btn"
                >
                    <ChevronRight size={24} className="group-hover/scroll-btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>

        {/* Premium Services Horizontal Scroll */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 pb-12 -mx-6 px-6 scroll-smooth"
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] snap-start bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[40px] p-10 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden flex flex-col"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DE9B6]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#1DE9B6]/30 transition-all duration-500">
                      {svc.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20 group-hover:text-[#D4AF37] transition-colors">
                        {svc.tag}
                    </span>
                </div>

                <h3 className="text-2xl font-display font-black text-white mb-4 group-hover:text-[#1DE9B6] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[#8E9391] text-sm leading-relaxed mb-10 font-medium group-hover:text-white/80 transition-colors">
                  {svc.desc}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6F7674]">Consultation Ready</span>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1DE9B6] hover:text-[#050807] transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        <ChevronRight size={18} />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 bg-gradient-to-r from-white/5 to-transparent border border-white/5 rounded-[48px] p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="space-y-2 text-center md:text-left">
                <h4 className="text-2xl font-display font-black text-white">Need a customized plan?</h4>
                <p className="text-[#A2A9A7] font-medium">Our specialists are ready to discuss your unique dental needs.</p>
            </div>
            <a href="#appointment" className="bg-[#D4AF37] text-[#050807] text-[10px] font-black uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)]">
                Request Quote
            </a>
        </motion.div>
      </div>
    </section>
  );
}
