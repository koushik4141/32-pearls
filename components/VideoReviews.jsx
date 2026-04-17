'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

const reviewsData = [
  {
    id: 1,
    url: '/videos/review1.mp4',
    name: 'Anjali Sharma',
    treatment: 'Full Smile Design'
  },
  {
    id: 2,
    url: '/videos/review2.mp4',
    name: 'Robert Wilson',
    treatment: 'Dental Implants'
  },
  {
    id: 3,
    url: '/videos/review3.mp4',
    name: 'Priya Mehta',
    treatment: 'Teeth Whitening'
  }
];

export default function VideoReviews() {
  const [selectedVideo, setSelectedVideo] = useState(null);

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
          {reviewsData.map((vid, i) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(vid.url)}
            >
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-premium bg-gray-100">
                <video 
                  src={vid.url} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  muted
                  playsInline
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

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <video
                src={selectedVideo}
                className="w-full h-full"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

