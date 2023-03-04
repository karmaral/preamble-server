import dotenv from 'dotenv';
dotenv.config();
import { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchRandomImage } from '../src/lib/unsplash';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const img = await fetchRandomImage();

    res.status(200).json(img);
  }
}
