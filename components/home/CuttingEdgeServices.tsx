"use client";

import { motion } from "framer-motion";
import { cuttingEdgeServices } from "@/data";
import { Gamepad2, MonitorPlay, LayoutDashboard, MessageSquareText, FileCog, Headset, ArrowRight } from "lucide-react";

const iconMap = {
  Gamepad2,
  MonitorPlay,
  LayoutDashboard,
  MessageSquareText,
  FileCog,
  Headset
};

export default function CuttingEdgeServices() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg-secondary">
      {/* Dark Theme Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-secondary/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-brand-secondary rounded-full px-5 py-2 mb-8 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.8)]"></span>
            <span className="text-xs font-bold tracking-wider uppercase">Our Services</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Cutting Edge iGaming Service with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Exceptional Results</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium max-w-3xl leading-relaxed"
          >
            We provide end-to-end solutions designed to scale your operations, captivate players, and maximize your revenue in a competitive market.
          </motion.p>
        </div>

        {/* Premium Glassmorphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cuttingEdgeServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Gamepad2;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col border border-white/10 hover:border-brand-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(108,99,255,0.15)] relative overflow-hidden cursor-pointer"
              >
                {/* Glowing Hover Orb */}
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-inner transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:border-brand-primary/30 relative z-10">
                  <IconComponent className="w-7 h-7 text-brand-secondary drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] group-hover:text-brand-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-[15px] leading-relaxed mb-6 flex-grow relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Interactive Arrow Link */}
                <div className="flex items-center text-brand-secondary font-semibold text-sm tracking-wide relative z-10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-auto">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
