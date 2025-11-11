# Portfolio Backend API

Backend server for the portfolio website built with Node.js, Express, and MongoDB.

## 🚀 Features

- RESTful API endpoints for profile data
- GitHub API integration for fetching repositories
- MongoDB database with Mongoose ODM
- Automatic profile data initialization
- CORS enabled for frontend integration
- Environment-based configuration

## 📦 Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   GITHUB_USERNAME=Divahar2507
   ```

4. **Make sure MongoDB is running:**
   - Local MongoDB: Start with `mongod`
   - MongoDB Atlas: Use your cloud connection string

## 🏃 Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## 📁 Project Structure

```
backend/
├── models/
│   └── Profile.js          # MongoDB schema for profile data
├── routes/
│   ├── profile.js          # Profile CRUD endpoints
│   └── projects.js         # GitHub projects endpoints
├── server.js               # Main server file
├── package.json
└── .env                    # Environment variables (create this)
```

## 🔌 API Endpoints

### Profile Endpoints

#### GET `/api/profile`
Get profile data (education, experience, skills, projects)

**Response:**
```json
{
  "name": "Divahar P",
  "email": "divahardivahar739@gmail.com",
  "phone": "+91 8667833386",
  "linkedin": "https://www.linkedin.com/in/divahar-p",
  "github": "https://github.com/Divahar2507",
  "location": "Bengaluru, Karnataka, India",
  "title": "Fullstack Developer",
  "bio": "...",
  "education": [...],
  "experience": [...],
  "skills": {...},
  "projects": [...]
}
```

#### PUT `/api/profile`
Update profile data

**Request Body:** (Same structure as GET response)

### Projects Endpoints

#### GET `/api/projects/github`
Fetch repositories from GitHub API

**Response:**
```json
[
  {
    "id": 123456,
    "title": "Project Name",
    "description": "Project description",
    "githubUrl": "https://github.com/...",
    "liveUrl": "https://...",
    "technologies": ["React", "Node.js"],
    "stars": 10,
    "forks": 5,
    "language": "JavaScript",
    "updatedAt": "2024-01-01T00:00:00Z",
    "image": "https://..."
  }
]
```

### Health Check

#### GET `/api/health`
Check server status

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## 🗄️ Database Schema

### Profile Model

```javascript
{
  name: String (required),
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  location: String,
  title: String,
  bio: String,
  education: [{
    institution: String,
    degree: String,
    period: String,
    cgpa: String,
    coursework: [String]
  }],
  experience: [{
    company: String,
    position: String,
    location: String,
    period: String,
    achievements: [String]
  }],
  skills: {
    languages: [String],
    frameworks: [String],
    databases: [String],
    tools: [String],
    concepts: [String]
  },
  projects: [{
    title: String,
    technologies: [String],
    description: String,
    features: [String],
    image: String,
    githubUrl: String,
    liveUrl: String
  }]
}
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/portfolio |
| `NODE_ENV` | Environment (development/production) | development |
| `GITHUB_USERNAME` | GitHub username for fetching repos | Divahar2507 |

### MongoDB Connection

The server automatically connects to MongoDB on startup. If the connection fails, the server will log an error but continue running (useful for development without MongoDB).

## 📝 Initialization

On first startup, if no profile exists in the database, the server will automatically create a default profile with all the resume data. This profile can be updated via the PUT endpoint or directly in MongoDB.

## 🔒 Security Notes

- CORS is enabled for all origins (configure for production)
- No authentication implemented (add if needed)
- Environment variables should never be committed to git
- Consider adding rate limiting for production

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify MongoDB is running: `mongod --version`
- Check connection string in `.env`
- For MongoDB Atlas, ensure IP is whitelisted

### GitHub API Rate Limit
- GitHub API allows 60 requests/hour for unauthenticated requests
- For production, use GitHub Personal Access Token
- Consider caching responses

### Port Already in Use
- Change `PORT` in `.env` file
- Or kill the process using the port:
  - Windows: `netstat -ano | findstr :5000`
  - Mac/Linux: `lsof -i :5000`

## 📚 Dependencies

### Production
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - CORS middleware
- `dotenv` - Environment variables
- `axios` - HTTP client for GitHub API
- `express-rate-limit` - Rate limiting middleware

### Development
- `nodemon` - Auto-reload during development

## 🚀 Deployment

### Recommended Platforms
- **Heroku**: Easy deployment with MongoDB Atlas
- **Railway**: Simple setup with MongoDB included
- **Render**: Free tier available
- **DigitalOcean**: Full control with App Platform

### Deployment Checklist
1. Set environment variables on hosting platform
2. Use MongoDB Atlas for cloud database
3. Update CORS settings for production domain
4. Enable rate limiting
5. Set `NODE_ENV=production`
6. Configure proper error logging

## 📄 License

MIT License



