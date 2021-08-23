export async function getImageData(imageSearch) {

  const API_CLIENTID = 'U0JksQG-PVQ3ylav6xwpB2yVPXokpIRie6PYT1IGIjw';
  const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${API_CLIENTID}`;

  const url = `${API_URL}&query=${imageSearch}`;

  console.log(process.env.UNSPLASH_ACCESS_TOKEN)

  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const res = await fetch(url)

  return res.json()
}