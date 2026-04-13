'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    comment: 'Dr. Reshma is highly skilled and very gentle. She explained every step clearly and made the procedure painless. The clinic is spotless!',
    rating: 5,
    treatment: 'Root Canal Treatment'
  },
  {
    name: 'Arun Kumar',
    comment: 'Modern, clean, and equipped with the latest technology. My dental implants look completely natural. Very happy with the results.',
    rating: 5,
    treatment: 'Dental Implants'
  },
  {
    name: 'Nisha Patel',
    comment: 'I traveled from the US for treatment here. The quality is absolutely world-class and comparable to any top clinic abroad.',
    rating: 5,
    treatment: 'Smile Transformation'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Patient Reviews</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-dark">
            What Our <span className="text-accent">Patients Say</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="bg-secondary/20 p-12 md:p-16 rounded-[60px] border border-accent/10 shadow-soft"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-2xl md:text-3xl font-display font-bold text-text-dark text-center leading-relaxed mb-10">
                "{testimonials[current].comment}"
              </p>

              <div className="text-center">
                <h4 className="text-xl font-black text-text-dark">{testimonials[current].name}</h4>
                <p className="text-accent font-bold uppercase tracking-widest text-xs mt-2">{testimonials[current].treatment}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-premium flex items-center justify-center text-text-dark hover:text-accent transition-all z-20 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-premium flex items-center justify-center text-text-dark hover:text-accent transition-all z-20 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${i === current ? 'bg-accent w-8' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
