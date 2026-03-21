'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  useEffect(() => {
    // Show after 15 seconds or 40% scroll
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.4 && !localStorage.getItem('popup_dismissed')) {
        setIsOpen(true);
      }
    };

    const timer = setTimeout(() => {
        if (!localStorage.getItem('popup_dismissed')) setIsOpen(true);
    }, 15000);

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('popup_dismissed', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Inquiry from Popup', type: 'Clinic' }),
      });
      if (response.ok) {
        setStatus('success');
        setTimeout(closePopup, 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#050807]/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Glossy Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DE9B6]/10 blur-3xl rounded-full translate-x-12 -translate-y-12" />
            <button onClick={closePopup} className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors">
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#C9A84C] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles size={24} className="text-[#050807]" />
              </div>

              <h3 className="text-2xl font-display font-black text-white mb-2">Exclusive Consultation</h3>
              <p className="text-[#8E9391] text-xs font-medium mb-8 uppercase tracking-widest">Limited Slots Available for This Week</p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 text-center text-[#1DE9B6]">
                    <CheckCircle2 size={48} className="mx-auto mb-4" />
                    <p className="font-black text-xs uppercase tracking-widest">Protocol Accepted. Contact Soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      required
                      placeholder="Doctor / Patient Name"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-[#1DE9B6]/30 transition-all font-bold text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Priority Contact Number"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-[#1DE9B6]/30 transition-all font-bold text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <button
                      disabled={status === 'loading'}
                      className="w-full bg-white hover:bg-[#1DE9B6] text-[#050807] font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 text-xs uppercase tracking-[0.2em]"
                    >
                      {status === 'loading' ? 'Processing...' : 'Secure Priority Callback'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
