<script>
import DashboardHeader from './subcomponents/DashboardHeader.vue';

    export default{
        components:{DashboardHeader},
}
</script>

<template>
    <body>
        
    <header>
        <DashboardHeader></DashboardHeader>
    </header>
    <P>Это вкладка с кейсами</P>
</body>
</template>

<style scoped>
p{
    text-align: center;
    color: brown;
}
</style>