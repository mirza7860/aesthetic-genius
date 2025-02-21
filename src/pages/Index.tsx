
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Index;
