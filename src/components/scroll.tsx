import React from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';

function Scroll() {
  const scrollLeft = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const images = [
    {
      url: '/images/puja/p1.jpeg',
     
    },
    {
      url: '/images/puja/p2.jpeg',
   
    },
    {
      url: '/images/jal-ganga/g1.jpeg',
    },
    {
      url: '/images/jal-ganga/g2.jpeg',
    },
    {
      url: '/images/jal-ganga/g3.jpeg',
      
    },
    {
      url: '/images/dusherra/d1.jpeg',
      
    },
    {
        url: '/images/dusherra/d2.jpeg',
        
      },
      {
        url: '/images/dusherra/d3.jpeg',
        
      },
  ];

  return (
    <div className=" flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">नगर पालिका कार्यक्रम</h1>
          <div className="relative group">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div 
              id="gallery"
              className="flex overflow-x-auto scrollbar-hide gap-4 pb-4  px-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="flex-none w-80 snap-start"
                >
                  <div className="relative group/item overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                     
                      className="w-full h-64 object-cover transform transition-transform duration-300 group-hover/item:scale-110"
                    />
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>   
    </div>
  );
}

export default Scroll;