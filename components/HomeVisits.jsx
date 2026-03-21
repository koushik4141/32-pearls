'use client';
import { motion } from 'framer-motion';
import { Home, Users, MapPin, CheckCircle2, Phone, Calendar } from 'lucide-react';

export default function HomeVisits() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pearl-texture opacity-5" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-mint/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-glass-lg group">
               {/* Simplified Medical Home Mockup */}
               <div className="aspect-[4/3] bg-hero-gradient relative flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-48 h-48 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center relative z-10"
                  >
                    <Home size={80} className="text-white" />
                  </motion.div>
                  
                  {/* Floating elements representing "Portable" equipment */}
                  <motion.div 
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute top-20 right-20 w-20 h-20 bg-mint/30 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-lg"
                  >
                    <MapPin size={32} className="text-white" />
                  </motion.div>
               </div>
               
               {/* Label Overlay */}
               <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl border border-white/40 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-deep flex items-center justify-center text-white shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-text-muted">Direct Booking</p>
                      <p className="text-lg font-bold text-text-dark">+91 98765 43210</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-dental-gold text-sm font-bold tracking-[3px] uppercase block mb-4">Mobile Dental Services</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-dark mb-6 leading-tight">
              Professional Dental Care <br />
              <span className="text-teal-gradient">at Your Doorstep</span>
            </h2>
            
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Experience world-class dental checkups and treatments without leaving your home. 
              Ideal for senior citizens, busy professionals, and families across Bangalore.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { title: 'Home Consultation', desc: 'Full checkup with portable diagnostics' },
                { title: 'Emergency Care', desc: 'At-home pain management & first aid' },
                { title: 'Senior Friendly', desc: 'Specially designed for elderly comfort' },
                { title: 'Total Hygiene', desc: 'ISO-grade mobile sterilization kits' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cloud-gray group-hover:bg-mint/20 transition-colors flex items-center justify-center shrink-0 border border-gray-100">
                    <CheckCircle2 size={18} className="text-teal-deep" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="btn-primary group">
                <Calendar size={18} />
                <span>Request Home Visit</span>
              </a>
              <div className="flex items-center gap-3 px-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-text-muted">Available 24/7 for Home Visits</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
