const accessKey = process.env.OPENWEATHER_ACCESS_KEY || '';

export async function fetchWeather(lat: number, lon: number, unit: string) {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const params = `?lat=${lat}&lon=${lon}&units=${unit}&appId=${accessKey}`;
  const url = `${base}${params}`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch(error) {
    console.log(error);
  }
}

export async function fetchGeolocation(query: string) {
  const base = 'https://api.openweathermap.org/geo/1.0/direct';
  const params = `?q=${query}&limit=1&appId=${accessKey}`;
  const url = `${base}${params}`;
  try {
    const res = await fetch(url);
    const result = await res.json();

    if (result.length) {
      return result[0];
    }
  } catch(error) {
    console.log(error);
  }
}
