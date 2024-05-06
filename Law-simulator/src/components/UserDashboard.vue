<script>
import { mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';

    export default{
        components:{DashboardHeader},
        computed: mapGetters(['getUserName','getUserSurname','getUserEmail','getUserPassword']),
}
</script>

<template>
    <body>
        
    <header>
        <DashboardHeader></DashboardHeader>
    </header>
    <p>Ваше имя {{ this.$store.getters.getUserName }}</p>
    <p>Ваша Фамилия {{ this.$store.getters.getUserSurname }}</p>
    <p>Ваша почта {{ this.$store.getters.getUserEmail }}</p>
    <p>Ваш пароль {{ this.$store.getters.getUserPassword }}</p>
</body>
</template>

<style scoped>
body{
    background-color: rgb(213, 244, 206);
}

p{
    text-align: center;
    color: brown;
}
</style>