'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Heart, Star } from 'lucide-react';

const badges = [
  {
    icon: Users,
    number: 4,
    suffix: '',
    label: 'Specialist Doctors',
    sublabel: 'BDS & MDS Qualified',
    color: 'from-teal-deep to-teal-medium',
    iconBg: 'bg-teal-deep/10',
    iconColor: 'text-teal-deep',
  },
  {
    icon: Zap,
    number: 9,
    suffix: '+',
    label: 'Dental Services',
    sublabel: 'Advanced Treatments',
    color: 'from-dental-gold to-dental-gold-light',
    iconBg: 'bg-dental-gold/10',
    iconColor: 'text-dental-gold',
  },
  {
    icon: Heart,
    number: 5000,
    suffix: '+',
    label: 'Happy Patients',
    sublabel: 'And Growing',
    color: 'from-pink-500 to-rose-400',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: Star,
    number: 4.9,
    suffix: '/5',
    label: 'Patient Rating',
    sublabel: '250+ Google Reviews',
    color: 'from-amber-500 to-yellow-400',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
];

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ badge, index, active }) {
  const count = useCountUp(badge.number, 1600, active);
  const Icon = badge.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, type: 'spring', bounce: 0.3 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 group cursor-default"
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl ${badge.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={badge.iconColor} />
        </div>
        <div>
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-extrabold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
              {count}
            </span>
            <span className={`text-xl font-bold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
              {badge.suffix}
            </span>
          </div>
          <p className="font-semibold text-text-dark mt-0.5">{badge.label}</p>
          <p className="text-xs text-text-muted mt-0.5">{badge.sublabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrustBadges() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-cloud-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-dental-gold text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="section-heading text-3xl sm:text-4xl text-text-dark mt-2">
            Trusted by Thousands of Patients
          </h2>
          <p className="text-text-muted text-lg mt-3 max-w-2xl mx-auto">
            Experience world-class dental care backed by experience, technology, and genuine patient satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <StatCard key={badge.label} badge={badge} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
