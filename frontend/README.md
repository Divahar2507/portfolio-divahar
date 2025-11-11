# Portfolio Frontend

Modern, responsive portfolio website built with React, featuring smooth animations and a beautiful UI.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with gradient backgrounds
- **Smooth Animations**: Framer Motion and AOS (Animate On Scroll)
- **Dynamic Content**: Fetches data from backend API
- **GitHub Integration**: Displays projects from GitHub
- **Fully Responsive**: Works seamlessly on all devices
- **Performance Optimized**: Fast loading and smooth interactions
- **Dark Theme**: Modern dark theme with colorful accents

## 📦 Installation

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API endpoint (if needed):**
   
   The frontend is configured to proxy API requests to `http://localhost:5000` by default (see `package.json` proxy setting).
   
   For production, update API base URL in components or use environment variables.

4. **Start development server:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

## 🏗️ Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js/css        # Navigation bar
│   │   ├── Hero.js/css          # Hero/landing section
│   │   ├── About.js/css         # About & Education section
│   │   ├── Experience.js/css    # Work experience timeline
│   │   ├── Skills.js/css        # Technical skills showcase
│   │   ├── Projects.js/css      # Projects gallery
│   │   ├── Contact.js/css       # Contact form
│   │   └── Footer.js/css        # Footer section
│   ├── App.js                   # Main app component
│   ├── App.css                  # Global app styles
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
└── package.json
```

## 🎨 Components

### Navbar
- Fixed navigation with smooth scroll
- Responsive mobile menu
- Active section highlighting

### Hero
- Animated gradient background
- Profile image with floating shapes
- Social media links
- Call-to-action buttons

### About
- Personal bio
- Education timeline
- Achievement stats
- Coursework tags

### Experience
- Timeline layout
- Company information
- Key achievements list
- Date and location display

### Skills
- Categorized skills (Languages, Frameworks, Databases, Tools, Concepts)
- Animated progress bars
- Hover effects

### Projects
- Project cards with images
- Technology tags
- GitHub and live demo links
- Filter by technology
- GitHub stats (stars, forks)

### Contact
- Contact information cards
- Contact form
- Social media links

### Footer
- Quick links
- Social media icons
- Copyright information

## 🎨 Styling

### CSS Variables
The app uses CSS custom properties for theming:

```css
--primary-color: #6366f1
--secondary-color: #8b5cf6
--accent-color: #ec4899
--dark-bg: #0f172a
--dark-secondary: #1e293b
--text-primary: #ffffff
--text-secondary: #cbd5e1
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images
- Collapsible navigation menu

## 🔌 API Integration

### Backend Connection
The frontend connects to the backend API at:
- Development: `http://localhost:5000` (via proxy)
- Production: Update API base URL in components

### API Endpoints Used
- `GET /api/profile` - Fetch profile data
- `GET /api/projects/github` - Fetch GitHub projects

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`
- Hot reload on file changes
- Error overlay in browser
- React DevTools support

### `npm run build`
Creates optimized production build in `build/` folder
- Minified JavaScript and CSS
- Optimized assets
- Production-ready static files

### `npm test`
Launches the test runner (if tests are configured)

### `npm run eject`
Ejects from Create React App (one-way operation)

## 📦 Key Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing (for future features)

### Animations
- `framer-motion` - Advanced animations
- `aos` - Animate On Scroll library

### Icons
- `react-icons` - Icon library (Font Awesome, etc.)

### HTTP Client
- `axios` - API requests

### Styling
- CSS3 (Custom Properties, Grid, Flexbox)
- No CSS framework (vanilla CSS for full control)

## 🎯 Features in Detail

### Animations
- Scroll-triggered animations (AOS)
- Hover effects on interactive elements
- Smooth page transitions
- Loading animations

### Performance
- Code splitting ready
- Optimized images
- Lazy loading compatible
- Efficient re-renders

### Accessibility
- Semantic HTML
- ARIA labels on icons
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Deploy to Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=build`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://divahar2507.github.io/portfolio-divahar",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

### Environment Variables
Create a `.env` file for production:
```env
REACT_APP_API_URL=https://your-api-url.com
```

## 🔧 Configuration

### Update API URL
If your backend is on a different URL, update the proxy in `package.json` or use environment variables.

### Customize Theme
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #your-color;
  /* ... */
}
```

### Add/Remove Sections
1. Add component in `src/components/`
2. Import in `src/App.js`
3. Add route/link in `Navbar.js`

## 🐛 Troubleshooting

### API Connection Issues
- Verify backend is running on port 5000
- Check CORS settings in backend
- Verify proxy configuration in `package.json`

### Build Errors
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors
- Verify all dependencies are installed

### Styling Issues
- Check browser console for CSS errors
- Verify font imports in `public/index.html`
- Clear browser cache

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📄 License

MIT License

## 👤 Author

**Divahar P**
- Email: divahardivahar739@gmail.com
- LinkedIn: [divahar-p](https://www.linkedin.com/in/divahar-p)
- GitHub: [Divahar2507](https://github.com/Divahar2507)



