"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { statistics } from "@/data";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const numMatch = value.match(/[\d.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, "");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return number % 1 !== 0 ? latest.toFixed(1) : Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, number, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#050816]">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-cyan-500/5 to-brand-primary/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 divide-x-0 md:divide-x divide-white/10">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 group-hover:from-cyan-300 group-hover:to-brand-primary transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(108,99,255,0.5)]">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-[1px] bg-cyan-500/50 group-hover:w-8 transition-all duration-300"></div>
                <div className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="w-4 h-[1px] bg-cyan-500/50 group-hover:w-8 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
