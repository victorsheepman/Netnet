import getHash from '../utils/getHash';
import getSerie from '../utils/getSerie';

const Serie = async () => {
    const id = getHash();
    const serie = await getSerie(id); 
    const view = `
        <section class="movie__inner">
            <header class="movie_image">
                <img src="https://image.tmdb.org/t/p/w342${serie.poster_path}" alt="">
            </header>
            <div class="movie__title">
                <h2>${serie.name}</h2>
                <div class="movie__data .Body-1">
                    <span>99% de coincidencia</span>
                    <span class="movie__year">
                       2021<div>R</div>
                    </span>
                    <span class="movie__duration"> 
                        52m<div>HD</div>
                    </span>
                </div>
            </div>
            <section class="Button Body-1-bold">
                <button class="Button--white">
                    <figure><img src="assets/icons/play.svg" alt=""></figure> Reproducir
                </button>
                <button class="Button--black">
                    <figure><img src="assets/icons/dowload_two.svg" alt=""></figure>    Descargar
                </button>
            </section>
            <div class="description">
                <p>${serie.overview}</p>
                <span class="description__credit"></span>
            </div>
        </section>`;
    return view;
}

export default Serie;