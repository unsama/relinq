import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Dell', src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
  { name: 'HP', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Lenovo', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
  { name: 'Fujitsu', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Fujitsu_logo.svg' },
  { name: 'Acer', src: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg' },
];

export function BrandCarousel() {
  const brandList = [...brands, ...brands, ...brands]; // Tripled to ensure smooth infinite loop
  
  return (
    <div className="w-full overflow-hidden flex bg-white py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h3 className="text-center text-sm font-bold tracking-widest text-[#64748B] uppercase mb-8">
          Brands We Wholesale
        </h3>
        
        <div className="relative overflow-hidden w-full h-[60px]">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex items-center gap-20 absolute"
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {brandList.map((brand, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center w-[120px] h-[50px] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <img src={brand.src} alt={brand.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
