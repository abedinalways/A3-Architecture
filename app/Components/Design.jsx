'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';


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


function AnimatedTitle({ progress }) {
  const title = 'Transforming spaces with style,';
  const subtitle = "through Troscán's exquisite design expertise.";
  const words = title.split(' ');

  const textFadeInRange = [0.35, 0.55];
  const textFadeOutRange = [0.8, 1];

  const opacity = useTransform(
    progress,
    [
      0,
      textFadeInRange[0],
      textFadeInRange[1],
      textFadeOutRange[0],
      textFadeOutRange[1],
    ],
    [0, 0, 1, 1, 0]
  );
  const y = useTransform(progress, textFadeInRange, ['3rem', '0rem']);

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center z-10 text-center"
    >
      <div className="max-w-4xl px-6 pointer-events-none">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-serif font-light text-black leading-tight tracking-wide"
          style={{ textShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-[#5A5247] font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}


function AnimatedImage({ img, progress }) {
  const imageSlideInRange = [0, 0.4];
  const parallaxRange = [0.4, 1];

 
  const opacity = useTransform(progress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

 
  const scale = useTransform(
    progress,
    [0, 0.4, 0.8, 1],
    [0.6, img.scale, img.scale, 0.5]
  );

  const x = useTransform(progress, imageSlideInRange, [
    img.initialX,
    img.finalX,
  ]);
  const y = useTransform(progress, imageSlideInRange, [
    img.initialY,
    img.finalY,
  ]);
  const dynamicRotation = useTransform(progress, imageSlideInRange, [
    img.rotation * 2,
    img.rotation,
  ]);
  const parallaxY = useTransform(progress, parallaxRange, [0, -img.parallax]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY: '-50%',
        x,
        y,
        opacity,
        scale,
        rotate: dynamicRotation,
        zIndex: img.zIndex,
      }}
      className="w-[280px] h-[380px] md:w-[350px] md:h-[450px]"
    >
      <motion.div style={{ y: parallaxY }} className="w-full h-full">
        <div className="relative w-full h-full group overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
          <Image
            src={img.src}
            alt={`Design showcase by Troscán`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 280px, 350px"
            priority={img.zIndex > 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function DesignSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.001,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = e => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseX.set((clientX - left) / width - 0.5);
      mouseY.set((clientY - top) / height - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-7deg', '7deg']);

  // --- NEW: Dynamic background glow transforms ---
  const glowOpacity = useTransform(
    smoothProgress,
    [0, 0.25, 0.75, 1],
    [0, 0.5, 0.5, 0]
  );
  const glowScale = useTransform(smoothProgress, [0, 1], [0.5, 2.5]);
  const glowX = useTransform(smoothProgress, [0, 1], ['-100%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full">
       
        <motion.div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            x: glowX,
            scale: glowScale,
            opacity: glowOpacity,
            background:
              'radial-gradient(circle at center, rgba(139, 115, 85, 0.3), transparent 60%)',
            filter: 'blur(100px)',
          }}
        />

        <motion.div
          style={{ perspective: '1500px' }}
          className="relative h-full w-full"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-full h-full"
          >
            {images.map(img => (
              <AnimatedImage
                key={img.src}
                img={img}
                progress={smoothProgress}
              />
            ))}
          </motion.div>

          <AnimatedTitle progress={smoothProgress} />
        </motion.div>
      </div>
    </section>
  );
}
