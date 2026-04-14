'use client';
import { Phone, MapPin, Clock, Heart, ShieldCheck, Facebook, Instagram } from 'lucide-react';

const services = [
  { name: 'Root Canal Treatment', href: '#services' },
  { name: 'Dental Implants', href: '#services' },
  { name: 'Teeth Whitening', href: '#services' },
  { name: 'Braces & Aligners', href: '#services' },
  { name: 'Oral Surgery', href: '#services' },
  { name: 'Diagnostics', href: '#services' },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Smile Results', href: '#transformations' },
  { label: 'Patient Reviews', href: '#testimonials' },
  { label: 'Book Appointment', href: '#appointment' },
];

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/logo-dark.png" 
                alt="32 Pearls Dental Clinic" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Providing premium, modern dental care with a focus on comfort and high-quality results. Your perfect smile starts here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-text-dark transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/32pearlsdentalandhealthcare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-text-dark transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-accent text-[10px] uppercase tracking-[0.3em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 text-sm font-bold hover:text-accent transition-all">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-accent text-[10px] uppercase tracking-[0.3em] mb-8">Services</h4>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="text-gray-400 text-sm font-bold hover:text-accent transition-all">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-accent text-[10px] uppercase tracking-[0.3em] mb-8">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-accent shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  2, 19/3D, SLN Building, Basement, DLF Road, Bengaluru, 560076
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-accent shrink-0" />
                <p className="text-white font-black text-lg tracking-tight">+91 82965 52516</p>
              </div>
              <div className="flex items-center gap-4 font-bold text-sm text-gray-400">
                <Clock size={18} className="text-accent" />
                <span>Open 7 Days · 8 AM – 10 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            © 2026 32 Pearls Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="/admin/login" className="text-gray-500 hover:text-accent text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2">
              <ShieldCheck size={12} />
              Admin Portal
            </a>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              Made with <Heart size={14} className="text-accent fill-accent" /> for your smile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
