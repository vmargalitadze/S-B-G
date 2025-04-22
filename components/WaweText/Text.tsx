'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import bg from '@/public/hero/hero-bg_cleanup.png'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import logo from "@/public/about/axali.jpg";
const Text = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [hide, setHide] = useState(true);
    const t = useTranslations('text');

    const words = [
      t('first'),
      t('sec'),
      t('last'),
    ];
  const currentWord = Array.from(words[currentWordIndex]);
  const letterDuration = 0.1;
  const letterStagger = 0.05;

  const wordVariants = {
    hidden: {
      transition: {
        staggerChildren: letterStagger,
        staggerDirection: -1,
      }
    },
    visible: {
      transition: {
        staggerChildren: letterStagger,
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: letterDuration }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: letterDuration }
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(false); 
      setTimeout(() => {
        setHide(true); 
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, currentWord.length * letterStagger * 1000 + 500); 
      }, 3000); 
    }, 400); 
    return () => clearTimeout(timer);
  }, [currentWordIndex]);

  return (
    <>
<div className="relative h-[40vh] w-full flex items-center justify-center mt-10  py-10 text-white">
  {/* Background Image */}
  <Image
    src={bg}
    alt="Background"
    fill
    priority
    quality={85}
    className="object-cover z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  <motion.div
    className="absolute z-20 px-4 text-center"
    variants={wordVariants}
    initial="hidden"
    animate={hide ? "hidden" : "visible"}
  >
    <div className="text-2xl md:text-4xl font-semibold leading-snug">
  <div className="border w-[18%] mx-auto border-gray-500 rounded-full">
            <Image src={logo}  height={70} width={70} alt="logo" className="rounded-full " />
          </div>
      {currentWord.map((letter, idx) => (
        <motion.span
          key={idx}
          className="inline-block text-xl lg:text-[25px]"
          variants={letterVariants}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  </motion.div>
</div>
    
 
    </>
  );
};

export default Text;
