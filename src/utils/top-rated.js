const apiKey = 'ffae6ceb377fb3d244739ecd9b2c1a1d';

//obtener peliculas por su id
async function getMovieById(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
//obtener las peliculas mas populares de la api
async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}
//obtenemos el id de las primeras 6 peliculas populares
async function getMoviesIds(n = 5){
    const popularMovies = await getPopularMovies();
    const ids = popularMovies.slice(0, n).map(movie => movie.id);
    return ids;
}

//obtenemos de la api los datos de las 6 peliculas buscandolas por su id
const getMoviesTop = async () => {
    const ids = await getMoviesIds();
    const movies = [];
    for (const id in ids) {
        let movieId = ids[id];
        const movie = await getMovieById(movieId);
        movies.push(movie);
    }
    return movies;
}
const start = document.querySelector('#start');

//renderizamos las peliculas
function renderMovies(movies) {
    let movieContainer = document.querySelector('#top');
    movies.forEach(movie => {
        let movieimg = document.createElement('figure');
        movieimg.innerHTML = `
        <img  src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
        `;
        movieContainer.appendChild(movieimg);
    });
};
//las inyectamos a el documento html

const play = async () => {
    const movies =  await getMovies();
    renderMovies(movies);
    console.log('hola');
}

export default getMoviesTop;