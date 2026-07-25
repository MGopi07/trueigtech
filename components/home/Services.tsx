"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data";
import { LayoutTemplate, Store, PlaneTakeoff, Trophy, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

const iconMap = {
  LayoutTemplate,
  Store,
  PlaneTakeoff,
  Trophy,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#fafbfc] relative overflow-hidden">
      {/* Premium Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-brand-primary/10 to-transparent rounded-full blur-[100px] opacity-70 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-brand-secondary/10 to-transparent rounded-full blur-[100px] opacity-70 pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white border border-gray-100 text-brand-primary rounded-full px-5 py-2 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase">Premium Solutions</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#0a0f2c] tracking-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            We deliver top-tier software and APIs to power the next generation of iGaming operators and betting platforms globally.
          </motion.p>
        </div>

        {/* Premium Segmented Control Tabs */}
        <div className="flex justify-center mb-16 lg:mb-24 w-full">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 p-2 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-wrap lg:flex-nowrap justify-center gap-2 max-w-full overflow-x-auto custom-scrollbar">
            {services.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-6 lg:px-8 py-3.5 rounded-full font-bold text-sm lg:text-[15px] transition-all duration-500 whitespace-nowrap flex items-center group ${
                    isActive 
                      ? "text-white shadow-lg" 
                      : "text-gray-500 hover:text-brand-primary hover:bg-gray-50"
                  }`}
                >
                  {/* Active Tab Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <span className={`mr-2 flex items-center justify-center w-6 h-6 rounded-full text-xs ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-primary/10 group-hover:text-brand-primary'} transition-colors duration-300`}>
                    0{index + 1}
                  </span>
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              
              {/* Left Column - Image/Visual Presentation */}
              <div className="lg:col-span-6 relative group">
                {/* Decorative Image Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-[450px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={services[activeTab].image} 
                    alt={services[activeTab].title} 
                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f2c]/80 via-transparent to-transparent"></div>
                  
                  {/* Persistent Floating Card 1 */}
                  <div className="absolute bottom-8 left-8 right-8 sm:right-auto bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white flex items-center space-x-5 transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center text-white shadow-inner">
                      {(() => {
                        const IconComponent = iconMap[services[activeTab].icon as keyof typeof iconMap] || LayoutTemplate;
                        return <IconComponent className="w-7 h-7" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0a0f2c] leading-tight">Enterprise Grade</h4>
                      <p className="text-sm text-gray-500 font-medium">Fully Customizable Platform</p>
                    </div>
                  </div>
                  
                  {/* Persistent Floating Card 2 (Top Right) */}
                  <div className="hidden md:flex absolute top-10 right-10 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-xl border border-white items-center space-x-3 transform group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-[#0a0f2c] text-sm">99.9% Uptime</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="lg:col-span-6 flex flex-col justify-center h-full py-8">
                <div className="inline-flex items-center space-x-2 bg-brand-primary/[0.05] border border-brand-primary/10 text-brand-primary rounded-full px-5 py-2 mb-8 w-fit">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">Service Details</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#0a0f2c] mb-6 leading-[1.15]">
                  {services[activeTab].title}
                </h3>
                
                <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                  {services[activeTab].description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-gray-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary mr-3" /> Seamless Integration
                  </div>
                  <div className="flex items-center text-gray-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary mr-3" /> Advanced Analytics Dashboard
                  </div>
                  <div className="flex items-center text-gray-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary mr-3" /> 24/7 Priority Support
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    href={`/solutions/${services[activeTab].title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group relative inline-flex items-center justify-center bg-[#0a0f2c] hover:bg-brand-primary text-white px-8 py-4.5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(108,99,255,0.3)] overflow-hidden w-fit"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started Now
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Button Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
