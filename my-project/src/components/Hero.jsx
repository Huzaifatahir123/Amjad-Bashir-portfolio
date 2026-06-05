import React from "react";
import assets from "../assets/assets";
import { Download, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="
      relative overflow-hidden
      dark:bg-dark dark:text-white
    "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full" />

      <div
        className="
        relative
        max-w-7xl mx-auto
        px-6 lg:px-10
        py-24 lg:py-32
      "
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              className="
              inline-flex items-center
              px-4 py-2
              rounded-full
              bg-emerald-50
              dark:bg-emerald-500/10
              border border-emerald-200
              dark:border-emerald-500/20
              text-emerald-700
              dark:text-emerald-400
              text-sm font-medium
              mb-6
            "
            >
              15+ Years of Professional Experience
            </div>

            <h1
              className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              tracking-tight
            "
            >
              Senior Accounts &
              <span className="text-emerald-500">
                {" "}
                Finance Professional
              </span>
            </h1>

            <p
              className="
              mt-6
              text-lg
              text-slate-600
              dark:text-slate-300
              leading-relaxed
              max-w-xl
            "
            >
              Helping businesses strengthen financial performance
              through accurate accounting, financial reporting,
              budgeting, compliance, and strategic financial
              management.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/amjad-bashir-863571159"
                target="_blank"
                rel="noreferrer"
                className="
                bg-emerald-600
                hover:bg-emerald-500
                text-white
                px-6 py-3
                rounded-xl
                font-medium
                flex items-center gap-2
                transition-all
              "
              >
                Connect on LinkedIn
                <Linkedin className="w-5" />
              </a>

              <a
                href={assets.Cv}
                download="AMJAD BASHIR CV.pdf"
                className="
                border
                border-slate-300
                dark:border-white/20
                px-6 py-3
                rounded-xl
                font-medium
                flex items-center gap-2
                hover:bg-slate-100
                dark:hover:bg-white/5
                transition-all
              "
              >
                Download CV
                <Download className="w-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-emerald-500">
                  15+
                </h3>
                <p className="text-sm text-slate-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-emerald-500">
                  Finance
                </h3>
                <p className="text-sm text-slate-500">
                  Management
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-emerald-500">
                  Accounting
                </h3>
                <p className="text-sm text-slate-500">
                  & Reporting
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
              relative
              w-[320px]
              h-[420px]
              rounded-3xl
              overflow-hidden
              border
              border-slate-200
              dark:border-white/10
              shadow-2xl
            "
            >
              <img
                src={assets.picportfolio}
                alt="Amjad Bashir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;