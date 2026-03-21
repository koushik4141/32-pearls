'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Phone, Calendar, ArrowRight, Clock, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Dr. Reshma Kousar Mansoor',
    degree: 'BDS — Prime Surgeon',
    role: 'Dental Surgeon',
    specialty: 'Surgeon',
    experience: '19 Years Experience',
    rating: '5.0',
    image: '/doctors/reshma.jpg',
    fees: '200',
    timing: 'Mon-Sun (8 AM - 10 PM)',
    contact: 'Ext. 553'
  },
  {
    id: 2,
    name: 'Dr. Mohammed Suhail Mirza',
    degree: 'BDS, MDS — Endodontics',
    role: 'Endodontist',
    specialty: 'Endodontist',
    experience: '6 Years Experience',
    rating: '5.0',
    image: '/doctors/suhail.png',
    fees: '500',
    timing: 'Wed, Sat (10:30 AM - 1 PM)',
    contact: 'Ext. 469'
  },
  {
    id: 3,
    name: 'Dr. Akhil Sankar',
    degree: 'MDS, BDS — Oral Surgeon',
    role: 'Oral & MaxilloFacial Surgeon',
    specialty: 'Surgeon',
    experience: '9 Years Experience',
    rating: '5.0',
    image: '/doctors/akhil.jpg',
    fees: '500',
    timing: 'Mon-Sun (8:30 PM - 10 PM)',
    contact: 'Ext. 469'
  },
  {
    id: 4,
    name: 'Dr. Vikas V',
    degree: 'BDS, MDS — Orthodontics',
    role: 'Dentist & Orthodontist',
    specialty: 'Orthodontist',
    experience: '13 Years Experience',
    rating: '5.0',
    image: '/doctors/vikas.jpg',
    fees: '500',
    timing: 'Mon-Sun (8 AM - 10 PM)',
    contact: 'Ext. 469'
  },
  {
    id: 5,
    name: 'Dr. Shraddha Durgan',
    degree: 'BDS, MDS — Pediatric',
    role: 'Pediatric Dentist',
    specialty: 'Pediatric',
    experience: '18 Years Experience',
    rating: '5.0',
    image: '/doctors/shraddha.jpg',
    fees: '500',
    timing: 'Mon-Sun (1 PM - 3 PM)',
    contact: 'Ext. 469'
  }
];

const categories = ['All', 'Surgeon', 'Endodontist', 'Orthodontist', 'Pediatric'];

export default function Doctors() {
  const [activeTab, setActiveTab] = useState('All');
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const scrollRef = useRef(null);

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

  const filteredDoctors = doctors.filter(doc => 
    activeTab === 'All' || doc.specialty === activeTab
  );

  return (
    <section id="doctors" ref={ref} className="py-32 bg-[#050807] relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DE9B6]/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DE9B6]">Elite Medical Team</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]"
          >
            Experienced Specialists <br /><span className="text-[#8E9391]">at Your Service</span>
          </motion.h2>
          
          {/* Minimal Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
                  activeTab === cat 
                  ? 'bg-white text-[#050807] border-white shadow-[0_15px_30px_rgba(255,255,255,0.1)]' 
                  : 'bg-white/5 text-[#A2A9A7] border-white/5 hover:bg-white/10 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
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

        {/* Premium Doctor Horizontal Scroll */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 pb-12 -mx-6 px-6 scroll-smooth"
        >
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doc, i) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start group relative flex flex-col bg-white/[0.02] backdrop-blur-xl rounded-[48px] p-5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden border border-white/5 hover:border-white/20"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden mb-6 border border-white/5">
                  <Image 
                    src={doc.image} 
                    alt={doc.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  {/* Glass Rating Overlay */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-2 border border-white/10">
                    <Star size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="text-[11px] font-black text-white">{doc.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col px-2">
                  <div className="mb-6">
                    <h3 className="text-xl font-black text-white leading-tight mb-2 group-hover:text-[#1DE9B6] transition-colors line-clamp-2">
                      {doc.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-black text-[#1DE9B6] uppercase tracking-[0.2em]">{doc.role}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[9px] font-bold text-[#8E9391] uppercase tracking-widest">{doc.experience}</span>
                    </div>
                    <p className="text-[9px] font-medium text-white/40 uppercase tracking-[0.3em] mb-4">{doc.degree}</p>
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/60 text-[10px] uppercase font-black tracking-widest bg-white/[0.03] p-3 rounded-2xl border border-white/5">
                            <Clock size={12} className="text-[#1DE9B6]" />
                            {doc.timing}
                        </div>
                        <div className="flex items-center gap-3 text-white/60 text-[10px] uppercase font-black tracking-widest bg-white/[0.03] p-3 rounded-2xl border border-white/5">
                            <IndianRupee size={12} className="text-[#D4AF37]" />
                            Consultation: ₹{doc.fees}
                        </div>
                    </div>
                  </div>

                  {/* Elite CTA */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <button onClick={() => window.location.href = '#appointment'} className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-3 group/btn">
                      Book Visit <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">
                        {doc.contact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          className="mt-32 flex flex-col items-center border-t border-white/5 pt-16"
        >
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+919876543210" className="flex items-center gap-4 bg-white text-[#050807] px-12 py-6 rounded-full hover:bg-[#1DE9B6] transition-all font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:scale-105 active:scale-95">
              <Phone size={20} /> Call Premier Clinic
            </a>
            <a href="#appointment" className="flex items-center gap-4 bg-white/5 border border-white/10 text-white px-12 py-6 rounded-full hover:bg-white/10 transition-all font-black text-[11px] uppercase tracking-[0.2em] hover:scale-105 active:scale-95">
              <Calendar size={20} /> VIP Online Booking
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
