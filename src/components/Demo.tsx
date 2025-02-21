
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Demo = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-secondary p-4 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                <div className="w-3 h-3 rounded-full bg-green-400/40" />
              </div>
            </div>
            <div className="bg-white p-8">
              <div className="aspect-video bg-secondary/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
              </div>
            </div>
          </motion.div>
          <div className="text-center mt-12">
            <Button size="lg" className="h-12 px-8">Try Live Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
