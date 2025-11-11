import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa';
import './Skills.css';

const Skills = ({ profile }) => {
  if (!profile || !profile.skills) return null;

  const skillCategories = [
    { icon: FaCode, title: 'Languages', skills: profile.skills.languages, color: '#6366f1' },
    { icon: FaServer, title: 'Frameworks', skills: profile.skills.frameworks, color: '#8b5cf6' },
    { icon: FaDatabase, title: 'Databases', skills: profile.skills.databases, color: '#ec4899' },
    { icon: FaTools, title: 'Tools', skills: profile.skills.tools, color: '#f59e0b' },
    { icon: FaLightbulb, title: 'Concepts', skills: profile.skills.concepts, color: '#10b981' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="category-header">
                <category.icon className="category-icon" style={{ color: category.color }} />
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item" style={{ '--accent-color': category.color }}>
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${Math.floor(Math.random() * 30 + 70)}%`,
                          backgroundColor: category.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



