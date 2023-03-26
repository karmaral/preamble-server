import { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchWeather } from '../src/lib/weather';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const { latitude, longitude, unit } = req.query;
    const lat = Number(Array.isArray(latitude) ? latitude[0] : latitude);
    const lon = Number(Array.isArray(longitude) ? longitude[0] : longitude);
    const u = Array.isArray(unit) ? unit[0] : unit;

    const data = await fetchWeather(lat, lon, u);

    res.status(200).json(data);
  } else {
    res.status(404);
  }
}
