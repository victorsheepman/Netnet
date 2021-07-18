const resolveRoutes = (route) => {
    if (window.location.hash) {

        let validRoute = route === '/' ? route : '/:id';

        return validRoute;

    }else if(window.location.search){

        let validRoute =  '/:serie';

        return validRoute;

    }else{

        let validRoute = '/';
        
        return validRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;