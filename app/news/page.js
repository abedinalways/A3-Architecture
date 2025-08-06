'use client'
import React from 'react';
import { motion } from 'framer-motion';
const page = () => {
  return (
    <div className="bg-[#F8EDE3] min-h-screen text-center font-[archivo]">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-[#8D493A] text-5xl md:text-7xl font-semibold leading-tight pt-30 mx-auto"
      >
        Expert Insights and
        <br /> Design Inspiration
      </motion.h1>
    </div>
  );
};

export default page;