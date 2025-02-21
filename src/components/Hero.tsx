
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/5 rounded-full text-primary">
              Revolutionizing UI Design
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Transform Your Ideas into Beautiful Interfaces with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate production-ready UI components and clean code in minutes with our design-first, 
              framework-agnostic approach.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="h-12 px-8 text-base">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
