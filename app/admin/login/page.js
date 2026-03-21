'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, Lock, Loader2, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, error, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Premium secure authentication call
    try {
        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Authentication failure: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Registry format mismatch");
        }

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('admin_token', data.token);
            localStorage.setItem('admin_name', data.name);
            setStatus('success');
            setTimeout(() => {
                router.push('/admin/dashboard');
            }, 1000);
        } else {
            setStatus('error');
        }
    } catch (error) {
        console.error('Authentication Protocol Error:', error);
        setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#004D4D] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pearl-texture opacity-10 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-mint/10 blur-[180px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-dental-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full max-w-[500px] relative z-20"
      >
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-12 shadow-[0_32px_120px_rgba(0,0,0,0.5)] border-t-white/20">
          <div className="text-center mb-12">
            <motion.div 
               initial={{ rotateY: 180 }} 
               animate={{ rotateY: 0 }} 
               transition={{ duration: 1.2, type: 'spring' }}
               className="w-20 h-20 bg-gradient-to-br from-mint to-teal-deep rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_20px_50px_rgba(56,182,190,0.3)] border border-white/20"
            >
              <ShieldCheck size={40} className="text-white" />
            </motion.div>
            <h1 className="text-4xl font-display font-black text-white mb-3 tracking-tight">Admin Headquarters</h1>
            <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em]">Authorized Access Only</p>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                >
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} />
                    </div>
                    <p className="text-white font-black text-xl mb-2">Access Granted</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Entering Dashboard Console...</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-4 mb-3 block">Email Protocol</label>
                        <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-mint transition-colors" size={20} />
                            <input
                                required
                                type="email"
                                placeholder="admin@32pearls.com"
                                className="w-full bg-white/5 border border-white/10 rounded-[28px] py-6 pl-14 pr-6 text-white placeholder:text-white/10 focus:outline-none focus:border-mint/40 focus:bg-white/10 transition-all font-bold text-lg"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-4 mb-3 block">Access Key</label>
                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-mint transition-colors" size={20} />
                            <input
                                required
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white/5 border border-white/10 rounded-[28px] py-6 pl-14 pr-6 text-white placeholder:text-white/10 focus:outline-none focus:border-mint/40 focus:bg-white/10 transition-all font-bold text-lg"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-red-500/10 border border-red-500/20 rounded-[24px] p-5 text-red-100 text-xs font-bold flex items-center gap-3"
                        >
                            <AlertCircle size={20} className="text-red-400" />
                            Security mismatch. Verification failed.
                        </motion.div>
                    )}

                    <button
                        disabled={status === 'loading'}
                        type="submit"
                        className="w-full bg-mint hover:bg-[#4FD1D9] text-[#004D4D] font-black py-6 rounded-[28px] shadow-[0_20px_50px_rgba(56,182,190,0.3)] flex items-center justify-center gap-4 transition-all active:scale-95 disabled:opacity-50 text-xl"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="animate-spin" size={24} />
                                Authenticating
                            </>
                        ) : (
                            <>
                                Verify & Enter
                                <ArrowRight size={24} />
                            </>
                        )}
                    </button>
                </form>
            )}
          </AnimatePresence>

          <footer className="mt-16 text-center border-t border-white/5 pt-10">
            <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Secure Server: Active</span>
            </div>
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">&copy; 2026 Pearl Dental Systems</p>
          </footer>
        </div>
      </motion.div>
    </main>
  );
}
