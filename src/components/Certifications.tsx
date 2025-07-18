import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import microsoftLogo from '@/assets/microsoft-logo.png';
import googleLogo from '@/assets/google-logo.png';

const certificationData = [
  {
    provider: 'Microsoft Azure',
    image: microsoftLogo,
    certifications: [
      { name: 'Azure Data Scientist Associate (DP-100)', link: 'https://learn.microsoft.com/en-us/certifications/azure-data-scientist/' },
      { name: 'Azure AI Engineer Associate (AI-102)', link: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/' },
      { name: 'Power BI Data Analyst Associate (PL-300)', link: 'https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/' },
      { name: 'Azure AI Fundamentals (AI-900)', link: 'https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/' },
      { name: 'Power Platform Fundamentals (PL-900)', link: 'https://learn.microsoft.com/en-us/certifications/power-platform-fundamentals/' },
      { name: 'Azure Data Fundamentals (DP-900)', link: 'https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/' },
    ]
  },
  {
    provider: 'Google',
    image: googleLogo,
    certifications: [
      { name: 'Google Data Analytics Professional Certificate', link: 'https://www.coursera.org/professional-certificates/google-data-analytics' },
      { name: 'Google Business Intelligence Certificate', link: 'https://www.coursera.org/professional-certificates/google-business-intelligence' },
    ]
  }
];

export const Certifications = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-aurora">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise in data science, cloud technologies, and business intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {certificationData.map((provider, providerIndex) => (
            <motion.div
              key={provider.provider}
              initial={{ opacity: 0, x: providerIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: providerIndex * 0.2 }}
              viewport={{ once: true }}
              className="card-gaming p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-glow-primary">
                  {provider.provider}
                </h3>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={provider.image}
                    alt={`${provider.provider} Certifications`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>

              <div className="space-y-4">
                {provider.certifications.map((cert, certIndex) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (providerIndex * 0.2) + (certIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:border-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card-gaming p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground">Professional Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">2</div>
                <div className="text-muted-foreground">Major Cloud Providers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Exam Pass Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};