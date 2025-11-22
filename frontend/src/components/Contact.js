import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate it
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  if (!profile) return null;

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: profile.email, link: `mailto:${profile.email}` },
    { icon: FaPhone, label: 'Phone', value: profile.phone, link: `tel:${profile.phone}` },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'divahar-p', link: profile.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'Divahar2507', link: profile.github },
    { icon: FaMapMarkerAlt, label: 'Location', value: profile.location, link: null }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact-list">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || '#'}
                  className="contact-item"
                  {...(info.link ? {} : { onClick: (e) => e.preventDefault() })}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div>
                    <div className="contact-label">{info.label}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <form className="contact-form " onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



