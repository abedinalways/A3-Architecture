'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

// --- Data for the blog posts ---
const blogPosts = [
  {
    id: 1,
    date: 'February 5, 2022',
    title: 'The Art of Minimalist Interiors',
    description: 'Less is More: Designing Spaces That Speak Simplicity',
    imageSrc: '/images/showcase/pic03.png',
    link: '#',
  },
  {
    id: 2,
    date: 'February 22, 2022',
    title: 'Timeless Furniture Pieces Every Home Needs',
    description: 'Building a Home That Never Goes Out of Style',
    imageSrc: '/images/showcase/pic02.png',
    link: '#',
  },
  {
    id: 3,
    date: 'January 21, 2023',
    title: 'Psychology in Interior Design',
    description: 'Shaping Emotions Through Thoughtful Color Choices',
    imageSrc: '/images/showcase/pic01.png',
    link: '#',
  },
];

// --- Animation Variants ---
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// --- Reusable SectionHeader component ---
function SectionHeader({ subtitle, title, buttonText, buttonLink }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 pb-8 sm:px-8 md:px-12">
      <div>
        <motion.p
          className="font-sans text-sm font-medium text-[#8C3A3A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          • {subtitle}
        </motion.p>
        <motion.h2
          className="mt-1 max-w-xl font-serif text-4xl text-[#6a2d2d] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {title}
        </motion.h2>
      </div>
      <motion.a
        href={buttonLink}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex-shrink-0 rounded-lg bg-[#8C3A3A] px-6 py-3 font-sans text-base text-white shadow-lg transition-all duration-300 hover:bg-[#7a3333] hover:shadow-xl"
      >
        {buttonText}
      </motion.a>
    </div>
  );
}

// --- Individual Blog Card Component ---
function BlogCard({ post, variants }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="group block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href={post.link}
        className="block cursor-pointer"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Image Container with Fixed Hover Effect */}
        <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl shadow-lg">
          <motion.div
            className="relative h-full w-full"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={post.imageSrc}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700"
              priority={post.id <= 3}
            />
          </motion.div>

          {/* Subtle Overlay - Fixed opacity issue */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0.3,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Read More Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm"
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <svg
              className="h-4 w-4 text-[#8C3A3A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          {/* Date with animated dot */}
          <div className="flex items-center gap-2">
            <motion.div
              className="h-2 w-2 rounded-full bg-[#8C3A3A]"
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-sm font-medium text-gray-500">{post.date}</p>
          </div>

          {/* Title with hover effect */}
          <motion.h3
            className="font-serif text-2xl leading-tight text-[#6a2d2d]"
            animate={{
              color: isHovered ? '#8C3A3A' : '#6a2d2d',
            }}
            transition={{ duration: 0.3 }}
          >
            {post.title}
          </motion.h3>

          {/* Description */}
          <p className="font-sans text-base leading-relaxed text-gray-600">
            {post.description}
          </p>

         
        </div>
      </motion.a>
    </motion.div>
  );
}

// --- Main export: The complete News Section ---
export default function NewsSection() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section className="w-full bg-[#F4E9DD] py-16 md:py-24 font-[archivo]">
      <SectionHeader
        subtitle="News"
        title="Stay Inspired with Interior Trends"
        buttonText="View All News"
        buttonLink="/news"
      />

      <motion.div
        ref={gridRef}
        variants={gridVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-8 md:grid-cols-2 md:gap-10 md:px-12 lg:grid-cols-3 lg:gap-12"
      >
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} variants={cardVariants} />
        ))}
      </motion.div>

     
    </section>
  );
}
