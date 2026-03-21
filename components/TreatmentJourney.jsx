'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertCircle, Search, Stethoscope, Smile } from 'lucide-react';

const journeySteps = [
  {
    order: 1,
    id: 'problem',
    icon: AlertCircle,
    color: '#E74C3C',
    title: 'The Problem',
    description: 'Whether it is a sudden ache or a long-standing aesthetic concern, every journey begins with identifying the issue.',
    tagline: 'Silent symptoms or visible discomfort.',
  },
  {
    order: 2,
    id: 'diagnosis',
    icon: Search,
    color: '#3498DB',
    title: 'Expert Diagnosis',
    description: 'Our specialists use digital X-rays and 3D imaging to pinpoint the exact cause and plan your precise treatment.',
    tagline: 'High-definition digital accuracy.',
  },
  {
    order: 3,
    id: 'treatment',
    icon: Stethoscope,
    color: '#006D77',
    title: 'Elite Treatment',
    description: 'Minimal discomfort, maximum precision. We use the latest dental technology for faster, painless recovery.',
    tagline: 'Standard-setting oral healthcare.',
  },
  {
    order: 4,
    id: 'smile',
    icon: Smile,
    color: '#C9A84C',
    title: 'Perfect Smile',
    description: 'Leave with confidence. A fully restored, healthy smile that looks natural and feels incredible.',
    tagline: 'The 32 Pearls transformation.',
  },
];

export default function TreatmentJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-cloud-gray relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-medium/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-dental-gold text-sm font-semibold tracking-widest uppercase"
          >
            The Path to Perfection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl text-text-dark mt-4"
          >
            Your Treatment Journey
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-deep to-mint rounded-full mx-auto mt-6" />
        </div>

        <div className="relative mt-24">
          {/* Background Path line - Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 hidden lg:block -translate-y-1/2" />
          
          {/* Animated Path line - Desktop */}
          <motion.div 
            style={{ scaleX: pathLength }}
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-teal-deep via-mint to-dental-gold hidden lg:block -translate-y-1/2 origin-left z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    {/* Floating Glow */}
                    <div 
                      className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full scale-150"
                      style={{ backgroundColor: step.color }}
                    />
                    
                    {/* Icon Container */}
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)`,
                        boxShadow: `0 10px 30px -10px ${step.color}88`
                      }}
                    >
                      <Icon size={32} />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-text-dark flex items-center justify-center text-xs font-bold shadow-md border border-gray-100">
                        0{step.order}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-teal-deep transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-xs">
                    {step.description}
                  </p>
                  
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border"
                    style={{ 
                      borderColor: `${step.color}44`, 
                      color: step.color,
                      backgroundColor: `${step.color}08`
                    }}
                  >
                    {step.tagline}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <a 
            href="#appointment" 
            className="btn-gold group relative overflow-hidden px-10 py-5 rounded-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Journey Now 
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
