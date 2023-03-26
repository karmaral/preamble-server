import { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchGeolocation } from '../src/lib/weather';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const q = req.query.q as string;
    const data = await fetchGeolocation(q);

    res.status(200).json(data);
  } else {
    res.status(404);
  }
}
