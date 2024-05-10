import defaultIcon from '@/components/icons/299068_add_sign_icon.jpg';

export default{
    actions:{
        async setCurrentTab(ctx,newCurrent){
            ctx.commit('updateCurrentTab',newCurrent)
        },

        async setUserPic(ctx,e) {
            const file = e.target.files[0];
            const maxFileSize = 2 * 1024 * 1024; // Максимальный размер файла в байтах (2MB)
            if (file.size > maxFileSize) {
                alert('Файл слишком большой! Размер файла не должен превышать 2MB.')
            } else {
                ctx.commit( 'updateUserPic', URL.createObjectURL(file))
            }
        }
    },

    mutations:{
        updateCurrentTab(state, newCurrent){
            state.currentTab = newCurrent
        },

        updateUserPic(state,newCurrent){
            state.userPic = newCurrent
        },
    },

    state:{
        currentTab: 0,
        userPic: defaultIcon,
    },

    getters:{
        getCurrentTab(state){
            return state.currentTab
        },
        
        getCurrentUserPick(state){
            return state.userPic
        }
    },


    modules:{

    }
}