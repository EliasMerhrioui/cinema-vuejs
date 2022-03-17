/* 
	[VUE] Main imports
	Define main imports to create the application
*/
    // Vue imports
    import { createApp } from 'vue';

    // App imports
    import App from './App.vue';
    import StoreModule from './store/index'; // Data binding => https://vuex.vuejs.org
    import RouterModule from "./router"; // Path binding => https://router.vuejs.org
//

/* 
	[APP] Start Vue.js app
	Init new Vue.js applilcation
*/
    createApp(App)
    .use( StoreModule ) //=> Inject StoreModule with 'use()' method
    .use( RouterModule ) //=> Inject RouterModule with 'use()' method
    .mount('#app');
//