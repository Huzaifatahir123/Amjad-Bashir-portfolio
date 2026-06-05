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
      {/* NAVBAR */}
      <header className="sticky top-0 z-50">
        <div
          className="
            backdrop-blur-xl
            bg-white/70 dark:bg-slate-950/70
            border-b border-slate-200/70 dark:border-white/10
          "
        >
          <div
            className="
              max-w-7xl mx-auto
              px-6 lg:px-10
              h-20
              flex items-center justify-between
            "
          >
            {/* Logo */}
            <a href="/" className="group">
              <h1
                className="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-slate-900 dark:text-white
                "
              >
                Amjad
                <span
                  className="
                    text-emerald-500
                    group-hover:text-emerald-400
                    transition-colors
                  "
                >
                  .
                </span>
              </h1>
            </a>

            {/* Desktop Nav */}
            <nav
              className="
                hidden md:flex
                items-center gap-10
              "
            >
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="
                    relative
                    text-sm
                    font-medium
                    text-slate-700
                    dark:text-slate-300
                    transition-all
                    duration-300
                    hover:text-emerald-600
                    dark:hover:text-emerald-400

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-emerald-500
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => settheme((prev) => !prev)}
                className="
                  w-11 h-11
                  rounded-xl
                  border border-slate-200
                  dark:border-white/10
                  flex items-center justify-center
                  hover:bg-slate-100
                  dark:hover:bg-white/5
                  transition-all
                "
              >
                <img
                  src={theme ? assets.sun_icon : assets.moon_icon}
                  alt="theme"
                  className="w-5 h-5"
                />
              </button>

              {/* CTA */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/amjad-bashir-863571159"
                className="
                  hidden md:flex
                  items-center
                  px-6 py-3
                  rounded-xl

                  bg-emerald-600
                  text-white
                  font-medium

                  hover:bg-emerald-500
                  hover:-translate-y-0.5

                  shadow-lg
                  shadow-emerald-500/20

                  transition-all
                  duration-300
                "
              >
                Schedule a Call
              </a>

              {/* Mobile Menu */}
              <button
                onClick={() => setside(true)}
                className="
                  md:hidden
                  w-11 h-11
                  rounded-xl
                  border border-slate-200
                  dark:border-white/10
                  flex items-center justify-center
                "
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[80%]
          bg-white dark:bg-slate-950
          z-[999]
          transition-all duration-500
          border-l border-slate-200 dark:border-white/10

          ${side ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex justify-end">
          <button onClick={() => setside(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col px-8 pt-10 gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setside(false)}
              className="
                text-lg
                font-medium
                text-slate-700
                dark:text-slate-300
                hover:text-emerald-600
                transition-colors
              "
            >
              {link.label}
            </a>
          ))}

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/amjad-bashir-863571159"
            className="
              mt-4
              bg-emerald-600
              text-white
              px-5 py-3
              rounded-xl
              text-center
              font-medium
            "
          >
            Schedule a Call
          </a>
        </div>
      </div>

      {/* Overlay */}
      {side && (
        <div
          onClick={() => setside(false)}
          className="
            fixed inset-0
            bg-black/40
            backdrop-blur-sm
            z-[998]
          "
        />
      )}
    </>
  );
};

export default Navbar;