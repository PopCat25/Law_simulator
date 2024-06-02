<script>
import SelectCase from './SelectCase.vue';
import CreateCase from './CreateCase.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default{
    components:{SelectCase, CreateCase},
    computed:{
        ...mapGetters(['getEditedCaseIndex']),
    },
    methods:{
        ...mapActions(['getCaseForEdit']),
        ...mapMutations(['clearState','updateEditedCaseIndex']),
        resetEditIndex(){
            this.updateEditedCaseIndex(-1);
            this.clearState();
        }
    }
}
</script>

<template>
    <SelectCase v-if="this.getEditedCaseIndex == -1" :editMode ="true" @updateEditIndex="this.getCaseForEdit"></SelectCase>
    <div v-else>
        <button @click="resetEditIndex">назад</button>
        <CreateCase></CreateCase>
    </div>
</template>

<style scoped>

</style>