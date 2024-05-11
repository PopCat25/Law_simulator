import router from "@/router/router";


export default {
    actions: {
        async authUser(ctx){
            let x = Math.random();
            console.log(x);
            if(x > 0.5){
                console.log('not');
                ctx.commit('upgradeauthErrorFlag', false)
                router.push('/UserDashboard')
            }
            else{
                    console.log('ERROR');
                    ctx.commit('upgradeauthErrorFlag',true)
                }
        },

        async switchRegistration(ctx){
            let newRegistrationStatus = !ctx.state.registation;
            ctx.commit('upgradeRegistationFlag', newRegistrationStatus);
            ctx.commit('updateContinueButtonName', newRegistrationStatus ? 'Регистрация' : 'Авторизация');
            ctx.commit('clearUserData');
        },
    },

    mutations: {
        upgradeauthErrorFlag(state,authValue){
            state.authErrorFlag = authValue;
        },

        upgradeRegistationFlag(state, newStatus){
            state.registation = newStatus;
        },
        updateContinueButtonName(state, newName){
            state.continueButtonName = newName;
        },
        clearUserData(state){
            state.userName = '';
            state.userSurname = '';
            state.userEmail = '';
            state.userPassword = '';
        },

        updateUserName(state, newName) {
            state.userName = newName;
        },
        updateUserSurname(state, newSurname) {
            state.userSurname = newSurname;
        },
        updateUserPatronymic(state, newPatronymic){
            state.userPatronymic = newPatronymic;
        },
        updateUserEmail(state, newEmail) {
            state.userEmail = newEmail;
        },
        updateUserPassword(state, newPassword) {
            state.userPassword = newPassword;
        },

    },

    state: {

        registation: false,
        authErrorFlag: false,
        continueButtonName: 'Авторизация',
        userName: '',
        userSurname: '',
        userPatronymic: '',
        userEmail: '',
        userPassword: ''

    },
    getters: {
        getRegistrationStatus(state){
            return state.registation
        },
        getAuthErrorFlag(state){
            return state.authErrorFlag
        },
        getcontinueButtonName(state){
            return state.continueButtonName
        },
        getUserName(state){
            return state.userName
        },
        getUserSurname(state){
            return state.userSurname
        },
        getUserPatronymic(state){
            return state.userPatronymic
        },
        getUserEmail(state){
            return state.userEmail
        },
        getUserPassword(state){
            return state.userPassword
        }
    },

    modules:{}
        
}