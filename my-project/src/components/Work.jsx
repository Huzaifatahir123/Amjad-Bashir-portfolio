import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Wallet,
  FileText,
  BarChart3,
  Layers,
  ShieldCheck,
  PieChart,
  CheckCircle,
  Database,
  FileSpreadsheet,
  Laptop,
  Mail,
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Accounting & Reporting",
    icon: Calculator,
    skills: [
      "Financial Accounting",
      "Financial Reporting",
      "General Ledger Management",
      "Accounts Payable & Receivable",
    ],
  },
  {
    title: "Financial Operations",
    icon: Wallet,
    skills: [
      "Bank Reconciliation",
      "Supplier Reconciliation",
      "Payroll Processing",
      "Cash Flow Management",
    ],
  },
  {
    title: "Budgeting & Analysis",
    icon: BarChart3,
    skills: [
      "Budget Planning",
      "Forecasting",
      "Financial Analysis",
      "Management Reporting",
    ],
  },
  {
    title: "Tax & Compliance",
    icon: ShieldCheck,
    skills: [
      "Income Tax",
      "Sales Tax",
      "Withholding Tax",
      "Audit Coordination",
    ],
  },
  {
    title: "Accounting Systems",
    icon: Database,
    skills: [
      "QuickBooks Online",
      "QuickBooks Desktop",
      "Oracle ERP",
      "Database Reporting",
    ],
  },
  {
    title: "Productivity Tools",
    icon: FileSpreadsheet,
    skills: [
      "Advanced Excel",
      "PowerPoint",
      "Google Sheets",
      "Business Communication",
    ],
  },
];

const Work = () => {
  return (
    <section
      id="skills"
      className="py-28 dark:bg-dark dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-500 text-sm font-medium">
            Core Expertise
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Professional Capabilities
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            A comprehensive blend of financial management,
            accounting operations, compliance, reporting,
            and technology expertise developed over 15+
            years of professional experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={index}
                initial={{ x: -25 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  dark:border-white/10

                  bg-white
                  dark:bg-white/5

                  p-8

                  hover:-translate-y-2
                  hover:shadow-2xl

                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl

                    bg-emerald-50
                    dark:bg-emerald-500/10

                    flex
                    items-center
                    justify-center

                    mb-6
                  "
                >
                  <Icon className="w-7 h-7 text-emerald-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-6">
                  {area.title}
                </h3>

                {/* Skills */}
                <ul className="space-y-3">
                  {area.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-center
                        gap-3

                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-20

            rounded-3xl
            border
            border-slate-200
            dark:border-white/10

            p-10

            text-center

            bg-gradient-to-r
            from-emerald-500/10
            to-transparent
          "
        >
          <h3 className="text-2xl font-bold">
            Financial Expertise Backed by Technology
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Combining strong accounting principles, financial
            management expertise, regulatory compliance knowledge,
            and modern accounting software to support business
            growth and informed decision-making.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;