'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Calendar, ShieldCheck } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#location', label: 'Location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050807]/80 backdrop-blur-xl border-b border-white/5 py-2'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1DE9B6] to-[#00BFA5] flex items-center justify-center shadow-[0_10px_30px_rgba(29,233,182,0.2)]">
                <span className="text-[#050807] font-black text-lg">32</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-black text-xl text-white leading-tight tracking-tight">
                  32 Pearls
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[#1DE9B6]">
                  Dental Clinic
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    scrolled ? 'text-white/70 hover:text-[#1DE9B6]' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex flex-col items-end">
                <a
                  href="tel:+918296552516"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  <span>+91 82965 52516</span>
                </a>
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#1DE9B6] mt-1 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#1DE9B6] animate-pulse" />
                  24/7 Emergency Care
                </span>
              </div>
              <a
                href="#appointment"
                className="bg-[#1DE9B6] text-[#050807] text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(29,233,182,0.2)] border border-[#1DE9B6]/50"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-[#050807] border-l border-white/5 pt-24 px-8"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#1DE9B6] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <a href="tel:+918296552516" className="flex items-center justify-center gap-3 bg-white/5 py-5 rounded-[24px] text-[10px] font-black uppercase tracking-widest text-white">
                    <Phone size={16} />
                    Call Now
                  </a>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1DE9B6] text-center flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6] animate-pulse" />
                    24/7 Emergency Care Available
                  </span>
                </div>
                <a href="#appointment" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-3 bg-[#1DE9B6] py-5 rounded-[24px] text-[10px] font-black uppercase tracking-widest text-[#050807]">
                  <Calendar size={16} />
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-md lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
