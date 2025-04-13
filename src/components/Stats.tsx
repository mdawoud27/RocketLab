import { motion } from 'framer-motion';
import { Users, Code, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "100K+",
    label: "Active Users",
    color: "text-blue-400"
  },
  {
    icon: <Code className="w-6 h-6" />,
    value: "1M+",
    label: "Lines of Code",
    color: "text-purple-400"
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "4.9/5",
    label: "User Rating",
    color: "text-yellow-400"
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "50+",
    label: "Awards Won",
    color: "text-green-400"
  }
];

export function Stats() {
  return (
    <section id="stats" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${stat.color} bg-white/5`}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}