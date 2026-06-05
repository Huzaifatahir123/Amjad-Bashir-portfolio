import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import assets from "../assets/assets";

const experiences = [
  {
    title: "Bookkeeper",
    company: "My Transmission Expert Automotive (USA)",
    duration: "June 2022 – Present",
    img: assets.Bookkeeper,
    responsibilities: [
      "Manage end-to-end bookkeeping operations using QuickBooks Online & Desktop",
      "Maintain general ledger, journal entries, deposits, and financial records",
      "Perform bank and credit card reconciliations",
      "Oversee accounts payable and receivable processes",
      "Manage payroll processing and employee financial records",
    ],
    link: "https://bookkeeperapp.net/",
  },
  {
    title: "Manager Finance & Budget",
    company: "China State Construction & Engineering Co. Ltd.",
    duration: "Aug 2017 – May 2022",
    img: assets.web_icon,
    responsibilities: [
      "Prepared and analyzed financial statements and budgets",
      "Managed cash flow planning and expenditure control",
      "Coordinated with suppliers and internal stakeholders",
      "Performed supplier and banking reconciliations",
      "Managed supplier payments and tax compliance activities",
    ],
    link: "https://www.cscec.com",
  },
  {
    title: "Assistant Manager Finance",
    company: "Patron Chemicals",
    duration: "Aug 2012 – Apr 2017",
    img: assets.web_icon,
    responsibilities: [
      "Managed bank and party reconciliations",
      "Handled import documentation, bank guarantees, and credit facilities",
      "Posted accounting vouchers and maintained financial records",
      "Managed payroll and salary disbursement processes",
      "Supervised petty cash and invoice verification",
      "Prepared financial reports for executive management",
    ],
    link: "https://patrongroup.com.pk/",
  },
];

const Service = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="Experience"
      className="py-28 dark:bg-dark dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-500 text-sm font-medium">
            Career Journey
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            15+ Years of Financial Leadership
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Building expertise across accounting, financial management,
            budgeting, compliance, reporting, and business operations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Background Line */}
          <div
            className="
              absolute
              -left-2
              lg:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-emerald-500/10
            "
          />

          {/* Animated Line */}
          <motion.div
            style={{ scaleY }}
            className="
              absolute
              -left-2
              lg:left-1/2
              top-0
              w-[2px]
              origin-top
              bg-emerald-500
              h-full
            "
          />

          <div className="space-y-16">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`
                  relative
                  flex
                  flex-col
                  lg:flex-row
                  items-start

                  ${
                    index % 2 === 0
                      ? "lg:justify-start"
                      : "lg:justify-end"
                  }
                `}
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    -left-6
                    lg:left-1/2
                    lg:-translate-x-1/2

                    w-8
                    h-8
                    rounded-full

                    bg-emerald-500
                    border-4
                    border-white
                    dark:border-dark
                    shadow-lg
                  "
                />

                {/* Card */}
                <motion.div
                  className={`
                    max-sm:ml-2
                    ml-12
                    lg:ml-0
                    w-full
                    lg:w-[46%]

                    rounded-3xl
                    border
                    border-slate-200
                    dark:border-white/10

                    bg-white
                    dark:bg-white/5

                    p-8

                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  `}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-2">
                    <span className="text-emerald-500 font-medium">
                      {exp.duration}
                    </span>

                    <h3 className="text-2xl font-bold">
                      {exp.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300">
                      {exp.company}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <ul className="mt-6 space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="
                          text-slate-600
                          dark:text-slate-300
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2

                      text-emerald-500
                      font-medium

                      hover:text-emerald-400
                      transition-colors
                    "
                  >
                    Visit Company
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;