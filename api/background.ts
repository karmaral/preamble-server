import { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchRandomImage } from '../src/lib/unsplash';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const data = await fetchRandomImage();

    res.status(200).json(data);
  } else {
    res.status(404);
  }
}
