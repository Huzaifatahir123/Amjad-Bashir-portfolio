import React, { useState } from "react";
import { motion } from "framer-motion";
import { parent1, fadeInUp } from "../animations/navanimation";
import toast from "react-hot-toast";
import {Mail,User,Text} from "lucide-react"

const ContactUs = () => {
  const [result, setResult] = useState("Submit");

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      setResult("Sending...");
      const formData = new FormData(event.target);
      formData.append("access_key", "68d98f9b-7b0d-4548-8981-337cecc09939");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully 😎✔");
        event.target.reset();
        setResult("Submit");
      } else {
        toast.error("Error, please try again");
        setResult("Submit");
      }
    } catch (err) {
      toast.error("Error sending message");
      setResult("Submit");
    }
  };

  return (
    <section
      id="contactus"
      className="relative dark:bg-dark  dark:text-white text-balck py-20 px-4 sm:px-12 lg:px-24 xl:px-40"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 justify-center items-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-secondary text-center">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>

      {/* Form Container */}
      <motion.div className="flex  justify-center">
        <motion.form
          onSubmit={onSubmit}
          variants={parent1}
          viewport={{ once: true, amount: 0.3 }}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-6 w-full max-w-2xl backdrop-blur-md bg-dark dark:bg-white/20 border border-white/30 rounded-3xl p-10 shadow-lg hover:shadow-fuchsia-400 transition-shadow duration-300"
        >
          {/* Name */}
        
            
                <motion.input
            variants={fadeInUp}
            type="text"
            name="name"
            placeholder="Name"
            className="p-4 rounded-lg outline-none border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
          />

          
      

          {/* Email */}
          <motion.input
            variants={fadeInUp}
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 rounded-lg outline-none border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
          />

          {/* Message */}
          <motion.textarea
            variants={fadeInUp}
            name="message"
            placeholder="Type your message"
            rows={6}
            className="p-4 rounded-lg outline-none border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300 resize-none"
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={fadeInUp}
            className="px-6 py-4 bg-white text-black  font-semibold rounded-xl dark:bg-white/80 dark:text-black hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {result}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
