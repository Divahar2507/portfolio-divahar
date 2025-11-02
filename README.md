# Portfolio Website - Divahar P

A modern, creative portfolio website showcasing my skills, experience, and projects. Built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Dynamic Content**: Fetch projects directly from GitHub API
- **Real-time Data**: MongoDB backend for profile management
- **Responsive Design**: Works seamlessly on all devices
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- React.js
- Framer Motion (Animations)
- AOS (Animate On Scroll)
- React Icons
- CSS3 (Custom Properties, Grid, Flexbox)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- GitHub API Integration

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Divahar2507/portfolio-divahar.git
cd portfolio-divahar
```

2. **Install dependencies**
```bash
npm run install-all
```

3. **Set up environment variables**

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
GITHUB_USERNAME=Divahar2507
```

4. **Start MongoDB**
Make sure MongoDB is running on your system.

5. **Run the application**
```bash
npm run dev
```

This will start both the backend (port 5000) and frontend (port 3000) servers.

## 📁 Project Structure

```
portfolio-divahar/
├── backend/
│   ├── models/
│   │   └── Profile.js
│   ├── routes/
│   │   ├── profile.js
│   │   └── projects.js
│   ├── server.js
│   ├── package.json
│   └── README.md          # Backend documentation
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Experience.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md          # Frontend documentation
├── package.json
├── SETUP.md               # Setup guide
└── README.md              # Main documentation
```

> 📖 For detailed documentation, see:
> - [Backend README](./backend/README.md) - API documentation, endpoints, database schema
> - [Frontend README](./frontend/README.md) - Component details, styling, deployment

## 🎨 Sections

- **Hero**: Introduction with animated background
- **About**: Personal information and education
- **Experience**: Work history and achievements
- **Skills**: Technical skills with visual progress bars
- **Projects**: Showcase of projects from GitHub and profile
- **Contact**: Contact form and social links

## 🔧 Configuration

### MongoDB Setup
The application automatically initializes profile data on first run. To update your profile, use the `/api/profile` endpoint or modify the initialization code in `backend/server.js`.

### GitHub Integration
The app fetches your public repositories from GitHub. Make sure your GitHub username is correct in the `.env` file.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌟 Key Features

- Smooth scroll navigation
- Animated sections on scroll
- GitHub API integration for live project data
- Contact form (ready for backend integration)
- Dark theme with gradient accents
- Performance optimized with lazy loading

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Deploy the backend folder
3. Update frontend API endpoints

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `build` folder
3. Configure environment variables

## 📝 License

MIT License - feel free to use this portfolio as a template for your own!

## 👤 Author

**Divahar P**
- Email: divahardivahar739@gmail.com
- LinkedIn: [divahar-p](https://www.linkedin.com/in/divahar-p)
- GitHub: [Divahar2507](https://github.com/Divahar2507)

---

Made with ❤️ using React & Node.js

