import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

// Add a specific route for the root path
app.get('/', serveStatic({ path: './index.html' }))

// Serve all static files
app.use('/*', serveStatic({ 
  root: './' 
}))

// Handle any remaining routes by serving index.html (for SPA behavior)
app.get('*', serveStatic({ path: './index.html' }))

export default app
