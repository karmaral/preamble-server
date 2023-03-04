import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { fetchRandomImage } from './unsplash';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('/');
});

app.get('/background', async (req, res) => {
  const img = await fetchRandomImage();
  res.send(img);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
