import { ArrowRight, Layers, Workflow, Settings } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | TRUEIGTECH Solutions`,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="pt-32 pb-24">
      {/* Solution Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="inline-flex items-center space-x-2 bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-medium">Business Solution</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          {title}
        </h1>
        <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
          Tailored technology solutions designed to solve complex challenges and drive unparalleled growth for your iGaming business.
        </p>
      </section>

      {/* Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-t border-brand-primary/50">
            <Layers className="w-10 h-10 text-brand-primary mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Scalable Infrastructure</h3>
            <p className="text-brand-muted">Our {title.toLowerCase()} is built on a microservices architecture ensuring maximum uptime and infinite scalability as your player base grows.</p>
          </div>
          <div className="glass p-8 rounded-3xl border-t border-brand-secondary/50">
            <Workflow className="w-10 h-10 text-brand-secondary mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
            <p className="text-brand-muted">Easily integrate thousands of games, payment providers, and affiliate systems with our standardized RESTful APIs.</p>
          </div>
          <div className="glass p-8 rounded-3xl border-t border-brand-accent/50">
            <Settings className="w-10 h-10 text-brand-accent mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Complete Control</h3>
            <p className="text-brand-muted">Manage every aspect of your operation from a centralized, intuitive back-office dashboard designed for efficiency.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-3xl glass text-center border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Discover the Power of {title}</h2>
          <p className="text-lg text-brand-muted mb-8 max-w-2xl mx-auto">
            Schedule a personalized demonstration with our technical team to see how this solution can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-brand-bg px-8 py-3 rounded-full font-bold transition-all hover:bg-gray-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5 text-brand-primary" />
          </Link>
        </div>
      </section>
    </div>
  );
}
