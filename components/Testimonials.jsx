'use client';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    comment: "I was pretty nervous about getting my wisdom teeth removed, but Dr. Reshma and her team made the entire process easy. It was painless and very quick.",
    name: "Javed S.",
    tag: "Wisdom Tooth Extraction"
  },
  {
    id: 2,
    comment: "I had a wisdom tooth emergency and they managed to fit me in the same day. The extraction was painless, very quick and handled professionally.",
    name: "Phanindra P.",
    tag: "Emergency Extraction"
  },
  {
    id: 3,
    comment: "I had a painful tooth and got it removed here. The procedure was done without pain or swelling.",
    name: "Chandrashekhara B.",
    tag: "Tooth Extraction"
  },
  {
    id: 4,
    comment: "I went for cleaning, filling and whitening. The team made me feel comfortable and I’m happy with the results.",
    name: "Desi Noob",
    tag: "Cleaning & Whitening"
  },
  {
    id: 5,
    comment: "My 5-year-old daughter had a painless root canal here. The doctors were supportive and patient.",
    name: "Amrin A.",
    tag: "Pediatric Root Canal"
  },
  {
    id: 6,
    comment: "My tooth needed an implant before I traveled. The procedure was smooth and pain-free.",
    name: "Raghavendra Gopal",
    tag: "Dental Implant"
  },
  {
    id: 7,
    comment: "The clinic is clean and well equipped. The doctor is knowledgeable and makes you feel at ease.",
    name: "Hudha Sharin",
    tag: "General Checkup"
  },
  {
    id: 8,
    comment: "Visited for root canal and fillings. The doctor is experienced and the treatment went well.",
    name: "Suresh S.",
    tag: "RCT & Fillings"
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to hide/show arrows
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  // Mouse Drag to Scroll Logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button Arrow Navigation
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#FAFBFF] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-50/50 rounded-full blur-[100px] -ml-24 -mb-24"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-full border border-blue-50/50 mb-6"
            >
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#4285F4]">Verified Google Reviews</span>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a2b4b] tracking-tight leading-[1.1]"
            >
              Trusted by <span className="text-[#ef8139]">250+</span> <br className="hidden md:block"/> Happy Patients
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-[#F4C430] text-[#F4C430]" />)}
              </div>
              <p className="text-[#5e6d8a] font-medium text-lg">
                Rated <span className="text-[#1a2b4b] font-bold">5.0</span> on Google Reviews
              </p>
            </motion.div>
          </div>
          
          {/* Arrow Controls */}
          <div className="flex gap-3 hidden md:flex shrink-0">
            <button 
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className={`w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center transition-all ${!showLeftArrow ? 'opacity-30 cursor-not-allowed bg-transparent text-gray-400' : 'bg-white text-[#1a2b4b] shadow-sm hover:border-[#ef8139] hover:text-[#ef8139] hover:shadow-lg active:scale-95'}`}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className={`w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center transition-all ${!showRightArrow ? 'opacity-30 cursor-not-allowed bg-transparent text-gray-400' : 'bg-white text-[#1a2b4b] shadow-sm hover:border-[#ef8139] hover:text-[#ef8139] hover:shadow-lg active:scale-95'}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Scrollable Container Container */}
        <div className="relative group">
          {/* Gradient Fades for depth */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFBFF] to-transparent z-10 pointer-events-none transition-opacity duration-300"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFBFF] to-transparent z-10 pointer-events-none transition-opacity duration-300"></div>

          <div 
            ref={scrollContainerRef}
            className={`flex gap-8 overflow-x-auto hide-scrollbar pb-12 pt-4 px-4 -mx-4 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ 
              scrollBehavior: isDragging ? 'auto' : 'smooth',
            }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="shrink-0 w-[320px] md:w-[400px] bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50/50 flex flex-col justify-between hover:border-[#ef8139]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 transform-gpu"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="fill-[#F4C430] text-[#F4C430]" />
                    ))}
                  </div>
                  <blockquote className="text-[#3a4a67] font-medium leading-[1.6] mb-8 text-lg italic">
                    "{review.comment}"
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-blue-50/80 mt-auto flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1a2b4b]">
                      — {review.name}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#ef8139] bg-[#ef8139]/5 px-3 py-1.5 rounded-lg">
                      {review.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indication for more scroll */}
          {showRightArrow && (
            <div className="absolute right-4 bottom-0 animate-bounce text-[#ef8139]/40 hidden md:block">
              <ChevronRight size={20} />
            </div>
          )}
        </div>

      </div>

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
