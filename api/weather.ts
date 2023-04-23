import { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchWeather } from '../src/lib/weather';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const { lat, lon, unit } = req.query;
    const latitude = Number(Array.isArray(lat) ? lat[0] : lat);
    const longitude = Number(Array.isArray(lon) ? lon[0] : lon);
    const u = Array.isArray(unit) ? unit[0] : unit;

    const data = await fetchWeather(latitude, longitude, u);

    res.status(200).json(data);
  } else {
    res.status(404);
  }
}
