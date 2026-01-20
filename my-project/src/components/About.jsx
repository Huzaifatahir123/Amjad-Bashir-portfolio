import React from "react";
import { motion, easeInOut } from "framer-motion";
import { parent1, fadeInUp } from "../animations/navanimation";

const About = () => {
  return (
    <section id="aboutus">
      <motion.div
        variants={parent1}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: easeInOut, duration: 0.6 }}
        className="flex px-4 flex-col dark:bg-dark 
         dark:text-white 
                   gap-14 sm:px-12 lg:px-24 xl:px-40 py-20"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-3 justify-center items-center text-center"
        >
          <p className="text-sm tracking-widest uppercase text-secondary">
            Introduction
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
            About Me
          </h1>
        </motion.div>

        {/* Content Card */}
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto backdrop-blur-xl 
                      bg-dark dark:bg-white/10 text-white
                     border border-white/20
                     rounded-3xl
                     shadow-[0_8px_32px_rgba(0,0,0,0.25)]
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
