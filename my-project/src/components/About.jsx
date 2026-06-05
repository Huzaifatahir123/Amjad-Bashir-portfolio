import React from "react";
import { motion } from "framer-motion";

const expertise = [
  "Financial Reporting",
  "Budget Planning",
  "Tax Compliance",
  "Internal Auditing",
  "QuickBooks",
  "Oracle ERP",
];

const About = () => {
  return (
    <section
      id="aboutus"
      className="
      py-28
      dark:bg-dark
      dark:text-white
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-500 text-sm font-medium">
            Professional Profile
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold max-w-3xl">
            Delivering Financial Accuracy,
            Compliance & Business Insight
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <p
              className="
              text-lg
              leading-9
              text-slate-600
              dark:text-slate-300
            "
            >
              I am a Senior Accounts & Finance Professional with more than
              <span className="font-semibold text-emerald-500">
                {" "}15 years of experience{" "}
              </span>
              across accounting, budgeting, taxation, auditing, financial
              reporting, and compliance management.

              <br />
              <br />

              Throughout my career, I have worked with multinational and local
              organizations, supporting finance operations, maintaining
              regulatory compliance, and providing accurate financial
              information that enables confident business decisions.

              <br />
              <br />

              My expertise includes QuickBooks (Online & Desktop), Oracle-based
              accounting systems, tax compliance, audit support, financial
              controls, and management reporting.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div
              className="
              rounded-3xl
              border
              border-slate-200
              dark:border-white/10
              p-8
              bg-white
              dark:bg-white/5
            "
            >
              <h3 className="font-semibold text-xl mb-6">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {expertise.map((item, index) => (
                  <span
                    key={index}
                    className="
                    px-4 py-2
                    rounded-full
                    bg-emerald-50
                    dark:bg-emerald-500/10
                    text-emerald-700
                    dark:text-emerald-400
                    text-sm
                    font-medium
                  "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          mt-20
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "100%", label: "Financial Accuracy Focus" },
            { number: "ERP", label: "Oracle Systems" },
            { number: "QB", label: "QuickBooks Expertise" },
          ].map((stat, i) => (
            <div
              key={i}
              className="
              p-8
              rounded-2xl
              border
              border-slate-200
              dark:border-white/10
              text-center
              bg-white
              dark:bg-white/5
            "
            >
              <h3 className="text-3xl font-bold text-emerald-500">
                {stat.number}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;