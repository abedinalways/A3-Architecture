'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Enhanced image properties with more sophisticated positioning
const images = [
  {
    src: '/images/design/image01.png',
    initialX: '-60vw',
    initialY: '-40vh',
    finalX: '8%',
    finalY: '5%',
    rotation: -8,
    parallax: 80,
    scale: 1.1,
    zIndex: 3,
  },
  {
    src: '/images/design/image02.png',
    initialX: '0vw',
    initialY: '-60vh',
    finalX: '35%',
    finalY: '-10%',
    rotation: 12,
    parallax: 120,
    scale: 0.9,
    zIndex: 6,
  },
  {
    src: '/images/design/image03.png',
    initialX: '60vw',
    initialY: '-45vh',
    finalX: '70%',
    finalY: '-5%',
    rotation: -6,
    parallax: 60,
    scale: 1.05,
    zIndex: 2,
  },
  {
    src: '/images/design/image04.png',
    initialX: '-55vw',
    initialY: '60vh',
    finalX: '12%',
    finalY: '55%',
    rotation: 15,
    parallax: 140,
    scale: 0.95,
    zIndex: 4,
  },
  {
    src: '/images/design/image5.png',
    initialX: '0vw',
    initialY: '65vh',
    finalX: '42%',
    finalY: '48%',
    rotation: -10,
    parallax: 90,
    scale: 1.08,
    zIndex: 5,
  },
  {
    src: '/images/design/image06.png',
    initialX: '55vw',
    initialY: '50vh',
    finalX: '75%',
    finalY: '42%',
    rotation: 8,
    parallax: 110,
    scale: 0.92,
    zIndex: 1,
  },
];

export default function DesignSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring configurations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Enhanced animation ranges with more nuanced timing
  const imageSlideInRange = [0, 0.4];
  const textFadeInRange = [0.35, 0.55];
  const textExitRange = [0.8, 1];
  const parallaxRange = [0.4, 1];
  const rotationRange = [0.4, 1];

  // Sophisticated transforms for the title
  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.35, 0.55, 0.8, 1],
    [0, 0, 1, 1, 0]
  );
  const textY = useTransform(smoothProgress, textFadeInRange, ['3rem', '0rem']);
  const textScale = useTransform(
    smoothProgress,
    [0.35, 0.45, 0.55],
    [0.95, 1.02, 1]
  );

  // Background gradient animation
  const backgroundOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [1, 0.95, 0.95, 0.9]
  );

  return (
    <section ref={containerRef} className="relative h-[350vh]">
      {/* Dynamic background with subtle gradient */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="sticky top-0 h-screen bg-[#F8EDE3]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />

        <div className="relative h-full flex items-center justify-center overflow-hidden">
          {/* Enhanced container for images */}
          <div className="relative w-full max-w-[1600px] h-[900px]">
            {images.map((img, index) => {
              // Smooth slide-in animations with easing
              const x = useTransform(smoothProgress, imageSlideInRange, [
                img.initialX,
                img.finalX,
              ]);
              const y = useTransform(smoothProgress, imageSlideInRange, [
                img.initialY,
                img.finalY,
              ]);
              const opacity = useTransform(
                smoothProgress,
                [0, 0.1, 0.4],
                [0, 0.3, 1]
              );
              const scale = useTransform(smoothProgress, imageSlideInRange, [
                0.7,
                img.scale,
              ]);

              // Enhanced parallax with rotation
              const parallaxY = useTransform(smoothProgress, parallaxRange, [
                0,
                -img.parallax,
              ]);
              const dynamicRotation = useTransform(
                smoothProgress,
                rotationRange,
                [img.rotation, img.rotation * 0.7]
              );

              // Subtle hover-like scaling effect based on scroll
              const hoverScale = useTransform(
                smoothProgress,
                [0.5, 0.7, 1],
                [1, 1.05, 1]
              );

              return (
                <motion.div
                  key={img.src}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    x,
                    y,
                    opacity,
                    scale,
                    rotate: dynamicRotation,
                    zIndex: img.zIndex,
                  }}
                  className="w-[380px] h-[380px]"
                >
                  <motion.div
                    style={{
                      y: parallaxY,
                      scale: hoverScale,
                    }}
                    className="w-full h-full"
                  >
                    <div className="relative w-full h-full group">
                      {/* Enhanced shadow and border effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/10 rounded-2xl transform rotate-1" />
                      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                        <Image
                          src={img.src}
                          alt={`Design showcase ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 300px, 380px"
                          priority={index < 3}
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced animated title with better typography */}
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY,
              scale: textScale,
            }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="text-center max-w-4xl px-6">
              {/* Background blur for text readability */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl" />
              <div className="relative">
                <motion.h2
                  className="text-4xl md:text-7xl lg:text-8xl font-light text-[#2C2922] leading-tight tracking-wide"
                  style={{
                    fontFamily: 'Georgia, serif',
                    textShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <span className="block mb-2">Transforming</span>
                  <span className="block text-[#8B7355] italic font-normal">
                    spaces
                  </span>
                  <span className="block mt-2">with style</span>
                </motion.h2>
                <motion.p
                  className="mt-6 text-lg md:text-xl text-[#5A5247] font-light max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Through Troscán's exquisite design expertise
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          style={{
            opacity: useTransform(
              smoothProgress,
              [0, 0.3, 0.7, 1],
              [0, 1, 1, 0]
            ),
            scale: useTransform(smoothProgress, [0, 1], [1, 1.2]),
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-full h-full rounded-full bg-gradient-radial from-[#8B7355]/20 via-transparent to-transparent blur-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
