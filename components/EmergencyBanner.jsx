'use client';
import { motion } from 'framer-motion';
import { Phone, AlertCircle, Clock } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050807]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1211] via-[#050807] to-[#0A1211] opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-full bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute right-[-10%] top-0 w-64 h-64 bg-[#1DE9B6]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[48px] p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 group hover:bg-white/[0.04] transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
          
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-500">
                    <AlertCircle size={36} className="text-[#D4AF37]" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-4 border-[#050807] animate-ping" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                Dental <span className="text-[#D4AF37]">Emergency?</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      <Clock size={12} className="text-[#1DE9B6]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1DE9B6]">8 AM – 10 PM</span>
                  </div>
                  <p className="text-[#A2A9A7] text-sm font-medium">Available 7 Days a Week</p>
              </div>
            </div>
          </div>

          <motion.a
            href="tel:+918296552516"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 bg-white hover:bg-[#D4AF37] text-[#050807] font-black text-lg px-10 py-5 rounded-[32px] shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-300 w-full lg:w-auto justify-center"
          >
            <div className="bg-[#050807]/5 p-2 rounded-xl">
               <Phone size={24} className="fill-[#050807]" />
            </div>
            Call HQ Support
          </motion.a>
        </div>
        
        {/* Support subtext */}
        <p className="text-center mt-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
            Certified Emergency Response · Bangalore Central
        </p>
      </div>
    </section>
  );
}
