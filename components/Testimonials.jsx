'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Hulimavu, Bangalore',
    rating: 5,
    avatar: 'PS',
    color: 'from-teal-deep to-teal-medium',
    text: 'Dr. Reshma is highly skilled and very gentle throughout the procedure. She explained every step clearly and made what I feared most feel completely painless. The clinic is spotless and the staff were incredibly kind.',
    treatment: 'Root Canal Treatment',
  },
  {
    name: 'Arun Kumar',
    location: 'BTM Layout, Bangalore',
    rating: 5,
    avatar: 'AK',
    color: 'from-blue-600 to-cyan-500',
    text: 'The clinic is modern, clean, and equipped with the latest dental technology. I was treated for dental implants and the results are outstanding. The staff made me feel very comfortable the entire time.',
    treatment: 'Dental Implants',
  },
  {
    name: 'Nisha Patel',
    location: 'Returning from USA',
    rating: 5,
    avatar: 'NP',
    color: 'from-violet-600 to-purple-500',
    text: 'I visited from the United States and received treatment that was absolutely comparable to dental care in the US. The quality of materials and expertise of the doctors here is truly world-class. Highly recommended!',
    treatment: 'Orthodontic Treatment',
  },
  {
    name: 'Mohammed Farhan',
    location: 'Jayanagar, Bangalore',
    rating: 5,
    avatar: 'MF',
    color: 'from-emerald-600 to-teal-500',
    text: 'Dr. Vikas transformed my smile completely using clear aligners. What I thought would take years was done efficiently within the expected timeline. The before and after results are simply incredible.',
    treatment: 'Clear Aligners',
  },
  {
    name: 'Deepa Menon',
    location: 'Electronic City, Bangalore',
    rating: 5,
    avatar: 'DM',
    color: 'from-rose-500 to-pink-500',
    text: 'After years of avoiding dental visits due to anxiety, 32 Pearls changed everything. From the first consultation, the team put me at ease. The procedure was virtually painless and the results are beautiful!',
    treatment: 'Teeth Whitening & Cleaning',
  },
];

const StarRow = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-dental-gold fill-dental-gold" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="py-32 bg-[#050807] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#1DE9B6]/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mt-2">
            Elite Patient <span className="text-[#8E9391]">Stories</span>
          </h2>
        </motion.div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-[32px] px-10 py-6 flex items-center gap-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-white">4.9</span>
              <div>
                <StarRow count={5} />
                <p className="text-[#8E9391] text-[10px] font-black uppercase tracking-widest mt-1">250+ Verified Reviews</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Global Standards</span>
            </div>
          </div>
        </motion.div>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white/[0.02] backdrop-blur-3xl rounded-[48px] p-10 md:p-16 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#1DE9B6]/5 transition-colors duration-1000" />

              <div className="relative z-10">
                <div className="mb-12">
                   <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                   </div>
                  <p className="text-white text-xl md:text-3xl font-display font-medium leading-[1.4] mb-12">
                     &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-8 pt-10 border-t border-white/5">
                  <div className="flex items-center gap-6">
                    {/* Avatar */}
                    <div className={`w-20 h-20 rounded-[28px] bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-2xl shadow-2xl border border-white/10`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-black text-white text-lg tracking-tight">{t.name}</p>
                      <p className="text-[#8E9391] text-[10px] font-black uppercase tracking-widest mb-1">{t.location}</p>
                    </div>
                  </div>
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[9px] font-black text-[#8E9391] uppercase tracking-widest mb-1">Elite Care</p>
                    <p className="text-[#1DE9B6] text-sm font-black uppercase tracking-tighter">{t.treatment}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 px-4">
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-700 rounded-full ${
                    i === current
                      ? 'w-12 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#050807] transition-all duration-500"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#050807] transition-all duration-500"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
