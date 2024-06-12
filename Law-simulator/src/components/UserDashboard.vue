<script>
import { mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue'
import UserStatistics from './subcomponents/UserStatistics.vue';

    export default{
        components:{DashboardHeader,WorkInProgress,UserStatistics},
        computed: mapGetters(['getUserName','getUserSurname', 'getUserPatronymic','getUserEmail','getUserPassword']),
}
</script>

<template>
    <body>
        
    <header>
        <DashboardHeader></DashboardHeader>
    </header>

    <div class="background">
            <UserStatistics></UserStatistics>
    </div>
</body>
</template>

<style scoped>
body{
    overflow: auto;
}
</style>