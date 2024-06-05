<script>
import {mapGetters} from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';
import WorkInProgress from './subcomponents/WorkInProgress.vue';
import SelectCase from './subcomponents/SelectCase.vue';
import PlayCase from './subcomponents/PlayCase.vue';

    export default{
        components:{DashboardHeader, WorkInProgress, SelectCase, PlayCase},
        data(){
            return{
                caseIndex: -1
            }
        },
        computed:{
            ...mapGetters(['getCases'])
        },
        methods:{
            updateHandler(value){
                this.caseIndex = value;
            }
        }
}
</script>

<template>
    <body>
        
    <header>
        <DashboardHeader></DashboardHeader>
    </header>
    
    <div class="background">
            <SelectCase v-if="caseIndex == -1" @updateEditIndex="updateHandler"></SelectCase>
            <PlayCase   v-else :playedCase="getCases[this.caseIndex]" @updateEditIndex ="updateHandler"></PlayCase>
    </div>
    
</body>
</template>

<style scoped>
body{
    overflow: auto;
}
</style>