
export default{
    actions:{
        async setCurrentTab(ctx,newCurrent){
            ctx.commit('updateCurrentTab',newCurrent)
        },
    },

    mutations:{
        updateCurrentTab(state, newCurrent){
            state.currentTab = newCurrent
        },
    },

    state:{
        currentTab: 0,
    },

    getters:{
        getCurrentTab(state){
            return state.currentTab
        },
        
    },


    modules:{

    }
}