<script>
import { mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue'

    export default{
        components:{DashboardHeader,WorkInProgress},
        computed: mapGetters(['getUserName','getUserSurname', 'getUserPatronymic','getUserEmail','getUserPassword']),
}
</script>

<template>
    <body>
        
    <header>
        <DashboardHeader></DashboardHeader>
    </header>

    <div class="background">
            <WorkInProgress></WorkInProgress>
    </div>
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