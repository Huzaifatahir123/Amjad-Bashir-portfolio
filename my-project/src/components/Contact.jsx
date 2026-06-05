import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Mail, Linkedin, MapPin, Clock, Send } from "lucide-react";

const ContactUs = () => {
  const [result, setResult] = useState("Send Message");

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      setResult("Sending...");

      const formData = new FormData(event.target);

      formData.append("access_key", "68d98f9b-7b0d-4548-8981-337cecc09939");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully");

        event.target.reset();

        setResult("Send Message");
      } else {
        toast.error("Error, please try again");

        setResult("Send Message");
      }
    } catch (err) {
      toast.error("Error sending message");

      setResult("Send Message");
    }
  };

  return (
    <section
      id="contactus"
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
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-500 text-sm font-medium">
            Contact
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Let's Discuss Your Financial Needs
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Whether you need bookkeeping, financial reporting, budgeting
            support, compliance assistance, or accounting consultation, feel
            free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-slate-200
              dark:border-white/10
              p-10
              bg-white
              dark:bg-white/5
            "
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Available through the contact form
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Linkedin className="text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>

                  <a
                    href="https://www.linkedin.com/in/amjad-bashir-863571159"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-500 hover:underline"
                  >
                    Connect Professionally
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>

                  <p className="text-slate-600 dark:text-slate-300">Pakistan</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Response Time</h4>

                  <p className="text-slate-600 dark:text-slate-300">
                    Typically within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                mt-10
                rounded-2xl
                bg-emerald-500/10
                border
                border-emerald-500/20
                p-6
              "
            >
              <h4 className="font-semibold mb-2">Professional Expertise</h4>

              <p className="text-slate-600 dark:text-slate-300">
                Financial Reporting • Budgeting • QuickBooks • Tax Compliance •
                Payroll • Accounting Operations
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-slate-200
              dark:border-white/10

              bg-white
              dark:bg-white/5

              p-10

              flex
              flex-col
              gap-6
            "
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="
                p-4
                rounded-xl
                border
                border-slate-200
                dark:border-white/10

                bg-transparent
                outline-none

                focus:border-emerald-500
              "
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="
                p-4
                rounded-xl
                border
                border-slate-200
                dark:border-white/10

                bg-transparent
                outline-none

                focus:border-emerald-500
              "
            />

            <textarea
              name="message"
              required
              rows={7}
              placeholder="Tell me about your requirements..."
              className="
                p-4
                rounded-xl
                border
                border-slate-200
                dark:border-white/10

                bg-transparent
                outline-none

                focus:border-emerald-500
              "
            />

            <button
              type="submit"
              className="
                flex
                items-center
                justify-center
                gap-2

                bg-emerald-600
                hover:bg-emerald-500

                text-white
                font-medium

                px-6
                py-4

                rounded-xl

                transition-all
                duration-300
              "
            >
              {result}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
