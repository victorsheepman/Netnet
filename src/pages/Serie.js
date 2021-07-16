const Serie = async () => {
    const id = getHash();
    const movie = await getMovieById(id); 
    const array = [];
    const runtime = movie.runtime + '';
    const view = `
        <section class="movie__inner">
            <header class="movie_image">
                <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="">
            </header>
            <div class="movie__title">
                <h2>${movie.original_title}</h2>
                <div class="movie__data .Body-1">
                    <span>99% de coincidencia</span>
                    <span class="movie__year">
                        ${movie.release_date.slice('-', 4)}<div>R</div>
                    </span>
                    <span class="movie__duration"> 
                        ${runtime.charAt(0)}h${runtime.charAt(1)}${runtime.charAt(2)}m<div>HD</div>
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
                <p>${movie.overview}</p>
                <span class="description__credit"></span>
            </div>
        </section>`;
    return view;
}

export default Serie;