"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, Gamepad2, Trophy, Coins, Target, Crown, Dices, Swords, ShieldCheck, Store, MonitorPlay, Code, Gift, Star, Activity, TrendingUp, BarChart3, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    tag: "Next-Gen iGaming Solutions",
    title: "Build the Future of ",
    highlight: "iGaming",
    titleSuffix: " with Solutions",
    description: "Launch your gaming business instantly with our premium white-label platforms, powerful betting APIs, and custom software development.",
    primaryCta: "Get Started Now",
    primaryLink: "/contact",
    secondaryCta: "Schedule Demo",
    icon: Gamepad2,
    gradient: "from-brand-primary to-brand-secondary",
    blob1: "bg-brand-primary/20",
    blob2: "bg-brand-secondary/20",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    tag: "Turnkey & White Label",
    title: "Launch Your ",
    highlight: "Casino",
    titleSuffix: " in Record Time",
    description: "Get a fully customizable, ready-to-deploy casino platform packed with thousands of games, crypto payments, and bonus engines.",
    primaryCta: "View Solutions",
    primaryLink: "/solutions/white-label",
    secondaryCta: "View Demo",
    icon: Coins,
    gradient: "from-purple-500 to-pink-500",
    blob1: "bg-purple-500/20",
    blob2: "bg-pink-500/20",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    tag: "API Integrations",
    title: "Powerful ",
    highlight: "Sportsbook",
    titleSuffix: " Data & APIs",
    description: "Integrate comprehensive sports betting data, live odds, and risk management tools directly into your existing platform.",
    primaryCta: "Explore APIs",
    primaryLink: "/solutions/api",
    secondaryCta: "API Docs",
    icon: Trophy,
    gradient: "from-brand-secondary to-green-500",
    blob1: "bg-brand-secondary/20",
    blob2: "bg-green-500/20",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  }
];

const hubNodes = [
  { label: "Sports Betting Solutions", icon: Trophy, angle: -90, color: "#10B981" },
  { label: "Online & Retail Lottery", icon: Coins, angle: -45, color: "#F59E0B" },
  { label: "Provably Fair Games", icon: ShieldCheck, angle: 0, color: "#3B82F6" },
  { label: "Retail Solutions", icon: Store, angle: 45, color: "#8B5CF6" },
  { label: "Online/Live Casino", icon: MonitorPlay, angle: 90, color: "#EC4899" },
  { label: "Casino Game Dev", icon: Code, angle: 135, color: "#EF4444" },
  { label: "Sweepstakes Casino", icon: Gift, angle: 180, color: "#FBBF24" },
  { label: "Slot Development", icon: Crown, angle: 225, color: "#6366f1" },
];

