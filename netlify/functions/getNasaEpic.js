export async function handler(event, context) {
  try {
    const apiKey = process.env.VITE_NASA_API_KEY;

    const res = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
    if (!res.ok) throw new Error(`NASA API error: ${res.status}`);

    const data = await res.json();
    const first = data[0];
    const dateOnly = first.date.split(" ")[0];
    const [year, month, day] = dateOnly.split("-");

    const url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${first.image}.png`;

    return {
      statusCode: 200,
      body: JSON.stringify({
        title: first.caption,
        date: dateOnly,
        url: url,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Servizio NASA non disponibile" }),
    };
  }
}
