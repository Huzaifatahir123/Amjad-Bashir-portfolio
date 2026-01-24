
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
  Briefcase,
  Settings
} from "lucide-react";

const skillsData = [
  {
    title: "Core Skills",
    icon: Briefcase,
    items: [
      { icon: Calculator, label: "Financial Accounting & Reporting" },
      { icon: Wallet, label: "Accounts Payable & Receivable" },
      { icon: FileText, label: "Bank & Supplier Reconciliation" },
      { icon: BarChart3, label: "Budgeting & Forecasting" },
      { icon: Layers, label: "Payroll Processing" },
      { icon: ShieldCheck, label: "Taxation (Income, Sales & Withholding)" },
      { icon: CheckCircle, label: "Audit Coordination & Compliance" },
      { icon: Database, label: "General Ledger Management" },
      { icon: PieChart, label: "Financial Analysis" },
      { icon: CheckCircle, label: "Internal Controls" },
    ],
  },
  {
    title: "Technical Skills",
    icon: Settings,
    items: [
      { icon: Database, label: "QuickBooks Online & Desktop" },
      { icon: Database, label: "Oracle-based Accounting Software" },
      { icon: FileSpreadsheet, label: "Microsoft Excel (Advanced)" },
      { icon: Laptop, label: "Word, PowerPoint & Google Sheets" },
      { icon: Mail, label: "Internet & Email Communication" },
    ],
  },
];

const Work = () => {
  return (
    <section id="skills">
      <div className="flex dark:bg-dark dark:text-white flex-col px-4 sm:px-12 lg:px-24 xl:px-40 py-20 gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <p className="text-sm tracking-widest text-secondary uppercase">
            Professional Expertise
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
            Core & Technical Skills
          </h1>
          <p className="text-sm sm:text-base text-secondary max-w-xl">
            A concise overview of my financial, accounting, and technical
            competencies built over 15+ years of professional experience.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="flex flex-wrap max-sm:flex-col gap-6 justify-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="max-w-md flex-1 backdrop-blur-xl bg-dark dark:bg-white/10 
                         border border-white/20 rounded-2xl 
                         shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                         p-6 sm:p-8 flex flex-col gap-5
                         hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-between">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  {skill.title}
                </h2>
                <skill.icon className="text-white" />
              </div>

              <ul className="flex flex-col gap-3">
                {skill.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm sm:text-base text-gray-100"
                    >
                      <Icon className="w-5 h-5 text-secondary shrink-0" />
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;