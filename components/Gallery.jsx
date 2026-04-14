'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  }, [isDragging, updateSlider]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, [isDragging, updateSlider]);

  useEffect(() => {
    const onUp = () => setIsDragging(false);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  // Generate before/after smile SVG colors
  const BeforeSmile = () => (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
      <defs>
        <linearGradient id="bgBefore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#E8D5C0" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#bgBefore)" />
      <text x="200" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill="#8B7355" fontFamily="Inter, sans-serif">BEFORE TREATMENT</text>
      {/* Face oval */}
      <ellipse cx="200" cy="175" rx="100" ry="130" fill="#FDDBB4" stroke="#E8C99A" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="168" cy="145" rx="12" ry="8" fill="#4A3728" />
      <ellipse cx="232" cy="145" rx="12" ry="8" fill="#4A3728" />
      <circle cx="172" cy="142" r="3" fill="white" />
      <circle cx="236" cy="142" r="3" fill="white" />
      {/* Eyebrows */}
      <path d="M152 130 Q168 124 184 130" stroke="#7A5C42" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M216 130 Q232 124 248 130" stroke="#7A5C42" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Lips */}
      <path d="M170 205 Q200 220 230 205" stroke="#C87878" strokeWidth="2" fill="#D4A0A0" strokeLinecap="round" />
      <path d="M170 205 Q200 195 230 205" stroke="#C87878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Teeth - yellowish/misaligned */}
      <clipPath id="mouthBefore">
        <path d="M172 205 Q200 218 228 205 L228 225 Q200 238 172 225 Z" />
      </clipPath>
      <rect x="170" y="205" width="60" height="22" fill="white" clipPath="url(#mouthBefore)" rx="2" />
      {/* Tooth lines - overlapping/crooked */}
      <g clipPath="url(#mouthBefore)" fill="#D4C87A" stroke="#B8A850" strokeWidth="1">
        <rect x="174" y="204" width="14" height="20" rx="2" transform="rotate(5 181 214)" />
        <rect x="186" y="203" width="13" height="21" rx="2" transform="rotate(-3 192 213)" />
        <rect x="197" y="204" width="14" height="20" rx="2" transform="rotate(4 204 214)" />
        <rect x="209" y="205" width="13" height="19" rx="2" transform="rotate(-6 215 214)" />
      </g>
      {/* Stain marks */}
      <circle cx="189" cy="211" r="2" fill="#C4B060" opacity="0.6" clipPath="url(#mouthBefore)" />
      <circle cx="208" cy="213" r="1.5" fill="#C4B060" opacity="0.5" clipPath="url(#mouthBefore)" />
      {/* Nose */}
      <ellipse cx="200" cy="180" rx="12" ry="8" fill="#F0C89A" stroke="#E0B880" strokeWidth="1" />
      <circle cx="196" cy="181" r="4" fill="#E0A87A" opacity="0.5" />
      <circle cx="204" cy="181" r="4" fill="#E0A87A" opacity="0.5" />
    </svg>
  );

  const AfterSmile = () => (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
      <defs>
        <linearGradient id="bgAfter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDF6F9" />
          <stop offset="100%" stopColor="#D4EEF2" />
        </linearGradient>
        <linearGradient id="toothShine" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#F0F8FF" />
          <stop offset="100%" stopColor="#E0F4F8" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#bgAfter)" />
      <text x="200" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill="#006D77" fontFamily="Inter, sans-serif">AFTER TREATMENT</text>
      {/* Glow effect */}
      <ellipse cx="200" cy="200" rx="120" ry="90" fill="rgba(131,197,190,0.15)" />
      {/* Face oval */}
      <ellipse cx="200" cy="175" rx="100" ry="130" fill="#FDDBB4" stroke="#E8C99A" strokeWidth="2" />
      {/* Eyes - happier */}
      <ellipse cx="168" cy="145" rx="12" ry="9" fill="#3A2820" />
      <ellipse cx="232" cy="145" rx="12" ry="9" fill="#3A2820" />
      <circle cx="173" cy="141" r="3.5" fill="white" />
      <circle cx="237" cy="141" r="3.5" fill="white" />
      {/* smile lines at eyes */}
      <path d="M156 155 Q162 160 168 155" stroke="#C89070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M232 155 Q238 160 244 155" stroke="#C89070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Eyebrows */}
      <path d="M152 128 Q168 122 184 128" stroke="#6A4C3C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M216 128 Q232 122 248 128" stroke="#6A4C3C" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Big happy mouth */}
      <path d="M165 202 Q200 232 235 202" stroke="#C05070" strokeWidth="2" fill="#E89090" strokeLinecap="round" />
      <path d="M165 202 Q200 195 235 202" stroke="#C05070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Perfect white teeth */}
      <clipPath id="mouthAfter">
        <path d="M167 202 Q200 230 233 202 L233 225 Q200 250 167 225 Z" />
      </clipPath>
      {/* Tooth backgrounds */}
      <g clipPath="url(#mouthAfter)">
        <rect x="167" y="200" width="66" height="28" fill="url(#toothShine)" />
        {/* Individual teeth */}
        <rect x="169" y="200" width="12" height="26" rx="2" fill="url(#toothShine)" stroke="#E0EEF5" strokeWidth="0.5" />
        <rect x="182" y="199" width="13" height="27" rx="2" fill="url(#toothShine)" stroke="#E0EEF5" strokeWidth="0.5" />
        <rect x="196" y="199" width="13" height="27" rx="2" fill="url(#toothShine)" stroke="#E0EEF5" strokeWidth="0.5" />
        <rect x="210" y="200" width="12" height="26" rx="2" fill="url(#toothShine)" stroke="#E0EEF5" strokeWidth="0.5" />
        {/* Shine on teeth */}
        <rect x="172" y="201" width="3" height="10" rx="1.5" fill="white" opacity="0.7" />
        <rect x="185" y="201" width="3" height="10" rx="1.5" fill="white" opacity="0.7" />
        <rect x="199" y="201" width="3" height="10" rx="1.5" fill="white" opacity="0.7" />
        <rect x="213" y="201" width="3" height="10" rx="1.5" fill="white" opacity="0.7" />
      </g>
      {/* Nose */}
      <ellipse cx="200" cy="180" rx="12" ry="8" fill="#F0C89A" stroke="#E0B880" strokeWidth="1" />
      <circle cx="196" cy="181" r="4" fill="#E0A87A" opacity="0.4" />
      <circle cx="204" cy="181" r="4" fill="#E0A87A" opacity="0.4" />
      {/* Star sparkles */}
      <text x="148" y="198" fontSize="16" fill="#C9A84C">✦</text>
      <text x="246" y="195" fontSize="12" fill="#C9A84C">✦</text>
      <text x="260" y="215" fontSize="10" fill="#83C5BE">✧</text>
    </svg>
  );

  const results = [
    { label: 'Smile Design', detail: 'Veneers & Whitening' },
    { label: 'Implant Restoration', detail: 'Full Arch Replacement' },
    { label: 'Orthodontic Result', detail: 'Clear Aligner Treatment' },
  ];

  // Array of 20 images copied from the 'p gallery'
  const galleryImages = Array.from({ length: 20 }, (_, i) => `/gallery/img${i + 1}.jpeg`);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-cloud-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-dental-gold text-sm font-semibold tracking-widest uppercase">Transformations</span>
          <h2 className="section-heading text-3xl sm:text-4xl text-text-dark mt-2">
            Smile Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-deep to-mint rounded-full mx-auto mt-4" />
          <p className="text-text-muted text-lg mt-4 max-w-xl mx-auto">
            See the dramatic before & after transformations our patients have experienced. Drag the slider to compare.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div
              ref={containerRef}
              className="slider-container rounded-3xl overflow-hidden shadow-glass-lg aspect-[4/3] select-none"
              onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => { setIsDragging(true); updateSlider(e.touches[0].clientX); }}
              onTouchMove={handleTouchMove}
            >
              {/* After (full width background) */}
              <div className="absolute inset-0">
                <AfterSmile />
              </div>

              {/* Before (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="w-full h-full" style={{ width: `${100 / (sliderPos / 100)}%` }}>
                  <BeforeSmile />
                </div>
              </div>

              {/* Divider line */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-lg z-10"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-glass flex items-center justify-center cursor-ew-resize">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M7 2L3 6L7 10" stroke="#006D77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 2L17 6L13 10" stroke="#006D77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 glass-dark rounded-lg px-3 py-1.5 z-10">
                <span className="text-white text-xs font-semibold">BEFORE</span>
              </div>
              <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-1.5 z-10">
                <span className="text-teal-deep text-xs font-semibold">AFTER</span>
              </div>
            </div>
            <p className="text-center text-text-muted text-sm mt-4">← Drag to compare before & after →</p>
          </motion.div>

          {/* Results Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="section-heading text-2xl text-text-dark mb-6">
              Real Results, <span className="text-teal-gradient">Real Smiles</span>
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Our specialists use cutting-edge techniques and premium materials to deliver smile transformations that last a lifetime. Every treatment is tailored to the individual patient's needs and aesthetics.
            </p>

            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, x: 30 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-4 flex items-center gap-4 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-deep/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-deep/20 transition-colors">
                  <span className="text-xl">😁</span>
                </div>
                <div>
                  <div className="font-semibold text-text-dark">{r.label}</div>
                  <div className="text-text-muted text-sm">{r.detail}</div>
                </div>
                <div className="ml-auto">
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Success</span>
                </div>
              </motion.div>
            ))}

            <div className="mt-6">
              <a href="#appointment" className="btn-primary">
                <span>Transform Your Smile</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Real Clinic Photos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-text-dark uppercase tracking-tight">Our Clinic & Cases</h3>
            <p className="text-text-muted mt-2 font-medium">A glimpse into our daily work and happy patients</p>
          </div>
          
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={active ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.05) }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-soft hover:shadow-premium transition-all duration-300"
              >
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                <img 
                  src={src} 
                  alt={`Gallery Image ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
