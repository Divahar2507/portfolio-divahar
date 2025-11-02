import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './About.css';

const About = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="about-description">
              {profile.bio}
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">35%</div>
                <div className="stat-label">API Performance</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40%</div>
                <div className="stat-label">User Engagement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30%</div>
                <div className="stat-label">Code Coverage</div>
              </div>
            </div>
          </div>
          <div className="education" data-aos="fade-left">
            <h3 className="subsection-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h3>
            {profile.education && profile.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-header">
                  <FaUniversity className="edu-icon" />
                  <div>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <p className="edu-degree">{edu.degree}</p>
                  </div>
                </div>
                <div className="edu-details">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
                </div>
                {edu.coursework && (
                  <div className="edu-coursework">
                    <strong>Relevant Coursework:</strong>
                    <div className="coursework-tags">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

