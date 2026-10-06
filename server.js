import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DIST_DIR = path.resolve(import.meta.dirname, 'dist');

// Health check endpoints for Cloud Run & container orchestration
app.get(['/health', '/_health', '/healthz'], (_req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from dist
app.use(
  express.static(DIST_DIR, {
    maxAge: '1d',
    index: false,
  })
);

// SPA fallback: serve index.html for all other routes
app.get('*', (_req, res) => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(503).send('Application build in progress. Please refresh momentarily.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Abu Design server listening on port ${PORT}`);
});
