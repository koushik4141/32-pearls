'use client';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/gallery/img1.jpeg', title: 'Smile Transformation' },
  { id: 2, src: '/gallery/img2.jpeg', title: 'Cosmetic Dentistry' },
  { id: 3, src: '/gallery/img3.jpeg', title: 'Dental Implants' },
  { id: 4, src: '/gallery/img4.jpeg', title: 'Orthodontics' },
  { id: 5, src: '/gallery/img5.jpeg', title: 'Laser Treatment' },
  { id: 6, src: '/gallery/img6.jpeg', title: 'Root Canal Therapy' },
  { id: 7, src: '/gallery/img7.jpeg', title: 'Teeth Whitening' },
  { id: 8, src: '/gallery/img8.jpeg', title: 'Full Mouth Rehabilitation' },
  { id: 9, src: '/gallery/img9.jpeg', title: 'Pediatric Care' },
  { id: 10, src: '/gallery/img10.jpeg', title: 'Gum Contouring' },
  { id: 11, src: '/gallery/img11.jpeg', title: 'Dental Bridges' },
  { id: 12, src: '/gallery/img12.jpeg', title: 'Composite Bonding' },
  { id: 13, src: '/gallery/img13.jpeg', title: 'Emergency Care' },
  { id: 14, src: '/gallery/img14.jpeg', title: 'Smile Correction' },
  { id: 15, src: '/gallery/img15.jpeg', title: 'Advanced Diagnostics' },
  { id: 16, src: '/gallery/img16.jpeg', title: 'Clinical Precision' },
  { id: 17, src: '/gallery/img17.jpeg', title: 'State-of-the-art Clinic' },
  { id: 18, src: '/gallery/img18.jpeg', title: 'Patient Comfort' },
  { id: 19, src: '/gallery/img19.jpeg', title: 'Expert Team' },
  { id: 20, src: '/gallery/img20.jpeg', title: 'Modern Facilities' },
];

export default function ScrollGallery() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 500;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#FCFDFF] relative overflow-hidden" id="results">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1a2b4b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a2b4b]">Clinical Results & Gallery</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a2b4b] tracking-tight leading-[1.1]"
            >
              Our Daily Glimpse. <br className="hidden md:block"/>
              <span className="text-[#ef8139]">Proven Excellence.</span>
            </motion.h2>
          </div>
          
          {/* Controls */}
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className={`w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center transition-all ${!showLeftArrow ? 'opacity-20 cursor-not-allowed' : 'bg-white text-[#1a2b4b] shadow-sm hover:border-[#ef8139] hover:text-[#ef8139] active:scale-95'}`}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className={`w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center transition-all ${!showRightArrow ? 'opacity-20 cursor-not-allowed' : 'bg-white text-[#1a2b4b] shadow-sm hover:border-[#ef8139] hover:text-[#ef8139] active:scale-95'}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Scrollable Gallery */}
        <div className="relative group -mx-6 px-6 lg:-mx-12 lg:px-12">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FCFDFF] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FCFDFF] to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto hide-scrollbar pb-12 pt-4 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ 
              scrollBehavior: isDragging ? 'auto' : 'smooth',
            }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05, duration: 0.5 }}
                className="shrink-0 group/card relative"
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-[24px] overflow-hidden bg-[#f1f5f9] border border-blue-50/50 shadow-sm transition-all duration-500 group-hover/card:shadow-xl group-hover/card:-translate-y-2 group-hover/card:border-blue-100">
                  <Image 
                    src={img.src} 
                    alt={img.title}
                    fill
                    className="object-contain p-2 transition-transform duration-700 group-hover/card:scale-[1.02]"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm uppercase tracking-widest">{img.title}</span>
                        <span className="text-white/60 text-[10px] uppercase tracking-tighter">Click to Enlarge</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        <Maximize2 size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
               <Image 
                src={selectedImage.src} 
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/60 text-sm mt-1 uppercase tracking-widest font-semibold italic">32 Pearls Dental Clinic Excellence</p>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-2xl font-light"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
