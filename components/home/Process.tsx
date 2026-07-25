"use client";

import { motion } from "framer-motion";
import { process } from "@/data";

export default function Process() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Our Development <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted text-lg"
          >
            From concept to deployment, we follow a rigorous, transparent methodology to deliver perfection.
          </motion.p>
        </div>

        <div className="relative mt-16">
          {/* Connecting Lines Container (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-[2px]">
            {/* Faint Background Line */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* Line that draws itself in initially */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary origin-left shadow-[0_0_15px_rgba(108,99,255,0.6)]"
            ></motion.div>

            {/* Continuous Traveling Light Pulse */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full flex items-center"
              >
                {/* The glowing particle */}
                <div className="w-[15%] h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_#fff,0_0_40px_#6C63FF]"></div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Node */}
                <div className="relative mb-6 cursor-pointer">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-brand-primary/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-150"></div>

                  {/* Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-16 h-16 rounded-full bg-[#0a0f25] border-2 border-white/10 group-hover:border-brand-primary flex items-center justify-center shadow-lg backdrop-blur-xl relative z-10 transition-colors duration-300"
                  >
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-secondary group-hover:from-white group-hover:to-white transition-all duration-300">
                      {step.step}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm px-2 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Mobile connecting line */}
                {index !== process.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "3rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    className="lg:hidden w-[2px] bg-gradient-to-b from-brand-primary to-transparent mt-6 opacity-50"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
