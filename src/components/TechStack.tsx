import { motion } from 'framer-motion';
import techStackImage from '@/assets/tech-stack-collection.jpg';

const techStackData = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'SQL', category: 'Database' },
  { name: 'Power BI', category: 'Analytics' },
  { name: 'QlikSense', category: 'Analytics' },
  { name: 'Excel', category: 'Analytics' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Firebase', category: 'Cloud' },
];

const categories = {
  Frontend: { color: 'from-blue-500 to-cyan-500', icon: '🎨' },
  Backend: { color: 'from-green-500 to-emerald-500', icon: '⚙️' },
  Database: { color: 'from-purple-500 to-violet-500', icon: '💾' },
  Analytics: { color: 'from-orange-500 to-red-500', icon: '📊' },
  Cloud: { color: 'from-pink-500 to-rose-500', icon: '☁️' },
};

export const TechStack = () => {
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
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, analytics, and cloud technologies
          </p>
        </motion.div>

        {/* Tech Stack Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card-gaming p-4 max-w-4xl mx-auto">
            <img
              src={techStackImage}
              alt="Tech Stack Collection"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Object.entries(categories).map(([category, { color, icon }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card-gaming p-6 text-center"
            >
              <div className={`text-4xl mb-4`}>{icon}</div>
              <h3 className="text-xl font-bold mb-4 text-glow-primary">{category}</h3>
              <div className="space-y-2">
                {techStackData
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-muted to-muted/50 border border-border hover:border-primary transition-colors"
                    >
                      {tech.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card-gaming p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center text-glow-secondary">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { skill: 'Data Science & Analytics', level: 95 },
                { skill: 'React & Frontend Development', level: 90 },
                { skill: 'Python & Machine Learning', level: 88 },
                { skill: 'Cloud Technologies', level: 85 },
                { skill: 'Database Management', level: 82 },
                { skill: 'Business Intelligence', level: 92 },
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-primary">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};