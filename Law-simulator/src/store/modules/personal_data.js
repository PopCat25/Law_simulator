import defaultIcon from '@/components/icons/299068_add_sign_icon.jpg';

export default{
    actions:{
        async setUserPic(ctx,e) {
            const file = e.target.files[0];
            const maxFileSize = 2 * 1024 * 1024; // Максимальный размер файла в байтах (2MB)
            if (file.size > maxFileSize) {
                alert('Файл слишком большой! Размер файла не должен превышать 2MB.')
            } else {
                ctx.commit( 'updateUserPic', URL.createObjectURL(file))
            }
        },
    },

    mutations:{
        updateUserPic(state,newCurrent){
            state.userPic = newCurrent
        },
    },

    state:{
        userPic: defaultIcon,
    },

    getters:{
        getCurrentUserPick(state){
            return state.userPic
        }
    },


    modules:{

    }
}