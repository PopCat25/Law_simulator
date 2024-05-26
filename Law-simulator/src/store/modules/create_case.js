

export default {
    actions: {

    },
    mutations: {
        updateEditIndex(state, index) {
            state.editIndex = index;
        },
        updateSlideName(state, newName) {
            if (state.activeIndex !== -1) {
                state.slides[state.activeIndex].name = newName;
            }
        },
        appendSlide(state) {
            let lastSlideIndex = state.slides.length;
            state.slides.push(
                {
                    name: `Слайд ${lastSlideIndex + 1}`,
                    type: '',
                    text: ''
                });
            state.editIndex = lastSlideIndex;
            state.activeIndex = lastSlideIndex;
        },
        updateActiveIndex(state, index) {
            state.activeIndex = index;
        },
        deleteActiveSlide(state) {
            if (state.activeIndex !== -1) {
                state.slides.splice(state.activeIndex, 1);
                state.activeIndex = -1;
            }
        },
        moveSlideUp(state) {
            const index = state.activeIndex;
            if (index > 0 && index != -1) {
                [state.slides[index], state.slides[index - 1]] = [state.slides[index - 1], state.slides[index]];
                state.activeIndex = index - 1;
            }
        },
        moveSlideDown(state) {
            const index = state.activeIndex;
            if (index < state.slides.length - 1 && index != -1) {
                [state.slides[index], state.slides[index + 1]] = [state.slides[index + 1], state.slides[index]];
                state.activeIndex = index + 1;
            }
        },
        updateSlideType(state, currentType){
            state.slides[state.activeIndex].type = currentType;
        },
    },
    state: {

        slides: [{
            name: 'Начало',
            type: 'select',
            text: '',
            buttons:[],
            docs:[],
            }, {
            name: 'Конец',
            type: 'select',
            text: '',
            buttons:[],
            docs:[],
            },
        ],
        editIndex: -1,
        activeIndex: -1,
        slideTypes: [
            { text: '--Выберите тип окна--', value: '' },
            { text: 'Слайд выбора', value: 'select' },
            { text: 'Слайд документов', value: 'fillDoc' }],
        selectedSlideType: '',
    },
    getters: {
        getSlides(state) {
            return state.slides;
        },
        getEditIndex(state) {
            return state.editIndex;
        },
        getActiveIndex(state) {
            return state.activeIndex;
        },
        getSlideTypes(state) {
            return state.slideTypes;
        },
        
    },

    modules: {}

}