import { motion } from 'framer-motion';
import { Monitor, Phone, Tablet, Layout, Cpu, Globe } from 'lucide-react';

const devices = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Desktop",
    description: "Optimized for large screens",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    icon: <Tablet className="w-8 h-8" />,
    title: "Tablet",
    description: "Perfect for touch devices",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Mobile",
    description: "Responsive on smartphones",
    color: "text-pink-400",
    bgColor: "bg-pink-500/20"
  }
];

const technologies = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Modern UI",
    description: "Beautiful and intuitive interfaces"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Performance",
    description: "Blazing fast load times"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global CDN",
    description: "Lightning-fast worldwide delivery"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stunning on Every Device
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience perfect responsiveness and beautiful design across all platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 ${device.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <span className={device.color}>{device.icon}</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{device.title}</h3>
              <p className="text-gray-400">{device.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400">{tech.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{tech.title}</h4>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Showcase"
            className="rounded-2xl shadow-2xl w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}