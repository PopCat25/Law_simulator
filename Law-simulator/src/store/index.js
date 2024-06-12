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
            //Case Mutations
            appendCase(state, newCase){
                state.cases.push(newCase);
            },
            deleteCase(state, index){
                state.cases.splice(index, 1);
            },
            editCase(state, [newCase, index]){
                state.cases.splice(index, 1, newCase);
            },

            //Statistic Mutation
            appendStatistic(state, [caseName, caseTime, errCount, endFlag]){
                // console.log(caseName, caseTime, errCount, endModalFlag);
                const newSatisticRecord = {
                    caseName,
                    caseTime,
                    errCount,
                    endFlag,
                };
                state.statisticData.push(newSatisticRecord);
            }
        },
        state: {
            cases: [],
            statisticData: [],
        },
        getters: {
            getCases(state){
                return state.cases;
            },
            getStatisticData(state){
                return state.statisticData;
            }
        },

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