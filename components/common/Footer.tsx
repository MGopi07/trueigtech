"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#050816] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 pr-4">
            <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mb-6 block tracking-tight">
              TRUEIGTECH
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              Empowering the iGaming industry with enterprise-level technology solutions, white label platforms, and robust API integrations designed for maximum scalability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-4">
              {[
                { name: 'Turnkey Platforms', href: '/solutions/turnkey' },
                { name: 'White Label Casino', href: '/solutions/white-label' },
                { name: 'Sportsbook Integration', href: '/solutions/sportsbook' },
                { name: 'Game API Aggregator', href: '/solutions/api' },
                { name: 'Crypto Gaming', href: '/solutions/crypto' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group relative flex items-center text-gray-400 hover:text-brand-primary transition-colors font-medium">
                    <span className="absolute left-0 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-primary">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="transform group-hover:translate-x-6 transition-all duration-300 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/company/about' },
                { name: 'Careers', href: '/company/careers' },
                { name: 'Blog & News', href: '/blog' },
                { name: 'Events', href: '/events' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group relative flex items-center text-gray-400 hover:text-brand-primary transition-colors font-medium">
                    <span className="absolute left-0 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-primary">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="transform group-hover:translate-x-6 transition-all duration-300 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-400 font-medium leading-tight mt-1">123 Gaming Street, Tech District,<br />London, UK</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-400 font-medium">+44 20 7123 4567</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-400 font-medium">hello@trueigtech.com</span>
              </li>
            </ul>
            
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex items-center w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-[#0b1021] border border-white/10 rounded-xl pl-5 pr-[140px] py-4 w-full text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all shadow-inner"
                />
                <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-primary hover:bg-brand-secondary text-white px-5 rounded-lg font-bold transition-colors flex items-center group">
                  Subscribe
                  <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-medium mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TRUEIGTECH. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-medium">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
