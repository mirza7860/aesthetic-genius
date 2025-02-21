
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Design Workflow?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of designers and developers who are creating exceptional user interfaces with AI.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 px-8 group"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
