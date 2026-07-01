import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Web Engineering',
    description: 'High-performance, scalable web applications built with modern frameworks and robust architectures.'
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile experiences that feel fluid, intuitive, and engage users instantly.'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Smart features and enterprise LLM integrations that give your product an unparalleled competitive edge.'
  },
  {
    title: 'UI/UX Design',
    description: 'Sleek, conversion-optimized interfaces engineered to wow your customers and simplify complex workflows.'
  },
  {
    title: 'Data Analytics',
    description: 'Custom dashboards and secure analytics pipelines enabling you to make precise, data-driven decisions.'
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security audits and infrastructure implementations to keep your critical data impenetrable.'
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            We deliver end-to-end solutions, combining deep technical expertise with world-class design to build scalable software.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="border-t border-white/20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-white/20 transition-colors duration-500 cursor-pointer ${
                hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'
              }`}
            >
              
              {/* Number & Title */}
              <div className="flex items-start md:items-center gap-8 md:gap-16 md:w-1/2 mb-4 md:mb-0">
                <span className="text-gray-500 font-mono text-sm mt-2 md:mt-0">
                  0{index + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                  {service.title}
                </h3>
              </div>

              {/* Description & Icon */}
              <div className="flex items-start justify-between md:w-1/2 pl-12 md:pl-0">
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  {service.description}
                </p>
                <div className="ml-4 p-3 rounded-full border border-white/0 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300">
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;
