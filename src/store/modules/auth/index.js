import router from "@/routes";


// Fake login request function
const fakeLoginRequest = async (values = {}) => {
	// for eslint
	localStorage.setItem('a', JSON.stringify(values))
	localStorage.removeItem('a')

	// Send fake response after one second
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				status: 'success',
				code: 200,
				data: {
					userId: 1,
					token: 'perfectToken',
					tokenExpiration: 60 * 60 * 24 * 7 // after a week (seconds)
				}
			})
		}, 1000)
	});
}

const authModule = {
	state() {
		return {
			didAutoLogout: localStorage.getItem('didAutoLogout'),
			isAuthenticated: localStorage.getItem('isAuthenticated'),
			token: localStorage.getItem('token'),
			tokenExpirationDate: localStorage.getItem('tokenExpirationDate'),
			user: localStorage.getItem('user'),
		}
	},
	getters: {
		isAuthenticated: state => state.isAuthenticated,
		token: state => state.token,
		tokenExpirationDate: state => state.tokenExpirationDate,
		user: state => state.user,
	},
	mutations: {
		logout(state) {
			state.isAuthenticated = false
			state.token = ''
			state.tokenExpirationDate = null
			state.user = null

			localStorage.removeItem('isAuthenticated')
			localStorage.removeItem('token')
			localStorage.removeItem('tokenExpirationDate')
			localStorage.removeItem('user')

			router.push({name: 'login'})
		},
		setAutoLogout(state, payload) {
			state.didAutoLogout = !!payload;
		},
		setUser(state, payload) {
			state.isAuthenticated = '1'
			state.token = payload.token
			state.tokenExpirationDate = payload.tokenExpirationDate
			state.user = {
				id: payload.userId
			}

			localStorage.setItem('isAuthenticated', '1')
			localStorage.setItem('token', state.token)
			localStorage.setItem('tokenExpirationDate', state.tokenExpirationDate)
			localStorage.setItem('user', JSON.stringify(state.user))
		},
	},
	actions: {
		setUser(context, payload) {
			context.commit('setUser', payload)
		},
		async login(context, payload) {
			let response = await fakeLoginRequest(payload);

			// Login successful
			if (response.status === 'success') {
				// set user
				context.commit('setUser', {
					token: response.data.token,
					tokenExpirationDate: Date.now() + (response.data.tokenExpiration * 1000),
					userId: response.data.userId,
				})

				// const expiresIn = +response.data.tokenExpirationDate * 1000;
				// setTimeout(function() {
				// 	context.dispatch('autoLogout');
				// }, expiresIn);

				return true;
			}
			return false;
		},
		logout(context) {
			context.commit('logout')
		},
		autoLogout(context) {
			context.dispatch('logout');
			context.commit('setAutoLogout', true);
		}
	},
}

export default authModule;