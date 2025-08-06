'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const servicesData = [
  {
    id: 1,
    title: 'Custom Furniture Design',
    imageSrc: '/images/services/service-1.png',
  },
  {
    id: 2,
    title: 'Room Decoration & Styling',
    imageSrc: '/images/services/service-2.png',
  },
  {
    id: 3,
    title: 'Space Planning & Interior Layout',
    imageSrc: '/images/services/service-3.png',
  },
  {
    id: 4,
    title: 'Home Renovations & Remodeling',
    imageSrc: '/images/services/service-4.png',
  },
  {
    id: 5,
    title: 'Lighting Design',
    imageSrc: '/images/services/service-5.png',
  },
  {
    id: 6,
    title: 'Virtual Interior Design Consultations',
    imageSrc: '/images/services/service-6.png',
  },
];


const imageVariants = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
};

export default function Services() {
  
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex md:flex-wrap-reverse justify-end mt-10 mb-6 font-[archivo]">
     
          
          <h1 className="text-[#8D493A] font-medium text-md tracking-wide uppercase">
            Our Expartise
          </h1>
        
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-medium mr-4">
          <span className="text-[#8D493A] block">Selecting the ideal</span>
          <span className="text-[#8D493A] block">elements to elevate</span>
          <span className="text-[#8D493A] block">your space</span>
        </h1>
      </div>

      <section className="font-[archivo] flex flex-col md:flex-row h-auto md:h-[70vh] min-h-[600px] w-full bg-[#F8EDE3] ">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} // Change in key triggers the animation
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={imageVariants.transition}
              className="w-full h-full"
            >
              <Image
                src={servicesData[activeIndex].imageSrc}
                alt={servicesData[activeIndex].title}
                fill
                className="object-cover w-[70%] rounded-xl ml-10 mb-5"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Services List */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
          <ul className="w-full max-w-md space-y-2">
            {servicesData.map((service, index) => (
              <li
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative cursor-pointer py-4 border-b border-gray-200/70"
              >
                {/* Animated highlight bar */}
                <motion.div
                  initial={false}
                  animate={{ width: activeIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 h-full bg-[#8C3A3A] z-0"
                />

                {/* Text content */}
                <div className="relative z-10 flex items-center space-x-6">
                  <span
                    className={`text-sm font-light transition-colors duration-500 ${
                      activeIndex === index ? 'text-gray-200' : 'text-gray-400'
                    }`}
                  >
                    0{service.id}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl transition-colors duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
