'use client'
import React from 'react';
import {motion} from 'framer-motion';


const imageData = [
  {
    src: '/images/design/image01.png',
    initial: { x: -200, y: -50, rotate: -15, scale: 0.9 },
  },
  {
    src: '/images/design/image02.png',
    initial: { x: 50, y: -150, rotate: 5, scale: 1 },
  },
  {
    src: '/images/design/image03.png',
    initial: { x: 250, y: -80, rotate: 12, scale: 0.95 },
  },
  {
    src: '/images/design/image04.png',
    initial: { x: -250, y: 100, rotate: -10, scale: 1 },
  },
  {
    src: '/images/design/image5.png', // Assuming 'image5.png' is correct
    initial: { x: 0, y: 50, rotate: -4, scale: 1.1 },
  },
  {
    src: '/images/design/image06.png',
    initial: { x: 200, y: 150, rotate: 18, scale: 0.9 },
  },
];


const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren', 
      staggerChildren: 0.1, 
    },
  },
};

// Variants for each image item in the grid.
const itemVariants = {
 
  hidden: custom => ({ ...custom, opacity: 0 }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
};


const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8, 
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Design = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 sm:p-8 bg-[#F8EDE3] min-h-screen">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible" // Triggers animation when component is in view
        viewport={{ once: true, amount: 0.2 }} // Animates once when 20% is visible
      >
        {imageData.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-full"
            custom={image.initial} // Passes initial positions to variants
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={`Design showcase ${index + 1}`}
              className="rounded-xl object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>

      
    </div>
  );
};

export default Design;
