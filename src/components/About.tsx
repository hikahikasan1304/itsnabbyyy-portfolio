import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-aurora">
            About Me
          </h2>

          <div className="card-gaming p-8 mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              I'm a passionate data scientist and full-stack developer with expertise in machine learning, 
              cloud technologies, and modern web development. With multiple certifications from Microsoft Azure 
              and Google, I bridge the gap between data insights and user-friendly applications.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              My journey spans from analyzing complex datasets to building scalable web applications, 
              always focused on delivering innovative solutions that drive business value and enhance user experiences.
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8"
          >
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 btn-gaming-outline"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 btn-gaming-outline"
            >
              <Github className="w-5 h-5" />
              GitHub
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};