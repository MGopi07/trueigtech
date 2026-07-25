"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { Tag, Calendar, MessageCircle, ArrowUpRight } from "lucide-react";
import { blogs } from "@/data";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-brand-primary"></div>
              <div className="w-2 h-2 rounded-full bg-brand-primary -ml-1"></div>
            </div>
            <span className="text-brand-primary font-bold uppercase tracking-wider text-sm">
              News & Insights
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Read our latest blog
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#0b1021] rounded-[2rem] overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group flex flex-col shadow-2xl hover:shadow-[0_20px_50px_rgba(108,99,255,0.1)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[1.3] w-full">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center space-x-6 mb-5 text-sm text-brand-muted font-medium">
                  <div className="flex items-center hover:text-brand-primary cursor-pointer transition-colors">
                    <Tag className="w-4 h-4 text-brand-primary mr-2" strokeWidth={2} />
                    {blog.category}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-brand-primary mr-2" strokeWidth={2} />
                    {blog.date}
                  </div>
                </div>
                
                {/* Title */}
                <Link href="#" className="block mb-6 flex-1">
                  <h3 className="font-bold text-2xl text-white/90 leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                
                {/* Divider */}
                <hr className="border-white/5 mb-6" />
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <Link href="#" className="flex items-center text-white/90 font-bold text-[15px] group-hover:text-brand-primary transition-colors">
                    Read Details
                    <ArrowUpRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                  <div className="flex items-center text-brand-muted text-[15px] font-medium">
                    <MessageCircle className="w-5 h-5 text-brand-primary mr-1.5" strokeWidth={1.5} />
                    ({blog.comments}) Comments
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
