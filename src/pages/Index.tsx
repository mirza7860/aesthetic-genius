
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { ChatUI } from "@/components/ChatUI";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <div className="section-padding bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Create Your UI</h2>
          <ChatUI />
        </div>
      </div>
      <Pricing />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Index;
