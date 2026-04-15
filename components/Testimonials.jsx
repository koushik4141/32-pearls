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
      const scrollAmount = 350; // Approximated card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-full border border-gray-100 mb-4"
            >
              {/* SVG Google 'G' Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#333]">Verified Reviews</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#333] tracking-tight">
              Trusted by <span className="text-[#ef8139]">250+</span> Happy Patients
            </h2>
            <p className="mt-4 text-[#666] font-medium flex items-center gap-2">
              Rated 5.0 
              <span className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#F4C430] text-[#F4C430]" />)}
              </span>
              on Google
            </p>
          </div>
          
          {/* Arrow Controls */}
          <div className="flex gap-4 hidden md:flex shrink-0">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#333] hover:border-[#ef8139] hover:text-[#ef8139] hover:shadow-md transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#333] hover:border-[#ef8139] hover:text-[#ef8139] hover:shadow-md transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="relative -mx-6 px-6 lg:-mx-12 lg:px-12">
          {/* Gradient Fades for depth */}
          <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-[#FCFCFC] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-[#FCFCFC] to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto hide-scrollbar pb-10 pt-4 snap-x snap-mandatory ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="shrink-0 w-[300px] md:w-[360px] bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between snap-center hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="fill-[#F4C430] text-[#F4C430]" />
                    ))}
                  </div>
                  <p className="text-[#333] font-medium leading-relaxed mb-8 text-[15px]">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-5 border-t border-gray-100 mt-auto flex items-center justify-between">
                  <span className="font-black text-[#111]">
                    — {review.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#ef8139] bg-[#ef8139]/10 px-3 py-1.5 rounded-full">
                    {review.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