function HubAndSpoke() {
  const radius = 180;

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Connecting Lines */}
      {hubNodes.map((node, i) => {
        return (
          <motion.div
            key={`line-${i}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-brand-primary/40 to-brand-primary/80 origin-left z-0"
            style={{
              width: `${radius}px`,
              transform: `rotate(${node.angle}deg)`,
            }}
          />
        );
      })}

      {/* Center Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="absolute z-30 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-[#0a0f25] to-[#1a1f3c] border-[3px] border-brand-primary shadow-[0_0_50px_rgba(108,99,255,0.4)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 rounded-full border border-brand-primary/30 m-2 border-dashed animate-[spin_20s_linear_infinite]"></div>
        <Gamepad2 className="w-10 h-10 text-brand-primary mb-2 drop-shadow-[0_0_15px_rgba(108,99,255,0.8)]" />
        <span className="text-sm font-bold text-white text-center leading-tight">iGaming<br />Platform</span>
      </motion.div>

      {/* Nodes */}
      {hubNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        let top, left, right, transform;

        if (node.angle === -90) { top = '-40px'; left = '50%'; transform = 'translateX(-50%)'; }
        else if (node.angle === 90) { top = '55px'; left = '50%'; transform = 'translateX(-50%)'; }
        else if (node.angle === 0 || node.angle === -45 || node.angle === 45) { left = '55px'; top = '50%'; transform = 'translateY(-50%)'; right = 'auto'; }
        else { right = '55px'; top = '50%'; transform = 'translateY(-50%)'; left = 'auto'; }

        return (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
            className="absolute z-20 flex flex-col items-center justify-center group"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              marginLeft: '-20px',
              marginTop: '-20px',
            }}
          >
            {/* Icon Circle */}
            <div
              className="w-10 h-10 rounded-full bg-[#0a0f25] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] cursor-pointer hover:scale-110 transition-all duration-300 relative z-10"
              style={{ borderColor: `${node.color}40`, boxShadow: `0 0 15px ${node.color}30` }}
            >
              <node.icon size={18} color={node.color} />
            </div>

            {/* Floating Label */}
            <div
              className="absolute whitespace-nowrap bg-[#0a0f25]/90 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 lg:opacity-100 transition-all duration-300 hover:border-brand-primary"
              style={{ top, left, right, transform }}
            >
              {node.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

const backgroundParticles = [
  { w: 2.5, h: 2.5, top: 12, left: 23, delay: 0.5 },
  { w: 1.8, h: 1.8, top: 85, left: 14, delay: 1.2 },
  { w: 3.2, h: 3.2, top: 45, left: 78, delay: 2.5 },
  { w: 1.5, h: 1.5, top: 60, left: 34, delay: 0.8 },
  { w: 2.9, h: 2.9, top: 25, left: 88, delay: 3.1 },
  { w: 2.1, h: 2.1, top: 70, left: 55, delay: 1.8 },
  { w: 3.5, h: 3.5, top: 15, left: 50, delay: 0.2 },
  { w: 2.2, h: 2.2, top: 90, left: 80, delay: 2.7 },
  { w: 1.9, h: 1.9, top: 40, left: 10, delay: 1.5 },
  { w: 3.0, h: 3.0, top: 75, left: 90, delay: 3.6 },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-screen transition-colors duration-1000 ease-in-out ${slides[activeIndex].blob1}`} />
        <div className={`absolute bottom-10 -right-20 w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000 ease-in-out ${slides[activeIndex].blob2}`} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        
        {/* Subtle moving particles/stars for extra depth */}
        <div className="absolute inset-0 opacity-20">
          {backgroundParticles.map((particle, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-[pulse_4s_ease-in-out_infinite]"
              style={{
                width: particle.w + 'px',
                height: particle.h + 'px',
                top: particle.top + '%',
                left: particle.left + '%',
                animationDelay: particle.delay + 's',
              }}
            />
          ))}
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        /* pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-bullet mx-1"></span>';
          },
        }} */
        className="w-full h-full absolute inset-0 z-10"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 md:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* Text Content */}
                  <div className="pr-0 lg:pr-10">
                    <motion.div
                      key={`text-${slide.id}`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(255,213,79,0.8)]" />
                        <span className="text-sm font-semibold tracking-wide text-gray-200">{slide.tag}</span>
                      </div>

                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                        {slide.title}
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${slide.gradient}`}>
                          {slide.highlight}
                        </span>
                        {slide.titleSuffix}
                      </h1>

                      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                          href={slide.primaryLink}
                          className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105"
                        >
                          {/* Glowing Gradient Background */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${slide.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                          {/* Glow Shadow */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${slide.gradient} blur-lg opacity-40 group-hover:opacity-70 transition-opacity`}></div>
                          
                          <span className="relative z-10 flex items-center">
                            {slide.primaryCta}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>

                        <button
                          className="group inline-flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md shadow-lg"
                        >
                          <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                          {slide.secondaryCta}
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column Area */}
                  <div className="hidden lg:flex relative h-[550px] w-full items-center justify-center mt-10 lg:mt-0">
                    {slide.id === 1 ? (
                      <HubAndSpoke />
                    ) : slide.id === 2 ? (
                      // Custom Dynamic Layout for Slide 2 (Casino)
                      <div className="w-full h-[90%] relative group">
                        {/* Glass Frame */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 z-0"></div>
                        
                        {/* Main Image */}
                        <div className="absolute inset-4 rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-white/5">
                          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25]/90 via-[#0a0f25]/20 to-transparent"></div>
                        </div>

                        {/* Floating Badge 1 */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                          transition={{ 
                            opacity: { delay: 0.5, duration: 0.5 },
                            scale: { delay: 0.5, duration: 0.5 },
                            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
                          }}
                          className="absolute -left-8 top-20 z-20 bg-[#1a1f3c]/90 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center space-x-4"
                        >
                          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                            <Gamepad2 className="text-purple-400 w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Games</p>
                            <p className="text-xl font-black text-white">5,000+</p>
                          </div>
                        </motion.div>

                        {/* Floating Badge 2 */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                          transition={{ 
                            opacity: { delay: 0.7, duration: 0.5 },
                            scale: { delay: 0.7, duration: 0.5 },
                            y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }
                          }}
                          className="absolute -right-6 bottom-32 z-20 bg-[#1a1f3c]/90 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col space-y-3"
                        >
                           <div className="flex items-center space-x-2">
                             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                             <span className="text-sm text-gray-200 font-bold uppercase tracking-wider">Crypto Ready</span>
                           </div>
                           <div className="flex space-x-2">
                              <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center"><Coins className="w-4 h-4 text-yellow-500"/></div>
                              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"><Coins className="w-4 h-4 text-blue-500"/></div>
                              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center"><Coins className="w-4 h-4 text-purple-500"/></div>
                           </div>
                        </motion.div>
                      </div>
                    ) : (
                      // Custom Dynamic Layout for Slide 3 (Sportsbook)
                      <div className="w-full h-[90%] relative group">
                        {/* Glass Frame */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 z-0"></div>
                        
                        {/* Main Image */}
                        <div className="absolute inset-4 rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-white/5">
                          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25]/90 via-[#0a0f25]/30 to-transparent"></div>
                        </div>

                        {/* Floating Odds Board */}
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 w-[85%] bg-[#0f1535]/95 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                        >
                          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                            <div className="flex items-center space-x-3">
                              <div className="relative">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></div>
                              </div>
                              <span className="text-sm font-bold text-white uppercase tracking-widest">Live Match</span>
                            </div>
                            <span className="text-sm text-brand-secondary font-bold font-mono bg-brand-secondary/10 px-2 py-1 rounded">74:12</span>
                          </div>
                          
                          <div className="flex justify-between items-center gap-2">
                             <div className="flex-1 text-center bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/odd">
                               <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Home</p>
                               <div className="text-lg font-black text-brand-primary group-hover/odd:text-white transition-colors">1.85</div>
                             </div>
                             <div className="flex-1 text-center bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/odd">
                               <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Draw</p>
                               <div className="text-lg font-black text-white">3.40</div>
                             </div>
                             <div className="flex-1 text-center bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/odd">
                               <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Away</p>
                               <div className="text-lg font-black text-brand-secondary group-hover/odd:text-white transition-colors">4.20</div>
                             </div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-2 md:left-4 xl:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110 text-white shadow-lg">
        <ChevronLeft className="w-6 h-6" />
      </div>
      <div className="swiper-button-next-custom absolute right-2 md:right-4 xl:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110 text-white shadow-lg">
        <ChevronRight className="w-6 h-6" />
      </div>

      {/* Custom Global CSS for swiper bullets (Commented out per request) */}
      {/* 
      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-pagination-bullet.custom-bullet {
          width: 32px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          display: inline-block;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .swiper-pagination-bullet.custom-bullet:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .swiper-pagination-bullet-active.custom-bullet {
          background: #6C63FF;
          width: 56px;
          box-shadow: 0 0 15px rgba(108, 99, 255, 0.6);
          border-color: transparent;
        }
        .swiper-pagination {
          bottom: 24px !important;
          width: 100% !important;
          text-align: center !important;
          z-index: 50;
        }
      `}} /> 
      */}
    </section>
  );
}
