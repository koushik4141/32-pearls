'use client';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

const internationalPatients = [
  {
    name: 'Sarah J.',
    country: 'USA',
    comment: 'Exceptional care and much more affordable than the US. The quality of implants is world-class.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'David L.',
    country: 'UAE',
    comment: 'The technology they use is very advanced. My smile transformation was quick and painless.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Emma K.',
    country: 'UK',
    comment: 'I traveled from London for my veneers. 32 Pearls exceeded all my expectations.',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60'
  }
];

export default function InternationalTrust() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5">
        <Globe2 size={400} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Global Presence</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-dark max-w-2xl">
            Trusted by <span className="text-accent">International Patients</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-xl">
            Patients from over 10 countries travel to 32 Pearls for specialized dental care and life-changing smile transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalPatients.map((patient, i) => (
            <motion.div
              key={patient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mt-8 bg-white p-8 rounded-[40px] shadow-soft relative pt-16"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img src={patient.img} alt={patient.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-secondary rounded-full text-[10px] font-black uppercase tracking-tighter text-accent mb-4">
                  Patient from {patient.country}
                </div>
                <p className="text-text-muted italic mb-6 font-medium">"{patient.comment}"</p>
                <h3 className="text-xl font-display font-black text-text-dark">{patient.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold">USA</span>
            <span className="text-xl font-bold">UK</span>
            <span className="text-xl font-bold">UAE</span>
            <span className="text-xl font-bold">Australia</span>
            <span className="text-xl font-bold">Germany</span>
        </div>
      </div>
    </section>
  );
}
