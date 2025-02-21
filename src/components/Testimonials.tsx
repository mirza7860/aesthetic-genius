
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This tool has completely transformed our design workflow. We're shipping features faster than ever.",
    author: "Sarah Chen",
    role: "Lead Designer, TechCorp"
  },
  {
    quote: "The AI-generated components are incredibly polished. It's like having a design team in your pocket.",
    author: "Michael Roberts",
    role: "Frontend Developer, StartupX"
  },
  {
    quote: "Framework agnostic approach means we can use it across all our projects. Game changer!",
    author: "Emma Wilson",
    role: "CTO, InnovateHub"
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Designers & Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <blockquote>
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
                <footer>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
