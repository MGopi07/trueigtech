"use client";

import { motion } from "framer-motion";
import { features } from "@/data";
import { Server, ShieldCheck, Zap, Code2, Smartphone, Headphones } from "lucide-react";

const iconMap = {
  Server,
  ShieldCheck,
  Zap,
  Code2,
  Smartphone,
  Headphones
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px] translate-x-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/20 text-brand-primary rounded-full px-5 py-2 mb-8 shadow-sm backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(108,99,255,0.4)]"></span>
                <span className="text-xs font-bold tracking-wider uppercase">The TRUEIGTECH Advantage</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-[#0a0f2c] leading-tight tracking-tight"
              >
                Built for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Enterprise Scale</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-10"
              >
                We don't just provide software; we deliver the robust, high-performance infrastructure you need to dominate the iGaming industry globally.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex w-full h-[350px] bg-white shadow-2xl border border-gray-100 rounded-[2rem] items-center justify-center relative overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="TRUEIGTECH Enterprise Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c]/90 via-[#0a0f2c]/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-8 text-white z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                    <span className="text-xs font-bold tracking-widest text-green-400 uppercase">System Online</span>
                  </div>
                  <h4 className="text-xl font-bold">Global Infrastructure</h4>
                  <p className="text-gray-300 text-sm mt-1">Real-time performance metrics</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Connected Features Timeline */}
          <div className="lg:col-span-7 lg:pl-10">
            <div className="relative border-l-2 border-gray-200 ml-4 md:ml-8 lg:mt-[72px]">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Server;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative pl-10 md:pl-16 pb-16 last:pb-0 group"
                  >
                    {/* Glowing Node on Timeline */}
                    <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-500 z-10">
                      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-brand-primary transition-colors duration-500"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col md:flex-row md:items-start group-hover:-translate-y-1 transition-transform duration-500">
                      {/* Icon Container (Desktop) */}
                      <div className="hidden md:flex w-14 h-14 shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm items-center justify-center mr-6 group-hover:bg-brand-primary/5 group-hover:border-brand-primary/20 group-hover:shadow-md transition-all duration-500">
                        <IconComponent className="w-7 h-7 text-gray-400 group-hover:text-brand-primary transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        {/* Title with Icon (Mobile) */}
                        <div className="flex items-center mb-3 md:hidden">
                           <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mr-4 group-hover:bg-brand-primary/5 group-hover:border-brand-primary/20 transition-colors duration-500">
                             <IconComponent className="w-5 h-5 text-brand-primary" />
                           </div>
                           <h3 className="text-xl font-bold text-[#0a0f2c] group-hover:text-brand-primary transition-colors duration-300">{feature.title}</h3>
                        </div>
                        
                        {/* Title (Desktop) */}
                        <h3 className="hidden md:block text-2xl font-bold text-[#0a0f2c] mb-3 group-hover:text-brand-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
