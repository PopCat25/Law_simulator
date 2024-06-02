<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue';
import CreateCase from './subcomponents/CreateCase.vue';
import EditCase from './subcomponents/EditCase.vue'

    export default{
        components:{DashboardHeader, WorkInProgress, CreateCase ,EditCase},

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
            <EditCase       v-if = "getCurrentEditorTab == 1"></EditCase>

        </div>
    </body>
</template>

<style scoped>
body{
    overflow: auto;
}


</style>