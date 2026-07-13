import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Code,
  Layout,
  Cpu,
  PenTool,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "Website Development",
    description:
      "High-performance websites built with modern technologies that convert visitors into customers.",
    features: ["Next.js & React", "Headless CMS", "Performance Optimization"],
    icon: <Code size={20} strokeWidth={1.5} />,
  },
  {
    num: "02",
    title: "Web Applications",
    description:
      "Complex logic transformed into simple user interfaces. We build robust SaaS platforms.",
    features: ["Custom Dashboards", "API Integration", "Database Design"],
    icon: <Layout size={20} strokeWidth={1.5} />,
  },
  {
    num: "03",
    title: "AI Automation",
    description:
      "Integrating advanced AI to automate workflows, analyze data, and enhance user experiences.",
    features: ["LLM Integrations", "Custom Chatbots", "Workflow Automation"],
    icon: <Cpu size={20} strokeWidth={1.5} />,
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "Interfaces that prioritize user journey, conversion rates, and stunning modern aesthetics.",
    features: ["Wireframing", "Prototyping", "Design Systems"],
    icon: <PenTool size={20} strokeWidth={1.5} />,
  },
  {
    num: "05",
    title: "SEO & Performance",
    description:
      "Technical SEO and performance optimizations that guarantee top-tier lighthouse scores.",
    features: ["Technical SEO", "Speed Optimization", "Analytics Setup"],
    icon: <TrendingUp size={20} strokeWidth={1.5} />,
  },
  {
    num: "06",
    title: "Maintenance & Support",
    description:
      "Ongoing support ensuring your digital assets remain secure, updated, and performing well.",
    features: ["Security Audits", "Uptime Monitoring", "Monthly Updates"],
    icon: <Settings size={20} strokeWidth={1.5} />,
  },
];

const WhatWeBuildSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress of this entire section to animate the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the progress for a more premium feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Move the little indicator dot along with the line
  const indicatorY = useTransform(scaleY, (v) => `${v * 100}%`);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 relative bg-[#e5e5e5] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white"
      id="what-we-build"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-20 relative items-start">
        {/* Left Column - Sticky Details */}
        <div className="w-full bg-black rounded-xl p-10 lg:w-[35%] relative lg:sticky lg:top-0 lg:pt-16 lg:pb-28">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 font-display text-[#ffffff]">
            What We Build
          </h2>

          <p className="text-[#797979] text-lg leading-relaxed mb-6 max-w-md">
            We partner with ambitious brands to create digital experiences that
            set industry standards. Premium solutions for businesses that value
            performance, scalability, and long-term growth.
          </p>

          <h3 className="text-xl font-semibold text-[#d2d2d2] mb-3">
            Built for Modern Businesses
          </h3>

          <p className="text-[#797979] leading-7 mb-6 max-w-md">
            Every project is carefully designed to combine beautiful user
            experiences with clean development, ensuring every interaction feels
            effortless while supporting your business goals.
          </p>

          <h3 className="text-xl font-semibold text-[#d2d2d2] mb-3">
            From Idea to Launch
          </h3>

          <p className="text-[#797979] leading-7 mb-8 max-w-md">
            Whether it's a high-converting marketing website, a custom web
            application, AI automation, or an internal business platform, we
            build digital products that are fast, scalable, and ready for the
            future.
          </p>

          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-[#ffffff] text-black text-sm font-medium rounded hover:bg-[#e3e2e2d1] hover:text-[#000000] border border-[#111111] transition-all duration-300"
          >
            Start a Project
          </a>
        </div>

        {/* Right Column - Cards & Timeline */}
        <div className="w-full lg:w-[65%] relative pl-8 lg:pl-12">
          {/* Vertical Animated Timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-px">
            {/* Background Line (Grey) */}
            <div className="absolute inset-0 w-full bg-[#d9d9d9]"></div>

            {/* Progress Line (Black) */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#b4b3b3] origin-top h-full"
              style={{ scaleY }}
            ></motion.div>

            {/* Little Dot Indicator */}
            <motion.div
              className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-[#b4b4b4] -translate-y-1/2"
              style={{ top: indicatorY }}
            ></motion.div>
          </div>

          {/* Service Cards List */}
          <div className="flex flex-col gap-12 pb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.num}
                initial="inactive"
                whileInView="active"
                viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
                variants={{
                  inactive: {
                    scale: 1,
                    borderColor: "white",
                  },
                  active: {
                    scale: 1,
                    borderColor: "#ebdbdb",
                  },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative bg-white border border-[#d9d9d9] rounded-2xl p-6 max-h-[210px]  flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute -top-3 -right-1 text-7xl font-bold text-[#f6f6f6] select-none pointer-events-none transition-colors duration-500 z-0">
                  {service.num}
                </div>

                {/* Header */}
                <div className="flex flex-col gap-[10px] mb-[10px] relative z-10">
                  <div className="w-9 h-9 flex items-center justify-center text-[#8f8d8d] border border-[#d9d9d9] rounded-lg mr-3 bg-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                    {service.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#000000e0]">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm font-semibold text-[#9a9797] leading-7 mb-5 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-wrap gap-2 mb-5 relative z-10">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-[11px] text-[#555555] px-2.5 py-1 border border-[#e3e3e3] rounded-full bg-[#fafafa] font-medium"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
