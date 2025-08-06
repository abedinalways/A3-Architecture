'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const sections = [
  {
    id: 1,
    image: '/images/demoProjects/image01.png',
    title: 'Serene Urban Retreat',
    description: 'Where modern comfort meets peaceful sophistication.',
  },
  {
    id: 2,
    image: '/images/demoProjects/image02.png',
    title: 'Luxurious Coastal Living',
    description: 'Bringing the beauty of the shore into your home.',
  },
  {
    id: 3,
    image: '/images/demoProjects/image03.png',
    title: 'Modern Elegance in Every Room',
    description: 'Redefining spaces with timeless style and innovation.',
  },
];

const DemoProjects = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative">
      {sections.map((section, index) => {
        const sectionRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ['start end', 'end start'], 
        });

        // Image zoom in/out
        const scale = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [1.1, 1, 0.95]
        );
        // Image fade in/out
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.3, 0.7, 1],
          [0, 1, 1, 0]
        );
        // Text fade & slide up
        const textY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
        const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

        return (
          <section
            key={section.id}
            ref={sectionRef}
            className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          >
            {/* Background image */}
            <motion.div
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scale,
                opacity,
              }}
              className="absolute inset-0"
            />

            {/* Overlay */}
            <motion.div
              style={{
                y: textY,
                opacity: textOpacity,
              }}
              className="relative z-110  text-white p-8 rounded-xl max-w-xl text-center font-[archivo]"
            >
              <h2 className="text-6xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg mb-6">{section.description}</p>
              <button className=" text-[#8D493A] bg-[#F8EDE3] rounded-md text-md font-bold px-6 py-3 hover:bg-[#71372a] transition-all duration-200 transform hover:scale-105 shadow-md ">
                View Project
              </button>
            </motion.div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 " />
          </section>
        );
      })}
    </div>
  );
};

export default DemoProjects;
