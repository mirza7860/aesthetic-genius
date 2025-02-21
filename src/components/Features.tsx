
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Box } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design-First Approach",
    description: "Focus on creating beautiful, intuitive interfaces before diving into code implementation."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Clean Code Output",
    description: "Generate production-ready, maintainable code that follows best practices."
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Framework Agnostic",
    description: "Compatible with any modern tech stack, giving you complete flexibility."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Create complex UI components in minutes instead of hours or days."
  }
];

export const Features = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create exceptional user interfaces, powered by cutting-edge AI technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover-scale"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
