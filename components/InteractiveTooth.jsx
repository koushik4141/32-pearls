'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const toothZones = [
  {
    id: 'enamel',
    label: 'Enamel',
    emoji: '🦷',
    color: '#83C5BE',
    cx: 100, cy: 55, rx: 55, ry: 30,
    treatmentTitle: 'Enamel Care',
    description: 'The enamel is the hardest substance in the human body — your tooth\'s first line of defense. Once damaged, enamel cannot regenerate.',
    treatments: ['Fluoride treatments', 'Teeth whitening', 'Dental bonding', 'Enamel recontouring'],
    icon: '✨',
  },
  {
    id: 'dentin',
    label: 'Dentin',
    emoji: '🔬',
    color: '#C9A84C',
    cx: 100, cy: 100, rx: 48, ry: 32,
    treatmentTitle: 'Dentin Treatments',
    description: 'Dentin lies beneath the enamel and contains tiny channels connecting to the nerve. Exposed dentin causes sensitivity to temperature and sweets.',
    treatments: ['Dental fillings', 'Inlays & onlays', 'Desensitizing treatment', 'Dental crowns'],
    icon: '🔧',
  },
  {
    id: 'pulp',
    label: 'Root Canal',
    emoji: '💉',
    color: '#E74C3C',
    cx: 100, cy: 148, rx: 22, ry: 30,
    treatmentTitle: 'Root Canal Therapy',
    description: 'The pulp is the living core of your tooth, containing nerves and blood vessels. When infected, a root canal removes the infection to save the tooth.',
    treatments: ['Root canal treatment', 'Pulpotomy', 'Pulp capping', 'Tooth extraction (last resort)'],
    icon: '🏥',
  },
  {
    id: 'gumline',
    label: 'Gum Line',
    emoji: '🌿',
    color: '#2ECC71',
    cx: 100, cy: 192, rx: 68, ry: 16,
    treatmentTitle: 'Gum Care',
    description: 'Healthy gums are the foundation of a healthy smile. Gum disease (periodontitis) is the leading cause of tooth loss in adults.',
    treatments: ['Teeth cleaning (prophylaxis)', 'Scaling & root planing', 'Gum grafting', 'Periodontal therapy'],
    icon: '🌿',
  },
];

