'use client';
import { motion } from 'framer-motion';
import { Calendar, Phone, Users, Star, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT SIDE: Content --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-accent/20">
              <Star size={16} className="text-accent fill-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Top Rated Dental Clinic</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-black text-text-dark leading-[1.1]">
              Transform Your <br />
              <span className="text-accent">Smile</span> Into a <br />
              Masterpiece
            </h1>
            
            <p className="text-text-muted text-lg lg:text-xl max-w-lg leading-relaxed font-medium">
              Experience premium dental care with advanced technology and expert doctors. We provide world-class treatments for your perfect smile.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="#appointment" 
                className="bg-accent hover:bg-yellow-500 text-text-dark font-bold px-8 py-5 rounded-full shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                Book Appointment
                <Calendar size={20} />
              </a>
              <a 
                href="tel:+918296552516" 
                className="bg-white border-2 border-accent text-text-dark font-bold px-8 py-5 rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                Call Now
                <Phone size={20} />
              </a>
            </div>

            {/* Trust Stats below Hero Content */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <Users size={20} strokeWidth={3} />
                  <span className="text-xl font-black text-text-dark">1000+</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Happy Patients</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <Award size={20} strokeWidth={3} />
                  <span className="text-xl font-black text-text-dark">5+</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Years Experience</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <Star size={20} strokeWidth={3} />
                  <span className="text-xl font-black text-text-dark">Modern</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Dental Care</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: Image --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-premium">
              <img 
                src="/hero-woman.png" 
                alt="Smiling Young Woman - 32 Pearls Dental Clinic"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
      
      {/* Background Section alternation hint */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/30 to-transparent -z-20" />
    </section>
  );
}
