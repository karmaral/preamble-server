import { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchQuote } from '../src/lib/quotes';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const data = await fetchQuote();

    res.status(200).json(data);
  } else {
    res.status(404);
  }
}
