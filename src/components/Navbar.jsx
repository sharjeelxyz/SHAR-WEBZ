import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/sharwebzLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-[400ms] ease-in-out ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md border-b border-black/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[90px] flex items-center justify-between">
          <div className="flex items-center gap-4 font-sans font-semibold tracking-tighter text-black text-xl">
            {/* <img src={logo} alt="Shar Webz Logo" className="h-10 w-10 object-contain" /> */}
            <span>SHAR | WEBZ</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-[15px] font-sans font-medium text-neutral-600 hover:text-black hover:bg-[#f5f5f5] rounded-full transition-all duration-[250ms]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-7 py-3 rounded-full text-[15px] font-sans font-medium hover:-translate-y-0.5 transition-transform duration-[250ms] shadow-sm">
              Start Project
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full border-b border-black/5 bg-white/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-8 py-10 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-lg font-sans font-medium text-neutral-600 hover:text-black hover:bg-[#f5f5f5] rounded-xl transition-all duration-[250ms]"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 mt-2 border-t border-black/5">
                  <button className="bg-black text-white px-6 py-4 rounded-full font-medium w-full text-lg shadow-sm">
                    Start Project
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
