import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

// In a real app, you would fetch the product data based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | TRUEIGTECH Products`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="pt-32 pb-24">
      {/* Product Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Enterprise Product</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {title} Solution
            </h1>
            <p className="text-lg text-brand-muted mb-8">
              Launch a fully functional {title.toLowerCase()} in record time. Our comprehensive solution includes everything you need to start, manage, and scale your operations globally.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="#features"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Dummy Product Screenshot/Illustration */}
            <div className="glass rounded-3xl p-4 border-brand-primary/20 shadow-2xl relative z-10">
              <div className="w-full h-8 bg-brand-bg rounded-t-xl mb-4 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="w-full h-64 md:h-80 bg-brand-bg rounded-b-xl border border-white/5 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10"></div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-1/3 h-6 bg-white/10 rounded"></div>
                  <div className="w-1/4 h-8 bg-brand-primary/30 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                </div>
                <div className="w-full h-32 bg-white/5 rounded-xl border border-white/5"></div>
              </div>
            </div>
            
            {/* Abstract background blobs */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-brand-bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core <span className="text-gradient">Features</span></h2>
            <p className="text-brand-muted text-lg">Everything you need to run a successful operation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "High Performance Engine", "Advanced Risk Management", "Multi-currency Support", 
              "Crypto Integration Ready", "Customizable UI/UX", "Real-time Reporting",
              "Bonus Engine", "24/7 Technical Support", "Mobile Optimized"
            ].map((feature, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-2">{feature}</h3>
                  <p className="text-brand-muted text-sm">Empower your platform with industry-leading technology and tools designed for growth.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to launch your {title}?</h2>
        <p className="text-xl text-brand-muted mb-8">Join the top operators using TRUEIGTECH solutions to power their gaming empire.</p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
        >
          Contact Our Sales Team
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
