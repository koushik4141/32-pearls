'use client';
import { motion } from 'framer-motion';
import { Cpu, Users2, ShieldPlus, Wallet } from 'lucide-react';

const reasons = [
  {
    icon: <Cpu className="text-accent" size={32} />,
    title: 'Advanced Technology',
    desc: 'Digital X-rays, laser treatments, and computer-guided surgery for precision and comfort.'
  },
  {
    icon: <Users2 className="text-accent" size={32} />,
    title: 'Experienced Dentists',
    desc: 'Our team of specialists brings decades of collective experience in advanced dentistry.'
  },
  {
    icon: <ShieldPlus className="text-accent" size={32} />,
    title: 'High Safety Standards',
    desc: 'ISO-grade sterilization protocols and rigorous safety measures for every patient.'
  },
  {
    icon: <Wallet className="text-accent" size={32} />,
    title: 'Affordable Pricing',
    desc: 'Premium dental care made accessible with transparent pricing and flexible plans.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Why 32 Pearls</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-dark">
            Commitment to Your <span className="text-accent">Oral Health</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/20 p-8 rounded-[32px] hover:bg-white hover:shadow-premium transition-all duration-500 border border-transparent hover:border-accent/10 text-center flex flex-col items-center"
            >
              <div className="mb-6 bg-white p-5 rounded-2xl shadow-soft">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-black text-text-dark mb-4">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
