'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen bg-[#F8EDE3] overflow-hidden py-14 font-[archivo] px-8">
      <div className="container mx-auto px-6 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-[#8D493A] rounded-full"></div>
              <span className="text-[#8D493A] font-medium text-sm tracking-wide uppercase">
                About us
              </span>
            </motion.div>

            <motion.div
              className=""
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-medium">
                <span className="text-[#8D493A] block">Where Spaces</span>
                <span className="text-[#8D493A] block">
                  Inspire, and Design
                </span>
                <span className="text-[#8D493A] block">Comes Alive</span>
              </h1>
            </motion.div>

            <motion.div
              className="space-y-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-[#8D493A] text-md">
                At Troscan, we believe that every space has a story to tell. As
                a premier furniture design and room decorating agency.
              </p>

              <p className="text-[#8D493A] text-md">
                Our expert team blends timeless craftsmanship with innovative
                designs, ensuring each piece and layout reflects your unique
                taste and lifestyle. Whether you're looking to reimagine your
                living room.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <button className="bg-[#8D493A] hover:bg-[#a25c5c] text-[#F8EDE3] px-6 py-2.5 rounded-md font-medium text-md transition-all duration-300 shadow-lg hover:shadow-xl">
                More About Us
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative overflow-hidden rounded-md w-full h-[600px] cursor-pointer shadow-lg"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="w-full h-full"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Image
                  src="/images/about-image.png"
                  alt="About Section Image"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Optional overlay */}
              <motion.div
                className="absolute inset-0 "
                animate={{ opacity: isHovered ? 0.2 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
