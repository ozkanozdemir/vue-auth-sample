import {createStore} from "vuex";
import authModule from "@/store/modules/auth";

// create store
const store = createStore({
	modules: {
		auth:authModule
	}
})

export default store;