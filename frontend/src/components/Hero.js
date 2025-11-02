import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="greeting" data-aos="fade-up">Hello, I'm</div>
          <h1 className="hero-name" data-aos="fade-up" data-aos-delay="100">
            {profile.name.split(' ')[0]} {profile.name.split(' ')[1] && <span className="highlight">{profile.name.split(' ')[1]}</span>}
          </h1>
          <div className="hero-title" data-aos="fade-up" data-aos-delay="200">
            <span className="typing-text">{profile.title}</span>
          </div>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            {profile.bio || 'Passionate Fullstack Developer building modern web applications'}
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-social" data-aos="fade-up" data-aos-delay="500">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
            <a href={`tel:${profile.phone}`} aria-label="Phone">
              <FaPhone />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-image"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="image-container">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="profile-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

