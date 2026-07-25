import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | TRUEIGTECH",
  description: "Get in touch with TRUEIGTECH to discuss your gaming business needs.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-brand-muted">
            Ready to start your next big gaming project? Our team of experts is here to help you build and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Our Headquarters</h4>
                    <p className="text-brand-muted">123 Gaming Street, Tech District<br/>London, UK, SW1A 1AA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <p className="text-brand-muted">+44 20 7123 4567<br/>Mon-Fri 9am to 6pm GMT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <p className="text-brand-muted">hello@trueigtech.com<br/>support@trueigtech.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dummy Map Placeholder */}
            <div className="glass rounded-3xl h-64 w-full flex items-center justify-center border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="w-10 h-10 text-brand-secondary mb-2 animate-bounce" />
                <span className="text-white font-medium">Interactive Map Placeholder</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-12 rounded-3xl relative">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-2">Subject</label>
                <select className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>White Label Platform Demo</option>
                  <option>API Integration</option>
                  <option>Partnership</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
