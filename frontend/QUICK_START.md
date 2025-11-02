# Quick Start Guide - Frontend

## Step-by-Step Setup

### 1. Install Dependencies (If Not Already Done)
```bash
cd frontend
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will automatically open at `http://localhost:3000`

### 3. Make Sure Backend is Running
The frontend needs the backend API to be running on `http://localhost:5000`

If backend is not running:
```bash
# From project root
cd backend
npm install  # If not done already
npm run dev
```

## Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## First Time Setup Checklist

- [ ] Node.js installed (v14 or higher)
- [ ] Dependencies installed (`npm install`)
- [ ] Backend server running on port 5000
- [ ] MongoDB running (for backend)
- [ ] No port conflicts (3000 for frontend, 5000 for backend)

## What to Expect

1. **Initial Load:** You'll see a loading spinner while fetching profile data
2. **If Backend is Down:** The app will still load but show empty sections
3. **Browser Console:** Check for any errors if something doesn't work

## Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for detailed solutions to common issues.

