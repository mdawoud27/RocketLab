import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-900/80 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/mdawoud27"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://x.com/mad_d27"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dawoud27/"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:mhmaddawoud20@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 RocketLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
