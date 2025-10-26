# Deployment Guide for Render

## Issue: 404 on Page Reload

When deploying a React SPA (Single Page Application) to Render, reloading pages like `/demo` or `/legal` returns a 404 error. This happens because the server looks for physical files at those paths.

## Solutions Implemented

### 1. `_redirects` File (Primary Solution)
Located at `public/_redirects`, this file tells Render to redirect all routes to `index.html`:
```
/*    /index.html    200
```

### 2. `render.yaml` Configuration
Created `render.yaml` at the root to explicitly configure Render:
```yaml
services:
  - type: web
    name: agenticforge
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### 3. Fallback 404.html (Backup Solution)
Created `public/404.html` that redirects to the home page and preserves the path using sessionStorage. The React app then navigates to the correct route.

## Deployment Steps

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Fix SPA routing for Render deployment"
   git push
   ```

2. **Render will automatically:**
   - Detect the `render.yaml` configuration
   - Run `npm install && npm run build`
   - Serve files from the `./dist` directory
   - Apply the routing rules

3. **Verify deployment:**
   - Visit your site: `https://your-app.onrender.com`
   - Navigate to `/demo` and reload - should work
   - Navigate to `/legal` and reload - should work

## Alternative: Manual Render Configuration

If the automatic detection doesn't work, configure manually in Render dashboard:

1. Go to your service settings
2. Set **Build Command:** `npm install && npm run build`
3. Set **Publish Directory:** `dist`
4. Add **Rewrite Rule:**
   - Source: `/*`
   - Destination: `/index.html`

## Testing Locally

To test the production build locally:
```bash
npm run build
npm run preview
```

Then try navigating to different routes and reloading.

## Notes

- The `_redirects` file is automatically copied from `public/` to `dist/` during build
- All three solutions work together as fallbacks
- React Router handles the actual routing once the app loads
