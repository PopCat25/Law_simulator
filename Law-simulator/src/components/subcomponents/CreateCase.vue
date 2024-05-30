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
        <LeftSideCaseBar class="backplate"></LeftSideCaseBar>
        <SlideEditor class="backplate"></SlideEditor>
    </div>
</template>

<style scoped>
.creator {
    display: flex;
    align-items: flex-start; /* Выравнивание элементов по началу контейнера */
    justify-content: space-around;
}

</style>