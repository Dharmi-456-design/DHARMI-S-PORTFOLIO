import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Code, GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    title: 'Bachelor of Computer Science',
    institution: 'Swaminarayan University',
    date: '2025 - 2029',
    description: 'Focusing on full-stack development, including front-end and back-end technologies, databases, and cloud services.',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Noble School Of Science',
    date: 'June 2023 - March 2025',
    description: 'Specialized in computer networking, system administration, and basic programming concepts.',
    icon: <Brain className="w-5 h-5" />
  },
  {
    title: 'Secondary Education',
    institution: 'Grow More School',
    date: '2022 - 2023',
    description: 'Secondary education equips students with essential knowledge and skills, preparing them for higher education and future careers.',
    icon: <Code className="w-5 h-5" />
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="pt-20 md:pt-32 pb-4 md:pb-8 relative overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4" />
            My Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My formal education shapes my analytical thinking and lays the foundation for my professional growth.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -translate-x-1/2 rounded-full hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent rounded-full md:hidden" />

          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-start mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center text-primary shadow-lg z-10 -translate-x-1/2 shadow-primary/20">
                {item.icon}
              </div>

              {/* Content Box */}
              <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="bg-card/50 backdrop-blur-xl border border-border p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                  <div className={`text-sm font-bold text-primary mb-2 flex items-center gap-2 ${index % 2 !== 0 && 'md:justify-end'}`}>
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="text-secondary font-medium mb-4 text-base sm:text-lg">
                    {item.institution}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
