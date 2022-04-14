/* 
	[IMPORTS] Vue.js
	Define main imports to create the application router
*/
    import { createWebHistory, createRouter } from "vue-router";
//

/* 
    [ROUTER] Vue.js Path
    Define a constant with all needed application paths
    => https://router.vuejs.org
*/
    const routerPath = [
        {
            path: '/',
            name: 'HomeView',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/auth',
            name: 'LoginView',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/fav',
            name: 'FavorisView',
            authGuard: true,
            component: () => import('../views/FavorisView.vue'),
        },
        {
            path: '/search/:name',
            name: 'SearchView',
            authGuard: true,
            component: () => import('../views/SearchView.vue'),
        }
    ];
//

/* 
    [ROUTER] Vue.js router configuration
    Create new router and add navigation guards to
    include OpenAPI in the router description
*/
    export default createRouter({
        history: createWebHistory(),
        routes: routerPath,
    })
//
