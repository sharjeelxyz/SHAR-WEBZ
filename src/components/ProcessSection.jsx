import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your requirements and define a clear, actionable product roadmap.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "System design and prototyping to ensure scalability and flawless user experience.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Iterative, agile sprints delivering high-quality, tested code continuously.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Seamless launch and infrastructure scaling to support your user growth.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-[#e5e5e5] border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-black tracking-tighter mb-6"
            >
              Methodology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed"
            >
              A rigorous, battle-tested framework designed for speed, precision,
              and enterprise quality.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {/* <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-black/10" /> */}

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pt-0 md:pt-16"
            >
              <div className="hidden md:flex absolute top-0 left-6 w-12 h-12 bg-white border border-black/20 rounded-full items-center justify-center text-sm font-bold text-black -translate-y-1/2 z-10">
                {step.number}
              </div>

              <div className="md:hidden text-2xl font-bold text-black/20 mb-4 tracking-tighter">
                {step.number}
              </div>

              <div className="pl-0 md:pl-6">
                <h3 className="text-xl font-semibold text-black mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
