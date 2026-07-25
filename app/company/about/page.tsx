import { Users, Target, Shield, Trophy, Phone } from "lucide-react";
import Link from "next/link";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata = {
  title: "About Us | TRUEIGTECH",
  description: "Learn about our mission, vision, and the team behind TRUEIGTECH.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-primary/10 blur-[100px] -z-10 rounded-full" />
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Pioneering the Future of <span className="text-gradient">Gaming Technology</span>
        </h1>
        <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
          We are a team of passionate engineers, designers, and industry veterans dedicated to providing the most advanced B2B iGaming solutions in the market.
        </p>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-16 h-16 mx-auto bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-brand-muted text-sm">To empower operators with cutting-edge technology that drives growth, engagement, and operational excellence.</p>
          </div>
          
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-16 h-16 mx-auto bg-brand-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-brand-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Player Centric</h3>
            <p className="text-brand-muted text-sm">Every line of code we write is focused on delivering the ultimate, frictionless experience for the end user.</p>
          </div>
          
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Uncompromising Security</h3>
            <p className="text-brand-muted text-sm">We employ bank-grade security protocols to ensure your data and your players&apos; funds are always protected.</p>
          </div>
          
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Industry Leaders</h3>
            <p className="text-brand-muted text-sm">Award-winning solutions recognized globally for innovation and technical superiority.</p>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industry Experts</h2>
            <div className="space-y-4 text-brand-muted mb-10">
              <p>
                We are technology experts known for delivering high-quality digital solutions with honesty, precision, and reliability. Every product is developed with advanced AI tools, scalable architecture, transparent processes, and a commitment to meeting timelines.
              </p>
              <p>
                Founded by industry veterans, TRUEIGTECH is the backbone for some of the fastest-growing gaming brands worldwide, offering everything from Turnkey Casinos to highly specialized Sportsbook APIs.
              </p>
            </div>
            
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="glass p-5 rounded-2xl flex items-center space-x-4 border border-white/10 hover:border-brand-primary/50 transition-colors shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-semibold text-white/90 text-sm">Experienced Developers</span>
              </div>
              <div className="glass p-5 rounded-2xl flex items-center space-x-4 border border-white/10 hover:border-brand-secondary/50 transition-colors shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-semibold text-white/90 text-sm">Secure Cloud Stacks</span>
              </div>
              <div className="glass p-5 rounded-2xl flex items-center space-x-4 border border-white/10 hover:border-brand-accent/50 transition-colors shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-semibold text-white/90 text-sm">Client-Focused Approach</span>
              </div>
              <div className="glass p-5 rounded-2xl flex items-center space-x-4 border border-white/10 hover:border-green-500/50 transition-colors shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="font-semibold text-white/90 text-sm">High-Performance Code</span>
              </div>
            </div>
            
            <div className="border-t border-white/10 mb-8 w-full max-w-md"></div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link href="/contact" className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center w-full sm:w-auto shadow-[0_0_20px_rgba(108,99,255,0.3)]">
                Contact Us <span className="ml-2 font-bold">↗</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-brand-muted font-bold tracking-wider mb-0.5">Call us now!</div>
                  <div className="text-white font-bold text-lg">+44 20 7123 4567</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Collage) */}
          <div className="lg:w-1/2 flex gap-4 h-[600px] lg:h-auto min-h-[550px] relative">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            
            {/* Large Left Image Placeholder */}
            <div className="w-1/2 h-full rounded-[2rem] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Development Team" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-6 right-6 z-10">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 backdrop-blur-md flex items-center justify-center text-brand-primary mb-3 border border-brand-primary/30">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">Development Team</h3>
                <p className="text-brand-muted text-sm">Expert engineers building scalable software.</p>
              </div>
            </div>
            
            {/* Right Stack */}
            <div className="w-1/2 flex flex-col gap-4 h-full">
              {/* Top Client Card */}
              <div className="h-[220px] glass bg-[#0a0f25]/80 rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-[40px] rounded-full"></div>
                
                <div className="flex -space-x-2 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0f25] bg-gray-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="client" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0f25] bg-gray-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="client" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0f25] bg-gray-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="client" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0f25] bg-brand-primary flex items-center justify-center text-white text-sm font-bold shadow-[0_0_15px_rgba(108,99,255,0.5)]">+</div>
                </div>
                
                <div className="flex text-yellow-400 mb-3 space-x-1 relative z-10">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current drop-shadow-md" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                
                <div className="text-white font-bold text-lg relative z-10">Our 5k+ Satisfied Clients</div>
              </div>
              
              {/* Bottom Image Placeholder */}
              <div className="flex-1 rounded-[2rem] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Strategic Planning" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/20 backdrop-blur-md flex items-center justify-center text-brand-secondary mb-2 border border-brand-secondary/30">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Strategic Planning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
