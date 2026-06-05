import React from "react";
import { Linkedin, Mail, Download } from "lucide-react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="dark:bg-dark dark:text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Box */}
        <div className="
          rounded-t-3xl
          border border-slate-200 dark:border-white/10
          bg-slate-50 dark:bg-white/5
          p-6 sm:p-10
        ">
          
          {/* Top */}
          <div className="flex flex-col gap-6">
            
            {/* Name + Role */}
            <div>
              <h2 className="text-2xl font-bold">
                Amjad<span className="text-emerald-500">.</span>
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Senior Accounts & Finance Professional • 15+ Years Experience
              </p>
            </div>

            {/* Contact Row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              
              <a
                href="mailto:amjadbashirrose@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/amjad-bashir-863571159"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href={assets.Cv}
                download="AMJAD BASHIR CV.pdf"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500"
              >
                <Download className="w-4 h-4" />
                CV
              </a>
            </div>

            {/* Bottom line */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                © 2026 Amjad Bashir • Financial Accounting, Reporting & Compliance
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;