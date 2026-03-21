'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function StorySection({ id, children, bgClass = '', className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [60, 0, 0, -40]);

  return (
    <div ref={ref} id={id} className={`relative min-h-screen flex items-center justify-center overflow-hidden ${bgClass}`}>
      {children}
      <motion.div style={{ opacity, y }} className={`relative z-10 w-full ${className}`} />
    </div>
  );
}

/* Animated plaque/tooth problem SVG */
const ProblemTooth = () => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="toothBody" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#e8dfd0" />
        <stop offset="100%" stopColor="#c8bfa8" />
      </radialGradient>
      <radialGradient id="plaque" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b7355" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#6b5335" stopOpacity="0.4" />
      </radialGradient>
      <filter id="crack"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" /><feDisplacementMap in="SourceGraphic" scale="2" /></filter>
    </defs>
    {/* Tooth body */}
    <path d="M30 55 C30 28, 45 10, 65 10 C80 10, 90 25, 100 25 C110 25, 120 10, 135 10 C155 10, 170 28, 170 55 C170 85, 155 115, 148 145 C140 175, 132 230, 118 230 C106 230, 103 205, 100 192 C97 205, 94 230, 82 230 C68 230, 60 175, 52 145 C45 115, 30 85, 30 55 Z" fill="url(#toothBody)" />
    {/* Crack */}
    <path d="M90 40 L95 80 L88 120 L100 160" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    {/* Plaque spots */}
    <circle cx="70" cy="60" r="12" fill="url(#plaque)" opacity="0.8" />
    <circle cx="130" cy="75" r="10" fill="url(#plaque)" opacity="0.65" />
    <circle cx="85" cy="100" r="8" fill="url(#plaque)" opacity="0.7" />
    <ellipse cx="115" cy="130" rx="14" ry="9" fill="url(#plaque)" opacity="0.55" />
    {/* Bacteria animated dots */}
    <circle cx="60" cy="45" r="3" fill="#8b5e3c" opacity="0.6"><animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="140" cy="55" r="2.5" fill="#8b5e3c" opacity="0.5"><animate attributeName="r" values="2.5;3.5;2.5" dur="1.7s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="40" r="2" fill="#8b5e3c" opacity="0.55"><animate attributeName="r" values="2;3;2" dur="2.3s" repeatCount="indefinite"/></circle>
    {/* Pain lines */}
    <line x1="28" y1="55" x2="10" y2="40" stroke="#e74c3c" strokeWidth="2" opacity="0.6"><animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/></line>
    <line x1="172" y1="55" x2="190" y2="40" stroke="#e74c3c" strokeWidth="2" opacity="0.6"><animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite"/></line>
    <line x1="25" y1="75" x2="5" y2="70" stroke="#e74c3c" strokeWidth="1.5" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite"/></line>
    <line x1="175" y1="75" x2="195" y2="70" stroke="#e74c3c" strokeWidth="1.5" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.2s" repeatCount="indefinite"/></line>
  </svg>
);

/* Healthy clinic illustration */
const ClinicIllustration = () => (
  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="clinicBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EDF6F9" />
        <stop offset="100%" stopColor="#D4EEF2" />
      </linearGradient>
      <linearGradient id="equipment" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#006D77" />
        <stop offset="100%" stopColor="#028090" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="300" height="200" fill="url(#clinicBg)" rx="16"/>
    {/* Dental chair base */}
    <rect x="80" y="120" width="140" height="12" rx="6" fill="#B0C4CB"/>
    <rect x="90" y="80" width="120" height="50" rx="8" fill="#D4EAF0"/>
    {/* Chair back */}
    <rect x="180" y="60" width="20" height="80" rx="10" fill="#B0C4CB"/>
    {/* Light arm */}
    <line x1="200" y1="20" x2="200" y2="60" stroke="#006D77" strokeWidth="4" strokeLinecap="round"/>
    <line x1="200" y1="20" x2="230" y2="20" stroke="#006D77" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="230" cy="25" r="18" fill="#C9A84C" opacity="0.9"/>
    <circle cx="230" cy="25" r="12" fill="#E8C96F"/>
    <circle cx="230" cy="25" r="6" fill="white" opacity="0.8"/>
    {/* Patient (simplified) */}
    <ellipse cx="135" cy="90" rx="22" ry="16" fill="#FDDBB4"/>
    <circle cx="135" cy="75" r="14" fill="#FDDBB4"/>
    {/* Doctor silhouette */}
    <circle cx="68" cy="70" r="18" fill="#006D77" opacity="0.85"/>
    <text x="68" y="75" textAnchor="middle" fontSize="14" fill="white">👨‍⚕️</text>
    <rect x="50" y="90" width="36" height="50" rx="8" fill="#028090" opacity="0.8"/>
    {/* Doctor tool */}
    <line x1="86" y1="100" x2="115" y2="82" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Cross/medical symbols */}
    <text x="255" y="50" fontSize="22" fill="#006D77">+</text>
    <text x="25" y="40" fontSize="18" fill="#C9A84C">✦</text>
    {/* Text */}
    <text x="150" y="175" textAnchor="middle" fontSize="11" fill="#006D77" fontWeight="600" fontFamily="Inter, sans-serif">Advanced Technology · Expert Care</text>
  </svg>
);

