import app from './index.js'
import { serve } from '@hono/node-server'

const port = process.env.PORT || 3000

serve({
  fetch: app.fetch,
  port: port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
  console.log(`Visit http://localhost:${info.port} to see your apartment handover checklist`)
})
