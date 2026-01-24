import React, { useState } from "react";
import assets from "../assets/assets";
import { Menu, X } from "lucide-react";

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
        <h1 className="text-3xl font-black">
          Amjad<span className="text-secondary">.</span>
        </h1>

        {/* Desktop Navigation */}
        <div
          className="hidden sm:flex backdrop-blur-xl
                     bg-white/80 dark:bg-white/15
                     border border-gray-200 dark:border-white/20
                     rounded-2xl px-8 py-3 shadow-lg"
        >
          <div className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative text-sm lg:text-base font-medium cursor-pointer
                           after:content-[''] after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0
                           after:bg-dark dark:after:bg-white
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <img
            src={theme ? assets.sun_icon : assets.moon_icon}
            alt="theme toggle"
            className="w-8 cursor-pointer"
            onClick={() => settheme((prev) => !prev)}
          />

          {/* Connect Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/amjad-bashir-863571159"
            className="hidden sm:block px-6 py-2 rounded-xl text-sm lg:text-base
                       border border-gray-300 dark:border-white/30
                       text-gray-800 dark:text-gray-100
                       hover:bg-black hover:text-white
                       dark:hover:bg-white/20 dark:hover:text-white
                       transition-all duration-300"
          >
            Connect
          </a>

          {/* Mobile Menu Icon */}
          <Menu
            onClick={() => setside(true)}
            className="w-8 sm:hidden cursor-pointer"
            alt="menu"
          />
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {side && (
        <div
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
            <a
              key={i}
              onClick={() => setside(false)}
              href={link.href}
              className="text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;