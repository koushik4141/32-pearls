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

export default function SmileTransformations() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Results</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-dark">
            Smile <span className="text-accent">Transformations</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            See the life-changing results of our specialized dental treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {transformations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-[48px] shadow-soft border border-gray-100 group"
            >
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative group overflow-hidden rounded-[32px]">
                  <img src={item.before} alt="Before" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Before</div>
                </div>
                <div className="relative group overflow-hidden rounded-[32px]">
                  <img src={item.after} alt="After" className="w-full h-64 object-cover" />
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
        
        <div className="mt-16 text-center">
            <a href="#appointment" className="inline-flex items-center gap-2 text-text-dark font-black uppercase tracking-widest hover:text-accent transition-colors">
                Start Your Smile Transformation <span className="text-2xl">→</span>
            </a>
        </div>
      </div>
    </section>
  );
}
