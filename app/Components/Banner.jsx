'use client';

import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner1.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />{' '}
        {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-7xl font-semibold leading-tight"
        >
          Timeless Comfort &<br /> Endless Luxury
        </motion.h1>

        <div className="mt-8 flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#vision"
            className="bg-white text-[#693728] px-6 py-3 rounded-md font-medium shadow hover:bg-neutral-100"
          >
            Our Vision
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#expertise"
            className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#693728] transition"
          >
            Explore Expertise
          </motion.a>
        </div>
      </div>
    </section>
  );
}
