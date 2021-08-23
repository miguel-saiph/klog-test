export async function getImageData(imageSearch) {

  const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&client_id=${process.env.API_CLIENTID}`;

  const url = `${API_URL}&query=${imageSearch}`;

  const res = await fetch(url)

  return res.json()
}