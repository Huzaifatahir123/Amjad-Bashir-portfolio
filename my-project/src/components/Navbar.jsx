import React, { useState } from "react";
import assets from "../assets/assets";
import { Menu,X } from "lucide-react";
import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { parent, fadeInUp, revealeffect } from "../animations/navanimation";

const Navbar = ({ theme, settheme }) => {
  const [side, setside] = useState(false);

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#Experience" },
    { label: "About", href: "#aboutus" },
    { label: "Contact", href: "#contactus" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div
        className="flex justify-between items-center
                   px-4 sm:px-6 lg:px-24 xl:px-40 py-5
                   dark:bg-dark dark:text-gray-100"
      >
        {/* Logo */}
        <motion.h1
          variants={revealeffect}
          initial="initial"
          viewport={{ once: true }}
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
          className="text-3xl font-black"
        >
          Amjad<span className="text-secondary">.</span>
        </motion.h1>

        {/* Desktop Navigation */}
        <div
          className="hidden sm:flex backdrop-blur-xl
                     bg-white/80 dark:bg-white/15
                     border border-gray-200 dark:border-white/20
                     rounded-2xl px-8 py-3 shadow-lg"
        >
          <motion.div
            variants={parent}
            viewport={{ once: true }}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                variants={fadeInUp}
                href={link.href}
                className="relative text-sm lg:text-base font-medium cursor-pointer
                           after:content-[''] after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0
                           after:bg-dark dark:after:bg-white
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={theme ? "sun" : "moon"}
              src={theme ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              className="w-8 cursor-pointer"
              onClick={() => settheme((prev) => !prev)}
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Connect Button */}
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/amjad-bashir-863571159"
            variants={revealeffect}
            initial="initial"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden sm:block px-6 py-2 rounded-xl text-sm lg:text-base
                       border border-gray-300 dark:border-white/30
                       text-gray-800 dark:text-gray-100
                       hover:bg-black hover:text-white
                       dark:hover:bg-white/20 dark:hover:text-white
                       transition-all duration-300"
          >
            Connect
          </motion.a>

          {/* Mobile Menu Icon */}
          <Menu
            variants={revealeffect}
            initial="initial"
            whileInView="visible"
            transition={{ duration: 1 }}
            onClick={() => setside(true)}
            
            className="w-8 sm:hidden cursor-pointer"
            alt="menu"
          />
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {side && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            viewport={{once:true}}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: easeInOut }}
            className="fixed inset-0 z-50 sm:hidden
                       backdrop-blur-xl bg-white/90 dark:bg-dark/90
                       flex flex-col justify-center items-center gap-6
                       text-gray-800 dark:text-gray-100"
          >
            {/* Close */}
            <X
              
              onClick={() => setside(false)}
              className="absolute top-6 right-6 w-8 cursor-pointer"
              alt="close"
            />

            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                onClick={() => setside(false)}
                href={link.href}
                className="text-lg font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
