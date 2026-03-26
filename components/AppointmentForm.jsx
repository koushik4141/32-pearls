'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, MapPin, Calendar, Clock, ChevronRight, CheckCircle2, Loader2, Send } from 'lucide-react';

const services = [
  'Dental Implant Fixing',
  'Dental Prophylaxis',
  'Implant Retained Dentures',
  'Dental Checkup (General)',
  'Dental Restoration',
  'BPS Dentures Fixing',
  'Dental Examinations',
  'Preparation for Dentures',
  'Dental X-Ray',
  'Root Canal Treatment',
  'Orthodontic Treatment'
];

export default function AppointmentForm() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    type: 'Clinic',
    location: null
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setFormData(prev => ({
            ...prev,
            location: {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            }
          }));
        },
        (err) => {
          console.warn("Location access denied or unavailable:", err.message);
        }
      );
    }
  };

  const handleTypeChange = (newType) => {
    setFormData(prev => ({ ...prev, type: newType }));
    if (newType === 'Home') {
      requestLocation();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Failed to submit appointment');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error: ' + error.message);
      setStatus('idle');
    }
  };

  return (
    <section id="appointment" ref={ref} className="py-32 relative overflow-hidden bg-[#050807]">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#1DE9B6]/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Priority Access</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
              Book Your <br />
              <span className="text-[#8E9391]">Elite Care</span>
            </h2>
            <p className="text-[#A2A9A7] text-lg leading-relaxed mb-12 max-w-md font-medium">
              Experience personalized dental excellence. Our specialists are available 7 days a week for your convenience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'VIP Scheduling',
                'Dental Innovation',
                'Elite Comfort',
                'Bespoke Care'
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#1DE9B6]/40 transition-colors">
                    <CheckCircle2 size={18} className="text-[#1DE9B6]" />
                  </div>
                  <span className="text-[#8E9391] text-xs font-black uppercase tracking-widest">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-3xl rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10 relative"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-16 text-center"
                >
                  <div className="w-24 h-24 bg-[#1DE9B6]/10 rounded-[32px] flex items-center justify-center mx-auto mb-8 border border-[#1DE9B6]/20">
                    <CheckCircle2 size={48} className="text-[#1DE9B6]" />
                  </div>
                  <h3 className="text-3xl font-display font-black text-white mb-4">Elite Request Received</h3>
                  <p className="text-[#A2A9A7] mb-10 leading-relaxed font-medium">
                    Thank you, <span className="text-white font-black">{formData.name}</span>. Our concierge will contact you within the hour to finalize your visit.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-white text-[#050807] px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#1DE9B6] transition-all"
                  >
                    Return to Experience
                  </button>
                </motion.div>
              ) : (
                <div className="p-6 md:p-12 relative z-10">
                   <h3 className="text-2xl font-display font-black text-white mb-10 tracking-tight">Concierge Booking</h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6F7674] mb-3 ml-1">Client Identity</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#1DE9B6] transition-colors" size={18} />
                          <input
                            required
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#1DE9B6]/30 focus:bg-white/10 transition-all font-bold text-sm"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="group">
                         <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6F7674] mb-3 ml-1">Contact Channel</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#1DE9B6] transition-colors" size={18} />
                          <input
                            required
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#1DE9B6]/30 focus:bg-white/10 transition-all font-bold text-sm"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                       <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6F7674] mb-3 ml-1">Selection of Care</label>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#1DE9B6] transition-colors" size={18} />
                        <select
                          required
                          className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-12 text-white appearance-none focus:outline-none focus:border-[#1DE9B6]/30 focus:bg-white/10 transition-all font-bold text-sm"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="" className="bg-[#050807]">Select Service</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#050807]">{s}</option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* Visit Type Selection */}
                    <div className="flex flex-col sm:flex-row p-1.5 bg-white/5 rounded-[24px] border border-white/5 gap-2">
                        {['Clinic', 'Home'].map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => handleTypeChange(t)}
                                className={`flex-1 py-4 px-6 rounded-[18px] text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${formData.type === t ? 'bg-white shadow-[0_10px_20px_rgba(255,255,255,0.05)] text-[#050807]' : 'text-[#6F7674] hover:text-white'}`}
                            >
                                {t === 'Clinic' ? 'Clinic Sanctuary' : 'Private Home Care'}
                            </button>
                        ))}
                    </div>
                    {formData.type === 'Home' && formData.location && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[8px] font-black uppercase tracking-widest text-[#1DE9B6] pl-2 flex items-center gap-2">
                        <MapPin size={10} /> Precision Coordinates Locked
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="group">
                         <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6F7674] mb-3 ml-1">Preferred Arrival</label>
                        <div className="relative">
                          <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#1DE9B6] transition-colors" size={18} />
                          <input
                            required
                            type="date"
                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white focus:outline-none focus:border-[#1DE9B6]/30 focus:bg-white/10 transition-all font-bold text-sm [color-scheme:dark]"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="group">
                         <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6F7674] mb-3 ml-1">Appointment Slot</label>
                        <div className="relative">
                          <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#1DE9B6] transition-colors" size={18} />
                          <select
                            required
                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-12 text-white appearance-none focus:outline-none focus:border-[#1DE9B6]/30 focus:bg-white/10 transition-all font-bold text-sm"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          >
                            <option value="" className="bg-[#050807]">Time</option>
                            {['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'].map((t) => (
                              <option key={t} value={t} className="bg-[#050807]">{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={status === 'loading'}
                      type="submit"
                      className="w-full bg-white hover:bg-[#1DE9B6] text-[#050807] py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex items-center justify-center gap-4 disabled:opacity-50 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Authenticating...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Secure My Appointment
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
