import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <section className="relative w-full min-h-screen bg-sys-background overflow-hidden flex items-center pt-20">
      {/* Texture & Glows */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0F172A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sys-accent/5 blur-[150px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="max-w-[72rem] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center z-10 relative">
        {/* Left Column: Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          {/* Section Label / Badge */}

          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-[5.25rem] text-sys-foreground leading-[1.05] tracking-[-0.02em] mb-6 relative"
          >
            We Build Websites That{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-sys-accent to-sys-accent-secondary bg-clip-text text-transparent">
                Convert.
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full rounded-sm bg-gradient-to-r from-[rgba(0,82,255,0.15)] to-[rgba(77,124,255,0.1)]"></span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-body text-base md:text-lg text-sys-muted-foreground leading-[1.75] max-w-lg mb-10"
          >
            No templates. Fast, SEO-optimized websites custom-designed with
            modern precision and bold character to turn visitors into paying
            clients.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sys-accent to-[#4D7CFF] px-8 py-4 font-body font-medium text-white shadow-sys-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sys-accent-lg hover:brightness-110 active:scale-[0.98]">
              Start your project
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button className="group w-full sm:w-auto rounded-xl border border-sys-border bg-transparent px-8 py-4 font-body font-medium text-sys-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-sys-accent/30 hover:bg-sys-muted hover:shadow-sys-md active:scale-[0.98]">
              View our portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Abstract Animated Graphic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center h-[600px] w-full"
        >
          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-sys-border/60"
          ></motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, ease: "linear", repeat: Infinity }}
            className="absolute w-[300px] h-[300px] rounded-full border border-sys-border/40"
          ></motion.div>

          {/* Floating Base Box */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="absolute z-10 w-[280px] h-[340px] rounded-2xl bg-sys-card shadow-sys-xl border border-sys-border p-6 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Bar Mockup */}
            <div className="flex gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-sys-border"></div>
              <div className="h-3 w-3 rounded-full bg-sys-border"></div>
              <div className="h-3 w-3 rounded-full bg-sys-border"></div>
            </div>

            {/* Content Mockup */}
            <div className="flex-1 space-y-4">
              <div className="h-4 w-3/4 rounded-md bg-sys-muted"></div>
              <div className="h-4 w-1/2 rounded-md bg-sys-muted"></div>
              <div className="mt-8 h-24 w-full rounded-lg bg-gradient-to-br from-sys-accent/10 to-sys-accent-secondary/5 border border-sys-accent/20"></div>
            </div>

            {/* Corner accent block */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sys-accent rounded-xl -rotate-6 shadow-sys-accent-lg blur-[2px]"></div>
          </motion.div>

          {/* Floating Element 2 (Foreground) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute z-20 -left-12 top-1/3 w-[160px] h-[100px] rounded-xl bg-sys-card shadow-sys-lg border border-sys-border p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sys-accent to-sys-accent-secondary flex items-center justify-center text-white shadow-sys-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <div className="h-2 w-12 rounded bg-sys-border mb-2"></div>
              <div className="h-2 w-16 rounded bg-sys-muted"></div>
            </div>
          </motion.div>

          {/* Floating Element 3 (Background) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute z-0 -right-8 bottom-1/4 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#F1F5F9] to-white shadow-sys-md border border-sys-border/50 flex items-center justify-center backdrop-blur-md"
          >
            <div
              className="w-16 h-16 rounded-full border-4 border-sys-accent/20 border-t-sys-accent animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
