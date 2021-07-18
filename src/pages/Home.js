import getData from '../utils/getData';
import getMovies from '../utils/api';
import getSeries from '../utils/series';
import getMoviesTop from '../utils/top-rated';


const Home = async () => {

    const movies = await getMovies();
    const series = await getSeries();
    const top = await getMoviesTop();
    const view = `
    <header class="header">
            <div class="header__top">
                <div class="header__top__logo">
                    <span></span>
                </div>
                <nav class="header__top__nav "> 
                    <ul>
                        <li>Series</li>
                        <li>Películas</li>
                        <li>Mi lista</li>
                    </ul>
                </nav>
            </div>
            <div class="header__bottom">
                <figure class="header__bottom__title"></figure>
                <ul class="header__bottom__genre Body-2">
                    <li>Surrealista</li>
                    <li>Distópico</li>
                    <li>Hábil</li>
                    <li>Siniestro</li>
                    <li>Emocionante</li>
                </ul>
                <div class="header__bottom__actions">
                    <p class="buttom">Mi lista</p>
                    <button class="header__bottom__actions__button" id="start"><figure><img src="assets/icons/play.svg" alt=""></figure> Reproducir</button>
                    <p class="buttom">Info</p>
                </div>
            </div>
        </header>
        <section class="Movie">
            <section class="Movie__popular">
                <h2 class="Sub-1">Populares en Netnet</h2>
                <div class="Movie__slider" id="top">
                ${movies.map(movie => 
                    ` <figure class="Movie__card">
                        <a href="#/${movie.id}/">
                           <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="">
                        </a>
                    </figure>`).join('')}
                </div>
            </section>
            <section class="Movie__popular">
                <h2 class="Sub-1">Series en Netnet</h2>
                <div class="Movie__slider" id="tv">
                    ${series.map(serie => 
                        `<figure class="Movie__card">
                                <a href="?/${serie.id}/">
                                    <img src="https://image.tmdb.org/t/p/w342${serie.poster_path}" alt="">
                                </a>
                    </figure>`).join('')}
                </div>
            </section>
            <section class="Movie__popular">
                <h2 class="Sub-1">Populares en Netnet</h2>
                <div class="Movie__slider" id="top">
                ${top.map(movie => `
                    <figure class="Movie__card">
                       <a href="#/${movie.id}/">
                           <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="">
                       </a>
                    </figure>
                `).join('')}   
                </div>
            </section> 
        </section>
    `;
    return view;
}
export default Home;