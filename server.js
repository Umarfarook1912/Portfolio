import express from 'express';
import fs from 'fs';
import path from 'path';
// Load local env for dev
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import handler from './api/contact.js';

const app = express();
const basePort = Number(process.env.PORT_API) || 3001;

app.use(express.json());

// Simple CORS middleware for local dev: allow Vite dev origin and any origin if needed
app.use((req, res, next) => {
  const originHeader = req.headers.origin;
  const isLocalOrigin = typeof originHeader === 'string' && /^https?:\/\/localhost(?::\d+)?$/.test(originHeader);
  // If request comes from a localhost origin, echo it back; otherwise allow any origin for local dev.
  res.setHeader('Access-Control-Allow-Origin', isLocalOrigin ? originHeader : '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

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
