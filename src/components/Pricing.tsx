import { motion } from 'framer-motion';
import { Check, Zap, Shield, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small projects and individual developers',
    icon: <Zap className="w-6 h-6" />,
    features: [
      'Up to 5 projects',
      '10GB storage',
      'Basic analytics',
      'Community support',
      'Basic integrations'
    ],
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'Ideal for growing teams and businesses',
    icon: <Shield className="w-6 h-6" />,
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Advanced integrations',
      'Custom domains'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'For large organizations with complex needs',
    icon: <Rocket className="w-6 h-6" />,
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom solutions',
      'SLA guarantee',
      'Advanced security',
      'API access',
      'White-labeling'
    ],
    color: 'from-pink-500 to-red-500'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core features with different levels of scalability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-1 rounded-bl-lg">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  {plan.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-8">{plan.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-medium mb-8`}
                >
                  Get Started
                </motion.button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Check className="w-5 h-5 text-green-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}