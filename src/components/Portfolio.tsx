import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './AuroraBackground';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { TechStack } from './TechStack';
import { Certifications } from './Certifications';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Portfolio = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack">
          <TechStack />
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-t border-border"
        >
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground mb-4">
              Built with React, Three.js, and Framer Motion
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 John Doe. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </main>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-30 origin-left pointer-events-none"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};