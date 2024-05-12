<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getSlides', 'getEditIndex']),
        slideNameInput: {
            get() {
                if (this.getEditIndex !== -1) {
                    return this.getSlides[this.getEditIndex].name;
                }
                return '';
            },
            set(value) {
                if (this.getEditIndex !== -1 && value.length !== 0) {
                    this.updateSlideName(value);
                }
            }
        }
    },
    methods: {
        ...mapActions(['editName', 'appendSlide']),
        ...mapMutations(['updateSlideName']),
    },
}

</script>

<template>
    <div>
        <div v-for="(slide, index) in getSlides" :key="index" class="sidebar">
            <p @dblclick="editName(index)" v-if="index != getEditIndex">{{ slide.name }}</p>
            <input v-else v-focus v-model.lazy="slideNameInput" @blur="editName(-1)" @keyup.enter="editName(-1)"
                @keyup.esc="editName(-1)">
        </div>
        <button @click="appendSlide">Добавить слайд</button>
    </div>
</template>

<style scoped></style>