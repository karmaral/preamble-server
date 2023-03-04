import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { fetchRandomImage } from '../lib/unsplash';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.end('default');
});

app.get('/api/background', async (req, res) => {
  const img = await fetchRandomImage();
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200);
  res.end(img);
});

export default app;
