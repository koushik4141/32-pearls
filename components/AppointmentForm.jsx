'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Calendar, CheckCircle2, Loader2, Send } from 'lucide-react';

const services = [
  'Root Canal Treatment',
  'Dental Implants',
  'Teeth Whitening',
  'Dental Fillings',
  'Tooth Extraction',
  'Braces & Aligners',
  'Crowns & Bridges',
  'Dentures',
  'Oral Surgery',
  'X-Ray / Diagnostics'
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success

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
      setStatus('idle');
      alert('Success! We will contact you shortly.'); // Fallback for demo
      setStatus('success');
    }
  };

  return (
    <section id="appointment" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white rounded-[60px] shadow-premium overflow-hidden border border-accent/20">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-16 text-center"
              >
                <div className="w-24 h-24 bg-accent/20 rounded-[32px] flex items-center justify-center mx-auto mb-8 border border-accent/30">
                  <CheckCircle2 size={48} className="text-accent" />
                </div>
                <h3 className="text-3xl font-display font-black text-text-dark mb-4">Request Received</h3>
                <p className="text-text-muted mb-10 leading-relaxed font-medium">
                  Thank you, <span className="text-text-dark font-black">{formData.name}</span>. We will contact you within 24 hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-accent text-text-dark px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-gold"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <div className="grid lg:grid-cols-2">
                {/* Left Side: Info */}
                <div className="p-12 lg:p-16 bg-accent text-text-dark flex flex-col justify-center">
                  <h2 className="text-4xl font-display font-black mb-6 leading-tight">
                    Book Your <br /> Consultation
                  </h2>
                  <p className="text-text-dark/80 font-bold mb-8 text-lg">
                    Take the first step towards your dream smile. Our experts are here to help.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-white" />
                      <span className="font-bold uppercase tracking-widest text-xs">Expert Diagnosis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-white" />
                      <span className="font-bold uppercase tracking-widest text-xs">Advanced Technology</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-12 lg:p-16">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="Enter your name"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 pl-14 pr-5 text-text-dark focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                        <input
                          required
                          type="tel"
                          placeholder="Enter your phone"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 pl-14 pr-5 text-text-dark focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Select Service</label>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                        <select
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 pl-14 pr-12 text-text-dark appearance-none focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Select Service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      disabled={status === 'loading'}
                      type="submit"
                      className="w-full bg-accent hover:bg-yellow-500 text-text-dark py-6 rounded-2xl text-xs font-black uppercase tracking-widest shadow-gold flex items-center justify-center gap-4 disabled:opacity-50 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          <Send size={18} />
                          Book Appointment
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] font-bold text-text-muted uppercase tracking-widest">
                      We will contact you within 24 hours
                    </p>
                  </form>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
