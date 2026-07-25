import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CuttingEdgeServices from "@/components/home/CuttingEdgeServices";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Stats />
      <Services />
      <CuttingEdgeServices />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <Blog />
      <CTA />
    </>
  );
}
