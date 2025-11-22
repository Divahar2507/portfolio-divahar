// server.js (updated)
// - Uses MONGO_URI (or MONGODB_URI) env var
// - Safer logging and error handling
// - Keeps your original profile initialization (no deletion of old data)
// - Avoid deprecated mongoose options

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const profileRoutes = require('./routes/profile');
const projectRoutes = require('./routes/projects');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Helper: profile initialization data (keeps your old data creation)
const initialProfileObject = {
  name: "DIVAHAR P",
  email: "divahardivahar739@gmail.com",
  phone: "+91 8667833386",
  linkedin: "https://www.linkedin.com/in/divahar-p",
  github: "https://github.com/Divahar2507",
  location: "Bengaluru, Karnataka, India",
  title: "Fullstack Developer",
  bio: "Passionate Fullstack Developer with expertise in React, Node.js, and MongoDB. Currently working at KodNest Technologies, building scalable microservices and modern web applications.",
  education: [{
    institution: "Anna University",
    degree: "B-TECH in Information Technology",
    period: "August 2021 - May 2025",
    cgpa: "7.8 / 10",
    coursework: [
      "Software Engineering Principles",
      "Java",
      "Data Structures and Algorithms (Java)",
      "MySQL",
      "Artificial Intelligence",
      "Web Development (JavaScript)",
      "React",
      "Node.js"
    ]
  }],
  experience: [{
    company: "KodNest Technologies",
    position: "Fullstack Developer",
    location: "Bengaluru, Karnataka",
    period: "May 2025 - Present",
    achievements: [
      "Architected a microservices-based backend system using Node.js and Express, improving API performance by 35%",
      "Reduced query response time by 25% by optimizing MongoDB databases and indexing frequently accessed data",
      "Spearheaded the development of a React-based customer-facing dashboard, enhancing user engagement by 40%",
      "Designed and implemented CI/CD pipelines using GitHub Actions, accelerating deployment cycles by 20%",
      "Developed user-friendly interfaces using Spring, improving customer satisfaction scores by 18%",
      "Implemented automated unit testing using Jest, increasing code coverage by 30% and reducing production bugs",
      "Collaborated in Agile sprints with cross-functional teams to deliver features on time and improve workflows"
    ]
  }],
  skills: {
    languages: [ "Java", "Python", "JavaScript"],
    frameworks: ["Spring", "Spring boot", "Django","React.js", "Angular", "Node.js","Express"],
    databases: [ "MySQL","MongoDB"],
    tools: ["AWS", "GitHub Actions", "Docker", "WebSocket"],
    concepts: ["Microservices Architecture", "RESTful APIs", "CI/CD"]
  },
  projects: [{
    title: "Real-Time Chat Application",
    technologies: ["React.js", "WebSocket", "Flask", "PostgreSQL"],
    description: "Designed a real-time messaging platform, achieving 99.5% uptime and supporting over 10,000 concurrent users. Built a secure authentication system using JWT and Flask, enhancing data privacy. Reduced message delivery latency by 30% with optimized WebSocket connections.",
    features: [
      "Real-time messaging with WebSocket",
      "JWT-based authentication",
      "Support for 10,000+ concurrent users",
      "99.5% uptime",
      "Optimized message delivery"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
  }, {
    title: "E-commerce Data Pipeline",
    technologies: ["Python", "Django", "AWS", "Docker"],
    description: "Automated data ingestion pipelines for large-scale e-commerce datasets, reducing processing time by 40%. Deployed RESTful APIs for integrating third-party payment services, improving system flexibility.",
    features: [
      "Automated data ingestion",
      "40% reduction in processing time",
      "RESTful API integration",
      "Third-party payment services",
      "Docker containerization"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  }, {
    title: "AI-Powered Recommendation System",
    technologies: ["TensorFlow", "Flask", "D3.js"],
    description: "Built a machine learning model to provide personalized product recommendations, increasing click-through rates by 25%. Integrated the model into a Flask web app with interactive visualizations using D3.js.",
    features: [
      "Machine learning-based recommendations",
      "25% increase in click-through rates",
      "Interactive D3.js visualizations",
      "Flask web application",
      "Personalized product suggestions"
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
  }]
};

// MongoDB connection - flexible environment variable handling
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

if (!process.env.MONGO_URI && !process.env.MONGODB_URI) {
  console.warn('⚠️  MONGO_URI (or MONGODB_URI) not set — falling back to localhost (will fail on cloud).');
}

mongoose.connect(mongoUri)
  .then(async () => {
    console.log('✅ MongoDB connected successfully');

    // Initialize profile data if not exists (safe: won't override existing data)
    try {
      const Profile = require('./models/Profile');
      const profile = await Profile.findOne();
      if (!profile) {
        await Profile.create(initialProfileObject);
        console.log('✅ Profile data initialized');
      } else {
        console.log('ℹ️ Profile already exists; skipping initialization');
      }
    } catch (err) {
      console.error('Error during profile initialization:', err);
    }
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    // In production you may want to exit so Render marks the deploy as failed
    // process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
