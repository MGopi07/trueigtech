"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "1. Are your development processes transparent?",
    answer: "Yes, we believe in complete transparency. You will have full access to our project management tools, regular stand-ups, and sprint reviews.",
    bullets: ["Real-time access to Jira/Trello boards", "Weekly progress reports and demo sessions"]
  },
  {
    id: 2,
    question: "2. Can you customize projects based on client needs?",
    answer: "Absolutely. Every platform we build is tailored exactly to the operator's specific requirements, branding, and target market.",
    bullets: []
  },
  {
    id: 3,
    question: "3. Do you handle both web and mobile projects?",
    answer: "Yes, we specialize in both web applications and mobile app development, delivering customized solutions based on client requirements, budget, and timelines.",
    bullets: [
      "Providing Quality Web And Mobile Development Services Together",
      "Expertise Across Custom Software And Product Strategy Projects"
    ]
  },
  {
    id: 4,
    question: "4. What services does TRUEIGTECH offer?",
    answer: "We offer Turnkey Casinos, White Label Platforms, Sportsbook APIs, Game Aggregation, and Custom Gaming Software development.",
    bullets: []
  },
  {
    id: 5,
    question: "5. How long does integration take to show results?",
    answer: "API integration typically takes 1-2 weeks depending on your existing infrastructure, while full white-label deployments can be live in 4-6 weeks.",
    bullets: []
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(3);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 text-brand-primary rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Frequently Asked Questions</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[#0a0f2c] mb-4 leading-tight tracking-tight"
            >
              Your Questions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Answered</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mb-8 text-lg font-medium"
            >
              Find clear, honest answers to common questions from our team of experienced professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contact" className="group relative inline-flex items-center justify-center bg-[#0a0f2c] hover:bg-brand-primary text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(108,99,255,0.3)] overflow-hidden w-fit mb-10">
                <span className="relative z-10 flex items-center">
                  View All FAQ&apos;s
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full border-t border-gray-200/60 mb-8"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#4F46E5] to-[#3730A3] flex items-center justify-center text-white shadow-sm z-30">
                  <span className="font-bold text-xs">JS</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#EC4899] to-[#BE185D] flex items-center justify-center text-white shadow-sm z-20">
                  <span className="font-bold text-xs">MR</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#10B981] to-[#047857] flex items-center justify-center text-white shadow-sm z-10">
                  <span className="font-bold text-xs">AK</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-brand-primary font-extrabold text-xs shadow-sm z-0">
                  +10
                </div>
              </div>
              <p className="text-sm text-gray-500 max-w-[200px] leading-tight font-medium">
                Answers curated directly from our consulting experts.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                    ? "bg-white border-brand-primary shadow-[0_0_20px_rgba(108,99,255,0.15)]"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${isOpen ? "text-brand-primary" : "text-gray-900"}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-brand-primary text-white" : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                      }`}>
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-600 pt-2 border-t border-gray-100 mt-2">
                          <p className="mb-4 mt-2">{faq.answer}</p>

                          {faq.bullets.length > 0 && (
                            <ul className="space-y-3">
                              {faq.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Check className="w-4 h-4 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm font-medium text-gray-700">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
