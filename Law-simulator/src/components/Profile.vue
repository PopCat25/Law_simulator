<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import PersonalData from '@/components/subcomponents/PersonalData.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue'

export default {
    components: { DashboardHeader, PersonalData, WorkInProgress },
    computed: {
        ...mapGetters(['getCurrentTab']),
    },

    methods: {
        ...mapActions(['setCurrentTab']),
    },
}
</script>
<template>
    <body>    
        <header>
        <DashboardHeader></DashboardHeader>
        </header>
    
        <div class="background">
    
            <div class="backplate dataType">
                <p @click="setCurrentTab(0)" :class="{'activeTab': getCurrentTab  == 0}">Личная информация</p>
                <p @click="setCurrentTab(1)" :class="{'activeTab': getCurrentTab  == 1}">Дополнительная информация</p>
                <p @click="setCurrentTab(2)" :class="{'activeTab': getCurrentTab  == 2}">Дополнительная информация 1</p>
            </div>

            <PersonalData v-if="getCurrentTab == 0"></PersonalData>
            <WorkInProgress v-if="getCurrentTab == 1||getCurrentTab == 2"></WorkInProgress>
        </div>
    </body>
</template>

<style scoped>
body {
    overflow: auto;
}

.dataType {
    display: flex;
    gap: 10px;
    color: #575757;
    align-self: flex-start;
    cursor: pointer;
}

.activeTab {
    font-size: 110%;
    color: rgb(0, 0, 0);
    text-decoration: overline;
}
</style>
