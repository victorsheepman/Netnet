import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes';
import Serie from '../pages/Serie';


const routes = {
    '/': Home,
    '/:id': Movie,
    '/:serie':  Serie
}

const router = async () => {
    const footer = null || document.querySelector('#footer');
    const content = null || document.querySelector('#content');

    footer.innerHTML = await Footer();
    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);

    let render =  routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
}
export default router;