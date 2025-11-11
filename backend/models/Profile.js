const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  period: String,
  cgpa: String,
  coursework: [String]
});

const ExperienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  location: String,
  period: String,
  achievements: [String]
});

const SkillsSchema = new mongoose.Schema({
  languages: [String],
  frameworks: [String],
  databases: [String],
  tools: [String],
  concepts: [String]
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  technologies: [String],
  description: String,
  features: [String],
  image: String,
  githubUrl: String,
  liveUrl: String
});

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  location: String,
  title: String,
  bio: String,
  education: [EducationSchema],
  experience: [ExperienceSchema],
  skills: SkillsSchema,
  projects: [ProjectSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);



