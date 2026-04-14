'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Calendar, ShieldCheck } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#transformations', label: 'Results' },
  { href: '#testimonials', label: 'Reviews' },
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
            ? 'bg-white/90 backdrop-blur-xl shadow-soft py-2'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="32 Pearls Dental Clinic" 
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider text-text-dark hover:text-accent transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/admin/login"
                className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider text-text-muted hover:text-accent flex items-center gap-2 transition-all duration-300"
              >
                <ShieldCheck size={12} />
                Admin
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="tel:+918296552516"
                className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-text-dark hover:text-accent transition-colors"
              >
                <Phone size={14} className="text-accent" />
                <span>+91 82965 52516</span>
              </a>
              <a
                href="#appointment"
                className="bg-accent text-text-dark text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-gold border border-accent/20"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-3 rounded-xl bg-secondary/50 text-text-dark hover:bg-secondary transition-colors"
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
            className="fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-white shadow-premium pt-24 px-8"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-accent hover:bg-secondary transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4">
                <a href="tel:+918296552516" className="flex items-center justify-center gap-3 bg-secondary py-5 rounded-[24px] text-[10px] font-black uppercase tracking-widest text-text-dark">
                  <Phone size={16} />
                  Call Now
                </a>
                <a href="#appointment" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-3 bg-accent py-5 rounded-[24px] text-[10px] font-black uppercase tracking-widest text-text-dark shadow-gold">
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
            className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
