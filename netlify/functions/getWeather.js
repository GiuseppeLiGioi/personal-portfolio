export async function handler(event, context) {
  try {
    const city = event.queryStringParameters?.city;
    const lat = event.queryStringParameters?.lat;
    const lon = event.queryStringParameters?.lon;

    const apiKey = process.env.VITE_WEATHER_API_KEY;

    let url = "";
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;
    } else if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`;
    } else {
      return { statusCode: 400, body: "Parametri mancanti" };
    }

    const res = await fetch(url);
    const data = await res.json();

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
