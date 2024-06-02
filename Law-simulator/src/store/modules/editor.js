
export default{
    actions:{
        async setCurrentEditorTab(ctx,newCurrent){
            ctx.commit('updateCurrentEditorTab',newCurrent)
            ctx.commit('clearState');
        },
    },

    mutations:{
        updateCurrentEditorTab(state, newCurrent){
            state.currentTab = newCurrent
        },
    },

    state:{
        currentTab: 0,
    },

    getters:{
        getCurrentEditorTab(state){
            return state.currentTab
        },
        
    },


    modules:{

    }
}