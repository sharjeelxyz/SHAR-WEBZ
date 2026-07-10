import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/heroImg.png";

const easeOut = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#e5e5e5] overflow-hidden flex items-center pt-[5px] pb-8 md:pb-15">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-semibold text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase text-black leading-[0.85] tracking-tight mb-8 mt-22 md:mt-20"
          >
            Build
            <br />
            Your
            <br />
            Online Edge
          </motion.h1>

          {/* Short Description */}
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg md:text-xl font-medium text-black/70 leading-[1.4] max-w-md mb-12"
          >
            We build high-performance websites for ambitious brands. Minimal,
            premium, and engineered to turn visitors into clients.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="relative hidden xl:block"
        >
          <motion.img
            src={heroImg}
            alt="Hero"
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[820px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
