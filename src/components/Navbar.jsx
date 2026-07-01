import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Grip } from "lucide-react";
import logo from "../assets/sharwebzLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white backdrop-blur-md shadow-sm  py-0"
            : "bg-transparent  border-b-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo (Always on the left) */}
          <div className="flex items-center gap-2 font-bold tracking-tighter text-black text-2xl">
            <span>
              {" "}
              <img src={logo} alt="" height={40} width={40} />
            </span>
            SHAR | WEBZ
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center h-full">
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                // Initial State: Sleek Icon at the top
                <motion.div
                  key="menu-icon"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span className="text-sm font-semibold tracking-widest uppercase text-gray-400 group-hover:text-black transition-colors">
                    Menu
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                    <Grip size={18} className="text-black" />
                  </div>
                </motion.div>
              ) : (
                // Scrolled State: Full Tabs
                <motion.div
                  key="full-tabs"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center gap-10 text-sm font-medium"
                >
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-black transition-colors duration-300"
                  >
                    Services
                  </a>
                  <a
                    href="#process"
                    className="text-gray-500 hover:text-black transition-colors duration-300"
                  >
                    Process
                  </a>
                  <a
                    href="#work"
                    className="text-gray-500 hover:text-black transition-colors duration-300"
                  >
                    Work
                  </a>

                  <button className="bg-black text-white px-6 py-2.5 text-sm rounded hover:bg-gray-900 transition-all duration-300 font-semibold tracking-wide ml-4">
                    Get in touch
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden absolute top-full left-0 w-full border-b border-black/5 bg-white shadow-xl overflow-hidden"
            >
              <div className="px-8 py-10 flex flex-col gap-6">
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-gray-500 hover:text-black transition-colors"
                >
                  Services
                </a>
                <a
                  href="#process"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-gray-500 hover:text-black transition-colors"
                >
                  Process
                </a>
                <a
                  href="#work"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-gray-500 hover:text-black transition-colors"
                >
                  Work
                </a>
                <button className="bg-black text-white px-6 py-4 rounded font-semibold mt-4 w-full text-lg">
                  Get in touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
