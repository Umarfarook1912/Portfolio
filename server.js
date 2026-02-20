import express from 'express';
import fs from 'fs';
import path from 'path';

// Centralized env loader for local/dev
import './scripts/load-env.js';

import handler from './api/contact.js';
import createDevCors from './server-utils/cors.js';

const app = express();
const basePort = Number(process.env.PORT_API) || 3001;

app.use(express.json());

// Apply development-only CORS when not in production
if (process.env.NODE_ENV !== 'production') {
  app.use(createDevCors());
}

// Proxy the same handler used for Vercel serverless
app.all('/api/contact', async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    console.error('Local API handler error:', err);
    res.status(500).json({ error: 'Local API error' });
  }
});

// Start server and retry if port is in use
const startServer = (port, attempts = 0) => {
  const server = app.listen(port, () => {
    console.log(`Local API server listening at http://localhost:${port}`);
    try {
      const filePath = path.resolve(process.cwd(), '.api-port');
      fs.writeFileSync(filePath, String(port), { encoding: 'utf8' });
    } catch (err) {
      console.warn('Could not write .api-port file:', err.message || err);
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attempts < 5) {
      const nextPort = port + 1;
      console.warn(`Port ${port} in use, trying ${nextPort}...`);
      setTimeout(() => startServer(nextPort, attempts + 1), 200);
    } else {
      console.error('Failed to start local API server:', err);
      process.exit(1);
    }
  });
};

startServer(basePort);
