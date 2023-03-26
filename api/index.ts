import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    res.send('Preamble API');
  } else {
    res.status(404);
  }
};
