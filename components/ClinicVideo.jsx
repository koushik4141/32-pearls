'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Shield, Award, MapPin, Users } from 'lucide-react';

export default function ClinicVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-deep text-sm font-semibold tracking-widest uppercase">Take a Virtual Tour</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-text-dark mt-4 mb-8">
              Experience the <span className="text-teal-gradient">Luxury & Technology</span> of 32 Pearls
            </h2>
            
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Step inside our state-of-the-art facility in Hulimavu. We have designed our clinic to feel less like a hospital and more like a high-end wellness center, ensuring your comfort from the moment you walk in.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-cloud-gray hover:bg-teal-deep/5 transition-colors group">
                <Shield className="text-teal-deep group-hover:scale-110 transition-transform" size={24} />
                <h4 className="font-bold text-text-dark">ISO Certified</h4>
                <p className="text-xs text-text-muted">International sterilization standards maintained daily.</p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-cloud-gray hover:bg-teal-deep/5 transition-colors group">
                <Users className="text-teal-deep group-hover:scale-110 transition-transform" size={24} />
                <h4 className="font-bold text-text-dark">Private Suites</h4>
                <p className="text-xs text-text-muted">Exclusive consultation rooms for your complete privacy.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-teal-deep/20 to-mint flex items-center justify-center text-xs font-bold text-teal-deep shadow-sm">
                    {i === 4 ? '+5k' : ''}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-text-dark">Trusted by 5,000+ Patients</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-dental-gold fill-dental-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[10px] text-text-muted ml-1">Google Verified Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div 
              className="relative aspect-video rounded-3xl overflow-hidden shadow-glass-lg cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              {/* Background Placeholder / Thumbnail */}
              <div className="absolute inset-0 bg-hero-gradient">
                <div className="absolute inset-0 bg-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />
                {/* SVG Mockup of Clinic Interior */}
                <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
                  <rect width="400" height="225" fill="#001F27" />
                  <path d="M0 225L100 150L300 150L400 225Z" fill="#003644" />
                  <rect x="150" y="80" width="100" height="70" fill="#006D77" rx="4" />
                  <path d="M150 150L130 180L270 180L250 150Z" fill="#1A2332" />
                  <circle cx="200" cy="40" r="15" fill="#C9A84C" opacity="0.4" />
                </svg>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl relative"
                >
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                  <Play size={32} className="text-teal-deep fill-teal-deep ml-1" />
                </motion.div>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Play size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Play Virtual Tour</p>
                  <p className="text-white/70 text-xs">2:14 · 4K cinematic experience</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dental-gold/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mint/10 rounded-full blur-xl animate-pulse" />
          </motion.div>

        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white hover:text-mint transition-colors"
            >
              <X size={40} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video glass-teal rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* This would be an iframe or video tag in production */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="w-16 h-1 bg-dental-gold mb-6" />
                <h3 className="section-heading text-3xl text-white mb-4">Clinic Tour Cinematic</h3>
                <p className="text-white/60 max-w-md">
                  Experience our premium Hulimavu facility through this high-definition video walkthrough.
                </p>
                <div className="mt-8 flex items-center gap-3 text-mint">
                  <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase">Buffering HD Content...</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
