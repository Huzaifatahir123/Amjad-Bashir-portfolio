import React from "react";

const About = () => {
  return (
    <section id="aboutus">
      <div
        className="flex px-4 flex-col dark:bg-dark 
                   dark:text-white 
                   gap-14 sm:px-12 lg:px-24 xl:px-40 py-20"
      >
        {/* Header */}
        <div
          className="flex flex-col gap-3 justify-center items-center text-center"
        >
          <p className="text-sm tracking-widest uppercase text-secondary">
            Introduction
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
            About Me
          </h1>
        </div>

        {/* Content Card */}
        <div
          className="max-w-4xl mx-auto 
                      bg-dark dark:bg-white/10 text-white
                     border border-white/20
                     rounded-3xl
                     
                     px-6 sm:px-10 py-10"
        >
          <p className="text-base sm:text-lg leading-relaxed dark:text-gray-100">
            Detail-oriented and results-driven{" "}
            <span className="font-semibold text-white">
              Accounts & Finance Professional
            </span>{" "}
            with over{" "}
            <span className="font-semibold dark:text-white">15 years of experience</span>{" "}
            in accounting, budgeting, auditing, taxation, and financial reporting
            across multinational and local organizations.
            <br />
            <br />
            I bring strong expertise in{" "}
            <span className="font-semibold dark:text-white">
              QuickBooks (Online & Desktop)
            </span>
            , Oracle-based accounting systems, and financial compliance under
            Pakistan tax laws. I have a proven ability to manage end-to-end
            finance operations, ensure regulatory compliance, support audits,
            and deliver accurate financial insights to enable informed
            management decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;