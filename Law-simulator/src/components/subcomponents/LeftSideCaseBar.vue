<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getSlides', 'getEditIndex', 'getActiveIndex','getSlideName']),
        slideNameInput: {
            get() {
                if (this.getActiveIndex !== -1) {
                    return this.getSlideName;
                }
            },
            set(value) {
                if (value.length !== 0) {
                    this.updateSlideName(value);
                }
            }
        }
    },
    methods: {
        ...mapMutations(['updateActiveIndex', 'updateSlideName', 'deleteActiveSlide', 'appendSlide', 'updateEditIndex', 'moveSlideUp', 'moveSlideDown']),
        handleKeydown(event) {
            if(document.activeElement.classList.contains('slideName')){
                switch (event.key) {
                    case 'ArrowUp':
                        this.moveSlideUp();
                        break;
                    case 'ArrowDown':
                        this.moveSlideDown();
                        break;
                }
            }
        },
        addKeydownListener() {
            window.addEventListener('keydown', this.handleKeydown);
        },
        removeKeydownListener() {
            window.removeEventListener('keydown', this.handleKeydown);
        }
    },
    mounted() {
        this.removeKeydownListener(); // Удаляем обработчик, если он уже существует
        this.addKeydownListener();    // Добавляем новый обработчик
    },
    beforeUnmount() {
        this.removeKeydownListener(); // Удаляем обработчик при размонтировании компонента
    }
}
</script>

<template>
    <div class="sidebar">
        <button @click="appendSlide">Добавить слайд</button>
        <button @click="deleteActiveSlide">Удалить слайд</button>

        <div v-for="(slide, index) in getSlides" :key="index" @click="updateActiveIndex(index)"
            @dblclick="updateEditIndex(index)" :class="['slideName', { 'activeSlide': index == getActiveIndex }]" tabindex="0">
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
    flex-shrink: 0;
    flex-basis: 250px;
}

.slideName {
    border-bottom: 2px solid rgb(100, 100, 100);
    border-radius: 20px;
    text-align: center;
    background-color: rgb(200, 200, 200);
    cursor: pointer;
    position: relative;
}

.slideName:hover {
    background-color: rgb(170, 170, 170);
}

.slideName:active {
    background-color: rgb(150, 150, 150);
}

.activeSlide {
    background-color: rgb(140, 140, 140);
}

input {
    font-size: medium;
    border-radius: 20px;
}
</style>
