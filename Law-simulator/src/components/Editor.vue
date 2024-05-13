<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue';
import CreateCase from './subcomponents/CreateCase.vue';

    export default{
        components:{DashboardHeader, WorkInProgress, CreateCase},

        computed:{
            ...mapGetters(['getCurrentEditorTab'])
        },
        methods:{
            ...mapActions(['setCurrentEditorTab']),
        },
}
</script>

<template>
    <body>

        <header>
            <DashboardHeader></DashboardHeader>
        </header>
        
        <div class="background">
            <div class="backplate tab">
                <p @click="setCurrentEditorTab(0)" :class="{'activeTab': getCurrentEditorTab == 0}">Создать кейс</p>
                <p @click="setCurrentEditorTab(1)" :class="{'activeTab': getCurrentEditorTab == 1}">Редактировать кейс</p>
            </div>

            <CreateCase     v-if = "getCurrentEditorTab == 0"></CreateCase>
            <WorkInProgress v-if = "getCurrentEditorTab == 1"></WorkInProgress>

        </div>
    </body>
</template>

<style scoped>
body{
    overflow: auto;
}


</style>