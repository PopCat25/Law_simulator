<script>
import { mapGetters } from 'vuex';

    export default{
        computed: mapGetters(['getUserName','getUserSurname','getUserEmail','getUserPassword']),

        data(){
            return{

            }
        }
}
</script>

<template>
<p>ВЫ ПРОШЛИ АВТОРИЗАЦИЮ</p>
<p>Ваше имя {{ this.$store.getters.getUserName }}</p>
<p>Ваша Фамилия {{ this.$store.getters.getUserSurname }}</p>
<p>Ваша почта {{ this.$store.getters.getUserEmail }}</p>
<p>Ваш пароль {{ this.$store.getters.getUserPassword }}</p>
</template>

<style scoped>
p{
    text-align: center;
    color: brown;
}
</style>