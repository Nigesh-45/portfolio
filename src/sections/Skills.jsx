import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Code, Cpu, Database, BarChart, Users } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={18} />,
      skills: [
        { name: 'Python', level: '90%' },
        { name: 'SQL', level: '85%' },
        { name: 'Java', level: '70%' },
        { name: 'C++', level: '75%' },
        { name: 'C', level: '65%' },
      ],
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Cpu size={18} />,
      skills: [
        { name: 'NumPy', level: '85%' },
        { name: 'Pandas', level: '88%' },
        { name: 'Scikit-learn', level: '82%' },
        { name: 'Matplotlib', level: '80%' },
      ],
    },
    {
      title: 'Data & Analytics',
      icon: <Database size={18} />,
      skills: [
        { name: 'Power BI', level: '85%' },
        { name: 'Excel', level: '80%' },
        { name: 'Data Preprocessing', level: '88%' },
        { name: 'Exploratory Data Analysis', level: '85%' },
      ],
    },
    {
      title: 'Platforms & Tools',
      icon: <BarChart size={18} />,
      skills: [
        { name: 'Jupyter Notebook', level: '90%' },
        { name: 'VS Code', level: '85%' },
        { name: 'Google Colab', level: '90%' },
        { name: 'Docker / Flask (APIs)', level: '75%' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={18} />,
      skills: [
        { name: 'Analytical Thinking', level: '90%' },
        { name: 'Team Collaboration', level: '85%' },
        { name: 'Communication', level: '80%' },
        { name: 'Time Management', level: '85%' },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="skills-layout">
          {/* Left Sidebar Tabs */}
          <div className="skills-tabs">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                className={`skill-tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-title">{category.title}</span>
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="active-tab-glow"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Skills Display Area */}
          <div className="skills-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="skills-list-wrapper"
              >
                <div className="skills-display-header">
                  <span className="header-icon">{skillCategories[activeTab].icon}</span>
                  <h3>{skillCategories[activeTab].title}</h3>
                </div>
                <div className="skills-grid-new">
                  {skillCategories[activeTab].skills.map((skill) => (
                    <div className="skill-progress-bar-new" key={skill.name}>
                      <div className="skill-progress-label-new">
                        <span className="skill-name-new">{skill.name}</span>
                        <span className="skill-level-new">{skill.level}</span>
                      </div>
                      <div className="skill-progress-track-new">
                        <motion.div
                          className="skill-progress-fill-new"
                          initial={{ width: 0 }}
                          animate={{ width: skill.level }}
                          transition={{ duration: 1.0, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
