import React from 'react';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = ({ profile }) => {
  if (!profile || !profile.experience) return null;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Experience</h2>
        <div className="timeline">
          {profile.experience.map((exp, index) => (
            <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-position">{exp.position}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <div className="exp-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <FaCheckCircle className="achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



