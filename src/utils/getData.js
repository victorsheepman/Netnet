const apiKey = 'ffae6ceb377fb3d244739ecd9b2c1a1d';
const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await reponse.json();
    const movies = data.results;

    const ids = movies.slice(0, 6).map(movie => movie.id);
    const movieList = [];
    for (const id in ids) {
        let movieId = ids[id];
        const movie = await getMovieById(movieId);
        movieList.push(movie);
    }

   return movieList;
}

/*async function getMovieById(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}*/

const getMovieById = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default getMovieById;