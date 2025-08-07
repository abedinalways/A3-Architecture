'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactCTA() {
  const targetRef = useRef(null);

  // Set up scroll tracking on the target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Define animation ranges - adjusted for better timing
  const cardSlideUpRange = [0.2, 0.6];
  const contentFadeInRange = [0.4, 0.7];
  const stickyRange = [0.6, 1.0]; // Range where card stays sticky

  // Card animation: slides up from bottom and then stays in center
  const cardY = useTransform(
    scrollYProgress,
    [0, cardSlideUpRange[0], cardSlideUpRange[1], 1],
    [
      '100vh', // Start completely off-screen (bottom)
      '100vh', // Stay off-screen until animation starts
      '0vh', // Move to center
      '0vh', // Stay in center (sticky)
    ]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, cardSlideUpRange[0], cardSlideUpRange[1], 1],
    [
      0, // Invisible initially
      0, // Stay invisible until animation starts
      1, // Fade in as it slides up
      1, // Stay visible (sticky)
    ]
  );

  // For the dark overlay - appears as card slides up
  const overlayOpacity = useTransform(
    scrollYProgress,
    cardSlideUpRange,
    [0, 0.6]
  );

  // For the text and button: delayed fade-in after card is positioned
  const contentY = useTransform(scrollYProgress, contentFadeInRange, [
    '2rem',
    '0rem',
  ]);
  const contentOpacity = useTransform(
    scrollYProgress,
    contentFadeInRange,
    [0, 1]
  );

  return (
    // The scrollable container section - increased height for more scroll time
    <section ref={targetRef} className="relative h-[300vh]">
      {/* The sticky canvas that holds the animation */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/picture01.png"
            alt="A modern, well-lit room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Darkening Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 z-10 bg-black"
        />

        {/* Animated Content Card */}
        <motion.div
          style={{
            opacity: cardOpacity,
            y: cardY, // Slides up from bottom and stays in center
          }}
          className="relative z-20 flex max-w-2xl flex-col items-center justify-center rounded-2xl bg-[#F4E9DD] px-8 py-12 text-center md:px-16 md:py-20 mx-4"
        >
          {/* Animated Text and Button */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-6 font-serif text-3xl md:text-4xl text-[#8D493A] leading-tight">
              Ready to reimagine your space? Connect with us at Troscán to bring
              your vision to life with our expertise in design and decoration.
            </h2>
            <button className="rounded-md bg-[#8D493A] px-10 py-3 font-sans text-lg text-white transition-transform duration-300 hover:scale-105 active:scale-95 hover:bg-[#8D493A]">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
