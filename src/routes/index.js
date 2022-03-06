import {createRouter, createWebHistory} from "vue-router";

import store from '@/store';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/Home'),
		meta: {
			authRequired: true,
		}
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/Login'),
		meta: {
			noAuthRequired: true,
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/pages/404'),
		meta: {
			authRequired: false,
		}
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
	// for eslint

	// variables
	const isAuthenticated = store.getters.isAuthenticated;
	const tokenExpirationDate = store.getters.tokenExpirationDate;

	// Check meta authRequired
	if (to.meta?.authRequired && !isAuthenticated) {
		next({name: 'login'})
	}

	// Check meta authNonRequired
	if (to.meta?.noAuthRequired && isAuthenticated) {
		next({name: 'home'})
	}

	// Check expires in and if token is expired, trigger logout
	if (isAuthenticated) {
		const expiredIn = (+tokenExpirationDate) - Date.now()

		if (expiredIn > 0) {
			setTimeout(() => {
				store.dispatch('autoLogout')
			}, expiredIn)
		} else {
			store.dispatch('autoLogout')
		}
	}

	next()
})

export default router