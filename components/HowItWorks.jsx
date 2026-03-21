'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Stethoscope } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Book Appointment',
    desc: `Book online, call us, or send a WhatsApp message. Choose your preferred time — we're open 7 days a week from 8 AM to 10 PM.`,
    color: 'bg-teal-deep',
    lightColor: 'bg-teal-deep/10',
    textColor: 'text-teal-deep',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Visit Our Clinic',
    desc: 'Walk into our modern clinic in Hulimavu, Bangalore. Our friendly staff will welcome you and prepare your records and treatment plan.',
    color: 'bg-dental-gold',
    lightColor: 'bg-dental-gold/10',
    textColor: 'text-dental-gold-dark',
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Receive Treatment',
    desc: 'Our specialist doctors provide expert treatment with advanced equipment, ensuring a comfortable, painless, and effective experience.',
    color: 'bg-teal-medium',
    lightColor: 'bg-mint/20',
    textColor: 'text-teal-medium',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-cloud-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-dental-gold text-sm font-semibold tracking-widest uppercase">Simple Process</span>
          <h2 className="section-heading text-3xl sm:text-4xl text-text-dark mt-2">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-deep to-mint rounded-full mx-auto mt-4" />
          <p className="text-text-muted text-lg mt-4 max-w-xl mx-auto">
            Getting dental care has never been easier. Three simple steps to your healthiest smile.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-deep via-dental-gold to-teal-medium hidden lg:block mx-32 opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={active ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.6, type: 'spring', bounce: 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div className={`w-28 h-28 rounded-full ${step.lightColor} flex items-center justify-center shadow-card group-hover:scale-105 transition-transform duration-300`}>
                      <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-glass`}>
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${step.color} flex items-center justify-center shadow-sm`}>
                      <span className="text-white text-xs font-bold">{step.number}</span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold ${step.textColor} mb-3`}>{step.title}</h3>
                  <p className="text-text-muted leading-relaxed max-w-xs">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a href="#appointment" className="btn-primary text-base">
            <Calendar size={18} />
            Book Your Appointment Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
