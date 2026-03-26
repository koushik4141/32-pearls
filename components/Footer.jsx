'use client';
import { Phone, MapPin, Clock, Heart, ShieldCheck, Facebook, Instagram } from 'lucide-react';

const services = [
  'Dental Implants', 'Teeth Cleaning', 'Root Canal', 'Orthodontics',
  'Dental X-Ray', 'BPS Dentures', 'Dental Checkup', 'Oral Surgery',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Location', href: '#location' },
  { label: 'Book Appointment', href: '#appointment' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050807] text-white relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_-40px_100px_rgba(255,255,255,0.05)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mb-20 md:mb-32">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1DE9B6] to-[#00BFA5] flex items-center justify-center shadow-[0_10px_30px_rgba(29,233,182,0.2)]">
                <span className="text-[#050807] font-black text-xl">32</span>
              </div>
              <div>
                <div className="font-display font-black text-2xl leading-tight text-white tracking-tight">32 Pearls</div>
                <div className="text-[10px] text-[#1DE9B6] font-black uppercase tracking-[0.3em]">Dental Clinic</div>
              </div>
            </div>
            <p className="text-[#8E9391] text-base leading-relaxed mb-10 font-medium">
              Elite multi-speciality dental care. Precision treatments Meets unparalleled luxury.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#8E9391] text-xs font-black uppercase tracking-widest">
                <Clock size={16} className="text-[#1DE9B6]" />
                <span>Open 7 Days · 8 AM – 10 PM</span>
                </div>
                <div className="flex items-start gap-4 text-[#8E9391] text-xs font-black uppercase tracking-widest">
                <MapPin size={16} className="text-[#1DE9B6] mt-0.5" />
                <span>2, 19/3D, Basement, SLN Building, <br/>Dr. Puneeth Raj Kumar Circle, DLF Rd, Bengaluru, 560076</span>
                </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">The Experience</h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#8E9391] text-xs font-black uppercase tracking-widest hover:text-[#1DE9B6] transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-[#1DE9B6] transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">Medical Specialities</h4>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#8E9391] text-xs font-black uppercase tracking-widest hover:text-[#1DE9B6] transition-all flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-[#1DE9B6] transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">Connect</h4>
            <div className="space-y-6 mb-12">
              <a href="tel:+918296552516" className="flex items-center gap-5 text-white hover:text-[#1DE9B6] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#1DE9B6]/40 transition-colors">
                  <Phone size={20} className="text-[#1DE9B6]" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6F7674]">Call Concierge</span>
                    <span className="font-black text-lg">+91 82965 52516</span>
                </div>
              </a>
              <a
                href="https://wa.me/918296552516"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-white hover:text-[#1DE9B6] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#1DE9B6]/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DE9B6" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6F7674]">WhatsApp Us</span>
                    <span className="font-black text-lg">Online Now</span>
                </div>
              </a>
            </div>

            <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] mb-8 text-[#D4AF37]">Social Protocol</h4>
            <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 hover:-translate-y-1 transition-all duration-300 group">
                    <Facebook size={20} fill="#1877F2" className="opacity-80 group-hover:opacity-100" />
                </a>
                <a href="https://www.instagram.com/32pearlsdentalandhealthcare/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F56040] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <Instagram size={20} className="text-[#F56040] group-hover:text-white transition-colors relative z-10" />
                </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#6F7674] text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 32 Pearls Elite. Luxury Dental Services.
          </p>
          <div className="flex items-center gap-10">
            <a href="/admin/login" className="text-[#6F7674] hover:text-[#1DE9B6] text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2">
                <ShieldCheck size={12} />
                Admin Portal
            </a>
            <a href="#" className="text-[#6F7674] hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[#6F7674] hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Terms</a>
            <p className="text-[#6F7674] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                Crafted for <Heart size={14} className="text-[#1DE9B6] fill-[#1DE9B6]" /> Perfection
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
