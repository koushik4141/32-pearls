'use client';
import { motion } from 'framer-motion';
import { Home, Phone, Timer } from 'lucide-react';

export default function HomeServiceBox() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-secondary p-8 lg:p-12 rounded-[50px] shadow-premium grid md:grid-cols-3 gap-8 border border-white"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-accent shadow-soft">
            <Home size={32} />
          </div>
          <div>
            <h4 className="font-display font-black text-text-dark text-xl">Home Care</h4>
            <p className="text-text-muted text-sm font-medium">Expert care at your home.</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-accent shadow-soft">
            <Timer size={32} />
          </div>
          <div>
            <h4 className="font-display font-black text-text-dark text-xl">Quick Booking</h4>
            <p className="text-text-muted text-sm font-medium">Get a slot in minutes.</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-accent shadow-soft">
            <Phone size={32} />
          </div>
          <div>
            <h4 className="font-display font-black text-text-dark text-xl">24/7 Support</h4>
            <p className="text-text-muted text-sm font-medium">Dedicated support line.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
