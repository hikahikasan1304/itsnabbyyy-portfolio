import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Real-Time Analytics Dashboard',
    description: 'A comprehensive dashboard built with React and D3.js that visualizes real-time business metrics. Features interactive charts, data filtering, and responsive design for optimal user experience across devices.',
    image: project1Image,
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/yourusername/analytics-dashboard',
    liveLink: 'https://analytics-dashboard-demo.vercel.app',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'AI-Powered Predictive Model',
    description: 'Machine learning pipeline using Python and TensorFlow to predict customer behavior patterns. Implements advanced neural networks with 94% accuracy for business intelligence and decision making.',
    image: project2Image,
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Azure ML', 'Docker'],
    githubLink: 'https://github.com/yourusername/ai-predictive-model',
    liveLink: 'https://ai-model-demo.herokuapp.com',
    category: 'Machine Learning'
  },
  {
    id: 3,
    title: 'Cloud Data Pipeline',
    description: 'Scalable ETL pipeline on Azure Cloud Platform that processes millions of records daily. Automated data ingestion, transformation, and visualization using modern cloud-native technologies.',
    image: project3Image,
    technologies: ['Azure', 'Power BI', 'Python', 'SQL', 'Apache Spark'],
    githubLink: 'https://github.com/yourusername/cloud-data-pipeline',
    liveLink: 'https://data-pipeline-dashboard.azurewebsites.net',
    category: 'Data Engineering'
  }
];

export const Projects = () => {
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
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with practical business applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-gaming group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/90 text-primary-foreground rounded-lg hover:bg-primary transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-card/90 text-foreground rounded-lg hover:bg-card transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-glow-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-muted/50 text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex-1 justify-center relative z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border hover:border-primary hover:text-primary transition-colors relative z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gaming inline-block"
            style={{ pointerEvents: 'auto' }}
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};