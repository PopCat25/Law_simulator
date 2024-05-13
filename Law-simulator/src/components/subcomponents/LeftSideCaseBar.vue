<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getSlides', 'getEditIndex', 'getActiveIndex']),
        slideNameInput: {
            get() {
                if (this.getActiveIndex !== -1) {
                    return this.getSlides[this.getActiveIndex].name;
                }
                return `Слайд ${this.getSlides.length}`;
            },
            set(value) {
                if (value.length !== 0) {
                    this.updateSlideName(value);
                }
            }
        }
    },
    methods: {
        ...mapMutations(['updateActiveIndex',
            'updateSlideName',
            'deleteActiveSlide',
            'appendSlide',
            'updateEditIndex']),
    },
}

</script>

<template>
    <div class="sidebar">
        <button @click="appendSlide">Добавить слайд</button>
        <button @click="deleteActiveSlide">Удалить слайд</button>

        <div v-for="(slide, index) in getSlides" :key="index" @click="updateActiveIndex(index)"
            @dblclick="updateEditIndex(index)" :class="['slideName', { 'activeSlide': index == getActiveIndex }]">
            <p v-if="index != getEditIndex">{{ slide.name }}</p>
            <input v-else v-focus v-model.lazy="slideNameInput" @blur="updateEditIndex(-1)"
                @keyup.enter="updateEditIndex(-1)" @keyup.esc="updateEditIndex(-1)">
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    .sidebar {
    flex-shrink: 0; /* Не сжимается */
    flex-basis: 250px; /* Начальный размер, можно установить в зависимости от содержимого */
    /* Остальные стили */
}
}

.slideName {
    border-bottom: 2px solid rgb(100, 100, 100);
    border-radius: 20px;
    text-align: center;
    background-color: rgb(200, 200, 200);
    cursor: pointer;
}

.slideName:hover {
    background-color: rgb(180, 180, 180);
}

.slideName:active {
    background-color: rgb(160, 160, 160);
}

.activeSlide {
    background-color: rgb(140, 140, 140);
}

input {
    font-size: medium;
    border-radius: 20px;
}
</style>