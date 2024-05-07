// import Vue from 'vue'
import Vuex from 'vuex'
import acces_control from './modules/acces_control'
import dashboard_header from './modules/dashboard_header'

// Vue.use(Vuex)

export default new Vuex.Store(
    {
        actions: {},
        mutations: {},
        state: {},
        getters: {},

        modules:{
            acces_control,
            dashboard_header,
        }
    }
)