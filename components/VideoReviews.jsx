'use client';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&auto=format&fit=crop&q=60',
    name: 'Anjali Sharma',
    treatment: 'Full Smile Design'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60',
    name: 'Robert Wilson',
    treatment: 'Dental Implants'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1582560475093-ba36a44880b2?w=800&auto=format&fit=crop&q=60',
    name: 'Priya Mehta',
    treatment: 'Teeth Whitening'
  }
];

export default function VideoReviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary rounded-full border border-accent/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-dark">Stories</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-dark">
            Patient <span className="text-accent">Video Reviews</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-premium">
                <img 
                  src={vid.thumbnail} 
                  alt={vid.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-text-dark flex items-center justify-center shadow-gold transform group-hover:scale-110 transition-all duration-500">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="mt-6 px-2">
                <h3 className="text-xl font-display font-black text-text-dark">{vid.name}</h3>
                <p className="text-accent font-bold text-sm uppercase tracking-widest">{vid.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
