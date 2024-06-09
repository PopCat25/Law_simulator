<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import LeftSideCaseBar from './LeftSideCaseBar.vue';
import SlideEditor from './SlideEditor.vue'

export default {
    components:{LeftSideCaseBar,SlideEditor},
    computed: {
        ...mapGetters(['getSlides', 'getEditIndex']),
    },
    methods: {
        
    },
}

</script>

<template>
    <div class="creator">
        <LeftSideCaseBar class="backplate leftSide"></LeftSideCaseBar>
        <SlideEditor class="backplate mainPlace"></SlideEditor>
    </div>
</template>

<style scoped>
.creator {
    display: grid;
    grid-template-columns: 0.18fr 0.85fr;
    
}
.leftSide{
    grid-column: 1;
    align-self: flex-start;
    flex-shrink: 0;
    flex-grow: 0;

}
.mainPlace{
    grid-column: 2;
    align-self: flex-start;
}
</style>