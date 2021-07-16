const Home = () => {
    const view = `
    <header class="header">
            <div class="header__top">
                <div class="header__top__logo">
                    <span></span>
                </div>
                <nav class="header__top__nav"> 
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
                <h2 class="Sub-1">Nuevas en Netnet</h2>
                <div class="Movie__slider" id="movies">
                </div>
            </section>
            <section class="Movie__popular">
                <h2 class="Sub-1">Series en Netnet</h2>
                <div class="Movie__slider" id="tv">
                </div>
            </section>
            <section class="Movie__popular">
                <h2 class="Sub-1">Populares en Netnet</h2>
                <div class="Movie__slider" id="top">
                    <figure class="Movie__card">
                        <img src="assets/images/matrix.jpg" alt="">
                    </figure>
                </div>
            </section>
        </section>
    `;
    return view;
}
export default Home;