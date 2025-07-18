import { motion } from 'framer-motion';
import profileAvatar from '@/assets/profile-avatar.jpg';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow" />
              <img
                src={profileAvatar}
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-card z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-rotate-slow" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4 text-aurora animate-aurora-shimmer"
          >
            John Doe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide"
          >
            Data Scientist & Full-Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto"
          >
            Crafting intelligent solutions with data science and modern web technologies.
            Transforming complex problems into elegant, scalable applications.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              className="btn-gaming"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </button>
            <button 
              className="btn-gaming-outline"
              onClick={() => {
                // Create a dummy CV PDF download
                const link = document.createElement('a');
                link.href = 'data:application/pdf;base64,JVBERi0xLjMNCiXi48/TDQoxIDAgb2JqDQo8PA0KL1R5cGUgL0NhdGFsb2cNCi9QYWdlcyAyIDAgUg0KPj4NCmVuZG9iag0KMiAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDENCi9LaWRzIFsgMyAwIFIgXQ0KPj4NCmVuZG9iag0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDIgMCBSDQovTWVkaWFCb3ggWyAwIDAgNjEyIDc5MiBdDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDQgMCBSDQo+Pg0KPj4NCi9Db250ZW50cyA1IDAgUg0KPj4NCmVuZG9iag0KNCAwIG9iag0KPDwNCi9UeXBlIC9Gb250DQovU3VidHlwZSAvVHlwZTENCi9CYXNlRm9udCAvSGVsdmV0aWNhDQo+Pg0KZW5kb2JqDQo1IDAgb2JqDQo8PA0KL0xlbmd0aCA0NA0KPj4NCnN0cmVhbQ0KQlQNCi9GMSAxMiBUZg0KNzIgNzIwIFRkDQooSm9obiBEb2UgLSBDVikgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KeHJlZg0KMCA2DQowMDAwMDAwMDAwIDY1NTM1IGYgDQowMDAwMDAwMDA5IDAwMDAwIG4gDQowMDAwMDAwMDU4IDAwMDAwIG4gDQowMDAwMDAwMTE1IDAwMDAwIG4gDQowMDAwMDAwMjQ1IDAwMDAwIG4gDQowMDAwMDAwMzIzIDAwMDAwIG4gDQp0cmFpbGVyDQo8PA0KL1NpemUgNg0KL1Jvb3QgMSAwIFINCj4+DQpzdGFydHhyZWYNCjQxNg0KJSVFT0YNCg==';
                link.download = 'John_Doe_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full blur-sm opacity-60"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 right-16 w-6 h-6 bg-secondary rounded-full blur-sm opacity-60"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 w-5 h-5 bg-accent rounded-full blur-sm opacity-60"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};