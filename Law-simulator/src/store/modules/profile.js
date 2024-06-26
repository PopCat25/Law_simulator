
export default{
    actions:{
        async setCurrentProfileTab(ctx,newCurrent){
            ctx.commit('updateCurrentProfileTab',newCurrent)
        },
    },

    mutations:{
        updateCurrentProfileTab(state, newCurrent){
            state.currentTab = newCurrent
        },
    },

    state:{
        currentTab: 0,
    },

    getters:{
        getCurrentProfileTab(state){
            return state.currentTab
        },
        
    },


    modules:{

    }
}