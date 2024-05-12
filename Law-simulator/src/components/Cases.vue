<script>
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue';

    export default{
        components:{DashboardHeader,WorkInProgress},
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
p{
    text-align: center;
    color: brown;
}
</style>