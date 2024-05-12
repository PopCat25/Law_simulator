<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import PersonalData from '@/components/subcomponents/PersonalData.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue'

export default {
    components: { DashboardHeader, PersonalData, WorkInProgress },
    computed: {
        ...mapGetters(['getCurrentProfileTab']),
    },

    methods: {
        ...mapActions(['setCurrentProfileTab']),
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
                <p @click="setCurrentProfileTab(0)" :class="{'activeTab': getCurrentProfileTab  == 0}">Личная информация</p>
                <p @click="setCurrentProfileTab(1)" :class="{'activeTab': getCurrentProfileTab  == 1}">Дополнительная информация</p>
                <p @click="setCurrentProfileTab(2)" :class="{'activeTab': getCurrentProfileTab  == 2}">Дополнительная информация 1</p>
            </div>

            <PersonalData v-if="getCurrentProfileTab == 0"></PersonalData>
            <WorkInProgress v-if="getCurrentProfileTab == 1||getCurrentProfileTab == 2"></WorkInProgress>
        </div>
    </body>
</template>

<style scoped>
body {
    overflow: auto;
}
</style>
