import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home.vue';
import MemberUpdateMember from '@/components/Admin/MemberUpdateMember.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { 
    	path: '/', 
    	name: 'home', 
    	component: Home 
    },
	{ 
		path: '/Admin', 
		name: 'memberupdatemember', 
		component: MemberUpdateMember 
	},
	{ 
		path: '*', 
		redirect: '/'
	}
  ],
  mode: 'history'
});
