import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, Palette, Shield, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Built for speed and performance, ensuring your projects launch quickly and run smoothly with optimized code and minimal load times."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developer Friendly",
    description: "Powerful tools and intuitive interfaces make development a breeze. Built with modern best practices and developer experience in mind."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Modern Stack",
    description: "Using the latest technologies to keep your projects future-proof. Stay ahead of the curve with cutting-edge tools and frameworks."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Beautiful Design",
    description: "Create stunning user interfaces with our pre-built components and design system. Perfect for crafting memorable user experiences."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-grade security features protect your data and users. Built-in security best practices and regular security audits."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Native",
    description: "Scale effortlessly with cloud-native architecture. Deploy globally with just a few clicks and manage everything from one dashboard."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-800/50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Rocket className="w-8 h-8 text-blue-400" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with intuitive design to deliver exceptional results.
            Every feature is crafted with your success in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}