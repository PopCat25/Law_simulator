import router from "@/router/router";

    export default {
        actions: {
            async pushToAbout(ctx){
                router.push('/About');
            },
            async pushToCases(ctx){
                router.push('/Cases');
            },
            async pushToUserDashboard(ctx){
                router.push('/UserDashboard');
            },
            async pushToEditor(ctx){
                router.push('/Editor')
            },
            async pushToUserProfile(ctx){
                router.push('/Profile');
            },
            
        },
    
        mutations: {

        },
    
        state: {

        },
        getters: {
        },
    
        modules:{}
            
    }
