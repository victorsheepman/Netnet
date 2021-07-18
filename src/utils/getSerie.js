const apiKey = 'ffae6ceb377fb3d244739ecd9b2c1a1d';
const getSerieById = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export default getSerieById;