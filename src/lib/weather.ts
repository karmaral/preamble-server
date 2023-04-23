const accessKey = process.env.OPENWEATHER_ACCESS_KEY || '';

export async function fetchWeather(lat: number, lon: number, unit: string) {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const params = `?lat=${lat}&lon=${lon}&units=${unit}&appId=${accessKey}`;
  const url = `${base}${params}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }
    const data = await res.json();
    const weather = {
      temperature: data.main.temp,
      weathercode: data.weather[0].id,
      text: data.weather[0].main,
      text_long: data.weather[0].description,
      time: data.dt * 1000,
    };
    return weather;
  } catch(error) {
    console.error(error);
  }
}

export async function fetchGeolocation(query: string) {
  const base = 'https://api.openweathermap.org/geo/1.0/direct';
  const params = `?q=${query}&limit=1&appId=${accessKey}`;
  const url = `${base}${params}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }
    const data = await res.json();
    if (data.length) {
      return data[0];
    }
  } catch(error) {
    console.error(error);
  }
}
