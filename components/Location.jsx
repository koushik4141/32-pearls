'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const timings = [
  { day: 'Mon – Fri', hours: '8:00 AM – 10:00 PM', open: true },
  { day: 'Saturday', hours: '8:00 AM – 10:00 PM', open: true },
  { day: 'Sunday', hours: '8:00 AM – 10:00 PM', open: true },
];

export default function Location() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="location" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary blur-[150px] rounded-full opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-accent/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-dark">Presence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-dark mt-2">
            Visit Our <span className="text-accent">Clinics</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
            className="rounded-[48px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative group"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none z-10" />
            
            <iframe
              title="32 Pearls Dental Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9271937804553!2d77.60500531482138!3d12.876400490858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15201a5b9b9b%3A0x3e8c2b1a1a1a1a1a!2sHulimavu%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address card */}
            <div className="bg-white rounded-[40px] p-10 shadow-soft group hover:bg-secondary/20 transition-all duration-500 border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-[24px] bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-500">
                  <MapPin size={24} className="text-accent group-hover:text-text-dark" />
                </div>
                <div>
                  <h3 className="font-black text-text-dark text-2xl mb-4">Clinic Address</h3>
                  <p className="text-text-muted leading-relaxed text-base font-medium">
                    2, 19/3D, SLN Building, Basement<br />
                    Dr. Puneeth Raj Kumar Circle, DLF Road<br />
                    Near Krishna Kuteera Hotel<br />
                    <strong className="text-text-dark block mt-2 text-lg">Bengaluru, Karnataka – 560 076</strong>
                  </p>
                  <a
                    href="https://maps.google.com/?q=32+Pearls+Dental+Clinic+SLN+Building+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-8 bg-accent text-text-dark px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-gold"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Timings card */}
                <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-soft">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent">
                            <Clock size={20} />
                        </div>
                        <h3 className="font-black text-text-dark text-xl uppercase tracking-tighter">Hours</h3>
                    </div>
                    <div className="space-y-4">
                        {timings.map((t) => (
                        <div key={t.day} className="flex flex-col gap-1">
                            <span className="text-text-muted text-[9px] font-black uppercase tracking-widest">{t.day}</span>
                            <div className="flex items-center justify-between">
                            <span className="text-text-dark text-sm font-bold">{t.hours}</span>
                            {t.open && (
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            )}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Contact card */}
                <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-soft flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent">
                                <Phone size={20} />
                            </div>
                            <h3 className="font-black text-text-dark text-xl uppercase tracking-tighter">Contact</h3>
                        </div>
                        <p className="text-text-muted text-[10px] font-black uppercase tracking-widest mb-2">Speak to Us</p>
                        <p className="text-text-dark font-black text-xl tracking-tight">+91 82965 52516</p>
                    </div>
                    
                    <div className="mt-8 flex flex-col gap-3">
                        <a href="tel:+918296552516" className="w-full bg-accent text-text-dark text-[10px] font-black uppercase tracking-widest py-4 rounded-full text-center hover:bg-yellow-500 transition-all shadow-gold">
                            Call Now
                        </a>
                        <a href="https://wa.me/918296552516" className="w-full border border-accent text-text-dark text-[10px] font-black uppercase tracking-widest py-4 rounded-full text-center hover:bg-secondary transition-all">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
