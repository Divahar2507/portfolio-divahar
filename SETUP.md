# Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn

## Quick Start

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Set up environment variables:**
   
   Create a `.env` file in the `backend` folder:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   GITHUB_USERNAME=Divahar2507
   ```

3. **Make sure MongoDB is running:**
   - If MongoDB is installed locally, start it with: `mongod`
   - Or use MongoDB Atlas (cloud) and update `MONGODB_URI` in `.env`

4. **Start the application:**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on http://localhost:5000
   - Frontend server on http://localhost:3000

5. **Open your browser:**
   Navigate to http://localhost:3000 to see your portfolio!

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running
- Check your `MONGODB_URI` in the `.env` file
- For MongoDB Atlas, use the connection string provided

### Port Already in Use
- Change the `PORT` in `backend/.env`
- Update the proxy in `frontend/package.json` if you change the backend port

### GitHub API Rate Limits
- The GitHub API has rate limits for unauthenticated requests
- For production, consider using a GitHub Personal Access Token

## Development

### Backend only:
```bash
cd backend
npm run dev
```

### Frontend only:
```bash
cd frontend
npm start
```

## Production Build

### Frontend:
```bash
cd frontend
npm run build
```

The build folder will be created with optimized production files.

