// import Vue from 'vue'
import Vuex from 'vuex'
import acces_control from './modules/acces_control'
import dashboard_header from './modules/dashboard_header'
import profile from './modules/profile'
import personal_data from './modules/personal_data'
import editor from './modules/editor'
import create_case from './modules/create_case'
// Vue.use(Vuex)

export default new Vuex.Store(
    {
        actions: {},
        mutations: {
            appendCase(state, newCase){
                state.cases.push(newCase);
            }
        },
        state: {
            cases: []
        },
        getters: {},

        modules:{
            acces_control,
            dashboard_header,
            profile,
            personal_data,
            editor,
            create_case,
        }
    }
)