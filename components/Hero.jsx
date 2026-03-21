'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Truck, Calendar, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#050807]">
      {/* --- Visual Effects: Glows & Orbs --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050807] via-[#08120F] to-[#050807]" />
        
        {/* Soft Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-[#1DE9B6]/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full" 
        />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: Content --- */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#8E9391] text-[11px] font-black uppercase tracking-[0.6em] mb-6 block ml-1">
                32 PEARLS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white leading-[1.05] tracking-tight">
                Professional<br />
                Dental Care —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DE9B6] to-[#00BFA5]">At Your Doorstep</span><br />
                <span className="text-[#D4AF37]/90">& Across Our Clinics</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#A2A9A7] text-base sm:text-lg max-w-xl leading-relaxed font-medium"
            >
              Experience premium dental treatments at our clinics or in the comfort of your home with our mobile dental service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a 
                href="#appointment" 
                className="bg-white hover:bg-[#1DE9B6] text-[#050807] font-black px-8 py-4 rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105 active:scale-95 text-xs uppercase tracking-widest flex items-center gap-3"
              >
                Book Appointment
                <Calendar size={18} />
              </a>
              <a 
                href="#services" 
                className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 group px-6 py-4 border border-white/5 rounded-full hover:bg-white/5 transition-all"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="flex items-center gap-8 pt-8 border-t border-white/5"
            >
                <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#1DE9B6]" />
                    <span className="text-[10px] font-black tracking-widest text-[#6F7674] uppercase">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#D4AF37]" />
                    <span className="text-[10px] font-black tracking-widest text-[#6F7674] uppercase">5+ Bangalore Clinics</span>
                </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: Visual / Glass Card --- */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#1DE9B6] to-[#D4AF37] opacity-10 blur-[100px] rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-[420px]"
            >
              <div className="bg-white/[0.03] backdrop-blur-[32px] border border-white/10 rounded-[48px] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group border-t-white/20">
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 bg-[#1DE9B6]/10 px-4 py-2 rounded-full border border-[#1DE9B6]/20">
                      <Truck size={16} className="text-[#1DE9B6]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1DE9B6]">Mobile Dental</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-black text-white mb-4 leading-tight">
                        Dentist at<br />
                        Your Home
                    </h3>
                    <p className="text-[#A2A9A7] text-xs font-medium leading-[1.8]">
                        Experience the ultimate convenience with our fully-equipped mobile dental setups. Safe, sterilized, and professional care for your family.
                    </p>
                  </div>

                  <a 
                    href="#appointment" 
                    className="w-full bg-[#1DE9B6]/10 hover:bg-[#1DE9B6] border border-[#1DE9B6]/30 text-[#1DE9B6] hover:text-[#050807] font-black py-5 rounded-[24px] flex items-center justify-center gap-3 transition-all duration-500 shadow-lg group"
                  >
                    Book Home Visit
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Micro stats inside card */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                      <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#6F7674] mb-1">Safety</p>
                          <p className="text-xs font-bold text-[#1DE9B6]">ISO Grade</p>
                      </div>
                      <div className="w-px h-8 bg-white/5" />
                      <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#6F7674] mb-1">Available</p>
                          <p className="text-xs font-bold text-white">24/7 Service</p>
                      </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating bits */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 blur-2xl rounded-full" 
              />
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#1DE9B6]/10 blur-3xl rounded-full" 
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- Footer Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white text-[9px] font-black tracking-[0.4em] uppercase">Scroll to Discover</span>
        <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-white to-transparent" 
        />
      </motion.div>
    </section>
  );
}
