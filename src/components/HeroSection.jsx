import React from "react";
import { motion } from "framer-motion";
import sideImg from "../assets/hero-visual.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
      <div className="flex items-center gap-6  max-w-7xl mx-auto px-6 py-2 text-center">
        <div className="lg:w-4/5 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-black tracking-tighter leading-tight mb-8"
          >
            We Build Websites That{" "}
            <span className="font-extralight">Actually</span> Bring You
            Customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            No templates. Fast, SEO Optimized websites designed to convert
            visitors into paying clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded font-semibold hover:bg-black/80 transition-colors">
              Start your project
            </button>
            <button className="w-full sm:w-auto bg-transparent text-black border border-black/20 px-8 py-4 rounded font-semibold hover:bg-black/5 transition-colors">
              View our portfolio
            </button>
          </motion.div>
        </div>
        <div className="hidden lg:block">
          <img src={sideImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
