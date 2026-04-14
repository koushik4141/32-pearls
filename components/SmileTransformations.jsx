'use client';
import { motion } from 'framer-motion';

const transformations = [
  {
    before: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=60', // Placeholder but realistic
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=60',
    title: 'Smile Rejuvenation',
    desc: 'Complete aesthetic restoration using porcelain veneers.'
  },
  {
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60',
    after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop&q=60',
    title: 'Alignment Correction',
    desc: '12-month transformation with invisible aligners.'
  }
];

// Array of 20 images from the 'p gallery'
const galleryImages = Array.from({ length: 20 }, (_, i) => `/gallery/img${i + 1}.jpeg`);

export default function SmileTransformations() {
  return (
    <section className="py-24 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Real Results</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-dark">
            Smile <span className="text-accent">Transformations</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            See the life-changing results of our specialized dental treatments and a glimpse into our daily work.
          </p>
        </div>

        {/* Featured Before/After */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {transformations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-[48px] shadow-soft border border-gray-100 group hover:shadow-premium transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative group/img overflow-hidden rounded-[32px]">
                  <img src={item.before} alt="Before" className="w-full h-56 md:h-64 object-cover transform transition-transform duration-700 group-hover/img:scale-110" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Before</div>
                </div>
                <div className="relative group/img overflow-hidden rounded-[32px]">
                  <img src={item.after} alt="After" className="w-full h-56 md:h-64 object-cover transform transition-transform duration-700 group-hover/img:scale-110" />
                  <div className="absolute top-4 left-4 bg-accent text-text-dark text-[10px] font-black uppercase px-3 py-1 rounded-full">After</div>
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-display font-black text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Side Scrolling Gallery */}
        <div className="mb-8 px-4">
          <h3 className="text-2xl font-black text-text-dark mb-2">Our Clinical Gallery</h3>
          <p className="text-text-muted">Swipe or drag to explore actual clinical photos and patient smiles.</p>
        </div>
      </div>

      {/* Full-width scrolling container */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Fading edges for a premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFFBF2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFFBF2] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-10 py-4 flex-nowrap shrink-0"
          animate={{ x: [0, -4000] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {/* We repeat the array twice to create a seamless infinite loop */}
          {[...galleryImages, ...galleryImages].map((src, idx) => (
            <div 
              key={idx} 
              className="w-[280px] h-[360px] md:w-[320px] md:h-[400px] shrink-0 rounded-[32px] overflow-hidden shadow-soft border border-gray-100 group relative bg-white"
            >
              <img 
                src={src} 
                alt={`Clinic Photo ${idx}`} 
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 text-center">
          <a href="#appointment" className="inline-flex items-center gap-2 text-text-dark font-black uppercase tracking-widest hover:text-accent transition-colors bg-white px-8 py-4 rounded-full shadow-soft hover:shadow-premium">
              Start Your Smile Transformation <span className="text-xl ml-2">→</span>
          </a>
      </div>
    </section>
  );
}