const stories = [
  {
    id: 'story-1',
    tag: 'The Journey Begins',
    headline: 'Your Healthy Smile\nBegins Here',
    sub: 'Every great smile starts with a single decision. Welcome to a new standard of dental care.',
    visual: null, // hero visual
    bg: 'bg-hero-gradient',
    textLight: true,
    align: 'center',
  },
  {
    id: 'story-2',
    tag: 'The Problem',
    headline: 'Tooth Problems Often\nBegin Silently',
    sub: 'Most dental issues develop painlessly until it\'s too late. Plaque buildup, hidden decay, and gum disease can worsen without regular care.',
    visual: 'problem',
    bg: 'bg-gradient-to-br from-slate-900 to-slate-800',
    textLight: true,
    align: 'left',
    highlight: 'Don\'t wait for pain. Prevention saves smiles.',
  },
  {
    id: 'story-3',
    tag: 'The Solution',
    headline: 'Expert Care Meets\nAdvanced Technology',
    sub: 'At 32 Pearls Dental Clinic, our 4 specialist doctors combine years of expertise with state-of-the-art equipment for precise, painless treatment.',
    visual: 'clinic',
    bg: 'bg-gradient-to-br from-teal-deep/95 to-teal-medium/95',
    textLight: true,
    align: 'right',
    highlight: 'Open 7 days · 8AM–10PM · Hulimavu, Bangalore',
  },
  {
    id: 'story-4',
    tag: 'The Result',
    headline: 'Your Transformed\nSmile Awaits',
    sub: 'Hundreds of patients have walked out of 32 Pearls with renewed confidence. Your transformation is our greatest reward.',
    visual: 'result',
    bg: 'bg-gradient-to-br from-dental-gold-dark/90 to-dental-gold/90',
    textLight: true,
    align: 'center',
  },
];

export default function StoryScroll() {
  return (
    <section className="relative" id="story">
      {stories.map((story, si) => {
        const ref = useRef(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const y = useTransform(scrollYProgress, [0.05, 0.3, 0.7, 0.95], [80, 0, 0, -50]);

        const isLeft = story.align === 'left';
        const isRight = story.align === 'right';
        const isCenter = story.align === 'center';

        return (
          <motion.div
            key={story.id}
            ref={ref}
            className={`relative min-h-screen flex items-center py-24 overflow-hidden ${story.bg}`}
          >
            {/* Pearl texture overlay */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 60%), 
                                  radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)`,
              }}
            />
            {/* Animated bg orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-float pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-float-delayed pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                style={{ opacity, y }}
                className={`grid ${story.visual ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}
              >
                {/* Text — left or center */}
                <div className={`${isRight ? 'lg:order-2' : ''} ${isCenter ? 'text-center mx-auto max-w-3xl' : ''}`}>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
                  >
                    {story.tag}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="section-heading text-4xl sm:text-5xl lg:text-6xl text-white whitespace-pre-line mb-5"
                  >
                    {story.headline}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="text-white/75 text-lg leading-relaxed mb-6"
                  >
                    {story.sub}
                  </motion.p>

                  {story.highlight && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <span className="text-white/90 text-sm font-semibold">{story.highlight}</span>
                    </motion.div>
                  )}

                  {story.id === 'story-1' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.55 }}
                      className="flex justify-center gap-4 mt-8"
                    >
                      <a href="#appointment" className="btn-gold">Book Free Consultation</a>
                      <a href="#interactive-tooth" className="btn-outline">Explore Your Tooth →</a>
                    </motion.div>
                  )}
                  {story.id === 'story-4' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.55 }}
                      className="flex justify-center gap-4 mt-8"
                    >
                      <a href="#appointment" className="btn-primary" style={{ background: 'rgba(255,255,255,0.9)', color: '#1A2332' }}>
                        Start My Transformation →
                      </a>
                    </motion.div>
                  )}
                </div>

                {/* Visual */}
                {story.visual && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.2 }}
                    className={`${isRight ? 'lg:order-1' : ''} flex items-center justify-center`}
                  >
                    {story.visual === 'problem' && (
                      <div className="relative w-56 h-72 animate-float">
                        <ProblemTooth />
                        {/* Warning badge */}
                        <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg animate-pulse">
                          <span className="text-2xl">⚠️</span>
                        </div>
                      </div>
                    )}
                    {story.visual === 'clinic' && (
                      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-glass-lg animate-float-delayed">
                        <ClinicIllustration />
                      </div>
                    )}
                    {story.visual === 'result' && (
                      <div className="glass rounded-3xl p-6 text-center shadow-glass-lg">
                        <div className="text-6xl mb-3 animate-bounce-subtle">😁</div>
                        <div className="text-white text-2xl font-bold mb-1">5,000+</div>
                        <div className="text-white/70 text-sm">Smiles Transformed</div>
                        <div className="mt-4 flex justify-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-dental-gold fill-dental-gold" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-white/60 text-xs mt-1">4.9/5 · 250+ Reviews</div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Story progress dots */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {stories.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                    i === si ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
