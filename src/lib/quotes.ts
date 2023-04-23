function getDate() {
  const now = new Date();
  const day = String(now.getUTCDate()).padStart(2, '0');
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dateString = `${now.getUTCFullYear()}-${month}-${day}`;
  return dateString;
}

export async function fetchQuote() {
  const url = 'https://zenquotes.io/api/today';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }
    const data = await res.json();

    const quote = {
      text: data[0].q,
      author: data[0].a,
      source: 'https://zenquotes.io',
    }
    return quote;
  } catch (error) {
    console.error(error);
  }
}
