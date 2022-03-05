import {createRouter, createWebHistory} from "vue-router";

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
			authRequired: false,
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

export default router