// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

import { store } from './store/store';
import router from './router';

router.beforeEach((to, from, next) => {
	var memberStr = localStorage.getItem("dddLogin");
	console.log('global beforeEach -  memberStr: '+memberStr);
	if (to.path !== '/')
	{
		if (memberStr == null)
		{
			next( {
				path: '/',
		        query: {
		          redirect: to.fullPath,
		        },
			})
		}
		else
		{
			
			next();
		}
	}
	else{
		next();
	}
		

	
}); 

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
