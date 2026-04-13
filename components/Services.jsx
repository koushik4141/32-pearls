'use client';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Trash2, 
  Smile, 
  Layers, 
  Scissors, 
  Search,
  CheckCircle2,
  Syringe
} from 'lucide-react';

const services = [
  {
    icon: <Syringe className="text-accent" />,
    title: 'Root Canal Treatment',
    desc: 'Advanced endodontic care to save your natural teeth with painless, precise protocols.'
  },
  {
    icon: <Layers className="text-accent" />,
    title: 'Dental Implants',
    desc: 'Permanent and natural-looking tooth replacements using world-class titanium technology.'
  },
  {
    icon: <Sparkles className="text-accent" />,
    title: 'Teeth Whitening',
    desc: 'Professional brightening treatments to remove stains and give you a dazzling smile.'
  },
  {
    icon: <CheckCircle2 className="text-accent" />,
    title: 'Dental Fillings',
    desc: 'High-quality, tooth-colored composite fillings to restore and protect damaged teeth.'
  },
  {
    icon: <Trash2 className="text-accent" />,
    title: 'Tooth Extraction',
    desc: 'Safe and gentle removal of damaged or problematic teeth with minimal discomfort.'
  },
  {
    icon: <Smile className="text-accent" />,
    title: 'Braces & Aligners',
    desc: 'Straighten your teeth with modern orthodontic solutions including invisible aligners.'
  },
  {
    icon: <ShieldCheck className="text-accent" />,
    title: 'Crowns & Bridges',
    desc: 'Durable and aesthetic restorations to strengthen teeth and fill gaps beautifully.'
  },
  {
    icon: <Activity className="text-accent" />,
    title: 'Dentures',
    desc: 'Custom-fit, comfortable prosthetic solutions for complete smile restoration.'
  },
  {
    icon: <Scissors className="text-accent" />,
    title: 'Oral Surgery',
    desc: 'Expert surgical procedures for complex dental issues, handled with extreme care.'
  },
  {
    icon: <Search className="text-accent" />,
    title: 'X-Ray / Diagnostics',
    desc: 'Detailed digital imaging and precise diagnosis for effective treatment planning.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Our Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-display font-black text-text-dark mb-6"
          >
            Comprehensive <span className="text-accent">Dental Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            We offer a wide range of specialized dental treatments designed to give you the perfect smile you deserve.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-soft hover:shadow-premium transition-all duration-500 group border border-gray-50 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-[24px] bg-secondary flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {svc.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-black text-text-dark mb-4 group-hover:text-accent transition-colors">
                {svc.title}
              </h3>
              <p className="text-text-muted leading-relaxed font-medium">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA below services */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-accent p-12 rounded-[50px] shadow-gold flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <h4 className="text-3xl font-display font-black text-text-dark">Ready for your transformation?</h4>
            <p className="text-text-dark/80 font-bold text-lg">Book your consultation today and take the first step towards a better smile.</p>
          </div>
          <a href="#appointment" className="bg-white text-text-dark font-black px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap">
            Book Appointment Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
