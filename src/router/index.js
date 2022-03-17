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
            path: '/:type/:id',
            name: 'SingleView',
            component: () => import('../views/SingleView.vue'),
        },
        {
            path: '/create',
            name: 'CreateView',
            authGuard: true,
            component: () => import('../views/CreateView.vue'),
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
