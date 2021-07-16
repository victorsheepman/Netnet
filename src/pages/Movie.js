const Movie = () => {
    const view = `
        <section class="movie__inner">
            <header class="movie_image">
                <img src="assets/images/matrix-page2.jpg" alt="">
            </header>
            <div class="movie__title">
                <h2>Matrix: Recargado</h2>
                <div class="movie__data .Body-1">
                    <span>99% de coincidencia</span>
                    <span class="movie__year">
                        2003<div>R</div>
                    </span>
                    <span class="movie__duration"> 
                        1h18m <div>HD</div>
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
                <p></p>
                <span class="description__credit"></span>
            </div>
        </section>`;
    return view;
}

export default Movie;