export default function InteractiveTooth() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const activeZone = toothZones.find(z => z.id === (active || hovered));

  return (
    <section id="interactive-tooth" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Pearl shimmer bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 60%, rgba(131,197,190,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.05) 0%, transparent 50%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-dental-gold text-sm font-semibold tracking-widest uppercase">Interactive Education</span>
          <h2 className="section-heading text-3xl sm:text-4xl text-text-dark mt-2">
            Explore Your Tooth
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-deep to-mint rounded-full mx-auto mt-4" />
          <p className="text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Hover or tap on different parts of the tooth to learn about treatments available at 32 Pearls.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Tooth SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.25 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80">
              <svg viewBox="0 0 200 230" className="w-full h-full" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,109,119,0.15))' }}>
                <defs>
                  <radialGradient id="iTooth" cx="35%" cy="25%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#f0f8ff" />
                    <stop offset="100%" stopColor="#dbeef5" />
                  </radialGradient>
                  <radialGradient id="iGum" cx="50%" cy="20%" r="60%">
                    <stop offset="0%" stopColor="#ffb3b3" />
                    <stop offset="100%" stopColor="#ff8080" />
                  </radialGradient>
                  <linearGradient id="iShine" x1="0%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Tooth outline */}
                <path
                  d="M30 60 C30 30, 48 8, 68 8 C82 8, 90 22, 100 22 C110 22, 118 8, 132 8 C152 8, 170 30, 170 60 C170 88, 158 118, 152 145 C144 172, 136 218, 120 218 C108 218, 104 196, 100 183 C96 196, 92 218, 80 218 C64 218, 56 172, 48 145 C42 118, 30 88, 30 60 Z"
                  fill="url(#iTooth)"
                  stroke="rgba(131,197,190,0.3)"
                  strokeWidth="2"
                />
                {/* Shine */}
                <ellipse cx="72" cy="38" rx="18" ry="26" fill="url(#iShine)" transform="rotate(-15 72 38)" opacity="0.7"/>

                {/* Internal anatomy lines */}
                {/* Dentin layer */}
                <path
                  d="M42 70 C42 50, 54 32, 68 32 C80 32, 88 43, 100 43 C112 43, 120 32, 132 32 C146 32, 158 50, 158 70 C158 92, 148 114, 143 135 C136 155, 128 190, 116 190 C107 190, 104 174, 100 165 C96 174, 93 190, 84 190 C72 190, 64 155, 57 135 C52 114, 42 92, 42 70 Z"
                  fill="#f5ebe0"
                  stroke="rgba(201,168,76,0.3)"
                  strokeWidth="1"
                />
                {/* Pulp */}
                <path
                  d="M78 100 C78 88, 86 78, 100 78 C114 78, 122 88, 122 100 C122 120, 114 150, 108 170 C105 178, 103 185, 100 185 C97 185, 95 178, 92 170 C86 150, 78 120, 78 100 Z"
                  fill="#ffe0e0"
                  stroke="rgba(231,76,60,0.3)"
                  strokeWidth="1"
                />

                {/* Zone 1: Enamel hover */}
                <ellipse
                  cx="100" cy="40" rx="62" ry="34"
                  fill={hovered === 'enamel' || active === 'enamel' ? 'rgba(131,197,190,0.35)' : 'transparent'}
                  stroke={hovered === 'enamel' || active === 'enamel' ? '#83C5BE' : 'transparent'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHovered('enamel')}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === 'enamel' ? null : 'enamel')}
                />
                {/* Label: Enamel */}
                <text x="140" y="24" fontSize="9" fill="#006D77" fontWeight="700" fontFamily="Inter,sans-serif">Enamel</text>
                <line x1="132" y1="26" x2="112" y2="33" stroke="#006D77" strokeWidth="1" opacity="0.5"/>

                {/* Zone 2: Dentin hover */}
                <ellipse
                  cx="100" cy="90" rx="52" ry="34"
                  fill={hovered === 'dentin' || active === 'dentin' ? 'rgba(201,168,76,0.3)' : 'transparent'}
                  stroke={hovered === 'dentin' || active === 'dentin' ? '#C9A84C' : 'transparent'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHovered('dentin')}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === 'dentin' ? null : 'dentin')}
                />
                <text x="160" y="87" fontSize="9" fill="#C9A84C" fontWeight="700" fontFamily="Inter,sans-serif">Dentin</text>
                <line x1="156" y1="87" x2="148" y2="90" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>

                {/* Zone 3: Pulp / Root Canal hover */}
                <ellipse
                  cx="100" cy="140" rx="26" ry="40"
                  fill={hovered === 'pulp' || active === 'pulp' ? 'rgba(231,76,60,0.25)' : 'transparent'}
                  stroke={hovered === 'pulp' || active === 'pulp' ? '#E74C3C' : 'transparent'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHovered('pulp')}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === 'pulp' ? null : 'pulp')}
                />
                <text x="136" y="142" fontSize="9" fill="#E74C3C" fontWeight="700" fontFamily="Inter,sans-serif">Root Canal</text>
                <line x1="134" y1="140" x2="124" y2="140" stroke="#E74C3C" strokeWidth="1" opacity="0.5"/>

                {/* Zone 4: Gum line hover */}
                <ellipse
                  cx="100" cy="200" rx="66" ry="18"
                  fill={hovered === 'gumline' || active === 'gumline' ? 'rgba(46,204,113,0.25)' : 'transparent'}
                  stroke={hovered === 'gumline' || active === 'gumline' ? '#2ECC71' : 'transparent'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHovered('gumline')}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === 'gumline' ? null : 'gumline')}
                />
                <text x="12" y="203" fontSize="9" fill="#27AE60" fontWeight="700" fontFamily="Inter,sans-serif">Gum Line</text>
                <line x1="32" y1="201" x2="38" y2="200" stroke="#27AE60" strokeWidth="1" opacity="0.5"/>

                {/* Animated sparkle */}
                <circle cx="60" cy="30" r="3" fill="#C9A84C" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="145" cy="55" r="2" fill="#83C5BE" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.4s" repeatCount="indefinite"/>
                </circle>
              </svg>

              {/* Floating zone indicators */}
              <div className="absolute top-2 -right-4 flex flex-col gap-3">
                {toothZones.map(z => (
                  <button
                    key={z.id}
                    onClick={() => setActive(active === z.id ? null : z.id)}
                    className={`flex items-center gap-2 text-xs font-semibold px-2.5 py-1.5 rounded-full border-2 transition-all duration-300 ${
                      active === z.id
                        ? 'text-white scale-105 shadow-md'
                        : 'text-text-dark bg-white/80 hover:scale-105'
                    }`}
                    style={{
                      borderColor: z.color,
                      background: active === z.id ? z.color : undefined,
                    }}
                  >
                    <span>{z.emoji}</span> {z.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <div>
            <AnimatePresence mode="wait">
              {activeZone ? (
                <motion.div
                  key={activeZone.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-3xl p-8 shadow-glass-lg"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-card"
                      style={{ background: `${activeZone.color}20` }}
                    >
                      {activeZone.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: activeZone.color }}>
                        {activeZone.label}
                      </div>
                      <h3 className="text-xl font-bold text-text-dark">{activeZone.treatmentTitle}</h3>
                    </div>
                  </div>

                  <p className="text-text-muted leading-relaxed mb-6">{activeZone.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Available Treatments</p>
                    <div className="flex flex-wrap gap-2">
                      {activeZone.treatments.map(t => (
                        <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium border"
                          style={{ borderColor: `${activeZone.color}40`, color: activeZone.color, background: `${activeZone.color}10` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href="#appointment" className="btn-primary">
                    Book Consultation for {activeZone.label}
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass rounded-3xl p-8 shadow-card text-center"
                >
                  <div className="text-5xl mb-4">🦷</div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">Interactive Tooth Explorer</h3>
                  <p className="text-text-muted mb-5">
                    Click on any part of the tooth or use the buttons to learn about dental anatomy and the treatments our specialists provide.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {toothZones.map(z => (
                      <button
                        key={z.id}
                        onClick={() => setActive(z.id)}
                        className="px-3 py-1.5 rounded-full text-sm font-medium border-2 hover:scale-105 transition-transform"
                        style={{ borderColor: z.color, color: z.color, background: `${z.color}10` }}
                      >
                        {z.emoji} {z.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
