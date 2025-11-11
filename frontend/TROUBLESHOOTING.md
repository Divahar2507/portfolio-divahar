# Frontend Troubleshooting Guide

## Common Issues and Solutions

### 1. Dependencies Not Installed

**Problem:** Error messages like "Cannot find module 'react'" or "Module not found"

**Solution:**
```bash
cd frontend
npm install
```

### 2. Port Already in Use

**Problem:** Error "EADDRINUSE: address already in use :::3000"

**Solution:**
- Option 1: Kill the process using port 3000
  ```bash
  # Windows PowerShell
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```
- Option 2: Use a different port
  ```bash
  # Windows
  set PORT=3001 && npm start
  
  # Or create .env file with:
  PORT=3001
  ```

### 3. Backend Connection Error

**Problem:** API calls failing, "Network Error" or "Cannot connect to backend"

**Solutions:**
- Make sure backend is running on port 5000
- Check `proxy` setting in `package.json` is correct
- Verify CORS is enabled in backend
- For production, update API base URL

### 4. Module Resolution Errors

**Problem:** Import errors or "Cannot resolve module"

**Solutions:**
```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install

# If on Windows PowerShell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### 5. Build Errors

**Problem:** Errors when running `npm run build`

**Solutions:**
- Check for syntax errors in console
- Verify all imports are correct
- Clear build folder:
  ```bash
  rm -rf build
  npm run build
  ```

### 6. AOS (Animate On Scroll) Not Working

**Problem:** Animations not triggering on scroll

**Solution:**
- Make sure AOS is initialized in `App.js`
- Check if AOS CSS is imported
- Verify HTML structure has `data-aos` attributes

### 7. Framer Motion Errors

**Problem:** Animation errors or component not rendering

**Solution:**
- Verify framer-motion is installed: `npm list framer-motion`
- Check version compatibility
- Reinstall if needed: `npm install framer-motion@latest`

### 8. CSS Not Loading

**Problem:** Styles not applying

**Solutions:**
- Check if CSS files are imported in components
- Verify CSS file paths are correct
- Clear browser cache
- Check browser console for CSS errors

### 9. GitHub API Rate Limit

**Problem:** Projects section not loading

**Solution:**
- GitHub API allows 60 requests/hour for unauthenticated requests
- Wait and try again later
- For production, use GitHub Personal Access Token

### 10. React Scripts Issues

**Problem:** `react-scripts` related errors

**Solution:**
```bash
npm install react-scripts@latest
```

### Quick Fix Commands

```bash
# Complete reset
cd frontend
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
npm start

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

## Still Having Issues?

1. Check browser console for specific error messages
2. Check terminal for compilation errors
3. Verify Node.js version (should be 14+)
4. Check if backend is running and accessible
5. Review error messages carefully - they usually point to the issue

## Useful Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test

# Check dependency tree
npm ls

# Check for security vulnerabilities
npm audit
```



