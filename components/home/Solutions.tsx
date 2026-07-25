"use client";

import { motion } from "framer-motion";
import { solutionsList } from "@/data";
import { ArrowRight, Lock, Send, PenTool, Wallet, IdCard, Settings } from "lucide-react";

const iconMap = {
  Lock,
  Send,
  PenTool,
  Wallet,
  IdCard,
  Settings
};

export default function Solutions() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white border border-gray-200 text-brand-primary rounded-full px-5 py-2 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase">Premium Platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-[#0a0f2c] leading-tight"
          >
            iGaming Solutions (Sports Betting, Casino) that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Launch Fast and Scale Globally</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl mx-auto"
          >
            TRUEIGTECH's iGaming solutions deliver white label, turnkey, and customized platforms across the USA, UK, Germany, Turkey, Malta, and beyond. We manage every technical and regulatory aspect to ensure your platform thrives.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutionsList.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[1.5rem] p-6 lg:p-8 flex flex-col md:flex-row md:items-start border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 md:mr-6 group-hover:bg-brand-primary group-hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-500 relative z-10">
                <div className="transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 flex items-center justify-center w-full h-full">
                  {(() => {
                    const Icon = iconMap[solution.icon as keyof typeof iconMap] || Settings;
                    return <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-brand-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />;
                  })()}
                </div>
              </div>
              
              {/* Text Area */}
              <div className="flex flex-col flex-grow relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a0f2c] mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed pr-2 group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>
                
                {/* Decorative Line that expands on hover */}
                <div className="w-0 h-0.5 bg-brand-primary mt-6 opacity-0 group-hover:w-12 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
