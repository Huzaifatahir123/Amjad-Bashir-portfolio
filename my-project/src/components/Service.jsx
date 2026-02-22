
import assets from '../assets/assets';
import {Link} from "lucide-react"
const experiences = [
  {
    title: "Bookkeeper",
    company: "My Transmission Expert Automotive (USA)",
    duration: "June 2022 – Present",
    img: assets.Bookkeeper,
    responsibilities: [
      "Manage bookkeeping operations (QuickBooks Online & Desktop)",
      "Record checks, deposits, journal entries & general ledger",
      "Bank & credit card reconciliations",
      "Accounts payable & receivable",
      "Payroll processing & record maintenance",
    ],
    link: "https://bookkeeperapp.net/"
  },
  {
    title: "Manager Finance & Budget",
    company: "China State Construction & Engineering Co. Ltd.",
    duration: "Aug 2017 – May 2022",
    img: assets.web_icon,
    responsibilities: [
      "Financial statement & budget analysis",
      "Cash flow & expenditure control",
      "Supplier & internal stakeholder coordination",
      "Bank & supplier reconciliations",
      "Supplier payments & tax compliance",
    ],
    link: "https://www.cscec.com"
  },
  {
    title: "Assistant Manager Finance",
    company: "Patron Chemicals",
    duration: "Aug 2012 – Apr 2017",
    img: assets.web_icon,
    responsibilities: [
      "Bank & party reconciliations",
      "Import, bank guarantee & credit documentation",
      "Accounting vouchers posting (BPV, APV, ARV, CPV)",
      "Payroll & salary disbursement",
      "Petty cash management",
      "Invoice & inventory verification",
      "Financial reporting to CFO",
    ],
    link: "https://patrongroup.com.pk/"
  },
];

const Service = () => {
  return (
    <section id='Experience' className='relative'>
      <div className='flex dark:bg-dark flex-col px-4 sm:px-12 lg:px-24 xl:px-40 py-20 gap-12'>

        {/* Header */}
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-2xl text-center text-black dark:text-white sm:text-4xl font-bold text-secondary'>
            PROFESSIONAL EXPERIENCE
          </h1>
          <p className='text-sm text-black dark:text-white sm:text-base text-secondary text-center'>
            Senior Accounts & Finance Professional from Pakistan with 15+ years of experience in multiple companies
          </p>
        </div>

        {/* Experience Cards */}
        <div className='flex flex-wrap max-sm:flex-col gap-6 justify-center'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='max-w-md flex-1  bg-dark dark:bg-white/20 border border-white/30 rounded-2xl shadow-lg p-6 flex flex-col gap-4 '
            >
              <h1 className='text-2xl sm:text-3xl font-semibold text-white'>{exp.title}</h1>
              <p className='text-sm text-gray-200 italic'>{exp.company} | {exp.duration}</p>
              
              <ul className='list-disc list-inside text-gray-100 space-y-1 text-base'>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
      
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;