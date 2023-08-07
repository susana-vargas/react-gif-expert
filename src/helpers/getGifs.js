export const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=Wz6WVrfzgqq3p7bo2WeZKd5BFAZk2quc&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}