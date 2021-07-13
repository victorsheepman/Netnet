
const apiKey = 'b89fc45c2067cbd33560270639722eae';

debugger
async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
  }
